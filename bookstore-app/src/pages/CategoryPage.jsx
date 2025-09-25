import {Link} from "react-router-dom" ;
import React from "react";
// import './style/HomePage.css';

const CategoryPage=()=> {                                        
    return (
        <div style={{ textAlign: "center" }}>
            <h1>서점에 오신 것을 환영합니다. 📖</h1>
            <h2>This is CategoryPage</h2>
            <Link to="/"> Go to Homepage </Link>
        </div>

    )
}
export default CategoryPage;