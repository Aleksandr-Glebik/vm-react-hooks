import React, { useEffect, useState } from 'react'

function useLogger(value) {
  useEffect(() => {
    console.log('value changed', value);
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    // value, onChange
    value,
    clear
  }
}

function App() {

  // const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')

  // const changeHandler = event => {
  //   setName(event.target.value)
  // }
  // const changeLastHandler = event => {
  //   setLastName(event.target.value)
  // }

  const input = useInput('')
  // const lastName = useInput('')

  // useLogger(name)
  useLogger(input.value)

  return (
    <div className='container pt-3'>
      {/* <input
        type={'text'}
        value={name}
        onChange={changeHandler}
      /> */}
      <input
        type={'text'}
        {...input.bind}
      />
      <button className='btn btn-warning' onClick={() => input.clear()}>Очистить</button>
      {/* <input
        type={'text'}
        {...lastName}
      /> */}
      {/* <input
        type={'text'}
        value={input.value}
        onChange={input.onChange}
      /> */}
      {/* <input
        type={'text'}
        value={lastName}
        onChange={changeLastHandler}
      /> */}

      <hr />
      <h1>{input.value}</h1>
      {/* <h1>{lastName.value}</h1> */}
      {/* <h1>{name}</h1> */}
      {/* <h1>{lastName}</h1> */}

    </div>
  )
}

export default App
