import React from 'react';
import './Child.css'

function Child(props) {
    const className = props.color;
    const onClickFunc = props.onClickFunc
    // return for each box
    return (
    <div className={className} onClick={onClickFunc}> </div> )
}

export default Child;