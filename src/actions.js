    // actions.js
    export const ADD_TASK = 'ADD_TASK';
    export const TOGGLE_TASK = 'TOGGLE_TASK';
    export const UPDATE_TASK = 'UPDATE_TASK';
    export const DELETE_TASK = 'DELETE_TASK';

    export const addTask = (id, description) => ({
    type: ADD_TASK,
    payload: { id, description, isDone: false },
    });

    export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: { id },
    });

    export const updateTask = (id, description) => ({
    type: UPDATE_TASK,
    payload: { id, description },
    });

    export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: { id },
    });
