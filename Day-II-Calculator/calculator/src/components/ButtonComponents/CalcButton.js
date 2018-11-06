import React from 'react';
import './Button.css';

function CalcButton(props) {
    return <button className={props.buttonStyle}>{props.text}</button>;
}

export default CalcButton;