import React from "react";
import Search from "./GitHubApp/Search";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          GitHub Search App
        </a>
      </nav>
      <Search />
    </React.Fragment>
  );
}

export default App;
