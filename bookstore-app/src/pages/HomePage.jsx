import {Link} from "react-router-dom" ;
import React from "react";
import './style/HomePage.css';

const Homepage=()=> {                                        
    return (
        <div style={{ textAlign: "center" }}>
            <h1>서점에 오신 것을 환영합니다. 📖</h1>
            <h2>Welcome to the Bookstore</h2>
            <Link to="/NotFound"> Go to Book List </Link>
        </div>

    )
}
export default Homepage;