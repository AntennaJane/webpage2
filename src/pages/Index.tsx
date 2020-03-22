import React from 'react';
import {Route, Switch} from "react-router-dom";
import Front from "./Front";
import Notes from "./Notes";

function Index() {
  const [title, setTitle] = React.useState<string | null>(null);

  React.useEffect(() => {
    document.title = (title != null ? (title + "/") : "") + "AntennaJane 実況本部";
  });

  return (
    <Switch>
      <Route exact path={"/~Solferino"}>
        <Front setTitle={setTitle}/>
      </Route>
      <Route path={"/~Solferino/notes"}>
        <Notes setTitle={setTitle}/>
      </Route>
    </Switch>
  );
}

export default Index;
