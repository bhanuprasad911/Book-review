import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
// import { AuthProvider } from "./context/AuthContext";
// import { BookContextProvider } from "./context/BookContext";
import BookDetail from "./BookDetails";
import appStyle from "./styles/App.module.css";
// import Signupsuccess from "./signupsuccess.jsx";
import { useContext } from "react";
import Head from "./Head";
import UserProfile from './UserProfile.jsx'
// import { BooklistProvider } from "./context/BooklistContext.jsx";
import Allbooks from "./Allbooks.jsx";

function App() {
  return (
            <MainContent />  
  );
}

function MainContent() {
  const { theme, toggleTHeme } = useContext(ThemeContext);

  return (
    <>
    <div className={`${appStyle.header} ${theme === 'Light' ? appStyle.light : appStyle.dark}`}>

   
      <Routes>
        <Route
          path="/"
          element={
            <>            <Head>
             
              {/* <h1>React Book App</h1> */}
              <div className={appStyle.links}>
                <Link to="/login" className={appStyle.Link}>
                  Login
                </Link>
                <Link to="/signup" className={appStyle.Link}>
                  Signup
                </Link>
                
              </div>
            </Head>
            <h1 className={`${theme === 'Light' ? appStyle.lighthead : appStyle.darkhead}`}>This allows you to read and review the books. Please Login or Signup to continue</h1>
            </>

        
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
              <Home />
          }
        />
        {/* <Route path="/signup/ok" element={<Signupsuccess />} /> */}
        <Route
          path="/book/:id"
          element={
              <BookDetail />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='user/:username' element={<UserProfile />} />
        <Route path='/books' element={<Allbooks/>} />
      </Routes>
      </div>
    </>
  );
}

// <nav className={appStyle.nav}>
//         <h1>React Book App</h1>
//         <div className={appStyle.links}>
//           <Link to="/login" className={appStyle.Link}>Login</Link>
//           <Link to="/signup" className={appStyle.Link}>Signup</Link>
//         </div>
//       </nav>
export default App;
