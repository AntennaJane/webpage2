import React from 'react';
import {useAsync} from "react-async";
import {Link, Route, Switch} from "react-router-dom";
import * as Front from "./Front";
import * as Index404 from "./Index404";
import * as Menu from "./Menu";
import * as Notes from "./Notes";
import * as Profile from "./Profile";
import * as Broadcasts from "./Broadcasts/Index";
import * as Writing from "./Writing/Index";
import * as Board from "./Board/Index";
import * as History from "./History";
import * as Restrictions from "./Restrictions";

function Index() {
  const [page, setPage] = React.useState<Page>({title: "未設定", path: "未設定"});
  const [title, setTitle] = React.useState("読込中");

  React.useEffect(() => {
    const lastTitle = page.title;
    const firstTitle = getFirstTitle(page);
    document.title = (lastTitle !== firstTitle ? (lastTitle + "/") : "") + firstTitle;
    setTitle(lastTitle);
  }, [page]);

  const {data, error, isPending} = useAsync(loadParameters);
  if (isPending) return <div>読込中...</div>;
  if (error) return <div>読込に失敗しました</div>;
  if (data) return render(data, page, setPage, title);
  return null;
}

function render(data: unknown, page: Page, setPage: SetPage, title: string) {
  const argument = {parameters: data, setPage: setPage};

  return (
    <div className="Index">
      <Breadcrumbs page={page}/>
      <h1>{title}</h1>
      <Switch>
        <Route exact path={"/~Solferino"}>
          <Front.Render {...argument}/>
        </Route>
        <Route path={"/~Solferino/broadcasts"}>
          <Broadcasts.Render {...argument}/>
        </Route>
        <Route path={"/~Solferino/menu"}>
          <Menu.Render {...argument}/>
        </Route>
        <Route path={"/~Solferino/notes"}>
          <Notes.Render {...argument}/>
        </Route>
        <Route path={"/~Solferino/profile"}>
          <Profile.Render {...argument}/>
        </Route>
        <Route path={"/~Solferino/writing"}>
          <Writing.Render {...argument}/>
        </Route>
        <Route path={"/~Solferino/board"}>
          <Board.Render {...argument}/>
        </Route>
        <Route path={"/~Solferino/history"}>
          <History.Render {...argument}/>
        </Route>
        <Route path={"/~Solferino/restrictions"}>
          <Restrictions.Render {...argument}/>
        </Route>
        <Route>
          <Index404.Render {...argument} page={Front.BuildPage()}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Index;

function getFirstTitle(page: Page): string {
  return page.parent == null ? page.title : getFirstTitle(page.parent);
}

function Breadcrumbs(props: { page: Page }) {
  return (
    <div className="Breadcrumbs">
      <ul>{createBreadcrumbs(props.page, true)}</ul>
    </div>
  )
}

function createBreadcrumbs(page: Page, last: boolean = false): React.ReactElement<HTMLLIElement>[] {
  const parent = page.parent == null ? [] : createBreadcrumbs(page.parent);
  const title = last ? page.title : <Link to={page.path}>{page.title}</Link>;
  const className = last ? '' : 'parent';
  return parent.concat(<li key={page.path} className={className}>{title}</li>);
}

async function loadParameters() {
  return require("../data/parameters.json");
}
