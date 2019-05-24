import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class GitHub extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const clientID = "cd1928775dffeab9ceb1";
    const clientSecret = "cb8b17b979a6168ccdd20ab27328e8356a77e508";
    fetch(
      `https://api.github.com/users/eliasvolkov?client_id=${clientID}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data });
        console.log(data);
      });
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return null;
    } else {
      return (
        <div className="container">
          <div className="card card-body mt-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={user.avatar_url}
                  className="img-fluid mb-2"
                  alt="userAvatar"
                />
                <a href="" className="btn btn-primary btn-block mt-4">
                  View profile
                </a>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <span className="badge badge-primary">
                    Public repos: {user.public_repos}
                  </span>
                  <span className="badge badge-secondary">
                    Followers: {user.followers}
                  </span>
                  <span className="badge badge-success">
                    Following: {user.following}
                  </span>
                  <ul className="list-group mt-3">
                    <li className="list-group-item ">Username: {user.login}</li>
                    <li className="list-group-item">Bio: {user.bio}</li>
                    <li className="list-group-item">
                      Location: {user.location}
                    </li>
                    <li className="list-group-item">
                      Member since: {user.created_at}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
