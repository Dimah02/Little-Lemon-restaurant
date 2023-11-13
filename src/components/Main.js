import Home from "./Home";
import About from "./About";
import Menu from "./Menu";

import { Routes, Route, Link } from 'react-router-dom'

const main = () => {
    const nav_links = ["Home","About","Menu","Reservations","Order Online","Login"];
    return ( <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
    </Routes>
    </main> );
}
export default main;