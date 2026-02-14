import { useState } from "react";
import './NavBar.css'
import nameBase from '.././assets/Banner Name Base.png'
import nameOutline from '.././assets/Banner Name Outline.png'
import { Link } from "react-router-dom";

export default function NavBar({colorMain, colorSide, textColor} : {colorMain: string, colorSide : string, textColor : string}) {
    const gradientStyle: React.CSSProperties = {
        background: `linear-gradient(
            to right,
            ${colorSide},
            ${colorMain} 10%,
            ${colorMain} 90%,
            ${colorSide})`,
        borderBottom: `1px solid ${textColor}44`,
        // css variables
    };

    const textStyle: React.CSSProperties = {
        "--hover-bg-color": textColor,
        "--hover-text-color": colorMain,
    };

    return (
        <>
            <div className="banner">
                <img src={nameBase}/>
                <img src={nameOutline}/>
            </div>
            <nav className="navbar" style={gradientStyle}>
                <div className="navbar-inner">
                    <ul className="nav-links">
                        <li><Link to="/" style={textStyle}>Home</Link></li>
                        <li><Link to="/art" style={textStyle}>Art</Link></li>
                        <li><Link to="/projects" style={textStyle}>Coding</Link></li>
                        <li><Link to="/other" style={textStyle}>Other</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}