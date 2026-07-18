import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/broadcasts/spot-info";

export function BuildPage(): Page {
  return {title: "旧最新情報", path: current, parent: Index.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const isExact = useRouteMatch(current)?.isExact;
  const setPage = props.setPage;
  React.useEffect(() => {
    if (isExact) {
      setPage(BuildPage());
    }
  }, [isExact, setPage]);

  return (
    <div className="Broadcasts-SpotInfo">
      <p>実況休んでるよ！　あくまで情熱的に。</p>
      <h2>注意事項</h2>
      <p>マゼンタ氏とは別人だよ。</p>
      <h2>旧発言テーブル</h2>
      <p><Link to={"/~Solferino/broadcasts/spot-info/log"}>旧発言テーブルログ</Link></p>
      <address>AntennaJane　2010-02-02 作成　2026-07-18 更新</address>
    </div>
  );
}
