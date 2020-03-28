import React from 'react';

function App404() {
  document.title = "404 Not Found";

  return (
    <div className="App404">
      <h1>404 Not Found</h1>
      <p>指定されたファイルが存在していません。URIを再度確認してください。リンク切れの場合は、管理者に報告をいただけると幸いです。</p>
    </div>
  );
}

export default App404;
