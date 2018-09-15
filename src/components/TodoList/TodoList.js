import React from 'react';

import Stylesheet from './TodoList.css';
import DeleteButton from '../../assets/images/deleteBtn.png';


const todoList = (props) => {
    let tasks = props.taskList.map((item, i) => {
        return (<li key={item.id}>
            <div className={Stylesheet.Capitalize}>{item.name}</div>
            <div className={Stylesheet.CloseBtn}>
                <button onClick={() => props.clicked(item.id)}>
                    <img width='10' alt='Eliminar tarea' src={DeleteButton} />
                </button>
            </div>
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