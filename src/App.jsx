//importancion
import React from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

import './App.css'

//Funcion flecha

const App = () => {
    //La ejecucion

        

            // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={undefined} />

        <Numbers onClickNumber={number => {
            console.log("Click en number", number) 
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
