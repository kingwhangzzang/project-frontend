import './App.css'
import { BrowserRouter,Router,Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
  )
}

export default App
