import React from 'react';

const TaskForm = (props) => {
  return (
    <div className="form">
      <h3>Add New Task</h3>

      <form onSubmit={props.handleSubmit }>
        <span id="error">{ props.submissionError }</span>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={props.taskDescription}
          onChange={props.handleDescriptionChange}
        />
        <input
          type="submit"
          value="Add Task!"
          id="new-task-submit-button"
        />
      </form>
    </div>
  )
}

export default TaskForm
