import {Link} from "react-router-dom" ;
import React from "react";

const AboutPage=()=> {                                        
    return (
        <div style={{ textAlign: "center" }}>
            <h1>서점에 오신 것을 환영합니다. 📖</h1>
            <h2>Welcome to the AboutPage</h2>
            <Link to="/"> Go to Homepage </Link>
        </div>

    )
}
export default AboutPage;