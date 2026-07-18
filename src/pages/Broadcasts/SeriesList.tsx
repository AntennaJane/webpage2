import React from 'react';
import {Link, useLocation, useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/broadcasts/series/list";

export function BuildPage(): Page {
  return {title: "シリーズ一覧", path: current, parent: Index.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const isExact = useRouteMatch(current)?.isExact;
  const setPage = props.setPage;
  React.useEffect(() => {
    if (isExact) {
      setPage(BuildPage());
    }
  }, [isExact, setPage]);

  // SPA 遷移では #SNNN への自動スクロールが起きないため自前で行う
  const {hash} = useLocation();
  React.useEffect(() => {
    if (hash !== "") {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash]);

  const series = require("../../data/broadcasts-series.json").series as BroadcastsSeriesGuide;
  const numbers = require("../../data/broadcasts-numbers.json") as BroadcastsNumbers;
  const ids = Object.keys(series).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

  return (
    <div className="Broadcasts-Series">
      <p>各実況シリーズの詳細です。</p>
      <ol>
        {ids.map((id) => renderSeries(id, series[id], numbers))}
      </ol>
      <address>AntennaJane　2009-08-21 作成　2026-07-18 更新</address>
    </div>
  );
}

function renderSeries(id: string, s: BroadcastsSeriesEntry, numbers: BroadcastsNumbers) {
  const records = require("../../data/broadcasts-records.json").records as BroadcastsRecords;
  const parts = Object.keys(numbers)
    .filter((n) => numbers[n].series === id)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  const hasComments = parts.some((n) => records[n]?.comments);
  return (
    <li className="item" id={"S" + id.padStart(3, "0")} key={id}>
      <h3>シリーズ {id.padStart(3, "0")}</h3>
      <ul>
        <li className="thumb">
          <img src={"/broadcasts/thumb/" + s.thumb} alt={"タイトル画面 シリーズ " + id}/>
        </li>
        <li>{s.name}</li>
        <li>{s.place}</li>
        <li>全 {parts.length} 回　{s.start} 開始　総時間 {s.time}</li>
        <li>{s.summary}</li>
        <li>
          {parts.map((n, i) => (
            <React.Fragment key={n}>
              {i > 0 ? " " : null}
              <Link to={"/~Solferino/broadcasts/stage/" + numbers[n].stage + "#number-" + n}>
                {"(" + (i + 1) + ")"}
              </Link>
            </React.Fragment>
          ))}
          {hasComments ?
            <>　<Link to={"/~Solferino/broadcasts/comments/" + id}>コメント集</Link></> : null}
        </li>
      </ul>
    </li>
  );
}
