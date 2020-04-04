import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import "../../styles/broadcasts.css"
import * as Menu from "../Menu";
import * as Index404 from "../Index404";
import * as Stage from "./Stage";

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
          <p>現在テスト中</p>
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
