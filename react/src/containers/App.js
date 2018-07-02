import React, { Component } from 'react';
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
        <div className="list">
        <h1>Task List App</h1>
        </div>
      </div>
    )
  }
}

export default App;
