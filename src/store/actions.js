/* eslint-disable */
import { ADD_TODO, DELETE_TODO, ISEDITING, SET_TODO_INPUT, UPDATE_TODO } from "../constants/storeConstants"

export const setInputTodo = (payload) => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

export const updateTodo = (index) => ({
    type: UPDATE_TODO,
    index
})  

export const isEditTodo = (index) => ({
    type: ISEDITING,
    index
})

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    index
})