import React from 'react';
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import "../../styles/writing.css"
import * as Menu from "../Menu";
import * as Index404 from "../Index404";
import * as Excavation from "./Excavation";
import * as TohoMistake from "./TohoMistake";

const current = "/~Solferino/writing";

export function BuildPage(): Page {
  return {title: "雑記廃物", path: current, parent: Menu.BuildPage()};
}

export function Render(props: SolferinoProps) {
  const [rendered, setRendered] = React.useState(false);

  const isExact = useRouteMatch(current)?.isExact;
  React.useEffect(() => {
    if (isExact && !rendered) {
      setRendered(true);
      props.setPage(BuildPage());
    }
  }, [isExact, rendered, props]);

  return (
    <div className="Writing">
      <Switch>
        <Route exact path={"/~Solferino/writing"}>
          <RenderContents/>
        </Route>
        <Route exact path={"/~Solferino/writing/toho-mistake"}>
          <TohoMistake.Render {...props}/>
        </Route>
        <Route exact path={"/~Solferino/writing/excavation"}>
          <Excavation.Render {...props}/>
        </Route>
        <Route>
          <Index404.Render {...props} page={BuildPage()}/>
        </Route>
      </Switch>
    </div>
  );
}

function RenderContents() {
  return (
    <div>
      <p>ちょっとした文章やリサイクル前の廃棄物。適当に拾っていってね！</p>
      <h2>目次</h2>
      <p>
        <Link to={"/~Solferino/writing/toho-mistake"}>勘違いしやすい東方Project</Link>　試験的に公開<br/>
        <Link to={"/~Solferino/writing/excavation"}>Webリソース発掘法</Link>　Webの発掘について書いた小文。論理の破綻に気付いて放棄。
      </p>
      <address>
        AntennaJane　2009-08-28 作成　2009-09-09 更新
      </address>
    </div>
  );
}
