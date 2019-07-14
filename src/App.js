import React, { Component } from 'react';
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
      {
        this.state.users.map((users) => {
          return <h1>{users.name}</h1>;
        })
      }
    </div>
  );
}
}

export default App;
