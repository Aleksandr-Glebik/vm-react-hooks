import React from 'react'
import Alert from './alert/Alert'
import Main from './Main'
import { AlertProvider } from './alert/AlertContext'

export const AlertContext = React.createContext()

function App() {
  return (
    <AlertProvider>
      <div className='container pt-4'>
        <Alert />
        <Main />
      </div>
    </AlertProvider>

  )
}

export default App
