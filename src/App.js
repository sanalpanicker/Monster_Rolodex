import React, { Component } from 'react';
import CardList from './componets/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

componentDidMount =() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response);
    //using the fetch API, repsonse gives the headers and we then call the .json to parse the response and promise is returned
    return response.json();
  })
  .then((users) => {
    console.log(users);
    this.setState({ users });
  });
}

render() {
  return (
    <div className="App">
      <CardList users={this.state.users} />
    </div>
  );
}
}

export default App;
