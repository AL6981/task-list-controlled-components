import React, { Component } from 'react'
import TaskListItem from './task_list_item'

const TaskList = (props) => {
  const taskListItems = props.tasks.map((task) => {
    return( 
    <TaskListItem 
      key={task.id}
      task={task} 
      />
    )
  })
  return (
    <ul>
      { taskListItems }
    </ul>
  )
}

export default TaskList
