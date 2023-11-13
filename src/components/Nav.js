import { Link } from 'react-router-dom'
const Nav = () => {
    const nav_links = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];
    return (<nav className='nav-section'>
        <img src={require("../assets/Logo.png")} />
        {nav_links.map(link => {
            if (link !== "Home")
                return <Link className='navLink' to={"/" + link}>{link}</Link>
            return <Link className='navLink' to={"/"} >{link}</Link>
        })}
    </nav>);
}
export default Nav;