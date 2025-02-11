import React, { useContext } from 'react'
import headerStyle from './styles/header.module.css'
import { ThemeContext, ThemeProvider} from './context/ThemeContext'

function Head({children}) {
  const {theme, toggleTheme}=useContext(ThemeContext)
  return (
    <>
      <div className={`${headerStyle.main} ${theme === 'Light' ? headerStyle.light : headerStyle.dark}`}>
    
        <div className={headerStyle.inner}>
          <div className="left">

          <h1>Book review app</h1>
          </div>
          <div className={headerStyle.right}>

        <button onClick={toggleTheme} className={headerStyle.button}>
        {theme === 'Dark' ? 'Light' : 'Dark'}
      </button>
      {children}
          </div>

        </div>
     
      </div>
    </>
  
  )
}

export default Head
