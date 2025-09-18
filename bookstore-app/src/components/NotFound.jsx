import React from "react";
import { Link,useNavigate } from  "react-router-dom";

const NotFound=()=> {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/")
    }

     return (
        <div style={{ textAlign: "center" }}>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
             <button onClick={handleGoHome}>Go to Homepage</button>
        </div>
     );
};

export default NotFound;