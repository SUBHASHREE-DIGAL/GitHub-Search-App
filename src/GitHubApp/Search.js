import axios from "axios";
import Profile from "./Profile";
import Repos from "./Repos";
import React, { useState } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "./GithubCredentials";

function Search() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(username);
    searchRepo(username);
  };

  const searchUser = async (username) => {
    let dataURL = ` https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    let res = await axios.get(dataURL);
    let data = await res.data;
    setProfile(data);
    // console.log(data);
  };
  const searchRepo = async (username) => {
    let dataURL = ` https://api.github.com/users/${username}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    let res = await axios.get(dataURL);
    let data = await res.data;
    setRepos(data);
    // console.log(data);
  };

  return (
    <React.Fragment>
      <div className="container my-3">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-secondary text-white">
                <p className="h4">GitHub Profile Search </p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      placeholder="Search profile.."
                      className="form-control"
                    />
                    <input
                      type="submit"
                      value="search"
                      className=" btn btn-sm bg-secondary text-white m-3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 m-auto">
            {Object.keys(profile).length > 0 ? (
              <Profile profile={profile} />
            ) : null}
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            {repos.length > 0 ? <Repos repos={repos} /> : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;
