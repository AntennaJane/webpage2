import React from 'react';
import {useAsync} from "react-async";
import {useParams, useRouteMatch} from "react-router-dom";
import * as Index from "./Index";

const current = "/~Solferino/board/:board/:thread";

export function BuildPage(title: string): Page {
  return {title: title, path: current, parent: Index.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const [rendered, setRendered] = React.useState(false);

  let {board, thread} = useParams();
  if (typeof board !== 'string' || typeof thread !== 'string') {
    throw TypeError;
  }

  const isExact = useRouteMatch(current)?.isExact;
  const {data} = useAsync(Index.loadData);
  const entry = data == null ? undefined :
    (data as BoardArchive).threads.find((t) => t.board === board && t.key === thread);

  React.useEffect(() => {
    if (isExact && !rendered && entry != null) {
      setRendered(true);
      props.setPage(BuildPage(entry.title));
    }
  }, [isExact, rendered, props, entry]);

  if (data == null) return <div>読込中...</div>;
  if (entry == null) return <div>スレッドが見つかりません</div>;

  return (
    <div className="Board-Thread">
      <dl>
        {entry.posts.map((post) => (
          <React.Fragment key={post.no}>
            <dt>
              {post.no + " 名前："}<b>{post.name}</b>
              {post.mail !== "" ? " [" + post.mail + "]" : ""}
              {"：" + post.date}
            </dt>
            <dd>
              {post.lines.map((line, i) => (
                <React.Fragment key={i}>{i > 0 ? <br/> : null}{line}</React.Fragment>
              ))}
            </dd>
          </React.Fragment>
        ))}
      </dl>
      <address>AntennaJane 2026-07-18 作成</address>
    </div>
  );
}
