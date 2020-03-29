import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";
import * as Menu from "./Menu";

const current = "/~Solferino/notes";

export function BuildPage(): Page {
  return {title: "利用上の諸注意", path: current, parent: Menu.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const [rendered, setRendered] = React.useState(false);

  if (useRouteMatch(current)?.isExact && !rendered) {
    setRendered(true);
    props.setPage(BuildPage());
  }

  return (
    <div className="Notes">
      <p>『<Link to={"/~Solferino"}>AntennaJane実況本部</Link>』の利用に関する注意書き。</p>
      <h2>警告</h2>
      <p>本サイトのご利用によって、あなたにいかなるトラブルが発生しても当方は一切責任をおいません。ご利用は自己責任において行って下さい。</p>
      <h2>注意</h2>
      <p>これ以後の記述に関しては、全て警告で示した条件を前提とします。</p>
      <h3>リンク・引用等の再利用に関して</h3>
      <p>本サイトの全ページに対して事前連絡なしにリンクすることができます。ただし、こちらも都合によって事前連絡なしにアクセスを遮断する可能性があります。</p>
      <p>
        引用・再配布・改変・批評・紹介などの再利用については、作者が原典の改変・公開を行う自由を妨げない限り、
        営利目的を含めて自由に行っていただいてかまいません。
      </p>
      <h3>権利者に関する重要な注意</h3>
      <p>
        見た目に反して（？）無責任なページなので、内容の全てに作者の権利が及んでいない場合があります。
        その場合、再利用等において作者以外の権利者から問責がある可能性を否定できません。
      </p>
      <h3>ページの内容に関して</h3>
      <p>
        本サイトの情報は結構不正確なので、再利用する場合は一度確かめてみることをお勧めします。また、本サイトには性的な表現が含まれています。</p>
      <h3>ページの改訂・削除に関して</h3>
      <p>
        予告なしにページの改訂・削除が行われる可能性があります。
        しかし、今のところページの削除は極力行わない方針です。また、この記述は本ページに対しても適用されます。
      </p>
      <h3>ページへのアクセスに関して</h3>
      <p>
        アクセス制限はこちらの都合において無警告で行われる可能性があります。
        もちろん、帯域を著しく圧迫するものやクラッキング目的と思われるものなど、作者に不利益を与えるアクセス以外を制限する予定はありません。
      </p>
      <h3>作者に伝えたい事があるとき</h3>
      <p>
        『<a href="https://twitter.com/AntennaJane">情報twitter支部</a>』をご利用ください。
        今のところメールアドレスを公開する予定はありません。
        作者にだけ伝えたいことがある場合、情報twitter支部で相談するかあきらめてください。
      </p>
      <h3>プライバシーポリシー</h3>
      <p>本サイトは皆さんのアクセスログを取得しております。差し支えのある場所からのアクセスには十分ご注意ください。</p>
      <address>AntennaJane 2009-11-18 作成 2020-03-20 更新</address>
    </div>
  );
}
