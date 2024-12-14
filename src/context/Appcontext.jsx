import { createContext, useState } from "react";
import { doctors } from "../assets/assets";
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider =(props)=>{

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  
  const[token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    



    const value={
        doctors,
        token,
        setToken, 
        backendUrl,
    }




    return (
        <AppContext.Provider value={value}>
          {props.children}
        </AppContext.Provider>
      )
}
export default AppContextProvider