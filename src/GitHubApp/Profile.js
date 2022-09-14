import React from "react";

function Profile(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="card text-center style={{ width: '18rem' }} ">
              <div className="card-header bg-secondary text-white">
                <h1>Profile Details</h1>
              </div>
              <div className="card-body">
                <img
                  src={props.profile.avatar_url}
                  className="card-img-top img-fluid"
                  alt=""
                />
                <h3>{props.profile.name}</h3>
                <a
                  href={props.profile.html_url}
                  target="_blank"
                  className="btn btn-secondary text-white"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 text-center">
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-bolder display-h3">
                {props.profile.login}
              </li>
              <li className="list-group-item">Bio: {props.profile.bio}</li>
              <li className="list-group-item">Email: {props.profile.email}</li>
              <li className="list-group-item">
                Location: {props.profile.location}
              </li>
              <li className="list-group-item">
                Company: {props.profile.company}
              </li>
              <li className="list-group-item">Blog: {props.profile.blog}</li>
              <li className="list-group-item">
                Member Since: {props.profile.created_at}
              </li>

              <li className="list-group-item">
                Repos: {props.profile.public_repos}
              </li>
              <li className="list-group-item">
                <span>
                  <a href={props.profile.repos_url} target="_blank">
                    {" "}
                    Repos URL
                  </a>
                </span>
              </li>
              <li className="list-group-item">
                GitHub URL: {props.profile.url}
              </li>
              <li className="list-group-item">
                Followers: {props.profile.followers}
              </li>
              <li className="list-group-item">
                Following: {props.profile.following}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
