import { useState } from "react";
import './NavBar.css'
import nameBase from '.././assets/Banner Name Base.png'
import nameOutline from '.././assets/Banner Name Outline.png'

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
                        <li><a href="#home" style={textStyle}>Home</a></li>
                        <li><a href="#home" style={textStyle}>Art</a></li>
                        <li><a href="#home" style={textStyle}>Coding</a></li>
                        <li><a href="#home" style={textStyle}>Other</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}