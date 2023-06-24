import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADERD, TOGGLED } from "./actionType"

export const loaded = (todos) => {
    return {
        type: LOADERD,
        paylaod: todos,
    }
}

export const added = (todoText) => {
    return {
        type: ADDED,
        paylaod: todoText,
    }
}
export const toggle = (todoId) => {
    return {
        type: TOGGLED,
        paylaod: todoId,
    }
}
export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        paylaod: {
            todoId, color,
        }
    }
}
export const deleted = (todoId) => {
    return {
        type: DELETED,
        paylaod: todoId,
    }
}
export const allcompleted = () => {
    return {
        type: ALLCOMPLETED,
    }
}
export const clearcompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}