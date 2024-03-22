import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path = '/signup' element = {<Signup />}/>
        <Route path = '/login' element = {<Login />}/>
        <Route path = '/forgotPassword' element = {<ForgotPassword />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
