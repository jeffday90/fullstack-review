import React from 'react';
import RepoListItem from './RepoListItem.jsx';

const RepoList = (props) => (
  <div>
    <h4 style={centerStyle}> Repo List Component </h4>
    <div>
      {props.repos.map(repo => <RepoListItem repo={repo}/>)}
    </div>
    There are {props.repos.length} repos. The filter is based on fork count.
  </div>
)

var centerStyle = {
  textAlign: 'center'
}

export default RepoList;