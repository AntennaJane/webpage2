import React from 'react';
import {useAsync} from "react-async";
import {Link, useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/broadcasts/stage";

export function BuildPage(): Page {
  return {title: "実況期 一覧", path: current, parent: Index.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const [rendered, setRendered] = React.useState(false);

  if (useRouteMatch(current)?.isExact && !rendered) {
    setRendered(true);
    props.setPage(BuildPage());
  }

  const {data, error, isPending} = useAsync(loadData);
  if (isPending) return <div>読込中...</div>;
  if (error) return <div>読込に失敗しました</div>;
  if (data) return render(data);
  return null;
}

export function render(data: unknown) {
  return (
    <div className="Broadcasts-Stages">
      <ol>
        {renderItems(data)}
      </ol>
    </div>
  );
}

function renderItems(data: unknown) {
  // @ts-ignore
  const stages = data.stages as BroadcastsStages;
  // @ts-ignore
  const numbers = data.numbers as BroadcastsNumbers;

  let result: unknown[] = [];
  Object.keys(stages).forEach((n) => {
    const v = stages[n];
    const i = getStageNumbersInformation(numbers, n);
    result.unshift(
      <li>
        <ul>
          <li>
            <Link to={current + "/" + n}>{n + '期 ' + i.initial + '-' + i.final + ' ' + v.name}</Link>
          </li>
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

function getStageNumbersInformation(numbers: BroadcastsNumbers, stage: string) {
  let number = 0;
  let initial: number | undefined = undefined;
  let final: number | undefined = undefined;
  Object.keys(numbers).forEach((k) => {
    if (stage !== numbers[k].stage) {
      return;
    }
    number++;
    const n = parseInt(k, 10);
    initial = (initial == null || initial > n ? n : initial);
    final = (final == null || final < n ? n : final);
  });
  return {number, initial, final};
}
