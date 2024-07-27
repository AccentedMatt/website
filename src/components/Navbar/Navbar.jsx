import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-logo">Matthew Neilly</div>
            <div className="nav_background"></div>
            <ul className="nav-menu">
                <li className="nav-home">
                    <NavLink to="/" exact className="nav-link" activeClassName="active-link">Home</NavLink>
                </li>
                <li className="nav-about_me">
                    <NavLink to="/about-me" className="nav-link" activeClassName="active-link">About Me</NavLink>
                </li>
                <li className="nav-education">
                    <NavLink to="/education" className="nav-link" activeClassName="active-link">Education</NavLink>
                </li>
                <li className="nav-contact">
                    <NavLink to="/contact" className="nav-link" activeClassName="active-link">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar