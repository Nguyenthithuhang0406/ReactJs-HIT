/* eslint-disable */


import React from 'react'
import { store } from './store';
import { increment } from './store/actions';
import { useSelector } from 'react-redux';
// import useStore from './hooks/useStore';
// import { actions } from './storeContext';


const App = () => {
  // const [state, dispatch] = useStore();
  // const { todos, todoInput } = state;

  // const handleAdd = () => {
  //   dispatch(actions.addTodo(todoInput));
  // }

  console.log(store);

  const count = useSelector(store.getState);

  return (
    // <div>
    //   <input type='text'
    //     placeholder='Enter todo...'
    //     value={state.todoInput}
    //     onChange={(e) => dispatch(actions.setInputTodo(e.target.value))}
    //   />
    //   <button onClick={handleAdd}>Add Todo</button>

    //   {todos.map((todo, index) => {
    //     return <li key={index}>{todo}</li>
    //   })}
    // </div>
    <div>
      <h1>{count.count}</h1>
      <button onClick={() => store.dispatch(increment())}>Tang</button>
    </div>
  )
}

export default App