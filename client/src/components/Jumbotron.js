import React from "react";
import Logo from "../assets/images/resizedlogo.png";

function Jumbotron({ children }) {
    return (
        <div
            style={{
                height:200, 
                clear: "both", 
                paddingTop: 20, 
                justifyContent: "center",
                display: 'flex'
            }}
            className="jumbotron"
        >
            <img className = "logo" src={Logo} alt="Logo" />
        </div>
    );
}

export default Jumbotron;