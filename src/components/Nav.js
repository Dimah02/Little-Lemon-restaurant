const Nav = () => {
    const nav_links = ["Home","About","Menu","Reservations","Order Online","Login"];
    const styleLi = {
        listStyle:"none",
        display:"inline",
        marginLeft:"2em",
    }
    const styleNav = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"1em"
    }
    const styleA = {
        textDecoration:"none",
        color:"black"
    }
    return (<nav style={styleNav}>
        <img src={require("../assets/Logo.png")}/>
        <ul>
            {nav_links.map(link =>{
                return <li style={styleLi} key={link}><a style={styleA} href="#">{link}</a></li>
            })}
        </ul>
    </nav> );
}

export default Nav;