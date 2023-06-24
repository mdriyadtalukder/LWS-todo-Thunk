import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADERD, TOGGLED } from "./actionType";
const initialState = [];
const maxId = (todos) => {
    const getMaxId = todos.reduce((maxid, todo) => Math.max(todo.id, maxid), -1);
    return getMaxId + 1;
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOADERD:
            return action.paylaod;
        case ADDED:

            return [
                ...state,

                {
                    id: maxId(state),
                    text: action.paylaod,
                    completed: false,
                    color: "",
                }
            ]

        case TOGGLED:
            const toggle = state.map((todo) => {
                if (todo.id === action.paylaod) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                else {
                    return todo
                }
            })

            return toggle;


        case COLORSELECTED:
            const color = state.map((todo) => {
                if (todo.id === action.paylaod.todoId) {
                    return {
                        ...todo,
                        color: action.paylaod.color
                    }
                }
                else {
                    return todo
                }
            })
            return color

        case ALLCOMPLETED:
            const allcompleted = state.map((todo) => {
                return {
                    ...todo,
                    completed: true
                }
            })
            return allcompleted


        case CLEARCOMPLETED:
            const clearcompleted = state.filter((todo) => !todo.completed);
            return clearcompleted

        case DELETED:
            const deleted = state.filter((todo) => todo.id !== action.paylaod)
            return deleted


        default:
            return state
    }

};

export default todoReducer;