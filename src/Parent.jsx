import React, { useState } from 'react'
import Child from './Child'
import './Parent.css'

export default function Parent() {
    // since each box doesn't change color together, so need four "className"
    const [className, setClassName] = useState("white");
    const [className2, setClassName2] = useState("white");
    const [className3, setClassName3] = useState("white");
    const [className4, setClassName4] = useState("white");
    const [counter, setCounter] = useState(0)

    function colorChange() {
        if (className === 'white') {
            setClassName("black");
            setCounter(counter + 1);
        }
        if (className === 'black') {
            setClassName("white");
            setCounter(counter - 1);
        }
    }

    function colorChange2() {
        if (className2 === 'white') {
            setClassName2("black");
            setCounter(counter + 1);
        }
        if (className2 === 'black') {
            setClassName2("white");
            setCounter(counter - 1);
        }
    }

    function colorChange3() {
        if (className3 === 'white') {
            setClassName3("black");
            setCounter(counter + 1);
        }
        if (className3 === 'black') {
            setClassName3("white");
            setCounter(counter - 1);
        }
    }

    function colorChange4() {
        if (className4 === 'white') {
            setClassName4("black");
            setCounter(counter + 1);
        }
        if (className4 === 'black') {
            setClassName4("white");
            setCounter(counter - 1);
        }
    }




    return (
        <div className='canvas'>
            <b>Count: {counter}</b>
            <div className='container'>
            <Child color={className} onClickFunc={colorChange}/>
            <Child color={className2} onClickFunc={colorChange2}/>
            <Child color={className3} onClickFunc={colorChange3}/>
            <Child color={className4} onClickFunc={colorChange4}/>
            </div>
        </div>
    )
}