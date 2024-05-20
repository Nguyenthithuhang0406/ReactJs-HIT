import { ADD_TODO, SET_TODO_INPUT } from "../constants/storeConstants";

/* eslint-disable */
const initState = {
    todoInput: '',
    todos: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoInput: ''
            }
        default: {
            throw new Error("store internal!");
        }
    }
}


export { initState };
export default reducer;