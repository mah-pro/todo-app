    // ListTask.js
    import React from 'react';
    import { useSelector } from 'react-redux';
    import Task from './Task';

    const ListTask = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <>
        <div>
        <h2>My Task List</h2>
        </div>
        <div >
        <ul id='liste'>
        {tasks.map((task) => (
        <Task key={task.id} task={task} />
        ))}
        </ul>
        </div>
        </>
    );
    };

    export default ListTask;
