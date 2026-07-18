import React from 'react';
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import * as Menu from "../Menu";
import * as Index404 from "../Index404";
import * as History from "./History";
import * as Log from "./Log";

const current = "/~Solferino/spot-info";

export function BuildPage(): Page {
  return {title: "最新情報", path: current, parent: Menu.BuildPage()};
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
    <div className="SpotInfo">
      <Switch>
        <Route exact path={"/~Solferino/spot-info"}>
          <RenderContents/>
        </Route>
        <Route exact path={"/~Solferino/spot-info/history"}>
          <History.Render {...props}/>
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
      <h2>更新履歴</h2>
      <p><Link to={"/~Solferino/spot-info/history"}>更新履歴</Link>　旧 RSS 告知を含むサイト更新の記録</p>
      <h2>旧発言テーブル</h2>
      <p><Link to={"/~Solferino/spot-info/log"}>旧発言テーブルログ</Link></p>
      <address>AntennaJane　2010-02-02 作成　2026-07-18 更新</address>
    </div>
  );
}
