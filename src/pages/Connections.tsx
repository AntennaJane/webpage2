import React from 'react';
import {useAsync} from "react-async";
import {useRouteMatch} from "react-router-dom";
import "../styles/connections.css"
import * as Menu from "./Menu";

const current = "/~Solferino/connections";

export function BuildPage(): Page {
  return {title: "接続状況", path: current, parent: Menu.BuildPage()};
}

interface BotStat {
  "agent": string,
  "total": number,
  "last": string,
  "since": string
}

interface AccessStats {
  "since": string | null,
  "until": string | null,
  "months": {"month": string, "total": number}[],
  "days": {"day": string, "total": number}[],
  "bots": BotStat[],
  "other": {"total": number, "last": string}
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
      <p>
        本サイトへのアクセス記録です。来訪したロボット・スパイダーは種別ごとに、
        それ以外の閲覧はまとめて集計しています。IP アドレスなど訪問者を特定できる情報は記録していません。
      </p>
      <RenderStats/>
      <address>AntennaJane　2026-07-18 作成</address>
    </div>
  );
}

function RenderStats() {
  const {data, error, isPending} = useAsync(loadStats);
  if (isPending) return <div>読込中...</div>;
  if (error) return <div>集計を取得できませんでした</div>;
  if (data) return render(data as AccessStats);
  return null;
}

function render(stats: AccessStats) {
  if (stats.since == null) return <p>まだ記録がありません。</p>;
  return (
    <div>
      <p>集計期間: {stats.since} 〜 {stats.until}　(日時は UTC、対象はページ表示と robots.txt)</p>
      <h2>月別集計</h2>
      {renderTotals(stats.months.map((m) => [m.month, m.total]))}
      <h2>日別集計（直近 31 日）</h2>
      {renderTotals(stats.days.map((d) => [d.day, d.total]))}
      <h2>ロボット・スパイダーの来訪</h2>
      {renderBots(stats.bots)}
      <h2>その他の閲覧</h2>
      <p>{stats.other.total} アクセス{stats.other.last ? "　(最終: " + stats.other.last + ")" : ""}　※内訳は記録していません</p>
    </div>
  );
}

function renderTotals(rows: [string, number][]) {
  if (rows.length === 0) return <p>まだ記録がありません。</p>;
  const max = Math.max(...rows.map(([, total]) => total));
  return (
    <table className="stats">
      <thead>
      <tr>
        <th>期間</th>
        <th>アクセス数</th>
        <th className="graph"></th>
      </tr>
      </thead>
      <tbody>
      {rows.map(([label, total]) => (
        <tr key={label}>
          <td>{label}</td>
          <td className="number">{total}</td>
          <td className="graph">
            <div className="bar" style={{width: (max > 0 ? (total / max) * 100 : 0) + "%"}}/>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

function renderBots(bots: BotStat[]) {
  if (bots.length === 0) return <p>まだ来訪がありません。</p>;
  return (
    <table className="stats">
      <thead>
      <tr>
        <th>エージェント</th>
        <th>アクセス数</th>
        <th>初回来訪</th>
        <th>最終来訪</th>
      </tr>
      </thead>
      <tbody>
      {bots.map((b) => (
        <tr key={b.agent}>
          <td>{b.agent}</td>
          <td className="number">{b.total}</td>
          <td>{b.since}</td>
          <td>{b.last}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

async function loadStats(): Promise<AccessStats> {
  const res = await fetch("/~Solferino/api/access-stats");
  if (!res.ok) throw new Error("unavailable");
  const body = await res.json();
  if (!Array.isArray(body.bots) || !Array.isArray(body.days)) throw new Error("unavailable");
  return body;
}
