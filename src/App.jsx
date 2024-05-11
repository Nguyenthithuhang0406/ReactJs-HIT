/* eslint-disable */
// /* eslint-disable */
// import React, { useReducer, useState } from 'react'

// //useState
// //initState
// //action (down/up)

// //useReducer
// //initState
// const initState = 0;
// //actions
// const UP_COUNT = 'up';
// const DOWN_COUNT = 'down';
// const DIVIDE_BY = 'divide';
// //reducer
// const reducer = (state, action) => {

//   switch (action.type) {
//     case UP_COUNT:
//       return state + 1;
//     case DOWN_COUNT:
//       return state - 1;
//     case DIVIDE_BY:
//       // return state / action.divisor;   //chia dung
//       return Math.floor(state / action.divisor);

//     default:
//       throw new Error("invalid action");
//   }

// }
// //dispatch
// const App = () => {

//   //dispatch
//   const [count, dispatch] = useReducer(reducer, initState);
//   const [divisor, setDivisor] = useState(1);

//   const handleDown = () => {
//     setCount(count - 1);
//   };

//   const handleUp = () => {
//     setCount(count + 1);
//   }
//   return (
//     <>
//       <button onClick={() => dispatch({ type: DOWN_COUNT })}>down</button>
//       <button onClick={() => dispatch({ type: UP_COUNT })}>up</button>
//       <br/><br/>
//       <div>
//         <input className='input' onChange={(e) => setDivisor(e.target.value)}
//         />
//         <button onClick={() => dispatch({type: DIVIDE_BY, divisor: divisor})}>divide</button>
//       </div>

//       <br />
//       <p>{count}</p>
//     </>
//   )
// }

// export default App;


import React, { useReducer } from 'react';
import './App.scss';
import "./index.scss";


// useReducer
// 1. init State
const initState = {
  todoInput: '',
  todos: [],
  editingIndex: null
}
// 2. actions
const SET_INPUT_VALUE = 'set_input_value'
const ADD_TODO = 'add';
const UPDATE_TODO = 'update';
const DELETE_TODO = 'delete';
const ISEDITING = 'edit';

const setTodo = payload => ({
  type: SET_INPUT_VALUE,
  payload
})

const updateTodo = (index) => ({
  type: UPDATE_TODO,
  index
});

const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index
})
// 3. reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        todoInput: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
        todoInput: '',
      }

    case ISEDITING:
      state.todoInput = state.todos[action.index];
      return {
        ...state,
        editingIndex: action.index,
      }

    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo, index) => index === state.editingIndex ? state.todoInput : todo),
        todoInput: '',
        editingIndex: null,
      }

    case DELETE_TODO:
      let deleteTodo = [...state.todos];
      deleteTodo.splice(action.id, 1);
      console.log(deleteTodo);
      return {
        ...state,
        todos: [...deleteTodo]
      }

    default:
      throw new Error("Invalid action")
  }
}
// 4. dispatch

function App() {

  const [todo, dispatch] = useReducer(reducer, initState);

  return (
    <div className='app'>
      <div className='body'>
        <h1 >Todo</h1>
        <input
          type="text"
          placeholder='Enter your todo'
          value={todo.todoInput}
          onChange={e => dispatch(setTodo(e.target.value))}
        />
        {
          todo.editingIndex !== null ?
            <button className='button' onClick={() => dispatch({ type: UPDATE_TODO })}>Update todo</button> :
            <button className='button' onClick={() => dispatch({ type: ADD_TODO })}>Add todo</button>
        }

        <ul>
          {
            todo?.todos && todo.todos.map((item, index) => (
              <li key={index}>
                <p style={{ display: 'inline' }}>
                  {item}
                </p>
                <div className='bt-action'>
                  <button className='action' onClick={() => dispatch(deleteTodo(index))}>&times;</button>
                  <button className='action' onClick={() => dispatch({ type: ISEDITING, index })}>Sửa</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App;