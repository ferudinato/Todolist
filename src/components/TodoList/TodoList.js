import React from 'react';

import Stylesheet from './TodoList.css';


const todoList = (props) => {
    let tasks = props.taskList.map((item, i) => {
        return (<li key={item.id}>
            <div>{item.name}</div>
            <div className={Stylesheet.CloseBtn}><button onClick={() => props.clicked(item.id)}>X</button></div>
        </li>)
    })

    return (
        <div className={Stylesheet.TodoList}>
            {
                tasks.length > 0
                ?
                    (
                        <ul>
                            {tasks}
                        </ul>
                    )
                : <p className={Stylesheet.NoTaskYet}>No se han agregado tareas aún.</p>
            }
        </div>
    )
}

export default todoList;