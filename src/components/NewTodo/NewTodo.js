import React from 'react';

import Stylesheet from './NewTodo.css';
import AddButton from '../../assets/images/addBtn.png';


const newTodo = (props) => {
    return (
        <div className={Stylesheet.NewTodo}>
            <form onSubmit={props.submitted}>
                <label>
                    <span>Tarea:</span>
                    <input type='text' name='taskName' autoComplete='off' />
                </label>
                <button type='submit'><span><img src={AddButton} alt='Añadir tarea' /></span>Agregar</button>
            </form>
        </div>
    )
}

export default newTodo;