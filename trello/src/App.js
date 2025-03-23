import React, { useState } from "react";
import './style.css'
import TaskList from "./TaskList";

const App = ()=>{

    const [newTaskTest,setNewTaskTest] = useState("");
    const [tasks,setTasks] = useState(["do a task","do","just do"]);

    const addTask = ()=>{

        if(!newTaskTest)
        return;
        setTasks(currentTasks=>{
            return[...currentTasks,newTaskTest];
        });
        setNewTaskTest("");
    };

    const onChangeInput = (e)=>{
        const value = e.target.value;
        setNewTaskTest(value);
    };

    return(
        <div className={"container"}>
            <input value={newTaskTest} onChange={onChangeInput}/> <button onClick={addTask}>add</button>
            <TaskList tasks={tasks}/>
        </div>
    );
};

export default App;