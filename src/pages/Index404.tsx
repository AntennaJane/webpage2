import React from 'react';

const current = "/~Solferino";

interface Index404Props extends SolferinoProps {
  page: Page,
}

export function BuildPage(page: Page): Page {
  return {title: "404 Not Found", path: current, parent: page};
}

export function Render(props: Index404Props) {
  const [rendered, setRendered] = React.useState(false);

  if (!rendered) {
    setRendered(true);
    props.setPage(BuildPage(props.page));
  }

  return (
    <div className="Index404">
      <p>指定されたファイルが存在していません。URIを再度確認してください。リンク切れの場合は、管理者に報告をいただけると幸いです。</p>
    </div>
  );
}
