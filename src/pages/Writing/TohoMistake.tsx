import React from 'react';
import {useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/writing/toho-mistake";

export function BuildPage(): Page {
  return {title: "勘違いしやすい東方Project", path: current, parent: Index.BuildPage()};
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
    <div className="Writing-TohoMistake">
      <p>東方についての間違い勘違いを纏めています。『よくある』というのは看板に偽り有りなので、そういうのにだけ興味のある方は混乱度の高い項目だけ選んでご覧下さい。</p>
      <h2>本文の読み方</h2>
      <h3>勘違い・間違いの内容</h3>
      <p style={{marginTop: "0em"}}>ここで勘違い・間違いの内容を挙げます。つまり↑の一文は今後間違ったことを書いていくわけですね。内容に違和感がなければ黄色信号です。</p>
      <dl><dt className="five">重要度</dt><dd className="one">★☆★☆★</dd><dt className="five">混乱度</dt><dd className="one">★☆★☆★</dd><dt className="five">乱闘度</dt><dd className="one">★☆★☆★</dd></dl>
      <p>三つの度合いについて五段階で勝手に評価してみました。それぞれ、重要度-どれだけ重要な内容か 混乱度-どれだけ間違いやすいか 乱闘度-どれだけ間違ったときの反響が大きいか　となっています。</p>
      <p>勘違い・間違いの解説</p>
      <p style={{marginTop: "-1em"}}>詳しい内容をここで解説しています。出来る限り情報源を確認するよう努めていますが、身元不明の情報も数多く含まれているのも事実です。軽い気持ちで友人に蘊蓄など傾けると大変なことになる可能性があります。また、間違いがありましたら掲示板にご一報頂ければ幸いです。</p>
      <h2>東方原作について</h2>
      <h3>東方原作はエロゲか萌えアニメである。</h3>
      <dl><dt className="five">重要度</dt><dd className="five">★★★★★</dd><dt className="one">混乱度</dt><dd className="one">☆☆☆☆★</dd><dt className="five">乱闘度</dt><dd className="five">★★★★★</dd></dl>
      <p>『東方はエロゲか萌えアニメだと思っている』『東方は音楽集団か何かだと思っている』……らしい。実際にそんな間違いに出会う可能性はかなり低いですが、発言してしまうとかなりの騒ぎになるかもしれません。ちなみに、シューティングゲームだと言っておけば間違いないでしょう。</p>
      <h3>東方のストーリーは萌え 〃 した緩い感じのものである。</h3>
      <dl><dt className="four">重要度</dt><dd className="four">☆★★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="five">乱闘度</dt><dd className="five">★★★★★</dd></dl>
      <p>一般的には『かなり殺伐としている』などと言われます。ただし殺伐としているのは設定だけで本編はそれほど殺伐ではないというのも事実です（あくまで弾幕ごっこだから）。もちろん、それでも『下手をすると大けがをするかもしれない程度の殺伐』ではあります。</p>
      <h3>東方の曲には元々歌詞がある。</h3>
      <dl><dt className="four">重要度</dt><dd className="four">☆★★★★</dd><dt className="one">混乱度</dt><dd className="one">☆☆☆☆★</dd><dt className="four">乱闘度</dt><dd className="four">☆★★★★</dd></dl>
      <p>ほとんどのものにはないよ！（あるもの→童祭 ～ Innocent Treasures）　こういう間違いをしてしまうと、原作をプレイしていないのがバレバレですね。</p>
      <h3>上海アリス幻樂団は複数人によるグループである。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>製作元である『上海アリス幻樂団』は、ZUN氏一人による同人サークルです。東方作品も主要な部分は殆ど彼一人の手によって手がけられています。</p>
      <h3>東方はシリーズではない。</h3>
      <dl><dt className="one">重要度</dt><dd className="one">☆☆☆☆★</dd><dt className="five">混乱度</dt><dd className="five">★★★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>かつて、神主による『シリーズではない』発言が存在したためそう言われていました。<q>東方ってシリーズものだと思われるというか，勘違いされることが多いんですけど，「東方はシリーズ」とは一度も言ってないんですよ。「プロジェクト第何弾」とは言ってますけど，それでも「○○2」だ「3」だってやりかたはしてない。まあ，見る人が見ればシリーズなのかもしれませんけどね。ただ，僕の中ではシリーズではない。前回の作品を好きだった人が，次も好きになるとは限らないというのが，東方とシリーズものとの大きな違いと考えています。<cite>「東方」制作者インタビュー「シューティングの方法論」第2回 - ZONE T</cite></q><del>ただし、マニュアルには東方シリーズと書いてあるヶ所が存在したり、それほど厳密なルールではないようです。</del>しかし、現在はその発言について理由を述べた後で『シリーズです』と発言しているので東方はシリーズです。<q>司会 それでは少し話題を変えさせていただきます。ZUNさんは以前東方はシリーズではないと発言されていますが、その真意をお聞かせいただけますか？ ZUN 昔からシリーズ化って言うとイメージが良くなくって、金儲けのイメージが定着していたから、それを避けたっていうのはあります。でも一応理由もありますよ？基本的に（東方は）世界観だけ持ってきていて、システムからストーリーからキャラクターから全部ばらばらなんですよ。だからわざわざ２とかにする必要がないってのと、ゲーム以外のメディアミックス作品、例えば小説や漫画まで一つの作品として扱うとしたら、シリーズにしにくいじゃないですか。あの作品は第何代なのかって（笑）だからあえて「シリーズじゃない」って言って言い方をしています。･･･まあ、シリーズですけどね。（会場爆笑）<cite>第38回一橋祭シンポジウム企画の講演会「幻想伝承 ～想像の継承と終着～」</cite></q><a href="http://www.4gamer.net/specials/shanghai_alice/zone_t.shtml">参考ページ【シリーズではない】</a> <a href="http://megalodon.jp/2008-0516-1151-10/gensou.credits99.com/after.html">ウェブ魚拓【シリーズです】</a></p>
      <h2>東方作品について</h2>
      <h3>東方は始めからシューティングゲームだった。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>旧作第一作となる東方靈異伝ではまだ東方はシューティングゲームではなくブロック崩しでした。ただし、一応『一画面アクションシューティング（パズル要素あり）』と名乗っているので、シューティングゲームだと言い張ることは可能です。</p>
      <h3>対戦型シューティングの形式を取る作品は、花映塚が最初である。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>旧作第三作となる東方夢時空が対戦型シューティングなので、これが最初です。</p>
      <h2>音楽について</h2>
      <h3>竹取飛翔は八意永琳のテーマである。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>曲の盛り上がるところに『えーりん えーりん たすけて えーりん』の空耳があることから発生した勘違いです。輝夜が永琳に助けを求めているという『ニートてるよ』のイメージにも繋がる空耳なのですが、実際の本編中では永琳は助けに来ないどころか、永琳のルートで輝夜が助けに来ます（永琳が力をセーブしている為でしょう）。</p>
      <h2>世界設定について</h2>
      <h3>幻想郷には男が存在しない。</h3>
      <dl><dt className="four">重要度</dt><dd className="four">☆★★★★</dd><dt className="one">混乱度</dt><dd className="one">☆☆☆☆★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>存在します。特に有名なところでは東方香霖堂に登場する森近霖之助が居ます。他にも本編には雲山などが登場していますし、東方求聞史紀には情報提供者として筍取りの翁などが登場します。ただし、幻想郷の男女比については未だはっきりしたことは言えません。本編にあまり男が登場しない理由としてZUN氏は、遊びである弾幕ごっこを少女以外が真剣にやるのは不自然に見える為と語っています。</p>
      <h3>幻想郷では外のスポーツは行われていない。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="four">混乱度</dt><dd className="four">☆★★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>東方求聞史紀によると外来人の知識に由来する遊びが流行になることはよくあるらしく、サッカーが流行ったこともあったようです。</p>
      <h3>スペルカードシステムは、東方作品全てで採用されている。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>スペルカードルールの採用は『紅霧異変（東方紅魔郷）』以降です。導入のきっかけは『吸血鬼異変』と呼ばれる吸血鬼と幻想郷妖怪の戦争。気力を失っていた為に多くの幻想郷妖怪が吸血鬼に降参してしまったのです。妖怪の気力がないのは人間を襲えなくなった為。そこで、妖怪たちが異変を起こしやすくなるよう制定されたのがスペルカードルールです。</p>
      <h3>幻想郷住人は鳥居に通じる大階段を登って博麗神社に辿り着く。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>博麗神社の正面には大鳥居があり、その先には大階段が存在します。が、普段使われるものではありません。神社は幻想郷東端、博麗大結界上にあり、幻想郷と外の世界にまたがって存在します。さらに神社は東向きに立っているために、階段を下りていった先に存在するのは外の世界なのです。幻想郷住人が博麗神社に向かうときには、神社裏手の獣道を利用します。</p>
      <h3>パチュリーが暮らしているのはヴワル魔法図書館である。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="five">混乱度</dt><dd className="five">★★★★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>紅魔郷の曲説明に『ヴワルは固有名詞である』とあり、どちらとも取れる状態が続いていましたが、白三月精の誤植訂正で『ヴワル図書館』が修正されたことから『紅魔館内の図書館はヴワル魔法図書館と言う名前ではない』と考えられます。考えられますが、何処の図書館かわかりにくいから修正したのだという説もあります。ヴワルの名前は曲名を語るとき以外は使わないのが賢明でしょう。</p>
      <h3>三途の河は川なので泳ぐことが出来る。</h3>
      <dl><dt className="one">重要度</dt><dd className="one">☆☆☆☆★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>できません。東方求聞史紀には何故か身体が沈んでしまうので泳ぐことが出来ないと書いてあります。川底を歩いていくことが出来るのかは謎です。</p>
      <h2>キャラ設定について（全般）</h2>
      <h3>東方のキャラクターは基本百合 〃 。</h3>
      <dl><dt className="four">重要度</dt><dd className="four">☆★★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="four">乱闘度</dt><dd className="four">☆★★★★</dd></dl>
      <p>いやいや。彼女らはあくまでノーマルですよ（多分）。登場するのが女の子ばかりなので、二次創作でカップリングしたとき、必然的に女×女になってしまうだけです。</p>
      <h3>旧作では魔理沙は魔梨沙という漢字だった。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>封魔録の会話で『魔梨沙』と表記されていたことから。しかし、封魔録付属テキストには『魔理沙』と書かれている上、『梨』と『理』の文字コードが隣同士である為、ただの誤植である可能性が高いです。ただし、それを知った上であえて旧作側を『魔梨沙』と呼ぶ場合も存在します。</p>
      <h3>魔理沙はフラグ入れ食い。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="four">混乱度</dt><dd className="four">☆★★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>かなり悩ましい設定ではあります。確かにおまけtxt等には“何処へ行っても迷惑がられる”だの“余り好かれてはいない”だの書いてあるのですが、会話を見ていると好かれているように見えますし、“一緒にいると楽しい”と言う記述も存在するようです。</p>
      <h3>魔理沙は箒がないと空を飛べない。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>飛べます。箒は魔理沙が魔法使いなら必需品だと思って持っているだけの物です。実際に色々な作品で箒を用いず浮遊している魔理沙を見ることができます。</p>
      <h3>霊夢と魔理沙が勝負すれば6:4で霊夢が勝つ。</h3>
      <dl><dt className="four">重要度</dt><dd className="four">☆★★★★</dd><dt className="four">混乱度</dt><dd className="four">☆★★★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>根拠となる記述が存在しません。東方香霖堂に書いてあるとよく言われますが、東方香霖堂を読んでみても『勝負は大体霊夢の方に分が有るのだが、魔理沙も負けてはいない。』と書かれているくらいで具体的な勝率についてはどこにも書かれていません。しかし、勘違いした人の多くがソースを何処かで見たことがあると主張する不思議な勘違いです。ご存じの方は掲示板まで。</p>
      <h3>チルノがバカで⑨であるというのは公式設定ではない。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>微妙な所ですが、これは公式設定だと言ってしまって問題ないでしょう。元々紅魔郷でも頭の良くないキャラとして登場していますし、花映塚のマニュアルに、ゲーム画面に番号を付けて解説する画面説明のページがあるのですが、その中でチルノに⑨の番号を振って『バカ』と解説しているのです。<a href="/writing/toho_mistake/Kaeiduka.png">参考画像【大】</a> <a href="/writing/toho_mistake/Kaeiduka_s.png">【小】</a></p>
      <h3>咲夜さんの胸が増減するのはPADを入れているから。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>それまでは控えめだったはずの咲夜さんの胸が萃夢想では大きくなっていました。成長したのかな？　と思いきや、なんということでしょう！　花映塚では元の大きさに戻っていたのです。これに対してPAD説が唱えられました。実際は萃夢想担当絵師alphes氏の描き方の問題で、幽々子様や紫様も明らかに胸が増量されているのですが、咲夜さんのみすぐ後に発表された花映塚で登場した事による悲劇でした。</p>
      <h3>レミリア・スカーレットは寝床に棺桶を使わない。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="four">混乱度</dt><dd className="four">☆★★★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>かつては永夜抄の、霊夢「さぁ、棺桶に戻る覚悟はいい？」　レミリア「棺桶は死人の入るものだって、前に言ったじゃない。」というやりとりを根拠にレミリアは棺桶を使わないのだと考えられていましたが、東方緋想天での、小町「死んでもないのに棺桶に入ってるのかい？　窮屈そうだねぇ」という台詞によって示唆され、東方三月精にてベッドの上に棺桶を置いていることが明らかになりました。よってレミリアは寝床に棺桶を使っているとの考えが優勢です。</p>
      <h3>レミリア・スカーレットの飲む紅茶は何時でもただの人間の血。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="one">混乱度</dt><dd className="one">☆☆☆☆★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>東方紅魔郷あとがきtxtにはレミリアの飲んでいる紅茶はただの人間の血であると書いてありますが、他の作品では普通の紅茶を飲んでいることもあるようです。</p>
      <h3>人形遣いの魔法使い。名前は魔理沙。</h3>
      <dl><dt className="four">重要度</dt><dd className="four">☆★★★★</dd><dt className="one">混乱度</dt><dd className="one">☆☆☆☆★</dd><dt className="four">乱闘度</dt><dd className="four">☆★★★★</dd></dl>
      <p>アリスと魔理沙を間違えている。名曲『魔理沙は大変なものを盗んでいきました』のPVに起因し、かつてはにわかファンにおける代表的な勘違いでした。曲名は魔理沙なのに原曲もアリスなら登場するのも主にアリス。アリスが魔理沙に大変なもの（あなたの心です）を奪われたという曲なのに、魔理沙がアリスに名前を奪われてしまうと言うそりゃないぜな結末。最近は曲の流行も過ぎてこの勘違いは珍しくなりました。</p>
      <h3>橙の本名は八雲橙。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>理由はよくわかっていませんが、橙は八雲姓を持っていません。二次創作では立派に成長した未来の橙を指して八雲橙と呼ぶことがあります。</p>
      <h3>橙の式が外れると、猫型に戻る。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="four">混乱度</dt><dd className="four">☆★★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>求聞史紀によると元々の姿が人型であるようなので、式（鬼神）が剥がれても姿は変わりません。また水に濡れると式が剥がれる上、猫であるので水には弱いようです。</p>
      <h3>春告精リリーはブラックとホワイトの二人がいる。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>東方花映塚に登場する黒い妖精は裁判官（四季映姫）のコスプレをしたリリーホワイト本人なので、今のところリリーブラックという妖精は確認されていません。ただし、東方儚月抄のパーティーにはリリーホワイトと一緒に色違いの服を着た妖精が参加しているように見えます。</p>
      <h3>リリカ・プリズムリバーの得意な楽器は鍵盤楽器のみ。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="five">混乱度</dt><dd className="five">★★★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>妖々夢では、ルナサの得意な楽器は弦楽器、メルランの得意な楽器は管楽器、リリカは全ての楽器が得意と書かれています。しかし、花映塚では鍵盤楽器を得意とすると書かれているので、設定の上書きが起こっている可能性もあります。</p>
      <h3>プリズムリバー三姉妹は亡霊が騒霊になったもの。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>三人はレイラ・プリズムリバーが姉達の姿を元に新たに作り出した騒霊で、レイラの本当に存在した姉達の生霊や死霊ではありません。また、本当の姉達がレイラと別れた後どうなったのかは不明です。</p>
      <h3>魂魄妖夢といつも一緒に居る一際大きな幽霊は、半霊と呼ぶ。</h3>
      <dl><dt className="one">重要度</dt><dd className="one">☆☆☆☆★</dd><dt className="five">混乱度</dt><dd className="five">★★★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>妖夢には半人半霊や半亡霊という呼ばれ方がありますが、大きな幽霊は半幽霊や半身と呼ばれ、半霊と呼ばれたことはありません。また、あれは魂ではないと明言されているので半魂という呼び方も間違いです。</p>
      <h3>幽々子は生前、幽子という名前だった。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>二次創作由来の設定です（恐らくみょふ～会由来）。原作には生前は別の名前であったなどというような記述も存在しません。</p>
      <h3>八雲紫、八雲藍、橙はマヨヒガで同居している。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>通称八雲家が仲睦まじくマヨヒガで暮らしている二次創作作品は数多く存在しますが、マヨヒガは妖怪の山にあり、ここを住処とするとされているのは橙だけで、他二人は別のところにある屋敷に住んでいます（東方求聞史紀）。東方妖々夢・霊夢Phantasm八雲紫撃破後会話によると、艮（うしとら。北東のこと）の方角、博麗大結界上にあるようです。</p>
      <h3>ミスティア・ローレライが屋台をやっているのは公式設定ではない。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>公式設定です。歌で人間を鳥目にし、視力回復効果のある八目鰻を売りつけるというマッチポンプで儲けています。八目鰻が捕れなくなったら鰻や泥鰌を混ぜて出しています（東方文花帖・書籍）。</p>
      <h3>鈴仙・優曇華院・イナバの放つ弾幕は座薬である。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="one">混乱度</dt><dd className="one">☆☆☆☆★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>二次創作でも、大概本人が否定するので勘違いすることはあまりないと思いますが、あれは座薬ではなく銃弾です。しかし白くてあの独特の形をした弾幕には、座薬の呼び名を撃ち払う事は出来ないでしょう。</p>
      <h3>八意永琳は蓬莱人ではない。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="four">混乱度</dt><dd className="four">☆★★★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>東方永夜抄・冥界組EDにて、姫の能力で作られた薬を服用していると本人が言っているのでほぼ間違いなく蓬莱人です。幽々子も永琳を指してひえぇ。私の天敵が～と発言しています。</p>
      <h3>八意永琳にはあらゆる薬毒が完全に無効。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>永夜抄EDであらゆる薬毒は効かないと発言していますが、東方儚月抄（4コマ）では幻覚剤が効いているので完全な無効化ではないと思われます。</p>
      <h3>蓬莱山輝夜は現在ニートである。</h3>
      <dl><dt className="one">重要度</dt><dd className="one">☆☆☆☆★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>元も子もないことを言ってしまえば、NEETとは若年無業者のことを指すので、若年ではない（失礼）輝夜はその時点で対象外です。しかし、この場合のニートは多くの文脈で「働く気がない」ことについて言っているので、これも否定しておく必要があります。東方儚月抄（小説）にて輝夜は今まで自分の心のありようが悪かったが為に常に退屈で窮屈だったということを反省し、これからは盆栽を愛でることを仕事にすると言っています（逆に東方永夜抄までの輝夜は「働く気がない」状態だったかもしれません）。その関係か、東方文花帖・書籍では月都万象展を開いて永遠亭に人を招いたりしています。現状はまだまだ微妙なところですが、「働く気がない」と言う状態ではないということは明らかでしょう。</p>
      <h3>犬走椛に犬耳はない</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="four">混乱度</dt><dd className="four">☆★★★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>求聞口授にて犬耳のないイメージを披露した犬走椛。しかし、口授挿絵担当者のtwitter発言によりキャラクターデザイン上の指示は一切無かった事が判明。犬耳があるかについてはまだまだ謎のままであると言える。<a href="https://twitter.com/masa_kitchen/status/209435526724464641">参考ページ【キャラクターデザイン上の指示は一切無かった】</a></p>
      <h3>射命丸文と犬走椛は仲良し</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>ダブルスポイラーにて文から椛へのコメントとして「どうも顔を合わせると喧嘩になりやすいんですけど……」というものがあり、不仲であることが明らかとなった。また、はたてのコメントにも「文が苦手としているみたいだけど何かあったのかな」というものがある。</p>
      <h3>星熊勇儀の怪力乱神とはとても力が強いことのみを指す。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>怪力乱神（読みはかいりょくらんしん）は論語にある言葉で、奇怪なこと、力わざのこと、秩序を乱すようなこと、神秘的なこと。また、怪しく不思議で人知ではかり知れないもののことです。孔子はこのような理性で説明のできないような事柄は語らなかったとあります。</p>
      <h3>ゾンビフェアリーは妖精のゾンビ。</h3>
      <dl><dt className="two">重要度</dt><dd className="two">☆☆☆★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>ゾンビフェアリーはゾンビごっこをしている妖精です。The Grimoire of Marisaによると、ゾンビの振りをしたノリのいい普通の妖精たちだとのこと。</p>
      <h3>霊烏路空の胸の目玉は取り外せない。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>空の腕の制御棒、両足の靴が脱げることは知っていても、胸の眼が取り外せることを知らない人は結構居るようです。これに関しては東方非想天則霊烏路空ドッター烏賊氏の雑記に記述がありました。<q>&gt;疑問の多いうにゅほのパーツですけど わしが貰った設定画によると棒・岩・眼は全部取り外し可能っぽいです マントはまん丸いピザ生地みたいな布を無理やりひしゃげて付けてる感じ おかげでなびかせ辛かったったらありゃしない。<cite>irresolution</cite></q>非想天則制作陣はZUN氏から資料提供を受けています。<a href="http://megalodon.jp/2009-0901-2014-40/yamaika-web.hp.infoseek.co.jp/" title="2009年9月1日 20:14に記録されたウェブ魚拓 irresolution">ウェブ魚拓【irresolution】</a></p>
      <h3>森近霖之助は褌一丁で暴れ回るド変態である。</h3>
      <dl><dt className="four">重要度</dt><dd className="four">☆★★★★</dd><dt className="one">混乱度</dt><dd className="one">☆☆☆☆★</dd><dt className="four">乱闘度</dt><dd className="four">☆★★★★</dd></dl>
      <p>東方最萌トーナメント2支援絵でいきなり登場した、褌一丁の変態キャラこーりん。もちろん原作の霖之助とは似ても似つかない出オチキャラです。現在ではこの二つを『こーりん』『霖之助』と呼び分け、混同することがないようにしていますが、魔理沙は霖之助のことを香霖と呼ぶので早合点は禁物です。</p>
      <h3>サニーミルク、ルナチャイルド、スターサファイアの三人は三月精と呼ばれている。</h3>
      <dl><dt className="three">重要度</dt><dd className="three">☆☆★★★</dd><dt className="three">混乱度</dt><dd className="three">☆☆★★★</dd><dt className="two">乱闘度</dt><dd className="two">☆☆☆★★</dd></dl>
      <p>この三人は光の三妖精と呼ばれており、三月精は漫画のタイトルです。日（SUN）、月（げつ）、星（せい）という洒落になっています。</p>
      <h2>キャラ設定について（口調）</h2>
      <h3>霧雨魔理沙の一人称は俺。</h3>
      <dl><dt className="five">重要度</dt><dd className="five">★★★★★</dd><dt className="one">混乱度</dt><dd className="one">☆☆☆☆★</dd><dt className="five">乱闘度</dt><dd className="five">★★★★★</dd></dl>
      <p>伝説の過ち。今となってはわざとやっているとしか思われないような間違いではありますが、絶滅しているわけではないようです。また、純粋に魔理沙の偽物としてわざと登場させる場合もあります。</p>
      <h3>ルーミアの口癖は語尾の「なのかー」や「わはー」。</h3>
      <dl><dt className="five">重要度</dt><dd className="five">★★★★★</dd><dt className="two">混乱度</dt><dd className="two">☆☆☆★★</dd><dt className="one">乱闘度</dt><dd className="one">☆☆☆☆★</dd></dl>
      <p>「そーなのかー」は作中二回登場しており（紅魔郷、東方文花帖・書籍）口癖である可能性がありますが、語尾に一々「なのかー」を付けたりするわけではなく、「わはー」に至っては一度も作中に登場していません。</p>
      <h3>多々良小傘の一人称はわちき。</h3>
      <dl><dt className="four">重要度</dt><dd className="four">☆★★★★</dd><dt className="one">混乱度</dt><dd className="one">☆☆☆☆★</dd><dt className="three">乱闘度</dt><dd className="three">☆☆★★★</dd></dl>
      <p>東方星蓮船で、小傘が『なんと、わちきが時代遅れともうすか』と発言することから。直後、早苗に『そのキャラ作ってるでしょ？』と指摘される上、わちき発言直前の台詞は『……私を見て驚かないの？』なので、明らかに小傘の一人称は“私”です。</p>
      <h2>その他の誤字・誤読</h2>
      <p>読みにくい部分もあるので、文字を大きくして表示しています。</p>
      <h3 className="visible">神崎</h3>
      <p className="visible">→ 正しくは神綺（しんき）</p>
      <h3 className="visible">二色蓮花蝶（にしょくれんげちょう）</h3>
      <p className="visible">→ 正しくは二色蓮花蝶（にいるれんかちょう）</p>
      <h3 className="visible">博霊麗夢</h3>
      <p className="visible">→ 正しくは博麗霊夢（はくれいれいむ）</p>
      <h3 className="visible">ジャック・ザ・ルビドレ</h3>
      <p className="visible">→ 正しくはジャック・ザ・ルドビレ</p>
      <h3 className="visible">アリス・マーガロイド</h3>
      <p className="visible">→ 正しくはアリス・マーガトロイド</p>
      <h3 className="visible">広有射怪鳥事（こうゆうしゃかいちょうじ）</h3>
      <p className="visible">→ 正しくは広有射怪鳥事（ひろありけちょうをいること）　※歴史的仮名遣い：ひろありけてうをいること</p>
      <h3 className="visible">天蛾の蠱道（てんがのこどう）</h3>
      <p className="visible">→ 正しくは天蛾の蠱道（すずめがのこどう）</p>
      <h3 className="visible">厄神（やくがみ）</h3>
      <p className="visible">→ 正しくは厄神（やくじん）</p>
      <h3 className="visible">風祝（ふうしゅく）</h3>
      <p className="visible">→ 正しくは風祝（かぜほうり）　※歴史的仮名遣い：かぜはふり</p>
      <h3 className="visible">地霊殿（じれいでん）</h3>
      <p className="visible">→ 正しくは地霊殿（ちれいでん）</p>
      <h3 className="visible">霊鳥路空（れいちょうじくう）</h3>
      <p className="visible">→ 正しくは霊烏路空（れいうじうつほ）</p>
      <h3 className="visible">超撥水からかさお化け</h3>
      <p className="visible">→ 正しくは超撥水かさかさお化け（ちょうはっすいかさかさおばけ）</p>
      <h3 className="visible">法界（ほうかい）</h3>
      <p className="visible">→ 正しくは法界（ほっかい）　一般的な読みは（ほうかい）の方</p>
      <h3 className="visible">封獣ぬえ (ふうじゅうぬえ)</h3>
      <p className="visible">→ 正しくは封獣ぬえ (ほうじゅうぬえ)</p>
      <h3 className="visible">幽谷響子 (ゆうこくきょうこ)</h3>
      <p className="visible">→ 正しくは幽谷響子 (かそだにきょうこ)</p>
      <h3 className="visible">童祭（どうさい）</h3>
      <p className="visible">→ 正しくは童祭（わらべまつり）</p>
      <h3 className="visible">卯酉東海道（うせいとうかいどう）</h3>
      <p className="visible">→ 正しくは卯酉東海道（ぼうゆうとうかいどう）</p>
      <h3 className="visible">大空魔術（だいくうまじゅつ）</h3>
      <p className="visible">→ 正しくは大空魔術（おおぞらまじゅつ）</p>
      <h3 className="visible">キュアリアス上海古牌（きゅありあすしゃんはいこはい）</h3>
      <p className="visible">→ 正しくはキュアリアス上海古牌（きゅありあすしゃんはいぐーぱい）</p>
      <address>
        AntennaJane　2010-03-01 作成
      </address>
    </div>
  );
}
