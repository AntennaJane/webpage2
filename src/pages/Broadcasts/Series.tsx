import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/broadcasts/series";
const list = "/~Solferino/broadcasts/series/list";

export function BuildPage(): Page {
  return {title: "シリーズガイド", path: current, parent: Index.BuildPage()};
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
    <div className="Broadcasts-Series">
      <p>実況シリーズの情報を纏めてあります。</p>
      <h2>動画版</h2>
      <p><a href="https://www.youtube.com/watch?v=yCDCO4A3JfI">動画版まとめ</a></p>
      <h2>シリーズ一覧</h2>
      <p><Link to={list}>シリーズ一覧</Link>　各シリーズの詳細・所属回・コメント集はこちら</p>
      <h2>シリーズまとめ</h2>
      <dl className="dlTable">
        <dt>age系 ★★★★★</dt>
        <dd>
          age(アージュ)制作のアダルトゲーム実況シリーズ<br/>
          対象者: アダルトゲームに抵抗が無い全ての方。<br/>
          構成: ☆ <Link to={list + "#S011"}>君が望む永遠実況</Link> →
          マブラヴ実況(<Link to={list + "#S015"}>無印</Link> → <Link to={list + "#S016"}>オルタネイティヴ</Link> → <Link to={list + "#S019"}>ALTERED FABLE</Link> → ???) →
          ○ 君がいた季節実況(予定)<br/>
          経緯: 元々、実況を開始した理由の一つに積みゲー消化というものがあったのですが、積みゲーの中にマブラヴが入っていたのです。現在では、君のぞ三部作制覇を目標に実況を行っています。<br/>
          今後: 君がいた季節、プレイ予定です。
        </dd>
        <dt>ツクール系 ☆☆★★★</dt>
        <dd>
          古今東西のツクールゲーム実況シリーズ<br/>
          対象者: ツクールゲームにアレルギーが無い全ての方。<br/>
          構成: △ <Link to={list + "#S001"}>CLOCK実況</Link> → △ <Link to={list + "#S002"}>梓999実況</Link> →
          × <Link to={list + "#S003"}>クック・ドゥー・ドゥル・ドゥー実況</Link> → △ <Link to={list + "#S004"}>ぼくのすむまち実況</Link> →
          × <Link to={list + "#S007"}>パレット実験実況</Link> → × <Link to={list + "#S008"}>Forget me not -パレット- 実況</Link> →
          × <Link to={list + "#S012"}>サバトの女王 実況</Link> → ○ <Link to={list + "#S014"}>勇者と異常者など実況</Link> →
          ☆ <Link to={list + "#S017"}>月夜に響くノクターン Rebirth</Link> → ○ <Link to={list + "#S021"}>SACRED BLUE</Link> →
          ○ 天ぷら三部作残り → ○ 曽我部一郎二部作(リメイク予定)<br/>
          経緯: いきなり最終目標である積みゲー消化を始めるのは不安だったので、準備運動代わりに実況を行いました。現在は全年齢対象実況の要となっています。<br/>
          今後: 天ぷら三部作をクリアしていきます。
        </dd>
        <dt>shou氏作系 ☆☆★★★</dt>
        <dd>
          shou氏作のRPG実況シリーズ<br/>
          対象者: RPGはグラフィックでは無いと思う全ての方。<br/>
          構成: △ <Link to={list + "#S005"}>AMELBROAT実況</Link> → △ <Link to={list + "#S006"}>Cresteaju実況</Link>
        </dd>
        <dt>その他 ☆☆☆★★</dt>
        <dd>
          その他の実況シリーズ<br/>
          構成: × <Link to={list + "#S009"}>迷牢実況</Link> → △ <Link to={list + "#S010"}>PC設定実況</Link> →
          × <Link to={list + "#S013"}>『猟奇ゲー』実況</Link> → × <Link to={list + "#S018"}>不思議の幻想郷実況</Link> →
          ○ <Link to={list + "#S020"}>NIKE実況</Link> → ○ その他積みゲー(予定) → ○ ZUN氏作制覇(予定) → ○ 葉鍵関連作品制覇(予定)<br/>
          今後: いつかは、その他積みゲー以降を実況します。
        </dd>
      </dl>
      <address>AntennaJane　2009-08-21 作成　2026-07-18 更新</address>
    </div>
  );
}
