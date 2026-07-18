import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/writing/excavation";

export function BuildPage(): Page {
  return {title: "Webリソース発掘法", path: current, parent: Index.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const [rendered, setRendered] = React.useState(false);

  const isExact = useRouteMatch(current)?.isExact;
  React.useEffect(() => {
    if (isExact && !rendered) {
      setRendered(true);
      props.setPage(BuildPage());
    }
  }, [isExact, rendered, props]);

  return (
    <div className="Writing-Excavation">
      <p>今公開されてないからって、見られないかどうかはわからない！</p>
      <p><em className="hur">お急ぎの方は『<a href="#S9-2" title="Webリソース発掘法 忙しい人のためのWebリソース発掘法">忙しい人のためのWebリソース発掘法</a>』へどうぞ</em></p>
      <h2 id="S1">目次</h2>
      <ol>
      <li className="tit"><a href="#S" title="Webリソース発掘法">Webリソース発掘法</a></li>
      <li className="mar"><a href="#S1" title="Webリソース発掘法 目次">目次</a></li>
      <li className="mar"><a href="#S2" title="Webリソース発掘法 注意書き">注意書き</a></li>
      <li className="mar"><a href="#S3" title="Webリソース発掘法 『発掘』とは、どういうことか？">『発掘』とは、どういうことか？</a></li>
      <li className="exp"><a href="#S3-1" title="Webリソース発掘法 時は、まさに戦国時代">時は、まさに戦国時代</a></li>
      <li className="exp"><a href="#S3-2" title="Webリソース発掘法 保管能力の限界">保管能力の限界</a></li>
      <li className="exp"><a href="#S3-3" title="Webリソース発掘法 消しても消えない遺物たち">消しても消えない遺物たち</a></li>
      <li className="exp"><a href="#S3-4" title="Webリソース発掘法 情報を発掘しよう！">情報を発掘しよう！</a></li>
      <li className="exp"><a href="#S3-5" title="Webリソース発掘法 数ある方法から発掘を選ぶ理由">数ある方法から発掘を選ぶ理由</a></li>
      <li className="mar"><a href="#S4" title="Webリソース発掘法 どのように発掘を行うか">どのように発掘を行うか</a></li>
      <li className="exp"><a href="#S4-1" title="Webリソース発掘法 何から手をつける？">何から手をつける？</a></li>
      <li className="exp"><a href="#S4-1-" title="Webリソース発掘法 発掘フローチャート">（発掘フローチャート）</a></li>
      <li className="exp"><a href="#S4-2" title="Webリソース発掘法 目標を設定する">１．目標を設定する</a></li>
      <li className="exp"><a href="#S4-3" title="Webリソース発掘法 既知の情報をまとめる">２．既知の情報をまとめる</a></li>
      <li className="exp"><a href="#S4-4" title="Webリソース発掘法 手段を策定する">３．手段を策定する</a></li>
      <li className="exp"><a href="#S4-5" title="Webリソース発掘法 根気よく探す">４．根気よく探す</a></li>
      <li className="exp"><a href="#S4-6" title="Webリソース発掘法 連携技で掘り進め！">連携技で掘り進め！</a></li>
      <li className="mar"><a href="#S5" title="Webリソース発掘法 見つけ出したいこんな手がかり">見つけ出したいこんな手がかり</a></li>
      <li className="exp"><a href="#S5-1" title="Webリソース発掘法 手がかりは目標の一部">手がかりは目標の一部</a></li>
      <li className="exp"><a href="#S5-2" title="Webリソース発掘法 “目標”が必要とする手がかり">“目標”が必要とする手がかり</a></li>
      <li className="exp"><a href="#S5-3" title="Webリソース発掘法 “手がかり”を見つけ出す方法">“手がかり”を見つけ出す方法</a></li>
      <li className="exp"><a href="#S5-4" title="Webリソース発掘法 “情報”から見つけ出せる手がかり">“情報”から見つけ出せる手がかり</a></li>
      <li className="mar"><a href="#S6" title="Webリソース発掘法 どんな道具が使えるのか">どんな道具が使えるのか</a></li>
      <li className="exp"><a href="#S6-1" title="Webリソース発掘法 手段は星の数">手段は星の数</a></li>
      <li className="exp"><a href="#S6-2" title="Webリソース発掘法 検索エンジン">検索エンジン</a></li>
      <li className="exp"><a href="#S6-2-1" title="Webリソース発掘法 基本の使い方">（基本の使い方）</a></li>
      <li className="exp"><a href="#S6-2-2" title="Webリソース発掘法 詳しい検索方法">（詳しい検索方法）</a></li>
      <li className="exp"><a href="#S6-2-3" title="Webリソース発掘法 検索オプション">（検索オプション）</a></li>
      <li className="exp"><a href="#S6-2-4" title="Webリソース発掘法 検索種別">（検索種別）</a></li>
      <li className="exp"><a href="#S6-2-5" title="Webリソース発掘法 検索エンジンの選択">（検索エンジンの選択）</a></li>
      <li className="exp"><a href="#S6-3" title="Webリソース発掘法 Internet Archive Wayback Machine">Internet Archive Wayback Machine</a></li>
      <li className="mar"><a href="#S7" title="Webリソース発掘法 発掘“ケースバイケース”">発掘“ケースバイケース”</a></li>
      <li className="exp"><a href="#S7-1" title="Webリソース発掘法 こんなときどうすればいいの？">こんなときどうすればいいの？</a></li>
      <li className="exp"><a href="#S7-2" title="Webリソース発掘法 目標設定に関する問題">目標設定に関する問題</a></li>
      <li className="exp"><a href="#S7-3" title="Webリソース発掘法 手がかりに関する問題">手がかりに関する問題</a></li>
      <li className="exp"><a href="#S7-4" title="Webリソース発掘法 手段に関する問題">手段に関する問題</a></li>
      <li className="exp"><a href="#S7-5" title="Webリソース発掘法 効率に関する問題">効率に関する問題</a></li>
      <li className="exp"><a href="#S7-6" title="Webリソース発掘法 その他の問題">その他の問題</a></li>
      <li className="exp"><a href="#S7-" title="Webリソース発掘法 発掘ケースバイケースの使い方">発掘ケースバイケースの使い方</a></li>
      <li className="mar"><a href="#S8" title="Webリソース発掘法 実際にやってみた">実際にやってみた</a></li>
      <li className="mar"><a href="#S9" title="Webリソース発掘法 その他あれこれ">その他あれこれ</a></li>
      <li className="exp"><a href="#S9-1" title="Webリソース発掘法 発掘の歴史">発掘の歴史</a></li>
      <li className="exp"><a href="#S9-2" title="Webリソース発掘法 忙しい人のためのWebリソース発掘法">忙しい人のためのWebリソース発掘法</a></li>
      <li className="mar"><a href="#S10" title="Webリソース発掘法 用語集">用語集</a></li>
      </ol>
      <h2 id="S2">注意書き</h2>
      <p>
      このページは、既に存在する<a className="dfd" href="#dfn-worldWideWeb">WWW</a>用情報<a className="dfd" href="#dfn-search">検索</a>技術を、“過去へ遡るという観点から纏め直す”という試みの基に作られました。
      そのため、書かれている内容に関しては筆者オリジナルのものでは無いという事を、あらかじめ御了承下さい。
      </p><p>
      その他、本ページの利用に関しては本サイトの『<Link to={"/~Solferino/notes"}>利用上の諸注意</Link>』をご覧ください。
      </p>
      <h2 id="S3">S3『<a className="dfd" href="#dfn-excavate">発掘</a>』とは、どういうことか？</h2>
      <h3 id="S3-1">時は、まさに戦国時代</h3>
      <p>
      <a className="dfd" href="#dfn-webPage">Webページ</a>は栄枯盛衰。
      昨日あった<a className="dfd" href="#dfn-webPage">ページ</a>が今日消滅し、今日なかった<a className="dfd" href="#dfn-webPage">ページ</a>が明日には出現します。
      必要なデータは、見つけた時点で<a className="dfd" href="#dfn-secure">確保</a>しておく必要があるのです。
      </p>
      <h3 id="S3-2">保管能力の限界</h3>
      <p>
      しかし、見たもの全てを<a className="dfd" href="#dfn-secure">保管</a>しておくことはできません。
      装置には<a className="dfd" href="#dfn-capacity">容量</a>というものが存在するからです。
      </p><p>
      もちろん、サイズの小さいデータだけでも<a className="dfd" href="#dfn-secure">確保</a>しておけば、困ることはぐっと減るでしょう。
      それでも、貼ってあるリンクの先まで全て<a className="dfd" href="#dfn-secure">保管</a>するのは現実的な話ではありません。
      それに、すでになくなっている<a className="dfd" href="#dfn-webPage">ページ</a>に対して、この方法はあまりに無力です。
      </p><p>
      では、<a className="dfd" href="#dfn-compile">収集</a>できなかったデータに関しては、諦めるしかないのでしょうか？
      </p>
      <h3 id="S3-3">消しても消えない<a className="dfd" href="#dfn-relic">遺物</a>たち</h3>
      <p>
      諦めてください。嘘です。
      </p><p>
      ……<a className="dfd" href="#dfn-worldWideWeb">Web</a>に一度公開した情報は、なかなか雲散霧消とはいかないものなのです。
      有名であればあるほど長く残ります。
      <a className="dfd" href="#dfn-bulletinBoardSystem">掲示板</a>で内容を語り合う人々がいれば、それがログになって残るでしょう。
      一部を引用して記事が書かれれば、それだって残ります。
      誰かが、消えてしまうのは惜しいからと<a className="dfd" href="#dfn-mirrorSite">ミラーサイト</a>を作るかもしれません。
      ことによると、丸ごとパクってオリジナル<a className="dfd" href="#dfn-webSite">サイト</a>などと名乗る不届き者だって現れるかもしれません。
      これらの状況は、複製が容易であるという電子情報の特徴から容易に起こります。
      そして拡散した情報は、オリジナルが何らかの原因で消滅しても、『<a className="dfd" href="#dfn-relic">遺物</a>』となって残り続けるのです……。
      </p>
      <h3 id="S3-4">情報を<a className="dfd" href="#dfn-excavate">発掘</a>しよう！</h3>
      <p>
      というわけで、<a className="dfd" href="#dfn-compile">収集</a>できなかったデータに関しては、これらの<a className="dfd" href="#dfn-relic">遺物</a>をログの地層から掘り出すという手があるのです。
      名前が見あたらなかったので、この方法を仮に『<a className="dfd" href="#dfn-excavation">Webリソース発掘法</a>』と名付けました。
      </p><p>
      <a className="dfd" href="#dfn-excavate">発掘</a>には、知識・<a className="dfd" href="#dfn-search">検索</a>能力・根気がいります。
      知識を元に大体の目標を定めたら、<a className="dfd" href="#dfn-search">検索</a>を駆使して<a className="dfd" href="#dfn-relic">遺物</a>のありそうな場所を探し、<a className="dfd" href="#dfn-excavate">発掘</a>します。
      存在しなかったら、別の<a className="dfd" href="#dfn-excavation">発掘法</a>を探ることになります。
      慣れれば、多少マイナーな<a className="dfd" href="#dfn-webSite">サイト</a>であっても<a className="dfd" href="#dfn-excavate">発掘</a>が可能となるでしょう。
      しかし、当然のことですが、それでもないものはないのです。
      時間を空けてみれば、状況は驚くほど変わります。
      昨日まで存在しなかった<a className="dfd" href="#dfn-relic">遺物</a>でも、今日は存在するということだってありうるのです。
      一刻を争うのでなければ、長い目で見て<a className="dfd" href="#dfn-excavate">発掘</a>を行ってください。
      </p><p>
      ……そうですね。
      一刻を争う場合のことも書いておかなければいけません。
      当然のことではあるのですが、<a className="dfd" href="#dfn-excavate">発掘</a>は消滅した情報を取り戻す唯一の方法ではないのです。
      </p>
      <h3 id="S3-5">数ある方法から<a className="dfd" href="#dfn-excavate">発掘</a>を選ぶ理由</h3>
      <p>
      他の方法には、例えば作者に問い合わせるというものがあります。
      作者にとってみれば、消えてしまったものは大切な自分の作品です。
      ハードディスクにしまっているかもしれません。
      また、他には違う媒体をあたるというものもあります。
      <a className="dfd" href="#dfn-worldWideWeb">Web</a>にないのならば、図書館にあるのかもしれないということです。
      昔は誰もがそうやって情報を集めていたわけですから。
      </p><p>
      では、何故“<a className="dfd" href="#dfn-excavation">Webリソース発掘法</a>”を利用するのでしょうか。
      </p><p>
      第一に、対象への影響を最小限に抑えられます。
      <a className="dfd" href="#dfn-excavate">発掘</a>は方法としてはとても消極的なもので、情報を新たに作り出して解決することを嫌います。
      <a className="dfd" href="#dfn-bulletinBoardSystem">掲示板</a>に書き込みをしたり質問箱に投函をしたりはしないということです。
      これによって、逆に必要な情報が消えてしまう等のリスクを小さくすることができます。
      もちろん、波及的に別の情報を損壊してしまう等といったものもほとんどなくなります。
      </p><p>
      第二に、当時の環境に近いものを再現することができます。
      再びよく似た情報が現れたとしても、それが同じものであるかどうかを確かめるのは難しいことです。
      しかし、もしも<a className="dfd" href="#dfn-mirrorSite">ミラーサイト</a>やWeb魚拓を発見することができれば、それが同じものである根拠を手に入れられます。
      どこかが改変されていたとしても、それを指摘することができるわけです。
      </p><p>
      第三に、これは<a className="dfd" href="#dfn-worldWideWeb">Web</a>環境内で完結する方法です。
      図書館や書店に出向く必要はありません。
      皆様にはそれぞれさまざまな事情があるでしょうが、この文章は<a className="dfd" href="#dfn-worldWideWeb">Web</a>で公開されている……はずです。
      なので、<a className="dfd" href="#dfn-worldWideWeb">Web</a>を利用するこの方法は皆様にも実行しやすいものであると思っています。
      </p><p>
      他にもいくつかありますが、おおまかにいえばこの三つが<a className="dfd" href="#dfn-excavate">発掘</a>の長所です。
      これらの特長に魅力を感じるのならば、<a className="dfd" href="#dfn-excavate">発掘</a>は適した方法だということになります。
      次の章からは、実際に<a className="dfd" href="#dfn-excavate">発掘</a>を行う手順を書いています。
      興味のある方は、そのまま読み進めていただければ幸いです。
      </p>
      <h2 id="S4">どのように<a className="dfd" href="#dfn-excavate">発掘</a>を行うか</h2>
      <h3 id="S4-1">何から手をつける？</h3>
      <p>
      それでは早速<a className="dfd" href="#dfn-relic">遺物</a>の<a className="dfd" href="#dfn-excavate">発掘</a>を始めましょう。
      掘ってください！
      </p><p>
      ……と言われても、どうすればいいのかわからない方がほとんどだと思われます。
      ここでは、<a className="dfd" href="#dfn-excavate">発掘</a>作業の“大体の流れ”について書いてみたいと思います。
      </p><dl>
      <dt className="tit" id="S4-1-"><a className="dfd" href="#dfn-excavate">発掘</a>フローチャート</dt>
      <dd className="tex">この通りにすれば<a className="dfd" href="#dfn-excavate">発掘</a>は簡単！(←おおかた簡単ではない)<dl>
      <dt className="mar">１．目標を設定する</dt>
      <dd className="exp">
      具体的な何かがあればそれを。
      無ければおおざっぱにでもいいので、目標を定めます。
      この時、欲張らないことが成功への近道です。
      </dd><dd className="exp">
      <em className="exam">今回は、“最近閉鎖してしまった<a className="dfd" href="#dfn-webSite">Webサイト</a>の小説”を目標にした、としましょう。</em>
      </dd>
      <dt className="mar">２．既知の情報をまとめる</dt>
      <dd className="exp">
      目標についてイメージしてください。
      また断片が手元にある場合は、それをじっくりと観察してください。
      そこから、特徴・個性などを見いだすのです。
      意外と手がかりは沢山あるはずです。
      題名・本文の内容・分類・作成年月日・アクセス日時・作者・<a className="dfd" href="#dfn-URL">URL</a>・リンク元・etc.
      これらが<a className="dfd" href="#dfn-relic">遺物</a>への水先案内人となって、あなたを導いてくれるでしょう。
      </dd><dd className="exp">
      <em className="exam">小説なので、題名や作者、本文の内容などの情報が重要となります。分類や<a className="dfd" href="#dfn-URL">URL</a>の情報も欲しいところです。</em>
      </dd>
      <dt className="mar">３．手段を策定する</dt>
      <dd className="exp">
      先ほど見つけた手がかりを元に、適した手段を選びます。
      それが文字列なら、<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>に通してみるといいでしょう。
      分類や作成年月日から、<a className="dfd" href="#dfn-summarySite">まとめサイト</a>や<a className="dfd" href="#dfn-bulletinBoardSystem">掲示板</a>のログを漁ってみてもいいかもしれません。
      <a className="dfd" href="#dfn-URL">URL</a>の情報があれば、 <a className="dfd" href="#dfn-waybackMachine">Wayback Machine</a> の<a className="dfd" href="#dfn-archive">アーカイブ</a>が使えます。
      </dd><dd className="exp">
      <em className="exam">テキストコンテンツには、<a className="dfd" href="#dfn-search">検索</a>や <a className="dfd" href="#dfn-waybackMachine">Wayback Machine</a> が有効です。</em>
      </dd>
      <dt className="mar">４．根気よく探す</dt>
      <dd className="exp">
      手段が決まったら早速試してみましょう。
      すぐに出てくることもあれば、いくつも工夫を重ねてやっと頭を出すこともあります。
      行き詰まったように感じたら他の方法を試してみるか、時間を空けてみてください。
      きっと打開できるはずです。
      </dd><dd className="exp">
      <em className="exam">別の<a className="dfd" href="#dfn-webSite">サイト</a>に転載された分が残っていました――みたいな感じで見つかります。</em>
      </dd></dl></dd></dl><p>
      と、まぁこんな感じで<a className="dfd" href="#dfn-excavate">発掘</a>を行ってください。
      次の段からは、フローチャートの項目についてそれぞれ詳細に解説していきます。
      </p>
      <h3 id="S4-2">１．目標を設定する</h3>
      <p>
      目標を設定する上で重要なことは、『見つけられそうなもの』にするということです。
      <a className="dfd" href="#dfn-excavate">発掘</a>には基本終わりがないので、いつまでも探し続けることが可能です。
      なので、朝が来る前に見つけられそうな目標にしないと切ないことになります。
      ところで、見つけやすい目標とはどういうものでしょう。
      </p><p>
      情報は、時間とともに徐々に失われていきます。
      つまり、それが新しければ新しいほど完全な形で残っている可能性が高まります。
      また人気の情報は、様々な場所から参照されるため、コピーが拡散して意外な場所から見つかることがあります。
      他にも、需要が高ければ誰かによって<a className="dfd" href="#dfn-secure">保管</a>されている事が多くなります。
      </p><p>
      【年代】【人気】【需要】
      </p><p>
      この三つが『見つけられそうなもの』かどうかを決めます。
      ということは、これらが目標を設定する上で重要なことなのです。
      また、これらの要素が不足しているものを目標とすることはお勧めできません。
      <a className="dfd" href="#dfn-excavate">発掘</a>よりも強力な別の方法を試してください。
      </p>
      <h3 id="S4-3">２．既知の情報をまとめる</h3>
      <p>
      これに関しては、イメージが何よりも重要です。
      その情報が、どこにどのような形で転がっていそうか？　
      それを予想する知識が必要なのです。
      </p><p>
      <a className="dfd" href="#dfn-imageboard">画像掲示板</a>に貼ってあった、気になっている絵が流れてしまったとします。
      <a className="dfd" href="#dfn-imageboard">画像掲示板</a>は<a className="dfd" href="#dfn-capacity">容量</a>の関係から、過去ログが消えてしまうことがあります。
      こんな場合、どんな情報があれば<a className="dfd" href="#dfn-excavate">発掘</a>の可能性が高いのでしょうか。
      イメージしてください。
      あの絵がまだどこかに残っているとしたらどこにあるだろうか……。
      そして、そこから必要な情報を導き出すのです。
      下に、思いつく限りのイメージをまとめておいたので参考にしてください。
      </p><p>
      消えてすぐならキャッシュが残っているかもしれません。
      キャッシュは生ものなので、あとでまた必要な情報は、見つけたらすぐに<a className="dfd" href="#dfn-secure">確保</a>しておきましょう。
      また、<a className="dfd" href="#dfn-imageboard">画像掲示板</a>の場合<a className="dfd" href="#dfn-mirrorSite">ミラーサイト</a>の発見は期待できません。
      <a className="dfd" href="#dfn-capacity">容量</a>が大きく更新頻度も高いので保存しきれないのです。
      ただし、<a className="dfd" href="#dfn-imageboard">画像掲示板</a>の管理人が<a className="dfd" href="#dfn-secure">保管</a>している場合は別です。
      自<a className="dfd" href="#dfn-webSite">サイト</a>の情報なので、多少重くても保存していたりします。
      これらの場合、<a className="dfd" href="#dfn-URL">URL</a>やリンク元などの情報が重要となります。
      </p><p>
      作者自身がその画像を別の場所に転載していることがあります。
      この場合、作者の情報や題名・作成年月日などが重要となります。
      もちろん作者以外の手によって転載されている可能性もありますが、この場合は分類情報や本文の内容も重要な要素に加わります。
      ただしどちらの場合でも、付いていたコメントを補完するのは困難です。
      </p><p>
      手に入れるべき情報がわかったら、記憶や目標の断片などを利用してそれを集めていきます。
      時には手がかりを手に入れるために<a className="dfd" href="#dfn-excavate">発掘</a>を行うこともあるでしょう。
      これらの実際に情報を手に入れるまでの過程を、別の章にまとめることにしました。
      『<a href="#S5" title="Webリソース発掘法 見つけ出したいこんな手がかり">見つけ出したいこんな手がかり</a>』へどうぞ。
      </p>
      <h3 id="S4-4">３．手段を策定する</h3>
      <p>
      この段階で重要になるのは“見切り”です。
      例えば<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>に語句を入力したとき、結果が数百件出てきたとします。
      実は数百件くらいなら、全ての結果を見て関連するかどうか確かめるのはそれほど難しくありません。
      この時、全てを見て回るか、別の方法を試すかを判断するのが見切りなのです。
      </p><p>
      <a className="dfd" href="#dfn-searchEngine">検索エンジン</a>は一つではありません。
      当然、<a className="dfd" href="#dfn-searchWord">検索語句</a>も一つではありません。
      また、<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>には<a className="dfd" href="#dfn-imageSearch">画像検索</a>や<a className="dfd" href="#dfn-videoSearch">動画検索</a>も存在します。
      一つの<a className="dfd" href="#dfn-search">検索</a>にあまり時間をかけるべきではないかもしれません。
      こんな時に役に立つのが過去の経験です。
      感覚を頼りに思い切って選択していきましょう。
      </p><p>
      ところで、<a className="dfd" href="#dfn-excavate">発掘</a>する上で一番華やかなのがこの段階です。
      手段を道具と言い換えればよく理解できます。
      これを組み合わせて調整するのはそれだけでも楽しいものです。
      その一部でもここで紹介するのは手狭なので、新たに章を設けようと思います。
      『<a href="#S6" title="Webリソース発掘法 どんな道具が使えるのか">どんな道具が使えるのか</a>』でお会いしましょう。
      </p>
      <h3 id="S4-5">４．根気よく探す</h3>
      <p>
      根気よく物事を成し遂げる方法については、皆さんのほうがよくご存じだと思います。
      しかし、項目を作って『詳細に解説する』などと言ったからには何か書かないわけにはいきません。
      というわけで、ここではくじけそうになった時に考えてもらいたいことをまとめておきます。
      </p><p>
      『視野が狭くなってはいないか』
      よくある話ですが、一つ方法を思い付くとそれに固執してしまいがちです。
      見落としている情報はないか、他の方法を併用できないかなどを確認し、場合によっては捨てる勇気を持ちましょう。
      </p><p>
      『本当にそれは必要なものか』
      大切なのは自分の基準で考えることです。
      人には必要でも自分には魅力の感じられないものは山ほどあるでしょうし、寝ても覚めても気になるものが、人気のものとは限りません。
      そもそも、<a className="dfd" href="#dfn-worldWideWeb">Web</a>の情報は普通重要性の低いものです。
      <a className="dfd" href="#dfn-excavate">発掘</a>をするならば、惑わされない心が武器になるかもしれません。
      </p><p>
      『焦りすぎてはいないか』
      <a className="dfd" href="#dfn-excavate">発掘</a>は昔のものほど難しくなるのが普通ですが、場合によっては時間を空けることによって、かえって見つけやすくなることがあります。
      一度に全てを終えてしまおうと思わず、行き詰ったら一休みするのも大切です。
      </p>
      <h3 id="S4-6">連携技で掘り進め！</h3>
      <p>
      これで項目の詳細は解説し終わりました。
      しかし、まだすべての解説が終わったわけではないのです。
      最後に連携について紹介しておこうと思います。
      </p><p>
      簡単な<a className="dfd" href="#dfn-excavate">発掘</a>の場合、フローチャートを上から下へ辿るだけで目的のものへ到達することができます。
      しかし、それが困難なものになると、連携が求められるようになるのです。
      例えば、情報をまとめる段階で、ほんの少ししか手がかりを見つけられなかったとします。
      そんな時には、とりあえず<a className="dfd" href="#dfn-excavate">発掘</a>を進めて、手段を策定したり実際に掘ってみたりするのです。
      すると、出てきたものの中から、新たな手がかりが見つかってくるのです。
      </p><p>
      連携とは、ここではフローチャートを逆流することなのです。
      これを使いこなせるようになれば、<a className="dfd" href="#dfn-excavation">発掘法</a>が身についたと言っていいでしょう。
      </p><p>
      ……これで流れについては全てです。
      さて、冗長な解説を最後まで読んでくださった皆様に、ささやかなプレゼントがあります。
      『<a href="#S7" title="Webリソース発掘法 発掘“ケースバイケース”">発掘“ケースバイケース”</a>』です。
      こちらに、具体的な<a className="dfd" href="#dfn-excavate">発掘</a>の方法を早見表にしてまとめておきました。
      皆様のお役に立てば幸いです。
      </p>
      <h2 id="S5">見つけ出したいこんな手がかり</h2>
      <h3 id="S5-1">手がかりは目標の一部</h3>
      <p>
      題字の通り、手がかりというのは目標の断片そのものです。
      つまり、新たな手がかりを手に入れるたびに発掘は一歩前進するのです。
      ここでは章を三つに分け、それぞれ
      【<a href="#S5-2" title="Webリソース発掘法 目標が必要とする手がかり">“目標”が必要とする手がかり</a>】【<a href="#S5-3" title="Webリソース発掘法 “手がかり”を見つけ出す方法">“手がかり”を見つけ出す方法</a>】【<a href="#S5-4" title="Webリソース発掘法 “情報”から見つけ出せる手がかり">“情報”から見つけ出せる手がかり</a>】
      を書いていきます。では、詳しい使い方を説明しましょう。
      </p><p>
      【<a href="#S5-2" title="Webリソース発掘法 目標が必要とする手がかり">“目標”が必要とする手がかり</a>】
      発掘をする限りは目標が定まっているはずですが、それを見つけるためにはどのような手がかりが重要かを書いているのがこの段です。
      手元に必要な手がかりが足りていない場合は、それを見つけ出すのを最初の目標としてみるといいでしょう。
      </p><p>
      【<a href="#S5-3" title="Webリソース発掘法 “手がかり”を見つけ出す方法">“手がかり”を見つけ出す方法</a>】
      実際に手がかりを探しだすときに、どんな手段で何を見つけ出せばいいかが書いてあります。
      また、それを見つけ出した結果何を発掘できるのかも併せて書いてあります。
      </p><p>
      【<a href="#S5-4" title="Webリソース発掘法 “情報”から見つけ出せる手がかり">“情報”から見つけ出せる手がかり</a>】
      発掘中には目標以外の情報が山のように出てきますが、ここからどれだけ新たな手がかりを見つけ出せるかが発掘の成功にかかわってきます。
      がらくたの中から使えるものを探し出す方法を書いているのがこの段です。
      </p><p>
      三つの段はそれぞれ引用符の中身、つまり【目標】【手がかり】【情報】を見出しに書いてあります。
      つまり、情報について調べたいなら【<a href="#S5-4" title="Webリソース発掘法 “情報”から見つけ出せる手がかり">“情報”から見つけ出せる手がかり</a>】の段を見ればいいのです。
      </p><p>
      それぞれの項目の内容は、下に示すようにまとめています。
      </p>
      <ol>
      <li><span style={{fontWeight: "bolder"}}>内容の分類</span>
      <ol>
      <li className="tit">【内容】　内容の詳細</li>
      <li className="mar">対象の分類　【対象】 【……】 【……】（対象が重要な順）</li>
      <li className="exp">【対象】　対象の詳細</li>
      <li className="exp">【……】　……</li>
      <li className="exp">【……】　……</li>
      <li className="exp">内容に関する考察</li>
      </ol></li></ol>
      <h3 id="S5-2">“目標”が必要とする手がかり</h3>
      <ol><li>
      <h4 id="G-edit">編集形態による区分</h4>
      <ol>
      <li className="tit" id="G-private">【個人編集】　個人サイトやブログ、まとめサイトなど</li>
      <li className="mar">手がかり　<a href="#G-title">【題名】</a> <a href="#G-author">【作者名等】</a> <a href="#G-time">【作成時刻】</a> <a href="#G-contents">【内容】</a> <a href="#G-summary">【要約】</a> <a href="#G-classification">【分類】</a></li>
      <li className="exp"><a href="#G-title">【題名】</a>　題名が特徴的であればそれが決定打となります。</li>
      <li className="exp"><a href="#G-author">【作者名等】</a>　作成者かつ編集者の名前は絞り込みに重要です。</li>
      <li className="exp"><a href="#G-time">【作成時刻】</a>　年単位の大雑把な作成時期でもわかれば役に立ちます。</li>
      <li className="exp"><a href="#G-contents">【内容】</a>　書き手の癖なども発掘の手助けになります。</li>
      <li className="exp"><a href="#G-author">【要約】</a>　特異な内容でない限り役には立たないでしょう。</li>
      <li className="exp"><a href="#G-classification">【分類】</a>　リンク集から探す場合など役に立つことがあります。</li>
      <li className="exp">すべての基本となる形態です。前触れもなく消滅したりするので発掘の機会も多いでしょう。</li>
      </ol><ol>
      <li className="tit" id="G-cooperation">【共同編集】　サークルサイトや掲示板、Wikiなど</li>
      <li className="mar">手がかり　<a href="#G-title">【題名】</a> <a href="#G-author">【作者名等】</a> <a href="#G-time">【作成時刻】</a> <a href="#G-summary">【要約】</a> <a href="#G-contents">【内容】</a> <a href="#G-classification">【分類】</a></li>
      <li className="exp"><a href="#G-title">【題名】</a>　題名が特徴的であればそれが決定打となります。</li>
      <li className="exp"><a href="#G-author">【作者名等】</a>　グループ名がわかっていれば強力な手がかりになります。
      また、個人名しかわからない場合でも、複数いるので数打てば当たるかもしれません。</li>
      <li className="exp"><a href="#G-time">【作成時刻】</a>　年単位の大雑把な作成時期でもわかれば役に立ちます。</li>
      <li className="exp"><a href="#G-author">【要約】</a>　他の情報と組み合わせることで効果が上がります。</li>
      <li className="exp"><a href="#G-contents">【内容】</a>　個人編集の場合よりは重要性が低くなっています。</li>
      <li className="exp"><a href="#G-classification">【分類】</a>　リンク集から探す場合など役に立つことがあります。</li>
      <li className="exp">特徴の掴みにくい形態です。個人と企業の中間的な特徴があります。</li>
      </ol><ol>
      <li className="tit" id="G-company">【企業編集】　企業サイトやSNS、動画共有サイトなど</li>
      <li className="mar">手がかり　<a href="#G-classification">【分類】</a> <a href="#G-contents">【内容】</a> <a href="#G-time">【作成時刻】</a> <a href="#G-title">【題名】</a> <a href="#G-author">【作者名等】</a> <a href="#G-summary">【要約】</a></li>
      <li className="exp"><a href="#G-classification">【分類】</a>　企業編集では何より重要で、
      これに合わせてやり方を大きく変える必要があります。</li>
      <li className="exp"><a href="#G-contents">【内容】</a>　内容によって戦略を変える必要があります。</li>
      <li className="exp"><a href="#G-time">【作成時刻】</a>　精度は良くないものの、多くの場合で利用できます。</li>
      <li className="exp"><a href="#G-title">【題名】</a>　ニュースなど一部の内容で重要です。</li>
      <li className="exp"><a href="#G-author">【作者名等】</a>　SNSなど一部の内容で重要です。</li>
      <li className="exp"><a href="#G-author">【要約】</a>　商品紹介など一部の内容で重要です。</li>
      <li className="exp">方式による差が大きいので、<a href="#G-method">方式による区分</a>を参考にしてください。</li>
      </ol>
      </li><li>
      <h4 id="G-method">方式による区分</h4>
      <ol>
      <li className="tit" id="G-html">【生html】　特に何のひねりもなく直接html文書が置いてあるページ。</li>
      <li className="mar">手がかり　<a href="#G-title">【題名】</a> <a href="#G-contents">【内容】</a> <a href="#G-author">【作者名等】</a> <a href="#G-summary">【要約】</a> <a href="#G-time">【作成時刻】</a> <a href="#G-classification">【分類】</a></li>
      <li className="exp"><a href="#G-title">【題名】</a>　題名が特徴的であればそれが決定打となります。</li>
      <li className="exp"><a href="#G-contents">【内容】</a>　生htmlの場合、変化が起きにくいので特に重要です。</li>
      <li className="exp"><a href="#G-author">【作者名等】</a>　作者のページを見つけ出せば、新たな手がかりが手に入ります。</li>
      <li className="exp"><a href="#G-time">【作成時刻】</a>　年単位の大雑把な作成時期でもわかれば役に立ちます。</li>
      <li className="exp"><a href="#G-author">【要約】</a>　最近はカテゴリ検索が下火なので利用しにくい手がかりです。</li>
      <li className="exp"><a href="#G-classification">【分類】</a>　上に同じ。</li>
      <li className="exp">内容の大きく変化しない単純な形態です。Wayback Machineが役に立つでしょう。</li>
      </ol><ol>
      <li className="tit" id="G-blog">【ブログ】　情報が時系列で記録されるページの一形態。</li>
      <li className="mar">手がかり　<a href="#G-author">【作者名等】</a> <a href="#G-time">【作成時刻】</a> <a href="#G-title">【題名】</a> <a href="#G-contents">【内容】</a> <a href="#G-summary">【要約】</a> <a href="#G-classification">【分類】</a></li>
      <li className="exp"><a href="#G-author">【作者名等】</a>　ブログを探し出す時などにまず必要となる手がかりです。</li>
      <li className="exp"><a href="#G-time">【作成時刻】</a>　日時からURLを予想したり色々な役に立ちます。</li>
      <li className="exp"><a href="#G-classification">【分類】</a>　記事に貼ってあるタグが役に立つかもしれません。</li>
      <li className="exp"><a href="#G-title">【題名】</a>　題名はあまり重要視されないので、特徴的なものでも役に立たないことがあります。</li>
      <li className="exp"><a href="#G-contents">【内容】</a>　ブログでは内容の差異が小さくなりがちなので、利用しにくくなっています。</li>
      <li className="exp"><a href="#G-author">【要約】</a>　トラックバックなどから情報を引き出せる可能性もあります。</li>
      <li className="exp">記事が見えなくなっても慌てないでページを探せば、普通に残っている場合があります。</li>
      </ol><ol>
      <li className="tit" id="G-bbs">【掲示板】　利用者同士のやりとりそのもので成り立つページの一形態。</li>
      <li className="mar">手がかり　<a href="#G-time">【作成時刻】</a> <a href="#G-title">【題名】</a> <a href="#G-contents">【内容】</a> <a href="#G-summary">【要約】</a> <a href="#G-classification">【分類】</a> <a href="#G-author">【作者名等】</a></li>
      <li className="exp"><a href="#G-author">【作者名等】</a>　ブログを探し出す時などにまず必要となる手がかりです。</li>
      <li className="exp"><a href="#G-time">【作成時刻】</a>　日時からURLを予想したり色々な役に立ちます。</li>
      <li className="exp"><a href="#G-classification">【分類】</a>　記事に貼ってあるタグが役に立つかもしれません。</li>
      <li className="exp"><a href="#G-title">【題名】</a>　題名はあまり重要視されないので、特徴的なものでも役に立たないことがあります。</li>
      <li className="exp"><a href="#G-contents">【内容】</a>　ブログでは内容の差異が小さくなりがちなので、利用しにくくなっています。</li>
      <li className="exp"><a href="#G-author">【要約】</a>　トラックバックなどから情報を引き出せる可能性もあります。</li>
      <li className="exp">記事が見えなくなっても慌てないでページを探せば、普通に残っている場合があります。</li>
      </ol>
      <h5>【チャット】　利用者同士の即時的なやりとりで成り立つページの一形態。</h5>
      <h5>【Wiki】　利用者が情報を書き換えることで成り立つページの一形態。</h5>
      <h5>【その他】　上記の方式に当てはまらないページ。</h5>
      </li><li>
      <h4>内容による区分</h4>
      <h5>【文章】</h5>
      <h5>【画像】</h5>
      <h5>【動画】</h5>
      </li></ol>
      <h3 id="S5-3">“手がかり”を見つけ出す方法</h3>
      <h4>内容に関連する情報</h4>
      <h5 id="G-title">【題名】</h5>
      <h5 id="G-summary">【要約】</h5>
      <h5 id="G-contents">【内容】</h5>
      <h5 id="G-classification">【分類】</h5>
      <h4>形成に関連する情報</h4>
      <h5 id="G-time">【作成時刻】</h5>
      <h5 id="G-author">【作者名等】</h5>
      <h5 id="G-way">【作成手段】</h5>
      <h5>【規格形式】</h5>
      <h3 id="S5-4">“情報”から見つけ出せる手がかり</h3>
      <h4>方式による区分</h4>
      <h5>【生html】</h5>
      <h5>【掲示板】</h5>
      <h4>内容による区分</h4>
      <h5>【文章】</h5>
      <h5>【画像】</h5>
      <h5>【動画】</h5>
      <h2 id="S6">どんな道具が使えるのか</h2>
      <h3 id="S6-1">手段は星の数</h3>
      <p>
      ここでは<a className="dfd" href="#dfn-excavate">発掘</a>において実際に使える手段を紹介していきます。
      一つ 〃 の手段についてより詳しく知りたいと思った時は、<a className="dfd" href="#dfn-worldWideWeb">Web</a>上に存在する数多の解説<a className="dfd" href="#dfn-webPage">ページ</a>を参考にしてください。
      </p>
      <h3 id="S6-2"><a className="dfd" href="#dfn-searchEngine">検索エンジン</a></h3>
      <p>
      <a className="dfd" href="#dfn-excavate">発掘</a>の大黒柱で全ての基本。
      これを使いこなして初めてスタートラインに立ったことになる。
      最低限の使い方はシンプルだが、本が一冊書けるほど奥は深い。
      そして、実際にたくさんのテキストが存在する。
      </p>
      <h4 id="S6-2-1">基本の使い方</h4>
      <p>
      文字列を入力すると、<a className="dfd" href="#dfn-searchResult">検索結果</a>として入力文字列を含む<a className="dfd" href="#dfn-webPage">Webページ</a>が表示される。
      ただし、<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>があらかじめ情報を<a className="dfd" href="#dfn-compile">収集</a>した<a className="dfd" href="#dfn-webPage">ページ</a>しか、<a className="dfd" href="#dfn-searchResult">検索結果</a>には表示されない。
      文字列を元に<a className="dfd" href="#dfn-search">検索</a>を行う<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>は、最低限これだけの機能は持っている。
      <a className="dfd" href="#dfn-searchEngine">検索エンジン</a>によっては、文字列をいくつかに分割し『<a className="dfd" href="#dfn-refineSearch">絞り込み検索</a>』として扱う場合がある。
      また、“その<a className="dfd" href="#dfn-webPage">ページ</a>へのリンクに入力文字列が含まれる”<a className="dfd" href="#dfn-webPage">ページ</a>が表示されることもある。
      <em className="exam">出雲大社について知りたいとき　『<kbd>出雲大社</kbd>』</em>
      </p><p className="sup">
      現在では<a className="dfd" href="#dfn-worldWideWeb">Web</a>利用者の97%が利用するという噂の<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>。
      基本は最初の一行に集約されるのですが、それだけの知識で必要な情報を引き出すのは難しいかもしれません。
      次の段からは、これを使いこなすための情報が並んでいます。
      </p>
      <h4 id="S6-2-2">詳しい<a className="dfd" href="#dfn-search">検索</a>方法</h4>
      <p>
      <a className="dfd" href="#dfn-searchWord">検索語句</a>に演算子を加えることによって、通常とは違う方法で<a className="dfd" href="#dfn-search">検索</a>を行うことが出来る場合がある。
      また、後述する<a className="dfd" href="#dfn-searchOption">検索オプション</a>によってこれを達成している<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>もある。
      </p><p>
      『<a className="dfd" href="#dfn-refineSearch">絞り込み検索</a>』二つ以上の文字列を入力し、その全てが含まれる<a className="dfd" href="#dfn-webPage">ページ</a>を<a className="dfd" href="#dfn-search">検索</a>する。
      スペースを目印にその前後を別の文字列として扱う場合が多い。
      <em className="exam">大神神社に供えられている卵について知りたいとき　『<kbd>大神神社 卵</kbd>』</em>
      </p><p>
      『マイナス<a className="dfd" href="#dfn-search">検索</a>』指定した文字列が含まれる<a className="dfd" href="#dfn-webPage">ページ</a>を<a className="dfd" href="#dfn-searchResult">検索結果</a>から除外する。
      マイナスを目印に直後の文字列を対象とする場合が多い。
      <em className="exam">『気多大社』の結果から公式<a className="dfd" href="#dfn-webPage">ページ</a>を除きたいとき　『<kbd>気多大社 -www.keta.jp</kbd>』</em>
      </p><p>
      『フレーズ<a className="dfd" href="#dfn-search">検索</a>』指定した文字列を、ひとつながりの文字列であると明示する。
      二つのダブルクオーテーションで囲まれた文字列を対象とする場合が多い。
      <em className="exam">『気多本宮』を気多と本宮の二語に分けられたくないとき　『<kbd>"気多本宮"</kbd>』</em>
      </p><p className="sup">
      知っていないと困る三つの拡張機能です。
      基本的にはすべて<a className="dfd" href="#dfn-refineSearch">絞り込み検索</a>のために使用される機能で、<a className="dfd" href="#dfn-searchResult">検索結果</a>が足りない場合はどうしようもありません。
      ただ、そんな場合は別の単語を試してみるという手もあります。
      </p>
      <h4 id="S6-2-3"><a className="dfd" href="#dfn-searchOption">検索オプション</a></h4>
      <p>
      <a className="dfd" href="#dfn-search">検索</a>前に追加設定を選択することによって、通常とは違う方法で<a className="dfd" href="#dfn-search">検索</a>を行うことが出来る場合がある。
      また、前述した演算子によってこれを達成している<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>もある。
      </p><p>
      『言語設定』特定の言語で記述された<a className="dfd" href="#dfn-webPage">ページ</a>を<a className="dfd" href="#dfn-search">検索</a>する。<br />
      『日付設定』特定の時間内に<a className="dfd" href="#dfn-compile">収集</a>された<a className="dfd" href="#dfn-webPage">ページ</a>を<a className="dfd" href="#dfn-search">検索</a>する。<br />
      『<a className="dfd" href="#dfn-domain">ドメイン</a>内<a className="dfd" href="#dfn-search">検索</a>』特定の<a className="dfd" href="#dfn-domain">ドメイン</a>内に限定して<a className="dfd" href="#dfn-search">検索</a>する。<br />
      『※セーフサーチ』成人向けコンテンツを含む<a className="dfd" href="#dfn-webPage">ページ</a>を<a className="dfd" href="#dfn-searchResult">検索結果</a>から除外する。<br />
      </p><p className="sup">
      使いこなせると便利な三つの拡張機能です。<br />
      ※セーフサーチはデフォルトでオンになっている場合が多いのですが、関係のない<a className="dfd" href="#dfn-webPage">ページ</a>まで除外しがちなので、事情がなければオフにしてください。
      </p>
      <h4 id="S6-2-4"><a className="dfd" href="#dfn-search">検索</a>種別</h4>
      <p>
      通常<a className="dfd" href="#dfn-worldWideWeb">Web</a> <a className="dfd" href="#dfn-search">検索</a>では<a className="dfd" href="#dfn-searchResult">検索結果</a>として<a className="dfd" href="#dfn-webPage">Webページ</a>が表示されるが、画像など他の情報を<a className="dfd" href="#dfn-searchResult">検索結果</a>に指定できる場合がある。
      多くの場合、<a className="dfd" href="#dfn-search">検索</a> <a className="dfd" href="#dfn-webPage">ページ</a>に設置されたリンクから使用できる。
      </p><p>
      『<a className="dfd" href="#dfn-imageSearch">画像検索</a>』文字列を入力すると、<a className="dfd" href="#dfn-searchResult">検索結果</a>として画像を一覧表示する。
      <a className="dfd" href="#dfn-webPage">Webページ</a>で画像に付けられた題名や見出し、隣接する文章、もしくはリンク元の情報をもとに<a className="dfd" href="#dfn-search">検索</a>している。
      </p><p>
      『<a className="dfd" href="#dfn-videoSearch">動画検索</a>』文字列を入力すると、<a className="dfd" href="#dfn-searchResult">検索結果</a>として動画を一覧表示する。
      YouTubeなどの動画ページ内を<a className="dfd" href="#dfn-search">検索</a>し、重要な部分に<a className="dfd" href="#dfn-searchWord">検索語句</a>が存在する順番に並べられる。
      </p><p>
      その他にも地図<a className="dfd" href="#dfn-search">検索</a>やニュース<a className="dfd" href="#dfn-search">検索</a>、ブログ<a className="dfd" href="#dfn-search">検索</a>などが存在するが、上記の<a className="dfd" href="#dfn-search">検索</a>とほとんど同じ解説となるので省略する。
      </p><p className="sup">
      さまざまな<a className="dfd" href="#dfn-search">検索</a>対象を切り替えることが出来ます。
      しかし、画像を探すのならば<a className="dfd" href="#dfn-imageSearch">画像検索</a>などとは考えず、場合によって都合の良い<a className="dfd" href="#dfn-search">検索</a>を利用してください。
      </p>
      <h4 id="S6-2-5"><a className="dfd" href="#dfn-searchEngine">検索エンジン</a>の選択</h4>
      <p>
      <a className="dfd" href="#dfn-searchEngine">検索エンジン</a>には、ロボット型とディレクトリ型という二つのタイプがあるが、現在はほとんどロボット型が主体となっている。
      二つの違いは<a className="dfd" href="#dfn-webPage">Webページ</a> <a className="dfd" href="#dfn-compile">収集</a>の方法で、ロボット型はプログラムが自動的に<a className="dfd" href="#dfn-compile">収集</a>しているが、ディレクトリ型は人間が手作業で行っている。
      </p><p>
      <a className="dfd" href="#dfn-worldWideWeb">Web</a>には様々な<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>が存在するが、当然それぞれ特徴が異なる。
      ここではそのうちの三つを紹介する。
      </p><p>
      『<a className="dfd" href="#dfn-google">Google</a>』世界の<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>戦争を制した王者。ロボット型。
      これ一つでほとんど全ての<a className="dfd" href="#dfn-webPage">ページ</a>をカバーすることが出来るので、他のエンジンを使う必要性は無いのかもしれない。
      </p><p>
      『<a className="dfd" href="#dfn-yahoo">Yahoo!</a>』日本でもっとも使われている<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>。
      昔はディレクトリ型であったが、現在はロボット型が主体。
      </p><p>
      『Bing』マイクロソフト社製<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>。旧Liveサーチ。ロボット型。
      IEを使っていると猛烈にプッシュしてくる。シェアはまだ小さい。
      </p>
      <h3 id="S6-3"><a className="dfd" href="#dfn-internetArchive">Internet Archive</a> <a className="dfd" href="#dfn-waybackMachine">Wayback Machine</a></h3>
      <p>
      <a className="dfd" href="#dfn-excavate">発掘</a>において現在もっとも重要なサービス。
      『<a className="dfd" href="#dfn-internetArchive">Internet Archive</a>』は研究者等のために<a className="dfd" href="#dfn-webPage">Webページ</a>の図書館を作らんとする団体。
      1996年から<a className="dfd" href="#dfn-webPage">Webページ</a>のコピーを<a className="dfd" href="#dfn-compile">収集</a>し続けている。
      そして『<a className="dfd" href="#dfn-waybackMachine">Wayback Machine</a>』は、その膨大なデータを元に<a className="dfd" href="#dfn-URL">URL</a>から<a className="dfd" href="#dfn-compile">収集</a>時点の<a className="dfd" href="#dfn-webPage">Webページ</a>等を見ることができるもの。
      これを使わずして諦めることはできない。
      </p>
      <h4 id="S6-3-1">基本の使い方</h4>
      <p>
      <a className="dfd" href="#dfn-URL">URL</a>を入力すると、<a className="dfd" href="#dfn-searchResult">検索結果</a>として過去、<a className="dfd" href="#dfn-compile">収集</a>時点でそこに存在した<a className="dfd" href="#dfn-webPage">Webページ</a>が日付で一覧表示される。
      このとき<a className="dfd" href="#dfn-searchResult">検索結果</a>件数は、<a className="dfd" href="#dfn-internetArchive">Internet Archive</a> が<a className="dfd" href="#dfn-compile">収集</a>を行った回数である。
      また、前回<a className="dfd" href="#dfn-compile">収集</a>と比較して<a className="dfd" href="#dfn-webPage">Webページ</a>が変化していれば、日付の後にアスタリスク(*)が表示される。
      <em className="exam">過去の米<a className="dfd" href="#dfn-google">Google</a> <a className="dfd" href="#dfn-topPage">トップページ</a>　『<kbd>http://google.com</kbd>』</em>
      </p><p className="sup">
      <a className="dfd" href="#dfn-excavate">発掘</a>をするのならば使わないわけにはいかないサービス。
      簡単な<a className="dfd" href="#dfn-excavate">発掘</a>の場合<a className="dfd" href="#dfn-URL">URL</a>をここに放り込むだけで終わる場合もあります。
      無料なのでありがたく使わせてもらいましょう。
      ちなみに寄付も受け付けているようです。
      </p>
      <h4 id="S6-3-2"><a className="dfd" href="#dfn-searchResult">検索結果</a>が0件の場合</h4>
      <p>
      <a className="dfd" href="#dfn-internetArchive">Internet Archive</a> があらかじめ情報を<a className="dfd" href="#dfn-compile">収集</a>していないか、情報がまだ反映されていないかのどちらか。
      現在 <a className="dfd" href="#dfn-internetArchive">Internet Archive</a> が情報を<a className="dfd" href="#dfn-compile">収集</a>してから <a className="dfd" href="#dfn-waybackMachine">Wayback Machine</a> にそれが反映されるまでには半年以上の時間が必要である。
      </p><p>
      どちらの場合でも『Click here to search for all pages on <var><a className="dfd" href="#dfn-domain">ドメイン</a>名</var>』という項目が表示され、選択すると入力した<a className="dfd" href="#dfn-URL">URL</a>と<a className="dfd" href="#dfn-domain">ドメイン</a>部分が同じで、すでに反映されている<a className="dfd" href="#dfn-webPage">ページ</a>が一覧表示される。
      </p><p>
      もちろん、その結果も0件だということもある。
      </p>
      <h4 id="S6-3-3"><a className="dfd" href="#dfn-searchResult">検索結果</a>の使い方</h4>
      <p>
      検索結果の日付を選択すると、検索したURLにその時点で存在したWebページ（などのファイル）を見ることが出来る。
      ページ内のリンクは全てWayback Machine内へのものに置き換えられており、選択すると存在する中で最も収集時点の近い<a className="dfd" href="#dfn-archive">アーカイブ</a>が呼び出される。
      </p><p className="sup">
      リンクの置き換えによって、
      </p>
      <h2 id="S7"><a className="dfd" href="#dfn-excavate">発掘</a>“ケースバイケース”</h2>
      <p>『<a href="#S7-" title="Webリソース発掘法 発掘ケースバイケースの使い方">発掘ケースバイケースの使い方</a>』はこちら。</p>
      <h3 id="S7-1">こんなときどうすればいいの？</h3>
      <p>まだまだ作成中ですよ。欲しい項目などありましたら『AntennaJane掲示板』へどうぞ。</p>
      <ul>
      <li><a href="#S7-2" title="Webリソース発掘法 目標設定に関する問題">何を探していいかがわかりません。</a></li>
      <li><a href="#S7-3" title="Webリソース発掘法 手がかりに関する問題">発掘の手がかりが足りません。</a></li>
      <li><a href="#S7-4" title="Webリソース発掘法 手段に関する問題">どんな方法で探せばいいのでしょうか。</a></li>
      <li><a href="#S7-5" title="Webリソース発掘法 効率に関する問題">発掘を早く終わらせたいです。</a></li>
      <li><a href="#S7-6" title="Webリソース発掘法 その他の問題">その他</a></li>
      </ul>
      <h3 id="S7-2">目標設定に関する問題</h3>
      <ul>
      <li>どんなものが探せますか。</li>
      <li>特に探すものがなくて。</li>
      </ul>
      <h3 id="S7-3">手がかりに関する問題</h3>
      <ul>
      <li>どんなものが手がかりになりますか。</li>
      <li>目標のことがほとんどわかりません。</li>
      <li>在りし日の姿が記憶にあります。</li>
      <li>目標の一部が手元にあります。</li>
      <li>目標については完全にわかっています。</li>
      </ul>
      <h3 id="S7-4">手段に関する問題</h3>
      <ul>
      <li>どんな手段がありますか。</li>
      </ul>
      <h3 id="S7-5">効率に関する問題</h3>
      <ul>
      <li>発掘のコツを教えてください。</li>
      </ul>
      <h3 id="S7-6">その他の問題</h3>
      <ul>
      <li>発掘って何ですか。</li>
      <li>何を言ってるんだかさっぱりです。</li>
      </ul>
      <h3 id="S7-"><a href="#S7" className="lnk" title="Webリソース発掘法 発掘“ケースバイケース”">発掘“ケースバイケース”</a>の使い方</h3>
      <p>
      <a href="#S7" title="Webリソース発掘法 発掘“ケースバイケース”">発掘“ケースバイケース”</a>は、<a className="dfd" href="#dfn-excavate">発掘</a>中に何か問題が発生したときに使ってください。
      </p><p>
      『<a href="#S7-1" title="Webリソース発掘法 こんなときどうすればいいの？">こんなときどうすればいいの？</a>』から順番に当てはまる項目を選択していけば、問題の解決法が書いてある部分に行きつく、という仕組みです。
      </p>
      <h2 id="S8">実際にやってみた</h2>
      <p>まだよ。</p>
      <h2 id="S9">その他あれこれ</h2>
      <p>他の章に属しない話題はここで取り扱います。</p>
      {/*過去の試み（ニコの発掘動画など）、Web墓守、発掘と検索の違い*/}
      <h3 id="S9-1">発掘の歴史</h3>
      <p>まだよ。</p>
      <h3 id="S9-2">忙しい人のための<a className="dfd" href="#dfn-excavation">Webリソース発掘法</a></h3>
      <p>
      <a className="dfd" href="#dfn-excavate">発掘</a>ってのは昔の<a className="dfd" href="#dfn-webPage">ページ</a>を見つけ出すことよ。<br />
      やりたいんなら『<a href="#S7" title="Webリソース発掘法 発掘“ケースバイケース”">発掘“ケースバイケース”</a>』に行ってみ。<br />
      雰囲気だけってことなら『<a href="#S8" title="Webリソース発掘法 実際にやってみた">実際にやってみた</a>』で一つ二つ見ればいいよ。<br />
      以上！<br />
      </p>
      <h2 id="S10">用語集</h2>
      <p>このページに出てくるわかりにくい単語をまとめてみました。五十音順です。</p>
      <dl className="ndl">
      <dt><dfn id="dfn-archive">アーカイブ</dfn> [あーかいぶ]</dt>
      <dd>ここでは、<a className="dfd" href="#dfn-worldWideWeb">Web</a>の一部を<a className="dfd" href="#dfn-compile">収集</a>して<a className="dfd" href="#dfn-secure">保管</a>してある場所。<a className="dfd" href="#dfn-compile">収集</a>時点の<a className="dfd" href="#dfn-webPage">Webページ</a>を見ることができる。</dd>
      <dd>参照：<a href="#S6-3" title="Webリソース発掘法 Internet Archive Wayback Machine">Internet Archive Wayback Machine</a></dd>
      <dt><dfn id="dfn-relic">遺物</dfn> [いぶつ]</dt>
      <dd>ここでは、<a className="dfd" href="#dfn-worldWideWeb">Web</a>に散らばっているオリジナルデータのコピー。</dd>
      <dd>参照：<a href="#S3-3" title="Webリソース発掘法 消しても消えない遺物たち">消しても消えない遺物たち</a></dd>
      <dt><dfn id="dfn-internet">インターネット</dfn> [いんたーねっと]</dt>
      <dd>インターネット・プロトコル(IP)というルールに従って相互接続されたコンピュータネットワーク。</dd>
      <dt><dfn id="dfn-internetArchive">Internet Archive</dfn> [いんたーねっと-あーかいぶ] <a title="Internet Archive" href="http://www.archive.org/">http://www.archive.org/</a></dt>
      <dd>研究者等のために<a className="dfd" href="#dfn-webPage">Webページ</a>の図書館を作らんとする団体。</dd>
      <dd>参照：<a href="#S6-3" title="Webリソース発掘法 Internet Archive Wayback Machine">Internet Archive Wayback Machine</a></dd>
      <dt><dfn id="dfn-waybackMachine">Wayback Machine</dfn> [うぇいばっく-ましーん] <a title="Wayback Machine" href="http://www.archive.org/web/web.php">http://www.archive.org/web/web.php</a></dt>
      <dd><a className="dfd" href="#dfn-internetArchive">Internet Archive</a>の<a className="dfd" href="#dfn-compile">収集</a>した情報をもとに過去の<a className="dfd" href="#dfn-webPage">Webページ</a>を見ることができるサービス。</dd>
      <dd>参照：<a href="#S6-3" title="Webリソース発掘法 Internet Archive Wayback Machine">Internet Archive Wayback Machine</a></dd>
      <dt><span className="dfn">Web</span> [うぇぶ]</dt><dd>= <a className="dfd" href="#dfn-worldWideWeb">World Wide Web</a></dd>
      <dt><dfn id="dfn-webSite">Webサイト</dfn> [うぇぶ-さいと] (さいと)</dt>
      <dd>ひとまとまりに公開されている<a className="dfd" href="#dfn-webPage">Webページ</a>の集合体。</dd>
      <dt><dfn id="dfn-webPage">Webページ</dfn> [うぇぶ-ぺーじ] (ページ)</dt>
      <dd><a className="dfd" href="#dfn-worldWideWeb">Web</a>に属する個々の文書。</dd>
      <dt><dfn id="dfn-excavation">Webリソース発掘法</dfn> [うぇぶ-りそーす-はっくつ-ほう] (発掘法)</dt>
      <dd><a className="dfd" href="#dfn-worldWideWeb">Web</a>から<a className="dfd" href="#dfn-relic">遺物</a>を見つけだすことによって必要な情報を得る方法。</dd>
      <dd>参照：<a href="#S3" title="Webリソース発掘法 『発掘』とは、どういうことか？">『発掘』とは、どういうことか？</a></dd>
      <dt><dfn id="dfn-secure">確保</dfn> [かくほ] (保管)</dt>
      <dd>ここでは、情報を自分の管理下に置いて自然消滅を防ぐこと。</dd>
      <dt><dfn id="dfn-imageboard">画像掲示板</dfn> [がぞう-けいじばん]</dt>
      <dd>画像を張り付けることができる<a className="dfd" href="#dfn-bulletinBoardSystem">掲示板</a>。</dd>
      <dt><dfn id="dfn-imageSearch">画像検索</dfn> [がぞう-けんさく]</dt>
      <dd>ここでは、<a className="dfd" href="#dfn-worldWideWeb">Web</a>に存在する画像を<a className="dfd" href="#dfn-search">検索</a>すること。</dd>
      <dd>参照：<a href="#S6-2-4" title="Webリソース発掘法 検索種別">検索種別</a></dd>
      <dt><dfn id="dfn-google">Google</dfn> [ぐーぐる] <a title="Google" href="http://www.google.com/">http://www.google.com/</a></dt>
      <dd>1998年設立の企業。また、そこの運営する<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>。</dd>
      <dd>参照：<a href="#S6-2-5" title="Webリソース発掘法 検索エンジンの選択">検索エンジンの選択</a></dd>
      <dt><dfn id="dfn-bulletinBoardSystem">掲示板</dfn> [けいじばん]</dt>
      <dd>コンピュータネットワーク上で記事の書き込み、閲覧、コメントの書き込みを行えるシステム。</dd>
      <dt><dfn id="dfn-search">検索</dfn> [けんさく]</dt>
      <dd>情報の集合（ここでは主に<a className="dfd" href="#dfn-worldWideWeb">Web</a>）から目的の情報を探し出すこと。</dd>
      <dd>参照：<a href="#S6-2" title="Webリソース発掘法 検索エンジン">検索エンジン</a></dd>
      <dt><dfn id="dfn-searchEngine">検索エンジン</dfn> [けんさく-えんじん]</dt>
      <dd>文字列を元に<a className="dfd" href="#dfn-internet">インターネット</a>から目的の情報を探し出すプログラム。</dd>
      <dd>参照：<a href="#S6-2" title="Webリソース発掘法 検索エンジン">検索エンジン</a></dd>
      <dt><dfn id="dfn-searchOption">検索オプション</dfn> [けんさく-おぷしょん]</dt>
      <dd><a className="dfd" href="#dfn-search">検索</a>前に選択する追加設定。特殊な条件で<a className="dfd" href="#dfn-search">検索</a>を行うことが出来る。</dd>
      <dd>参照：<a href="#S6-2-3" title="Webリソース発掘法 検索オプション">検索オプション</a></dd>
      <dt><dfn id="dfn-searchResult">検索結果</dfn> [けんさく-けっか]</dt>
      <dd><a className="dfd" href="#dfn-search">検索</a>の結果、見つけ出された目的の情報候補。</dd>
      <dt><dfn id="dfn-searchWord">検索語句</dfn> [けんさく-ごく]</dt>
      <dd><a className="dfd" href="#dfn-search">検索</a>に使用する文字列の中で実際に探し出したい内容を示す語句。</dd>
      <dt><span className="dfn">サイト</span> [さいと]</dt><dd>= <a className="dfd" href="#dfn-webSite">Webサイト</a></dd>
      <dt><dfn id="dfn-refineSearch">絞り込み検索</dfn> [しぼりこみ-けんさく]</dt>
      <dd><a className="dfd" href="#dfn-searchWord">検索語句</a>を追加して<a className="dfd" href="#dfn-searchResult">検索結果</a>件数を減らすこと。</dd>
      <dt><dfn id="dfn-compile">収集</dfn> [しゅうしゅう]</dt>
      <dd>ここでは、情報を<a className="dfd" href="#dfn-secure">確保</a>し、利用できる状態に整理すること。</dd>
      <dt><span className="dfn">WWW</span> [だぶりゅー-だぶりゅー-だぶりゅー]</dt><dd>= <a className="dfd" href="#dfn-worldWideWeb">World Wide Web</a></dd>
      <dt><dfn id="dfn-videoSearch">動画検索</dfn> [どうが-けんさく]</dt>
      <dd>ここでは、<a className="dfd" href="#dfn-worldWideWeb">Web</a>に存在する動画を<a className="dfd" href="#dfn-search">検索</a>すること。</dd>
      <dd>参照：<a href="#S6-2-4" title="Webリソース発掘法 検索種別">検索種別</a></dd>
      <dt><dfn id="dfn-topPage">トップページ</dfn> [とっぷ-ぺーじ]</dt>
      <dd><a className="dfd" href="#dfn-webSite">Webサイト</a>の入り口にあたる<a className="dfd" href="#dfn-webPage">ページ</a>。</dd>
      <dt><dfn id="dfn-domain">ドメイン</dfn> [どめいん]</dt>
      <dd><a className="dfd" href="#dfn-internet">インターネット</a>上の住所のようなもので、コンピュータなどを識別するための名前。</dd>
      <dt><dfn id="dfn-excavate">発掘</dfn> [はっくつ]</dt>
      <dd><a className="dfd" href="#dfn-excavation">Webリソース発掘法</a>を利用して情報を手に入れること。</dd>
      <dd>参照：<a href="#S3" title="Webリソース発掘法 『発掘』とは、どういうことか？">『発掘』とは、どういうことか？</a></dd>
      <dt><span className="dfn">発掘法</span> [はっくつ-ほう]</dt><dd>= <a className="dfd" href="#dfn-excavation">Webリソース発掘法</a></dd>
      <dt><span className="dfn">ページ</span> [ぺーじ]</dt><dd>= <a className="dfd" href="#dfn-webPage">Webページ</a></dd>
      <dt><span className="dfn">保管</span> [ほかん]</dt><dd>= <a className="dfd" href="#dfn-secure">確保</a></dd>
      <dt><dfn id="dfn-summarySite">まとめサイト</dfn> [まとめ-さいと]</dt>
      <dd>特定の情報・作品を<a className="dfd" href="#dfn-compile">収集</a>した<a className="dfd" href="#dfn-webSite">Webサイト</a>。</dd>
      <dt><dfn id="dfn-mirrorSite">ミラーサイト</dfn> [みらー-さいと]</dt>
      <dd>アクセス分散や削除対策のために作られる、ある<a className="dfd" href="#dfn-webSite">Webサイト</a>と全く同じ内容をもつ<a className="dfd" href="#dfn-webSite">サイト</a>のこと。</dd>
      <dt><dfn id="dfn-yahoo">Yahoo!</dfn> [やふー] <a title="Yahoo!" href="http://www.yahoo.com/">http://www.yahoo.com/</a></dt>
      <dd>個人<a className="dfd" href="#dfn-webSite">サイト</a>から始まった<a className="dfd" href="#dfn-internet">インターネット</a>関連サービス企業。また、そこの運営する<a className="dfd" href="#dfn-searchEngine">検索エンジン</a>。</dd>
      <dd>参照：<a href="#S6-2-5" title="Webリソース発掘法 検索エンジンの選択">検索エンジンの選択</a></dd>
      <dt><dfn id="dfn-URL">URL</dfn> [ゆー-あーる-える]</dt>
      <dd><a className="dfd" href="#dfn-internet">インターネット</a>上でデータの位置を示す文字列。Uniform Resource Locator。</dd>
      <dt><dfn id="dfn-capacity">容量</dfn> [ようりょう]</dt>
      <dd>ここでは、記憶媒体に保存できる情報量のこと。</dd>
      <dt><dfn id="dfn-worldWideWeb">World Wide Web</dfn> [わーるど-わいど-うぇぶ] (Web,WWW)</dt>
      <dd><a className="dfd" href="#dfn-internet">インターネット</a>上でハイパーテキストを利用し、文書同士を相互に参照可能としたシステム。</dd>
      </dl>
      <address>
      AntennaJane　2009-09-09 作成　2009-12-31 更新
      </address>
    </div>
  );
}
