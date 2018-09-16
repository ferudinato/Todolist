import React from 'react';

import Stylesheet from './Modal.css';


const modal = (props) => {
    let BtnStyles = [Stylesheet.Button, Stylesheet.green]

    return (
        <div
            className={Stylesheet.Modal} 
            style={{transform: props.open ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.open ? '1' : '0'}}>
            <p className={Stylesheet.Message}>{props.children}</p>
            <hr className={Stylesheet.Separator} />
            <button className={BtnStyles.join(' ')} onClick={props.closed}>Aceptar</button>
        </div>
    )
}

export default modal;