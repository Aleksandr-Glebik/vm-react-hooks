import React, {useState, useEffect, useRef} from 'react'

// let renderCount = 1

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')

  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const pervValue = useRef('')

  useEffect(() => {
    // setRenderCount(prev => prev + 1)
    renderCount.current++
    // console.log(inputRef.current);
    console.log(inputRef.current.value);
  })

  const focus = () => {
    return inputRef.current.focus()
  }

  useEffect(() => {
    pervValue.current = value
  }, [value])



  return (
    <div>
      <h1>Количество рендеров {renderCount.current}</h1>
      <h2>Предыдущее значение input {pervValue.current}</h2>
      <input ref={inputRef} type={'text'} onChange={e => setValue(e.target.value)} value={value}/>
      <button className='btn btn-success' onClick={focus}>Фокус</button>
    </div>
  )
}

export default App
