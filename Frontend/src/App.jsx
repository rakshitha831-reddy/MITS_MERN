import {Routes,Route, Router} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import About from './pages/About'
import Contact from './Pages/Contact'
import Service from './pages/Service'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import Signup from './Auth/Signup'
import UseRef from './Hooks/UseRef'
import UseReducer from './Hooks/UseReducer' 
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home name="Smily"/>}/>
        <Route path='/About' element={<About name="Smily" age={20} dept="CSD"/>}></Route>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
       {/* hooks */}
        <Route path='/hook' element={<Hook/>}>
        <Route path='useState' element={<UseState/>}/>
         <Route path='useEffect' element={<UseEffect/>}/>
         <Route path='useEffectApi' element={<UseEffectApi/>}/>
         <Route path='useRef'element={<UseRef/>}/>
         <Route path='useReducer'element={<UseReducer/>}/>
      </Route>
      </Routes>
     </>
  )
}

export default App