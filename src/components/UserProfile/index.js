import React from 'react';

import './styles.scss';

export default function UserProfile(props) {

  if (props.user.error) {
    return <h1 id="notFound">User not found</h1>
  }

  const {
    login,
    name,
    avatar_url,
    location,
    public_repos,
    html_url,
    followers,
    repos_url,
  } = props.user;

  return (
    <>
      {props.user &&
        <>
          <ul>
            <li>Username: {login}</li>
            <li>Name: {name}</li>
            <li>
              Avatar: {}
              <a href={avatar_url} target="_blank" rel="noreferrer">{avatar_url}</a>
            </li>
            <li>Location: {location}</li>
            <li>Amount of public repositories: {public_repos}</li>
            <li>Profile link: {html_url}</li>
            <li>Followers: {followers}</li>
            <li>
              Repositories: {}
              <a href={repos_url} target="_blank" rel="noreferrer">{repos_url}</a>
            </li>
          </ul>
        </>
      }
    </>
  );
}
