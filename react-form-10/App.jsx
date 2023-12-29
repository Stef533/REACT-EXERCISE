import { useEffect, useState, useRef } from 'react'

// eslint-disable-next-line react/prop-types
export function Counter({ initialValue = 0 }){
  const [counter, setCounter] = useState(initialValue)
  const inputRef = useRef(3)


  useEffect(() => {
    console.log('up')
  }, [])

  useEffect(() => {
    console.log('down')
  }, [])

  function handleCounterIncrement(){
    setCounter((c) => c + 1)
    console.log('up')
  }

  function handleCounterDecrement(){
    setCounter((c) => c - 1)
    console.log('down')
  }

  function handleCounterReset(){
    setCounter(initialValue)
  }

  useEffect(() => {
    if ( inputRef > counter){
      console.log('ref and counter are equal')
    } else {
      console.log('ref is not the same number of counter')
    }
  })

  return (
    <div>
      <p>I have counted to {counter}</p>
    <button onClick={handleCounterIncrement}>Increment</button>
    <button onClick={handleCounterDecrement}>Decrement</button>
    <button onClick={handleCounterReset}>Reset</button>
    </div>
  )
}

// Non ho capito bene la seconda parte dell'esercizio, ho provato a usare un if per stampare un risultato in console ma non è il risultato voluto