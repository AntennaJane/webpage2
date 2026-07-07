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
