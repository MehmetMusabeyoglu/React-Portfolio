import React from "react";
import Me from "../assets/Me.jpg";

function AboutMe() {
    return (
        <div>
            <h2 className="text-center">Welcome to my portfolio</h2>
            <img className="text-center" style={{maxWidth: "300px" }} src={Me} alt="Me" ></img>
            <p className="text-center"> I am Mehmet Musabeyoglu. I am 26 years old. Formerly electrical and electronics engineer
            and currently full-stack developer. </p>
        </div>
      );
}

export default AboutMe;