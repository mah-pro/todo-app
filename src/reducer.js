    // reducer.js
    import { ADD_TASK, TOGGLE_TASK, UPDATE_TASK, DELETE_TASK } from './actions';

    const initialState = {
    tasks: [],
    };

    const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
        return {
            ...state,
            tasks: [...state.tasks, action.payload],
        };
        case TOGGLE_TASK:
        return {
            ...state,
            tasks: state.tasks.map((task) =>
            task.id === action.payload.id
                ? { ...task, isDone: !task.isDone }
                : task
            ),
        };
        case UPDATE_TASK:
        return {
            ...state,
            tasks: state.tasks.map((task) =>
            task.id === action.payload.id
                ? { ...task, description: action.payload.description }
                : task
            ),
        };
        case DELETE_TASK:
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        };
        default:
        return state;
    }
    };

    export default todoReducer;
