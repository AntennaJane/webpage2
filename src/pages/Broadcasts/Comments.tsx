import React from 'react';
import {Link, useLocation, useParams, useRouteMatch} from "react-router-dom";
import * as SeriesList from "./SeriesList";

const current = "/~Solferino/broadcasts/comments/:series";

interface CommentPart {
  "title": string,
  "comment": string,
  "url": string | null
}

interface CommentEntries {
  [number: string]: {
    "title": string,
    "parts": CommentPart[]
  }
}

export function BuildPage(series: string): Page {
  // シリーズ一覧の子ページとして、該当シリーズのアンカーへ戻れるようにする
  const guide = SeriesList.BuildPage();
  const parent: Page = {
    title: guide.title,
    path: guide.path + "#S" + series.padStart(3, "0"),
    parent: guide.parent,
  };
  return {title: "シリーズ " + series + " コメント集", path: current, parent: parent};
}

export function Render(props: SolferinoProps) {
  let {series} = useParams();
  if (typeof series !== 'string') {
    throw TypeError;
  }
  const seriesKey: string = series;

  const [data, setData] = React.useState<CommentEntries | null>(null);
  const [error, setError] = React.useState(false);

  const isExact = useRouteMatch(current)?.isExact;
  const setPage = props.setPage;
  React.useEffect(() => {
    if (isExact) {
      setPage(BuildPage(seriesKey));
    }
  }, [isExact, setPage, seriesKey]);

  React.useEffect(() => {
    let active = true;
    loadComments(seriesKey).then((entries) => {
      if (active) setData(entries);
    }).catch(() => {
      if (active) setError(true);
    });
    return () => {
      active = false;
    };
  }, [seriesKey]);

  // SPA 遷移では #number-N への自動スクロールが起きないため自前で行う (データ描画後)
  const {hash} = useLocation();
  React.useEffect(() => {
    if (hash !== "" && data != null) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, data]);

  return (
    <div className="Broadcasts-Comments">
      <p>YouTube・ニコニコ動画での動画コメントの記録です。</p>
      {error ? <div>コメント集を取得できませんでした</div> :
        data == null ? <div>読込中...</div> : renderEntries(data)}
      <address>AntennaJane　2026-07-18 作成</address>
    </div>
  );
}

function renderEntries(entries: CommentEntries) {
  const numbers = require("../../data/broadcasts-numbers.json") as BroadcastsNumbers;
  const nums = Object.keys(entries).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  return (
    <div>
      {nums.map((n) => (
        <div key={n} id={"number-" + n}>
          <h2>
            {"第" + n + "回　"}
            <Link to={"/~Solferino/broadcasts/stage/" + (numbers[n]?.stage ?? "") + "#number-" + n}>
              {entries[n].title}
            </Link>
          </h2>
          <dl>
            {entries[n].parts.map((part, i) => (
              <React.Fragment key={i}>
                <dt>{part.url != null ? <a href={part.url}>{part.title}</a> : part.title}</dt>
                <dd>{part.comment}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

async function loadComments(series: string): Promise<CommentEntries> {
  if (!/^\d+$/.test(series)) throw new Error("bad series");
  const res = await fetch("/broadcasts/comments/" + series + ".json");
  if (!res.ok) throw new Error("unavailable");
  const body = await res.json();
  if (body.entries == null) throw new Error("unavailable");
  return body.entries;
}
