import React from 'react'
import TaskListItem from './task_list_item'

const TaskList = (props) => {

  let taskListItems = props.tasks.map(task => {
    return(
      <TaskListItem
        key={task.id}
        task={task}
      />
    )
  })

  return (
    <div className={props.className}>
      <h1>Task List App</h1>
      <ul>
        { taskListItems }
      </ul>
    </div>
  )
}

export default TaskList
