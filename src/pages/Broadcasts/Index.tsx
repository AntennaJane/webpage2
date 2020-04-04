import React from 'react';
import {useAsync} from "react-async";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import "../../styles/broadcasts.css"
import * as Menu from "../Menu";
import * as Index404 from "../Index404";
import * as Stage from "./Stage";
import * as Stages from "./Stages";

const current = "/~Solferino/broadcasts";

export function BuildPage(): Page {
  return {title: "実況履歴", path: current, parent: Menu.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const [rendered, setRendered] = React.useState(false);

  if (useRouteMatch(current)?.isExact && !rendered) {
    setRendered(true);
    props.setPage(BuildPage());
  }

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
    </div>
  );
  return null;
}

async function loadData() {
  const numbers = require("../../data/broadcasts-numbers.json");
  const stages = require("../../data/broadcasts-stages.json");
  return {numbers: numbers, stages: stages};
}
