import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from 'reducers/todos'

export const TodoItem = ({ itemIndex }) => {

  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  const onRemoveClicked = event => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex,
      })
    )
  }

  const handleOnChange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      })
    )
  }

  return (
    <div className={`todo-item ${item.done ? 'done' : ''}`}>

      <label className='checkbox'>
        <input
          type='checkbox'
          onChange={handleOnChange}
          className='todo-item-check'
          checked={item.done ? 'checked' : ''}>
        </input>
        <span className='custom-checkbox'></span>
      </label>

      <span className='todo-item-description'>
        {item.description}
      </span>

      <button
        className='todo-item-remove'
        onClick={onRemoveClicked}>
        REMOVE
      </button>

    </div>
  )
}