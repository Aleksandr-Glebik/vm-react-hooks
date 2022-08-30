import React, {useState, useEffect} from 'react'

function App() {
  const [type, setType] = useState('users')

  const [data, setData] = useState([])

  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  // console.log('render component');

  // useEffect(() => {
  //   console.log('render');
  // })

  useEffect(() => {
    // console.log(`type change ${type}`);
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => setData(json))

      return () => {
        console.log('clean type');
      }
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('componentDidMount');

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType('users')} className='btn btn-success'>Пользователи</button>
      <button onClick={() => setType('todos')} className='btn btn-danger'>Todos</button>
      <button onClick={() => setType('posts')} className='btn btn-warning'>Posts</button>

      <pre>
        {JSON.stringify(pos, null, 2)}
      </pre>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default App
