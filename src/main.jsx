import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router} from "react-router-dom";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { BookContextProvider } from "./context/BookContext";
import { BooklistProvider } from "./context/BooklistContext.jsx";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <BookContextProvider>
        <BooklistProvider>
          <Router>
            <App />
          </Router>
        </BooklistProvider>
        </BookContextProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
