import React from "react";

const TaskList = (props)=>{
    return(
        <div className={"list"}>
            {
                props.tasks.map(item=> <TaskItem item={item}/>)
            }
        </div>
    );
};

const TaskItem=(props)=>{
    return <div className={"task"}>
        <p className={"tasktitle"}>{props.item}</p>
    </div>
};

export default TaskList;