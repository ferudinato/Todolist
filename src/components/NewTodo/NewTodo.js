import React from 'react';

const newTodo = (props) => {
    return (
        <div>
            <label>
                Tarea:
                <input type='text' />
            </label>
            <button>Agregar</button>
        </div>
    )
}

export default newTodo;