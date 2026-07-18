import React from 'react';
import {useAsync} from "react-async";
import {useRouteMatch} from "react-router-dom";
import * as Menu from "./Menu";

const current = "/~Solferino/connections";

export function BuildPage(): Page {
  return {title: "接続状況", path: current, parent: Menu.BuildPage()};
}

interface AgentStat {
  "agent": string,
  "total": number,
  "last": string,
  "since": string
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
    <div className="Connections">
      <p>本サイトに最近やってくる方々の記録です。ボットは種別ごと、人間の皆さんは総数だけ数えています（IP アドレス等は記録していません）。</p>
      <RenderStats/>
      <address>AntennaJane　2026-07-18 作成</address>
    </div>
  );
}

function RenderStats() {
  const {data, error, isPending} = useAsync(loadStats);
  if (isPending) return <div>読込中...</div>;
  if (error) return <div>集計を取得できませんでした</div>;
  if (data) return render(data as AgentStat[]);
  return null;
}

function render(agents: AgentStat[]) {
  if (agents.length === 0) return <p>まだ記録がありません。</p>;
  return (
    <dl className="dlTable">
      <dt>エージェント</dt>
      <dd>累計 / 最終来訪 (UTC)</dd>
      {agents.map((a) => (
        <React.Fragment key={a.agent}>
          <dt>{a.agent}</dt>
          <dd>{a.total} 回 / {a.last}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

async function loadStats(): Promise<AgentStat[]> {
  const res = await fetch("/~Solferino/api/access-stats");
  if (!res.ok) throw new Error("unavailable");
  const body = await res.json();
  if (!Array.isArray(body.agents)) throw new Error("unavailable");
  return body.agents;
}
