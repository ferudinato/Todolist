import React from 'react';

const overlay = (props) => 
    <div style={{
        backgroundColor: 'rgba(79, 79, 79, 0.5)', 
        position: 'absolute', top: 0, left: 0, zIndex: '50',
        width: '100%', height: '100%', display: props.show ? 'block' : 'none'
    }} onClick={props.clicked}></div>

export default overlay;