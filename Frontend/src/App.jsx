// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
// const element = <h1>hello</h1>;
import { Routes,Route } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from  "./pages/Home"
const App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home name="smily"/>}/>
      </Routes>

    </>
  )
}
export default App