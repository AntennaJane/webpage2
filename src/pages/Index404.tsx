import React from 'react';
import * as Front from "./Front";

const current = "/~Solferino";

interface Props {
  setPage: SetPage,
}

export function BuildPage(): Page {
  return {title: "404 Not Found", path: current, parent: Front.BuildPage()};
}

export function Render(props: Props) {
  const [rendered, setRendered] = React.useState(false);

  if (!rendered) {
    setRendered(true);
    props.setPage(BuildPage());
  }

  return (
    <div className="Index404">
      <p>指定されたファイルが存在していません。URIを再度確認してください。リンク切れの場合は、管理者に報告をいただけると幸いです。</p>
    </div>
  );
}
