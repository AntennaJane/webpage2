import React from 'react';
import {useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/broadcasts/:stage";

interface Props {
  setPage: SetPage,
}

export function BuildPage(): Page {
  return {title: "実況履歴+", path: current, parent: Index.BuildPage()};
}

export function Render(props: Props) {
  const [rendered, setRendered] = React.useState(false);

  if (useRouteMatch(current)?.isExact && !rendered) {
    setRendered(true);
    props.setPage(BuildPage());
  }

  return (
    <div className="Broadcasts-Stage">
      <p>temp</p>
    </div>
  );
}
