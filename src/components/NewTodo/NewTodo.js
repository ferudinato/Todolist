import React from 'react';

import Stylesheet from './NewTodo.css';

const newTodo = (props) => {
    return (
        <div className={Stylesheet.NewTodo}>
            <form onSubmit={props.submitted}>
                <label>
                    <span>Tarea:</span>
                    <input type='text' name='taskName' autoComplete='off' />
                </label>
                <button type='submit'>Agregar</button>
            </form>
        </div>
    )
}

export default newTodo;