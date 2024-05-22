import { ADD_TODO, DELETE_TODO, ISEDITING, SET_TODO_INPUT, UPDATE_TODO } from "../constants/storeConstants";

/* eslint-disable */
const initState = {
    todoInput: '',
    todos: [],
    edittingIndex: null
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
        case ISEDITING: {
            state.todoInput = state.todos[action.index];
            return {
                ...state,
                edittingIndex: action.index
            }
        }
        case UPDATE_TODO:
            return {
                todos: state.todos.map((todo, index) => index === state.edittingIndex ? state.todoInput : todo),
                edittingIndex: null,
                todoInput: ''
            }
        case DELETE_TODO:

            let deleteTodo = [...state.todos];
            deleteTodo.splice(action.index, 1);

            return {
                ...state,
                todos: [...deleteTodo]
            }

        default: {
            throw new Error("store internal!");
        }
    }
}


export { initState };
export default reducer;