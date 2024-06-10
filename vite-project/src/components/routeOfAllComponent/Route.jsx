import React from "react";

// latest routing predefinded libarry which contains code that we are directly using.
import {createBrowserRouter} from "react-router-dom"


// independent components bring here for making path
import Landing from '../Landing'
import Home from  "../Home";
import Item1 from '../items/Item1'
import Item2 from '../items/Item2'
import Item3 from '../items/Item3'
import Item4 from '../items/Item4'
import Item5 from '../items/Item5'
import Item6 from '../items/Item6'


// creation of routes for browser because browser is stupid he cant understand the things like human can do.

  export let route = createBrowserRouter(
    [
      {
        path:"/",
        element:<Landing/>
      },
      {
        path:"/home",
        element:<Home/>,
        children:[ // home ke children banate time , jab uska uska children kahan render hoga uske liye <Outlet/> use krna hoga component ke return ke andr.
          {
            path:"/home/item1",
            element:<Item1/>
          },
          {
            path:"/home/item2",
            element:<Item2/>
          },
          {
            path:"/home/item3",
            element:<Item3/>
          },
          {
            path:"/home/item4",
            element:<Item4/>
          },
          {
            path:"/home/item5",
            element:<Item5/>
          },
          {
            path:"/home/item6",
            element:<Item6/>
          }
        ]
      }
    ]
  )