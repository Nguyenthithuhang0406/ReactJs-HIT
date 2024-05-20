/* eslint-disable */
import { ADD_TODO, SET_TODO_INPUT } from "../constants/storeConstants"

export const setInputTodo = (payload) => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})