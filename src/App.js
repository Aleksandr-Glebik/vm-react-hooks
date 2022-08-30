import React, { useState } from 'react'

function computeInitialCounter() {
  console.log('som calculations...')
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [counter, setCounter] = useState(0)
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  })

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  })

  function increment() {
    // setCounter(counter + 1)
    setCounter(prev => prev + 1)
  }

  function decrement() {
    // setCounter(counter - 1)
    setCounter(prev => prev - 1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }
    })
  }

  return (
    <div>
      <h1>Счетчик {counter}</h1>

      <button
        className='btn btn-success'
        onClick={increment}
      >Добавить</button>

      <button
        className='btn btn-danger'
        onClick={decrement}
      >Убрать</button>

      <button
        className='btn btn-info'
        onClick={updateTitle}
      >Изменить название</button>

      {/* <button
        className='btn btn-info'
        onClick={() => setState({...state, title: 'new Title'})}
      >Изменить название</button> */}

      {/* <button
        className='btn btn-success'
        onClick={() => setCounter(prev => prev + 1)}
      >Добавить</button>

      <button
        className='btn btn-danger'
        onClick={() => setCounter(prev => prev - 1)
        }>Убрать</button> */}
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}

export default App
