import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

function TryLogin(){
    // const navigate = useNavigate();
    return(
        <>
        <h1>please <Link to='/login'> login </Link> here</h1>
        </>
    )

}

export default TryLogin