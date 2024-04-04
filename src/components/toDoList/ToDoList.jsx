/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./TodoList.scss";
import deleteIcon from '../../../public/image/deleteIcon.jpg';
import editIcon from '../../../public/image/editIcon.jpg';

const ToDoList = () => {
    const [input, setInput] = useState("");   //du lieu tai o input
    const [todo, setTodo] = useState([]);       //list todo
    const [editIndex, setEditIndex] = useState(null);  //chi muc item can edit (co the lam trang thai xuat hien update)
    const [editValue, setEditValue] = useState("");

    const addToDo = () => {
        setTodo([...todo, input]);
        setInput("");
    }

    const deleteTodo = (id) => {
        const currentTodo = todo.filter((item, index) => index !== id);
        setTodo(currentTodo);
        console.log(currentTodo);
    }

    const editTodo = (index) => {
        setEditIndex(index);   //lay chi so item
        setEditValue(todo[index]);  //set du lieu input
    }

    const updateTodo = () => {
        const updatedTodo = [...todo];
        updatedTodo[editIndex] = editValue; //cap nhat lai gia tri cho item update
        setTodo(updatedTodo);
        setEditIndex(null);
        setEditValue("");
    }
  return (
    <div className='body'>
        <div className='container'>
            <p className='title'><b>What's the Plan for Today</b></p>
            <div className='enter-input'>
                <input placeholder='Add a todo' onChange={(e) =>  setInput(e.target.value)} value={input}/>
                <button className='button-add' onClick={addToDo}><b>Add Todo</b></button>
                {editIndex !== null && (<div className='enter-input'>
                                    <input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                                    <button className='button-add' onClick={updateTodo}><b>Update</b></button>
                </div>)}
            </div>
            <div className='content'>
                {todo && todo.map((item, index) => {
                    return <div className={index % 2 === 0 ? 'item-even' : 'item-odd'} key={index}>
                        {item}
                        <div className='icon'>
                            <img src={deleteIcon} className='delete-icon' onClick={() => deleteTodo(index)}/>
                            <img src={editIcon} className='edit-icon' onClick={() => editTodo(index)}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default ToDoList;