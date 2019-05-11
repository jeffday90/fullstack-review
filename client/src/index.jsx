import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  componentDidMount(){
    this.getRepos();
  }

  getRepos (){
    console.log('start of GET repos func');
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'GET',
      success: (data) => this.setState({
        repos: data
      }, () => console.log('GET in index (callback from GET)')),
      error: () => console.log('error on GET request')
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'POST',
      contentType: 'text/plain',
      data: term,
      success: () => {this.getRepos()},
      error: () => console.log('POST error!')
    });
  }

  render () {
    return (<div>
      <h1 style={centerStyle}>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

var centerStyle = {
  textAlign: 'center'
}

ReactDOM.render(<App />, document.getElementById('app'));