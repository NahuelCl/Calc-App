//importancion
import React from 'react'
import Result from './components/Result'
import Button from './components/Button'
import './App.css'

//Funcion flecha

const App = () => {
    //La ejecucion
            // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={undefined} />
        <div className="numbers">
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
            <Button text="0" />
        </div>
        <div className="functions">
        <Button text="Clear" />
        <Button text="R" />
        </div>
        <div className="math-operations">
        <Button text="+" />
        <Button text="-" />
        <Button text="*" />
        <Button text="/" />
        <Button text="=" />
        </div>
    </main>)
}
export default App
