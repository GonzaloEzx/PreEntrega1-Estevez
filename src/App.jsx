import { useRef, useState } from 'react'

import { ItemCount } from './components/ItemCount/ItemCount'
import Titulo from './components/Titulo/Titulo'
import { Formulario } from './components/Formulario/Formulario'
import './App.css'

let task = (numero1, numero2) => {
    new Promise((resuelto, reject)=>{
    // acciones
        
    })
}


task(12, 6)
    .then(resp=>{
        // throw new Error('Error Forzad')
        console.log(resp)
    }, err=>console.log(err))
    .catch(err => console.log(err))



function App() { 
    const divRef = useRef(null)
    // console.log(divRef)

    const handleClick = () => {
        divRef.current.innerHTML = 'nuevo contenido'
    }
    console.log('Componente App')
    return(
        <div className='App'>
            <div ref={divRef}>
                Contenido original
            </div>
            <button onClick={handleClick}>Cambiar valor</button>
            <ItemCount />
        </div>
)}

export default App


// render 
// 1 ver -> montaje
// sgtes re render 
// última -> dismounting

// que produce un re render : 
    // cambios en un props
    // cambios en un estados
    // - evento