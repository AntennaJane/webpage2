import React from 'react';
import {useRouteMatch} from "react-router-dom";
import * as Menu from "./Menu";

const current = "/~Solferino/history";

export function BuildPage(): Page {
  return {title: "更新履歴", path: current, parent: Menu.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const isExact = useRouteMatch(current)?.isExact;
  const setPage = props.setPage;
  React.useEffect(() => {
    if (isExact) {
      setPage(BuildPage());
    }
  }, [isExact, setPage]);

  const data = require("../data/site-updates.json") as {updates: SiteUpdate[]};
  const updates = data.updates.slice().reverse();

  return (
    <div className="History">
      <p>本サイトの更新告知の記録です。2014 年以前の項目は旧 RSS 配信の内容を収録しています。</p>
      <dl>
        {updates.map((u, i) => (
          <React.Fragment key={u.date + "-" + i}>
            <dt>{u.date}　{u.title}</dt>
            <dd>{u.description}</dd>
          </React.Fragment>
        ))}
      </dl>
      <address>AntennaJane　2026-07-18 作成</address>
    </div>
  );
}
