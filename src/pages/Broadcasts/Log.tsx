import React from 'react';
import {useParams, useRouteMatch} from "react-router-dom";
import "../../styles/board.css"
import * as Index from "./Index";

const current = "/~Solferino/broadcasts/log/:key";

interface LogContext {
  "number": string,
  "stage": string,
  "stageName": string,
  "label": string
}

// スレ key → (実況回, 期, 表示ラベル) の逆引き。
// 記録列の "(2)" のような継続ラベルは直前の基底名を補って完全なラベルにする。
function findContext(key: string): LogContext | null {
  const records = require("../../data/broadcasts-records.json").records as BroadcastsRecords;
  const numbers = require("../../data/broadcasts-numbers.json") as BroadcastsNumbers;
  const stages = require("../../data/broadcasts-stages.json") as BroadcastsStages;
  for (const num of Object.keys(records)) {
    let base = "";
    for (const thread of records[num].threads) {
      const label = thread.label.startsWith("(") ? base + thread.label
        : (base = thread.label.replace(/\(\d+\)$/, ""), thread.label);
      if (thread.key === key) {
        const stage = numbers[num]?.stage;
        return {
          number: num,
          stage: stage,
          stageName: stage != null ? String(stages[stage]?.name ?? "") : "",
          label: label,
        };
      }
    }
  }
  return null;
}

export function BuildPage(key: string, title: string): Page {
  const context = findContext(key);
  if (context == null) {
    return {title: title, path: current, parent: Index.BuildPage()};
  }
  const stagePage: Page = {
    title: context.stage + "期" + (context.stageName !== "" ? " " + context.stageName : ""),
    path: "/~Solferino/broadcasts/stage/" + context.stage,
    parent: Index.BuildPage(),
  };
  return {title: "第" + context.number + "回 " + context.label, path: current, parent: stagePage};
}

interface ThreadLog {
  "key": string,
  "title": string,
  "posts": BoardPost[]
}

export function Render(props: SolferinoProps) {
  let {key} = useParams();
  if (typeof key !== 'string') {
    throw TypeError;
  }
  const logKey: string = key;

  const [data, setData] = React.useState<ThreadLog | null>(null);
  const [error, setError] = React.useState(false);

  const isExact = useRouteMatch(current)?.isExact;
  const setPage = props.setPage;
  React.useEffect(() => {
    if (isExact) {
      setPage(BuildPage(logKey, data != null ? data.title : "スレッドログ"));
    }
  }, [isExact, setPage, logKey, data]);

  React.useEffect(() => {
    let active = true;
    loadLog(logKey).then((log) => {
      if (active) setData(log);
    }).catch(() => {
      if (active) setError(true);
    });
    return () => {
      active = false;
    };
  }, [logKey]);

  return (
    <div className="Board-Thread">
      <p>実況当時のスレッド{data != null ? "「" + data.title + "」" : ""}の書き込みログです。</p>
      {error ? <div>ログを取得できませんでした</div> :
        data == null ? <div>読込中...</div> : renderPosts(data)}
      <address>AntennaJane　2026-07-18 作成</address>
    </div>
  );
}

function renderPosts(data: ThreadLog) {
  return (
    <dl>
      {data.posts.map((post) => (
        <React.Fragment key={post.no}>
          <dt>
            {post.no + " 名前："}<b>{post.name}</b>
            {post.mail !== "" ? " [" + post.mail + "]" : ""}
            {"：" + post.date}
          </dt>
          <dd>
            {post.lines.map((line, i) => (
              <React.Fragment key={i}>{i > 0 ? <br/> : null}{line}</React.Fragment>
            ))}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

async function loadLog(key: string): Promise<ThreadLog> {
  if (!/^\d+$/.test(key)) throw new Error("bad key");
  const res = await fetch("/broadcasts/logs/" + key + ".json");
  if (!res.ok) throw new Error("unavailable");
  return await res.json();
}
