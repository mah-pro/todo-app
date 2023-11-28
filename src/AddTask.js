    // AddTask.js
    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { addTask } from './actions';

    const AddTask = () => {
    const dispatch = useDispatch();
    const [taskDescription, setTaskDescription] = useState('');

    const handleAddTask = () => {
        if (taskDescription.trim() !== '') {
        const taskId = new Date().getTime(); 
        dispatch(addTask(taskId, taskDescription));
        setTaskDescription('');
        }
    };

    return (
        <div>
        <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button onClick={handleAddTask} id='add'>Add Task</button>
        </div>
    );
    };

    export default AddTask;
