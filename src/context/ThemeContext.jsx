import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState('Dark')
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==='Light'?"Dark":'Light'))
    }


    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

