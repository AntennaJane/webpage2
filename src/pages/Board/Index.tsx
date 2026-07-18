import React from 'react';
import {useAsync} from "react-async";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import "../../styles/board.css"
import * as Menu from "../Menu";
import * as Index404 from "../Index404";
import * as Thread from "./Thread";

const current = "/~Solferino/board";

export function BuildPage(): Page {
  return {title: "掲示板等", path: current, parent: Menu.BuildPage()};
}

export function Render(props: SolferinoProps) {
  // 子ページから戻ってもタイトルを再設定できるよう、isExact のたびに setPage する
  const isExact = useRouteMatch(current)?.isExact;
  const setPage = props.setPage;
  React.useEffect(() => {
    if (isExact) {
      setPage(BuildPage());
    }
  }, [isExact, setPage]);

  return (
    <div className="Board">
      <Switch>
        <Route exact path={"/~Solferino/board"}>
          <RenderContents/>
        </Route>
        <Route exact path={"/~Solferino/board/:board/:thread"}>
          <Thread.Render {...props}/>
        </Route>
        <Route>
          <Index404.Render {...props} page={BuildPage()}/>
        </Route>
      </Switch>
    </div>
  );
}

function RenderContents() {
  const {data, error, isPending} = useAsync(loadData);
  if (isPending) return <div>読込中...</div>;
  if (error) return <div>読込に失敗しました</div>;
  if (data) return render(data as BoardArchive);
  return null;
}

function render(data: BoardArchive) {
  return (
    <div>
      <p>
        かつて運用していた掲示板の過去ログです。閲覧専用で、書き込みはできません。<br/>
        claudeが個人情報を消しておいてくれたそうです。claudeにありがとうと言って。
      </p>
      {data.boards.map((board) => (
        <div key={board.id}>
          <h2>{board.name}</h2>
          <p>{board.note}</p>
          <ul>
            {data.threads.filter((t) => t.board === board.id).map((t) => (
              <li key={t.key}>
                <Link to={current + "/" + t.board + "/" + t.key}>{t.title}</Link>
                {" (" + t.posts.length + ")"}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <address>AntennaJane 2026-07-18 作成</address>
    </div>
  );
}

export async function loadData() {
  return require("../../data/board-threads.json");
}
