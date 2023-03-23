import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


console.log('hola')

// let i = 0
// i = i + 1
// sugar sintax
// i++
// i += 1

const condition = false
// let resultado = ''

// if (condition) {
//   resultado = 'es verdadero'
// }else{
//   resultado = 'es falso'
// }

// console.log('El resultado es: ', resultado + '. Este es correto \n Todo bien')

// console.log(`El resutado es: ${condition ? 'es verdadero' : 'es falso'}. ESto es correcto\n. Todo bien`)

// spread operator 

// const array = [ 1,2,3,4,5 ]
// let seis = 6

// const newArray= [ ...array, seis  ]

// console.log('newArray', newArray)

// propiedades dinámicas
// let variablePApellido = 'Osandon'
// let campo = 'id'

// const obj = {
//   name: 'Fede',
//   apellido: variablePApellido,
//   [ campo ]: 'ESo es campo',
//   email: 'email@email.com'
// }

// deep mactching
    // destructuring 
    // const name = obj.name
    // const apellido = obj.apellido
//     const { name: firstName, apellido, email='f@gmail.com' } = obj
// console.log(firstName)
// console.log(email)

// ejemplo de pollify con find sin usar find
// function find(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       return array[i];
//     }
//   }
//   return undefined;
// }


// jsx = js + xml 

{/* <div style="font-Size: 16px;"> */}
// toda etiqueta debe cerrarse. Dos formas de cerrar una etiqueta:
// 1. con una etiqueta de cierre </div>
// 2. con una etiqueta auto-cerrada <div />

function App() {
    const objStyle= { 
        fontSize: 25, 
        backgroundColor: 'red' 
    }
    const ejemplo = ()=> alert('Esto es un onClick')

    return (
        <div className='App' >
            <nav>
                <li>Ecommerce</li>
                <li>Gorras</li>
                <li>Remeras</li>
            </nav>
            <h1>Hola Coders</h1>
            <hr></hr>
            <br></br>
            <div onClick={ejemplo}>
                Esto es un evento en eun div
            </div>
            
            <img />
            <input type='text' placeholder='ingrese un nombre' />
        </div>
    )
}

export default App
