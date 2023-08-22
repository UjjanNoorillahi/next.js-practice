import React from "react";
import img from "../app/assets/ai_avatar.png"
const Header = () => {

    return (

        <div className="h-16 px-5 bg-green-500  flex items-center justify-between">

        <div className="bg-blue-200 logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" className="w-12" alt="pic"/>
        </div>
        <div className="flex gap-8">
            <h4>Home</h4>
            <h4>About</h4>  
            <h4>Contact</h4>
            <h4>Blog</h4>
            

        </div>
        </div>
    );
}

export default Header;