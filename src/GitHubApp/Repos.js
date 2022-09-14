import React from "react";

function Repos(props) {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <h1> Total Repos</h1>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {props.repos.map((repo) => {
              return (
                <li key={repo.id} className="list-group-item">
                  <a href={repo.html_url} target="_blank">
                    {repo.name}

                    <span className="badge bg-success mx-3">
                      Stars {repo.stargazers_count}
                    </span>
                    <span className="badge bg-warning mx-3">
                      {" "}
                      Watchers {repo.watchers_count}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Repos;
