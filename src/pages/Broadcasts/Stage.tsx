import React from 'react';
import {useAsync} from "react-async";
import {Link, useLocation, useParams, useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/broadcasts/stage/:stage";

export function BuildPage(stage: string, name: string | undefined = undefined): Page {
  return {title: stage + "期" + (name != null ? ' ' + name : ''), path: current, parent: Index.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const [loaded, setLoaded] = React.useState(false);
  const [rendered, setRendered] = React.useState(false);

  let {stage} = useParams();
  if (typeof stage !== 'string') {
    throw TypeError;
  }

  if (useRouteMatch(current)?.isExact && !rendered) {
    setRendered(true);
    props.setPage(BuildPage(stage));
  }

  const {data, error, isPending} = useAsync(loadData);

  // シリーズガイド等から #number-N 付きで遷移した際の自動スクロール (データ描画後)
  const {hash} = useLocation();
  React.useEffect(() => {
    if (hash !== "" && data != null) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, data]);

  if (isPending) return <div>読込中...</div>;
  if (error) return <div>読込に失敗しました</div>;
  if (data) {
    if (rendered && !loaded) {
      setLoaded(true);
      // @ts-ignore
      const stages = data.stages as BroadcastsStages;
      props.setPage(BuildPage(stage, stages[stage]?.name));
    }

    return render(data, props, stage);
  }
  return null;
}

function render(data: unknown, props: SolferinoProps, stage: string) {
  const pathThumb = props.parameters.storage.path + "/~Solferino/broadcasts/thumb/";

  return (
    <div className="Broadcasts-Stage">
      <ol>
        <li className="item" id="number-header">
          <ul>
            <li className="thumb">
              <a href={pathThumb + "thumb.png"}>
                <img src={pathThumb + "thumb.png"} alt="動画サムネイル" title="ちょっとした一言"/>
              </a>
            </li>
            <li className="information">
              <ul>
                <li>実況回数</li>
                <li>シリーズ番号-回数</li>
                <li>実況開始時刻</li>
                <li>実況時間</li>
              </ul>
            </li>
            <li className="place" title="実況場所詳細">実況場所</li>
            <li className="name" title="実況名詳細">実況名</li>
            <li className="description">概略</li>
            <li className="log">記録</li>
          </ul>
        </li>
        {renderItems(data, props, stage)}
      </ol>
      <address>AntennaJane 2020-03-28 作成 2020-04-04 更新</address>
    </div>
  );
}

function renderItems(data: unknown, props: SolferinoProps, stage: string) {
  const pathThumb = props.parameters.storage.path + "/~Solferino/broadcasts/thumb/";

  // @ts-ignore
  const numbers = data.numbers as BroadcastsNumbers;

  let result: unknown[] = [];
  Object.keys(numbers).forEach((n) => {
    const v = numbers[n];
    if (v.stage !== stage) {
      return;
    }
    result.push(
      <li className="item" id={'number-' + n}>
        <ul>
          <li className="thumb">
            <a href={pathThumb + "number-" + n + ".png"}>
              <img src={pathThumb + "number-" + n + ".png"} alt={"第" + n + "回 動画サムネイル"} title={v.thumbComment}/>
            </a>
          </li>
          <li className="information">
            <ul>
              <li>{n}</li>
              <li>{v.series}-{getSeriesNumber(numbers, v.series, n)}</li>
              <li>{v.start}</li>
              <li>{v.time}</li>
            </ul>
          </li>
          <li className="place" title={v.place.join(' ')}>{v.place[v.place.length - 1]}</li>
          <li className="name" title={v.name.join(', ')}>{v.name[0]}</li>
          <li className="description">{v.description}</li>
          <li className="log">{renderLog(n)}</li>
        </ul>
      </li>
    )
  });
  return result;
}

async function loadData() {
  const numbers = require("../../data/broadcasts-numbers.json");
  const stages = require("../../data/broadcasts-stages.json");
  return {numbers: numbers, stages: stages};
}

function renderLog(n: string) {
  const records = require("../../data/broadcasts-records.json").records as BroadcastsRecords;
  const record = records[n];
  if (record == null) return "(準備中)";
  return (
    <>
      {record.guide != null ?
        <><Link to={"/~Solferino/broadcasts/series#S" + record.guide.padStart(3, "0")}>シリーズガイド</Link> </> : null}
      {record.threads.map((t, i) => (
        <React.Fragment key={t.key}>
          {i > 0 ? " " : null}
          <Link to={"/~Solferino/broadcasts/log/" + t.key}>{t.label}</Link>
        </React.Fragment>
      ))}
      {record.video != null ? <> <a href={record.video}>動画 (YouTube)</a></> : null}
      {record.videoNote != null ? <> 動画 ({record.videoNote})</> : null}
    </>
  );
}

function getSeriesNumber(numbers: BroadcastsNumbers, series: string, number: string) {
  let result = 0;
  Object.keys(numbers).forEach((k) => {
    if (series !== numbers[k].series) {
      return;
    }
    if (parseInt(number) < parseInt(k)) {
      return;
    }
    result++;
  });
  return result;
}
