import React, { Component } from 'react';
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      taskDescription: '',
      submissionError: ''
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/tasks')
      .then(response => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          tasks: json.tasks
        })
        console.log(this.state.tasks)
      })
    this.setState({
      taskDescription: '',
      submissionError: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if(!this.state.taskDescription) {
      this.setState({
        submissionError: 'Please specify a description'
      })
    }
    else {
      fetch('/api/v1/tasks', {
        method: 'post',
        body: JSON.stringify({task: {description: this.state.taskDescription}})
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          tasks: this.state.tasks.concat(body),
          submissionError: '',
          taskDescription: ''
        })
      })
    }
  }

  handleDescriptionChange(event) {
    event.preventDefault()
    this.setState({
      taskDescription: event.target.value
    })
  }


  render() {
    console.log(this.state.taskDescription)
    return (
      <div>
        <div className="list">
        <h1>Task List App</h1> 
          <TaskList
            tasks={this.state.tasks}
          />
        </div>
        <TaskForm
          taskDescription={this.state.taskDescription}
          submissionError={this.state.submissionError}
          handleSubmit={this.handleSubmit}
          handleDescriptionChange={this.handleDescriptionChange}
        />
      </div>
    )
  }
}

export default App;
