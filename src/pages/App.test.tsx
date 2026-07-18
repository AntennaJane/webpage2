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

test('renders excavation page', async () => {
  const {findByText} = render(<MemoryRouter initialEntries={["/~Solferino/writing/excavation"]}><Index/></MemoryRouter>);
  expect((await findByText("Webリソース発掘法", {selector: "h1"}))).toBeInTheDocument();
  expect(await findByText("今公開されてないからって、見られないかどうかはわからない！")).toBeInTheDocument();
  const notes = (await findByText("利用上の諸注意")).closest("a");
  expect(notes).toHaveAttribute("href", "/~Solferino/notes");
});
