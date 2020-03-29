import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";

const current = "/~Solferino";

export function BuildPage(): Page {
  return {title: "AntennaJane 実況本部", path: current};
}

export function Render(props: SolferinoProps) {
  const [rendered, setRendered] = React.useState(false);

  if (useRouteMatch(current)?.isExact && !rendered) {
    setRendered(true);
    props.setPage(BuildPage());
  }

  return (
    <div className="Front">
      <ul>
        <li>AntennaJane ホームページ(ゲーム実況・書き物など)</li>
        <li>旧名：微笑を浮かべる椅子</li>
        <li>2005-01-06 作成 2007-11-24 公開</li>
      </ul>
      <h2>警告</h2>
      <p>本サイト『AntennaJane 実況本部』には性的な表現が含まれています。18歳未満の方は引き返してください。</p>
      <p>また、本サイトのご利用によって、あなたにいかなるトラブルが発生しても当方は一切責任をおいません。ご利用は自己責任において行ってください。</p>
      <p>その他の諸注意に関しては『<Link to={"/~Solferino/notes"}>利用上の諸注意</Link>』をご覧ください。</p>
      <h2>通知</h2>
      <p>本サイトへのリンクは、このページ（https://magenta.link/~Solferino/）にすることを推奨します。</p>
      <h2>入口</h2>
      <p><Link to={"/~Solferino/menu"}>目次</Link> - ここからお入りください。</p>
      <address>AntennaJane 2009-07-17 作成 2020-03-20 更新</address>
    </div>
  );
}
