import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import * as Menu from "../Menu";
import * as Index404 from "../Index404";
import * as Stage from "./Stage";

const current = "/~Solferino/broadcasts";

interface Props {
  setPage: SetPage,
}

export function BuildPage(): Page {
  return {title: "実況履歴", path: current, parent: Menu.BuildPage()};
}

export function Render(props: Props) {
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
        <Route exact path={"/~Solferino/broadcasts/:stage"}>
          <Stage.Render setPage={props.setPage}/>
        </Route>
        <Route>
          <Index404.Render page={BuildPage()} setPage={props.setPage}/>
        </Route>
      </Switch>
    </div>
  );
}
