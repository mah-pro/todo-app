    // Task.js
    import React from 'react';
    import { useDispatch } from 'react-redux';
    import { toggleTask, updateTask, deleteTask } from './actions';

    const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleUpdate = (newDescription) => {
        dispatch(updateTask(task.id, newDescription));
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <li>
        <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggle}
        />
        <input
            type="text"
            value={task.description}
            onChange={(e) => handleUpdate(e.target.value)}
        />
        <button onClick={handleDelete} id='button'>
            Delete</button>
        </li>
    );
    };

    export default Task;
