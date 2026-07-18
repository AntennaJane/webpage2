import React from 'react';
import {useAsync} from "react-async";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import "../../styles/broadcasts.css"
import * as Menu from "../Menu";
import * as Index404 from "../Index404";
import * as SpotInfo from "./SpotInfo";
import * as SpotInfoLog from "./SpotInfoLog";
import * as Stage from "./Stage";
import * as Stages from "./Stages";

const current = "/~Solferino/broadcasts";

export function BuildPage(): Page {
  return {title: "実況履歴", path: current, parent: Menu.BuildPage()};
}

export function Render(props: SolferinoProps) {
  // 子ページから戻ってもタイトルを再設定できるよう、isExact のたびに setPage する
  const isExact = useRouteMatch(current)?.isExact;
  const setPage = props.setPage;
  React.useEffect(() => {
    if (isExact) {
      setPage(BuildPage());
    }
  }, [isExact, setPage]);

  return (
    <div className="Broadcasts">
      <Switch>
        <Route exact path={"/~Solferino/broadcasts"}>
          <RenderContents/>
        </Route>
        <Route exact path={"/~Solferino/broadcasts/stage"}>
          <Stages.Render {...props}/>
        </Route>
        <Route exact path={"/~Solferino/broadcasts/stage/:stage"}>
          <Stage.Render {...props}/>
        </Route>
        <Route exact path={"/~Solferino/broadcasts/spot-info"}>
          <SpotInfo.Render {...props}/>
        </Route>
        <Route exact path={"/~Solferino/broadcasts/spot-info/log"}>
          <SpotInfoLog.Render {...props}/>
        </Route>
        <Route>
          <Index404.Render {...props} page={BuildPage()}/>
        </Route>
      </Switch>
    </div>
  );
}

function RenderContents() {
  const {data, error, isPending} = useAsync(loadData);
  if (isPending) return <div>読込中...</div>;
  if (error) return <div>読込に失敗しました</div>;
  if (data) return (
    <div>
      <h2>実況期 一覧</h2>
      {Stages.render(data)}
      <h2>その他</h2>
      <p><Link to={"/~Solferino/broadcasts/spot-info"}>旧最新情報</Link></p>
      <address>AntennaJane 2020-03-28 作成 2026-07-18 更新</address>
    </div>
  );
  return null;
}

async function loadData() {
  const numbers = require("../../data/broadcasts-numbers.json");
  const stages = require("../../data/broadcasts-stages.json");
  return {numbers: numbers, stages: stages};
}
