const footer = () => {
    const nav_links = ["Home","About","Menu","Reservations","Order Online","Login"];
    const styleF = {
        display:"flex",
        justifyContent:"space-around",
    }
    const styleH4 ={
        color:"#495E57"
    }
    const styleA = {
        textDecoration:"none",
        color:"black"
    }
    return ( <footer style={styleF}>
        <div>
            <h4 style={styleH4}>Navigation</h4>
                {nav_links.map(link =>{
                    return <p><a style={styleA} href="#">{link}</a></p>
                })}
        </div>
        <div>
            <h4 style={styleH4}>contact</h4>
            <p>adress</p>
            <p>phone number</p>
            <p>email</p>
        </div>
        <div>
            <h4 style={styleH4}>Social Media Links</h4>
            <p>adress</p>
            <p>phone number</p>
            <p>email</p>
        </div>
    </footer> );
}
export default footer;