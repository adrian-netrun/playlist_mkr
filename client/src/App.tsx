import { useState, setState, type SetStateAction} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Main from './pages/Main'

const [token, setState]: [string, React.Dispatch<SetStateAction<string>>] = useState('')


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
 