import React from 'react';
import {useAsync} from "react-async";
import {useParams, useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/broadcasts/:stage";

export function BuildPage(stage: string): Page {
  return {title: stage + "期", path: current, parent: Index.BuildPage()};
}

export function Render(props: SolferinoProps) {
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
  if (isPending) return <div>読込中...</div>;
  if (error) return <div>読込に失敗しました</div>;
  if (data) return render(data, props, stage);
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
          <li className="log">(準備中)</li>
        </ul>
      </li>
    )
  });
  return result;
}

async function loadData() {
  const numbers = require("../../data/broadcasts-numbers.json");
  return {numbers: numbers};
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
