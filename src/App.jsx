/* eslint-disable */


import React from 'react'
import useStore from './hooks/useStore';
import { actions } from './store';

import "./App.scss";


const App = () => {
  const [state, dispatch] = useStore();
  const { todos, todoInput, edittingIndex } = state;

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  }

  const handleUpdate = () => {
    dispatch(actions.updateTodo(edittingIndex));
  }

  const updateTodo = (index) => {
    dispatch(actions.isEditTodo(index));
  }

  const deleteTodo = (index) => {
    dispatch(actions.deleteTodo(index));
  }
  return (
    <div className='app'>
      <div className='body'>
        <h1> Todo </h1>
        <input type='text'
          placeholder='Enter todo...'
          value={state.todoInput}
          onChange={(e) => dispatch(actions.setInputTodo(e.target.value))}
        />
        {edittingIndex === null
          ?
          <button className='button' onClick={handleAdd}>Add Todo</button>
          :
          <button className='button' onClick={handleUpdate}>Update Todo</button>
        }


        {todos.map((todo, index) => {
          return <li key={index}>
            <p style={{ display: 'inline' }}>{todo}</p>
            <div className='bt-action'>
              <button className='action' onClick={() => deleteTodo(index)}>&times;</button>
              <button className='action' onClick={() => updateTodo(index)}>Sửa</button>
            </div>
          </li>
        })}

      </div>
    </div>
  )
}

export default App