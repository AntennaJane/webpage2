import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";
import * as Front from "./Front";

const current = "/~Solferino/menu";

interface Props {
  setPage: SetPage,
}

export function BuildPage(): Page {
  return {title: "目次", path: current, parent: Front.BuildPage()};
}

export function Render(props: Props) {
  const [rendered, setRendered] = React.useState(false);

  if (useRouteMatch(current)?.isExact && !rendered) {
    setRendered(true);
    props.setPage(BuildPage());
  }

  return (
    <div className="Front">
      <p>現在リニューアル中です(終わらんやつだ)</p>
      <p>管理人へのご連絡は情報twitter支部よりどうぞ</p>
      <ul className="group">
        <li>
          <dl className="dlTable">
            <dt>自己紹介</dt>
            <dd><span className="AA">σ(ﾟ∀ﾟ)</span></dd>
            <dt>最新情報</dt>
            <dd><span className="AA">（･∀･)つ⑩</span></dd>
            <dt>実況履歴</dt>
            <dd><span className="AA">(∩ﾟдﾟ)</span></dd>
            <dt>雑記廃物</dt>
            <dd><span className="AA">φ（．．） (´ー`)ノ⌒◇</span></dd>
            <dt>掲示板等</dt>
            <dd><span className="AA">（・∀・）人（・∀・）</span></dd>
            <dt>接続状況</dt>
            <dd><span className="AA">|Дﾟ)</span></dd>
            <dt>規制情報</dt>
            <dd><span className="AA">||Φ|(|ﾟ|∀|ﾟ|)|Φ||</span></dd>
            <dt><Link to={"/~Solferino/notes"}>諸注意等</Link></dt>
            <dd><span className="AA">(((( ；ﾟДﾟ)))</span></dd>
          </dl>
        </li>
        <li>RSS（実況更新など通知）</li>
        <li>
          <ul>
            <li><a href="http://www.youtube.com/AntennaJane">実況YouTube支部</a></li>
            <li><a href="http://www.nicovideo.jp/mylist/11220814">実況ニコニコ支部</a></li>
            <li><a href="http://www.ustream.tv/channel/antennajane-live">実況Ustream支部</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href="https://twitter.com/AntennaJane">情報twitter支部</a></li>
            <li><a href="https://magenta.click/@AntennaJane">情報Mastodon支部</a></li>
            <li><a href="http://tokioritsukutameiki.blog65.fc2.com">情報FC2支部</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href="https://www.pixiv.net/member.php?id=46097">小説pixiv支部</a></li>
            <li><a href="https://xmypage.syosetu.com/x7608t">小説ノクターン支部</a></li>
          </ul>
        </li>
      </ul>
      <address>AntennaJane 2005-01-06 作成 2020-03-23 更新</address>
    </div>
  );
}
