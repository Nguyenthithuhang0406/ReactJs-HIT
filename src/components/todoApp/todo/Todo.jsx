/* eslint-disable */


import React from 'react'
import { actions } from "../store/index";
import useStore from "../hooks/useStore";

import "./Todo.scss";
import Header from '../../page/header/Header';


const Todo = () => {
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
    <>
      <Header />
      <div className='app'>
        <div className='body-todoapp'>
          <h1> Todo </h1>
          <div className='input-todoapp'>
            <input type='text'
              placeholder='Enter todo...'
              value={state.todoInput}
              onChange={(e) => dispatch(actions.setInputTodo(e.target.value))}
            />
            {edittingIndex === null
              ?
              <button className='button-todoapp' onClick={handleAdd}>Add Todo</button>
              :
              <button className='button-todoapp' onClick={handleUpdate}>Update Todo</button>
            }
          </div>

          {todos.map((todo, index) => {
            return <li key={index}>
              <p style={{ display: 'inline' }}>{todo}</p>
              <div className='bt-action'>
                <button className='action-todoapp' onClick={() => deleteTodo(index)}>&times;</button>
                <button className='action-todoapp' onClick={() => updateTodo(index)}>Sửa</button>
              </div>
            </li>
          })}

        </div>
      </div>
    </>
  )
}

export default Todo;