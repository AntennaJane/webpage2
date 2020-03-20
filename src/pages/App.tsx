import React from 'react';
import {Link} from "react-router-dom";

function App() {
  document.title = "南次郎個人サーバ";

  return (
    <div className="App">
      <h1>南次郎個人サーバ</h1>
      <p>
        <Link to={"/~Solferino"}>AntennaJane 実況本部</Link><br/>
        {/* "~Terminal/index.html" */}哲学者の日記帳（休止中）
      </p>
    </div>
  );
}

export default App;
