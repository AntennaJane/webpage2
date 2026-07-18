import React from 'react';
import {useRouteMatch} from "react-router-dom";
import * as Menu from "./Menu";

const current = "/~Solferino/restrictions";

export function BuildPage(): Page {
  return {title: "規制情報", path: current, parent: Menu.BuildPage()};
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
    <div className="Restrictions">
      <p>現在、規制は行っていません。</p>
      <p>規制を行う場合は、このページに対象と理由を掲載します。</p>
      <address>AntennaJane　2026-07-18 作成</address>
    </div>
  );
}
