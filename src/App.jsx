//importancion
import React from 'react'
import Button from './components/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'

import './App.css'

//Funcion flecha

const App = () => {
    //La ejecucion

    const clickHandlerFunction = (text) =>{
        console.log("Button.clickHandler",text)
    }
        

            // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={undefined} />
        <div className="numbers">
            <Button text="1" clickHandler = {clickHandlerFunction}/>
            <Button text="2" clickHandler = {clickHandlerFunction} />
            <Button text="3" clickHandler = {clickHandlerFunction}/>
            <Button text="4" clickHandler = {clickHandlerFunction}/>
            <Button text="5" clickHandler = {clickHandlerFunction}/>
            <Button text="6" clickHandler = {clickHandlerFunction}/>
            <Button text="7" clickHandler = {clickHandlerFunction}/>
            <Button text="8" clickHandler = {clickHandlerFunction}/>
            <Button text="9" clickHandler = {clickHandlerFunction}/>
            <Button text="0" clickHandler = {clickHandlerFunction}/>
        </div>
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
