import React from 'react';
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import * as Menu from "../Menu";
import * as Index404 from "../Index404";
import * as Log from "./Log";

const current = "/~Solferino/spot-info";

export function BuildPage(): Page {
  return {title: "最新情報", path: current, parent: Menu.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const [rendered, setRendered] = React.useState(false);

  const isExact = useRouteMatch(current)?.isExact;
  React.useEffect(() => {
    if (isExact && !rendered) {
      setRendered(true);
      props.setPage(BuildPage());
    }
  }, [isExact, rendered, props]);

  return (
    <div className="SpotInfo">
      <Switch>
        <Route exact path={"/~Solferino/spot-info"}>
          <RenderContents/>
        </Route>
        <Route exact path={"/~Solferino/spot-info/log"}>
          <Log.Render {...props}/>
        </Route>
        <Route>
          <Index404.Render {...props} page={BuildPage()}/>
        </Route>
      </Switch>
    </div>
  );
}

function RenderContents() {
  return (
    <div>
      <p>実況休んでるよ！　あくまで情熱的に。</p>
      <h2>注意事項</h2>
      <p>マゼンタ氏とは別人だよ。</p>
      <h2>𝕏</h2>
      <p><a href="https://twitter.com/AntennaJane">@AntennaJane からの𝕏</a></p>
      <h2>旧発言テーブル</h2>
      <p><Link to={"/~Solferino/spot-info/log"}>旧発言テーブルログ</Link></p>
      <address>AntennaJane　2010-02-02 作成　2026-07-18 更新</address>
    </div>
  );
}
