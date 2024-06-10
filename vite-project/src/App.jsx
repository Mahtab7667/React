import React from "react";

//2. old routing predefined libaries
// import { BrowserRouter, Route, Routes } from "react-router-dom";   


//1. import new version routing from routeAllComponent folder
import {route} from './components/routeOfAllComponent/Route'
import { RouterProvider } from "react-router-dom";







const App = () => {

  return (
    <>
    {/*1. new version of routing giving browser to routes that we have created via property called router that comes with react-router-dom elemnt which is RouterProvider */}
    <RouterProvider router={route}/>


    {/*2. old routing practice */}
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
     */}

    </>
  )
}

export default App




// major things written in these components, At time of revise must see these:-
// App,Route,Landing,Home,Navbar,Item1(useNavigate() hook)
