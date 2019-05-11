import React from 'react';

var RepoListItem = (props) => (
    <div style={repoStyle}>
    <div><img src={props.repo.avatar_url} alt="Avatar" width={150} height={150}></img></div>
        <div>User: {props.repo.login}</div>
        <div>Name of Repo: {props.repo.name}</div>
        <div style={{cursor: 'pointer'}}>
            <a href={props.repo.repo_url}>Repo link</a>
        </div>
        <div>Fork Count: {props.repo.forks_count}</div>
        <div>Watches: {props.repo.watches}</div>
        <div>Open Issues: {props.repo.open_issues}</div>
        <div style={{cursor: 'pointer'}}>
            <a href={`https://www.github.com/${props.repo.login}`}>User link</a>
        </div>
   </div>
)

//add click functionality for url

var repoStyle = {
  textAlign: 'center',
  padding: '10px',
  borderStyle: 'solid',
  marginLeft: '200px',
  marginRight: '200px',
  marginTop: '20px',
  marginBottom: '20px'
}


export default RepoListItem;