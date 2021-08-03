//importancion
/* eslint no-eval: 0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

import './App.css'

//Funcion flecha

const App = () => {
    //La ejecucion

    const [stack, setStack] = useState("")   
    
    const items = words(stack, /[^-^+^*^/]+/g)

    console.log(items)

            // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={items[items.length-1]} />

        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            setStack(`${stack}${number}`) 
        }} />
        <Functions
            onContentClear = { () => {
            console.log("Content Clear")
            setStack("")}}

            onDelete = {() => {
            if(stack.length > 0){
                console.log("OnDelete" )
                const newStack = stack.substring(0, stack.length-1)
                setStack(newStack)
            }
            
        }}
        />
        <MathOperations 
            onClickOperation= {operation => {
                console.log ("operacion:", operation)
                setStack(`${stack}${operation}`) 
                }}
            onClickEqual = {equal =>{
            console.log("Equal:", equal)
            setStack(eval(stack).toString()) 
            }}
        />
    </main>)
}
export default App
