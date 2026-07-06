import React from 'react';
import {useRouteMatch} from "react-router-dom";
import * as Menu from "./Menu";

const current = "/~Solferino/profile";

export function BuildPage(): Page {
  return {title: "プロフィール", path: current, parent: Menu.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const [rendered, setRendered] = React.useState(false);

  if (useRouteMatch(current)?.isExact && !rendered) {
    setRendered(true);
    props.setPage(BuildPage());
  }

  return (
    <div className="Profile">
      <p>大したことは書いてませんがね。</p>
      <p className="restoreNote">
        この自己紹介は旧プロフィールをもとに復元しています。現在情報として未確認の項目を含みます。
      </p>

      <h2>個人情報</h2>
      <dl className="dlTable">
        <dt>名前</dt>
        <dd>AntennaJane（AA(略),@hatena,派手南次郎）</dd>
        <dt>性別</dt>
        <dd>キモ男</dd>
        <dt>血液型</dt>
        <dd>AB型 10人に一人は居るというアレ</dd>
        <dt>誕生日</dt>
        <dd>11/23 新嘗祭 星井美希と一緒だよ</dd>
        <dt>星座</dt>
        <dd>射手座（13星座では蠍座）</dd>
        <dt>住処</dt>
        <dd>大阪 食い倒れてはいない</dd>
      </dl>

      <h2>名前の由来</h2>
      <dl className="definitionList">
        <dt>AntennaJane</dt>
        <dd>
          アンテナのように幅広く無差別に情報を集めるの意。よくある名前だったので、その後に使用しているブラウザ（等）の名前を付けて差別化する事にした。
          今はJane(JaneView)をよく使っている。他にFirefox,Afxなど。
        </dd>
        <dt>AA(略)主</dt>
        <dd>実況中、貼られるAAが全て（略）で終わっていたので、略さないで貼ってくれと騒いだら付いた名前。</dd>
        <dt>これみ</dt>
        <dd>era紅魔館レミリア口上を制作したので試しに名乗ってみた名前。正確にはKOremi。</dd>
        <dt>@hatena</dt>
        <dd>ネットデビューの頃名乗っていた名前。ハテナとは小学生時代書いていた漫画の主人公の名前。無駄に最強設定だった。</dd>
        <dt>派手南次郎</dt>
        <dd>下手な書き物などをしたとき作者名の所に書く名前。@hatena が元になっているが、他にも色々な意味がある。</dd>
      </dl>

      <h2>旧プロフィールの環境情報</h2>
      <p>
        旧プロフィールには、2011-01-14時点のPC環境、実況環境、実況用PC詳細、使用ソフト一覧が記録されていました。
        現在情報としては未確認のため、詳細の掲載は保留しています。
      </p>

      <address>AntennaJane 2009-07-07 作成 2009-10-25 微修正</address>
    </div>
  );
}
