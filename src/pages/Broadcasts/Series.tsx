import React from 'react';
import {Link, useLocation, useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/broadcasts/series";

export function BuildPage(): Page {
  return {title: "シリーズガイド", path: current, parent: Index.BuildPage()};
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
      <p>実況シリーズの情報を纏めてあります。</p>
      <h2>動画版</h2>
      <p><a href="https://www.youtube.com/watch?v=yCDCO4A3JfI">動画版まとめ</a></p>
      <h2>シリーズ一覧</h2>
      <ol>
        {ids.map((id) => renderSeries(id, series[id], numbers))}
      </ol>
      <address>AntennaJane　2009-08-21 作成　2026-07-18 更新</address>
    </div>
  );
}

function renderSeries(id: string, s: BroadcastsSeriesEntry, numbers: BroadcastsNumbers) {
  const parts = Object.keys(numbers)
    .filter((n) => numbers[n].series === id)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
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
        </li>
      </ul>
    </li>
  );
}
