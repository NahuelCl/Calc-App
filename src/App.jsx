//importancion
import React, { useState } from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

import './App.css'

//Funcion flecha

const App = () => {
    //La ejecucion

    const [stack, setStack] = useState("")    

            // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={stack} />

        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            setStack(number) 
        }} />
        <Functions
            onContentClear = {clear =>
            console.log("Content Clear", clear)}

            onDelete = {() => 
            console.log("OnDelete" )}
        />
        <MathOperations 
            onClickOperation= {operation => 
                console.log ("operacion:", operation)
                }
            onClickEqual = {equal =>
            console.log("Equal:", equal)
            }
        />
    </main>)
}
export default App
