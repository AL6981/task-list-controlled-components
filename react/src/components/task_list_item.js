import React from 'react'

const TaskListItem = (props) => {
  return (
    <li className="item">{props.task.description}</li>
  )
}

export default TaskListItem
