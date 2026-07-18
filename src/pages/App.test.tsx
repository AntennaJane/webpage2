import React from 'react';
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import {render} from '@testing-library/react';
import App from './App';
import Index from './Index';

test('renders index page', () => {
  const {getByText} = render(<BrowserRouter><App/></BrowserRouter>);
  const h1Element = getByText(/南次郎個人サーバ/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders profile page', async () => {
  const {findByText} = render(<MemoryRouter initialEntries={["/~Solferino/profile"]}><Index/></MemoryRouter>);
  expect((await findByText("プロフィール", {selector: "h1"}))).toBeInTheDocument();
  expect(await findByText("AntennaJane（AA(略), @hatena, 派手南次郎, これみ）")).toBeInTheDocument();
  expect(await findByText("大阪→東京")).toBeInTheDocument();
});

test('links profile from menu', async () => {
  const {findByText} = render(<MemoryRouter initialEntries={["/~Solferino/menu"]}><Index/></MemoryRouter>);
  const link = (await findByText("自己紹介")).closest("a");
  expect(link).toHaveAttribute("href", "/~Solferino/profile");
});

test('links writing from menu', async () => {
  const {findByText} = render(<MemoryRouter initialEntries={["/~Solferino/menu"]}><Index/></MemoryRouter>);
  const link = (await findByText("雑記廃物")).closest("a");
  expect(link).toHaveAttribute("href", "/~Solferino/writing");
});

test('renders writing index page', async () => {
  const {findByText} = render(<MemoryRouter initialEntries={["/~Solferino/writing"]}><Index/></MemoryRouter>);
  expect((await findByText("雑記廃物", {selector: "h1"}))).toBeInTheDocument();
  const tohoMistake = (await findByText("勘違いしやすい東方Project")).closest("a");
  expect(tohoMistake).toHaveAttribute("href", "/~Solferino/writing/toho-mistake");
  const excavation = (await findByText("Webリソース発掘法")).closest("a");
  expect(excavation).toHaveAttribute("href", "/~Solferino/writing/excavation");
});

test('renders toho-mistake page', async () => {
  const {findByText} = render(<MemoryRouter initialEntries={["/~Solferino/writing/toho-mistake"]}><Index/></MemoryRouter>);
  expect((await findByText("勘違いしやすい東方Project", {selector: "h1"}))).toBeInTheDocument();
  expect(await findByText("東方原作はエロゲか萌えアニメである。")).toBeInTheDocument();
  const image = (await findByText("参考画像【大】")).closest("a");
  expect(image).toHaveAttribute("href", "/writing/toho_mistake/Kaeiduka.png");
});

test('links board from menu', async () => {
  const {findByText} = render(<MemoryRouter initialEntries={["/~Solferino/menu"]}><Index/></MemoryRouter>);
  const link = (await findByText("掲示板等")).closest("a");
  expect(link).toHaveAttribute("href", "/~Solferino/board");
});

test('renders board index page', async () => {
  const {findByText, findAllByText} = render(<MemoryRouter initialEntries={["/~Solferino/board"]}><Index/></MemoryRouter>);
  expect((await findByText("掲示板等", {selector: "h1"}))).toBeInTheDocument();
  const threads = await findAllByText("実況総合");
  expect(threads.length).toBe(2);
  expect(threads[0].closest("a")).toHaveAttribute("href", "/~Solferino/board/bbs18c/1266112580");
});

test('renders board thread page', async () => {
  const {findByText} = render(
    <MemoryRouter initialEntries={["/~Solferino/board/bbs18c/1266112580"]}><Index/></MemoryRouter>);
  expect((await findByText("実況総合", {selector: "h1"}))).toBeInTheDocument();
  expect(await findByText("実況中はこのスレもチェックしてるよ")).toBeInTheDocument();
});

// 全コンテンツページの共通規約: 作成日時 (・更新日時) を address 要素で表記する。
// 新ページを追加したらこの routes に載せること (載せ忘れ防止は下の網羅テストが担う)。
const contentRoutes = [
  "/~Solferino",
  "/~Solferino/menu",
  "/~Solferino/notes",
  "/~Solferino/profile",
  "/~Solferino/writing",
  "/~Solferino/writing/toho-mistake",
  "/~Solferino/writing/excavation",
  "/~Solferino/spot-info",
  "/~Solferino/spot-info/log",
  "/~Solferino/board",
  "/~Solferino/board/bbs18c/1266112524",
  "/~Solferino/board/mtbbs2/1232607975",
  "/~Solferino/broadcasts",
  "/~Solferino/broadcasts/stage",
  "/~Solferino/broadcasts/stage/1",
];

test('every content page shows creation date', async () => {
  for (const route of contentRoutes) {
    const {findByText, unmount} = render(<MemoryRouter initialEntries={[route]}><Index/></MemoryRouter>);
    const address = await findByText(/作成/, {selector: "address"});
    expect(address).toBeInTheDocument();
    unmount();
  }
});

test('content routes cover every registered page path', () => {
  // ソース中の <Route exact path={"..."}> を全ページから洗い出し、contentRoutes が
  // それぞれに具体値でマッチすることを検証する。新ページのルートを追加して
  // contentRoutes へ載せ忘れると、このテストが失敗して作成日時チェック漏れを防ぐ。
  const fs = require('fs');
  const path = require('path');
  const files: string[] = [];
  const walk = (d: string) => fs.readdirSync(d, {withFileTypes: true}).forEach((e: {name: string, isDirectory: () => boolean}) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".tsx") && !p.endsWith(".test.tsx")) files.push(p);
  });
  walk(__dirname);
  const pattern = /<Route exact path={"([^"]+)"}>/g;
  const registered: string[] = [];
  for (const f of files) {
    const src = fs.readFileSync(f, "utf-8");
    let m = pattern.exec(src);
    while (m != null) {
      registered.push(m[1]);
      m = pattern.exec(src);
    }
  }
  expect(registered.length).toBeGreaterThan(0);
  for (const route of registered) {
    const regex = new RegExp("^" + route.replace(/:[^/]+/g, "[^/]+") + "$");
    const covered = contentRoutes.some((c) => regex.test(c));
    expect({route, covered}).toEqual({route, covered: true});
  }
});

test('renders excavation page', async () => {
  const {findByText} = render(<MemoryRouter initialEntries={["/~Solferino/writing/excavation"]}><Index/></MemoryRouter>);
  expect((await findByText("Webリソース発掘法", {selector: "h1"}))).toBeInTheDocument();
  expect(await findByText("今公開されてないからって、見られないかどうかはわからない！")).toBeInTheDocument();
  const notes = (await findByText("利用上の諸注意")).closest("a");
  expect(notes).toHaveAttribute("href", "/~Solferino/notes");
});
