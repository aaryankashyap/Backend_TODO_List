import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [task, setTask] = useState('');
    
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3001/add', { task });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleAdd} className='create_form'>
            <input
                type='text'
                placeholder='Enter Task'
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    );
}

export default Create;
