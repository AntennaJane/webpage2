import React from 'react';
import {Route, Switch} from "react-router-dom";
import * as Front from "./Front";
import * as Notes from "./Notes";

function Index() {
  const [pages, setPages] = React.useState<Page[]>([{title: "未設定", path: "未設定"}]);
  const [title, setTitle] = React.useState("読込中");

  React.useEffect(() => {
    const lastTitle = pages[pages.length - 1].title;
    const firstTitle = pages[0].title;
    document.title = (lastTitle !== firstTitle ? (lastTitle + "/") : "") + firstTitle;
    setTitle(lastTitle);
  }, [pages]);

  return (
    <div className="Index">
      <Breadcrumbs pages={pages}/>
      <h1>{title}</h1>
      <Switch>
        <Route exact path={"/~Solferino"}>
          <Front.Render setPages={setPages}/>
        </Route>
        <Route path={"/~Solferino/notes"}>
          <Notes.Render setPages={setPages}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Index;

function Breadcrumbs(props: { pages: Page[] }) {
  let list: React.ReactElement<HTMLLIElement>[] = [];

  props.pages.forEach(page => {
    list.push(<li>{page.title}</li>)
  });

  return (
    <div className="Breadcrumbs">
      <ul>{list}</ul>
    </div>
  )
}
