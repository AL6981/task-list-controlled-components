import React from 'react'
import TaskListItem from './TaskListItem'

const TaskList = (props) => {
  let taskListItems = props.tasks.map(task => {
    return(
      <TaskListItem
        key={task.id}
        task={task.description}
      />
    )
  })

  return (
    <ul>
      {taskListItems}
    </ul>
  )
}

export default TaskList
