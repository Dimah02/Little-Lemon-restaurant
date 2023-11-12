const Hero = () => {
    return ( <section className="hero-section">
        <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are afamily owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a table</button>
        </div>
        <div>
            <img src={require("../assets/restauranfood.jpg")} alt={"Little lemon image"}/>
        </div>
    </section>
     );
}
export default Hero;