import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import * as Front from "./Front";
import * as Index404 from "./Index404";
import * as Menu from "./Menu";
import * as Notes from "./Notes";
import * as Broadcasts from "./Broadcasts/Index";

function Index() {
  const [page, setPage] = React.useState<Page>({title: "未設定", path: "未設定"});
  const [title, setTitle] = React.useState("読込中");

  React.useEffect(() => {
    const lastTitle = page.title;
    const firstTitle = getFirstTitle(page);
    document.title = (lastTitle !== firstTitle ? (lastTitle + "/") : "") + firstTitle;
    setTitle(lastTitle);
  }, [page]);

  return (
    <div className="Index">
      <Breadcrumbs page={page}/>
      <h1>{title}</h1>
      <Switch>
        <Route exact path={"/~Solferino"}>
          <Front.Render setPage={setPage}/>
        </Route>
        <Route path={"/~Solferino/broadcasts"}>
          <Broadcasts.Render setPage={setPage}/>
        </Route>
        <Route path={"/~Solferino/menu"}>
          <Menu.Render setPage={setPage}/>
        </Route>
        <Route path={"/~Solferino/notes"}>
          <Notes.Render setPage={setPage}/>
        </Route>
        <Route>
          <Index404.Render page={Front.BuildPage()} setPage={setPage}/>
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
  return parent.concat(<li className={className}>{title}</li>);
}
