import './NavBar.css'
import nameBase from '.././assets/Banner Name Base.png'
import nameOutline from '.././assets/Banner Name Outline.png'

export default function NavBar() {
    return (
        <>
            <div className="banner">
                <img src={nameBase}/>
                <img src={nameOutline}/>
            </div>
            <nav className="navbar">
                <div className="navbar-inner">
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#home">Art</a></li>
                        <li><a href="#home">Coding</a></li>
                        <li><a href="#home">Other</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}