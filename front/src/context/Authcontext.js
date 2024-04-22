import { createContext, useState } from "react";
const Authcontext = createContext();
import React from 'react'

const Authprovider = ({children}) => {
    const [currentuser,setcurrentuser]=useState() 
    const [loading,setloading]=useState(true) 
  return (
    <div>
      <Authcontext.Provider value={{currentuser}}>{!loading && children}</Authcontext.Provider>
    </div>
  )
}

export default Authprovider
