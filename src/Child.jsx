import React, { useState } from 'react';
import './Child.css'

function Child() {

    const [boxColor, setBoxColor] = useState("white");
    const b = document.getElementById("box");
    console.log(b.style.backgroundColor);
    function colorChange() {
        if (b.style.backgroundColor === boxColor) {
            setBoxColor("Black");
        }
        else {
            setBoxColor("White");
        }
    }
    // b.addEventListener("click", colorChange);
    return (<div id='box'>
    </div> )
}

export default Child;