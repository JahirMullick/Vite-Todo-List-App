import React, { useEffect, useState } from 'react'

const Task = ({ title, description, deleteTask, index }) => {

    return <div className='task'>
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button onClick={() => deleteTask(index)}>X</button>
    </div>
}
const Home = () => {
    const initialArr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    const [tasks, setTasks] = useState(initialArr);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, { title, description, }]);
        setTitle("");
        setDescription("");
    };

    const deleteTask = (index) => {
        const filteredArr = tasks.filter((val, i) => {
            return i !== index;
        });
        setTasks(filteredArr);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])


    return (
        <>
            <div className="container">
                <h2>Add Your Task</h2>

                <form onSubmit={submitHandler}>

                    <input
                        type="text"
                        placeholder='Task Name'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />

                    <textarea
                        type="text"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    <button type='submit'>Add</button>

                    <hr style={{ marginTop: '30px' }} />
                </form>
                {tasks.map((item, index) => (
                    <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
                ))}
            </div>
        </>
    )
}

export default Home

