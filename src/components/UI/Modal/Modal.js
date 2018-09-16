import React from 'react';

import Stylesheet from './Modal.css';


const modal = (props) => {
    let BtnOk = [Stylesheet.Button, Stylesheet.green]
    let BtnCancel = [Stylesheet.Button, Stylesheet.red]

    return (
        <div
            className={Stylesheet.Modal} 
            style={{transform: props.open ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.open ? '1' : '0'}}>
            <p className={Stylesheet.Message}>{props.children}</p>
            <hr className={Stylesheet.Separator} />
            <div className={Stylesheet.Btns}>
                <button className={BtnOk.join(' ')} 
                        style={{display: props.btnOk ? 'block' : 'none'}} onClick={props.closed}>Aceptar</button>
                <button className={BtnCancel.join(' ')}
                        style={{display: props.btnCancel ? 'block' : 'none'}} onClick={props.closed}>Cancelar</button>
            </div>
        </div>
    )
}

export default modal;