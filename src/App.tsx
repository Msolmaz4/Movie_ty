
import './App.css'
import Home from './Home/Home'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Page from './components/detail/Page'

function App() {
  return (
    <>
<BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/:id' element={<Page/>}/> 
        
      </Routes>
</BrowserRouter>
     
    </>
  )
}

export default App
