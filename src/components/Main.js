import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import { Routes, Route } from 'react-router-dom'
import BookingPage  from "./BookingPage";
import BookingForm from "./BookingForm";
import { useReducer } from "react";


const updateTimes  = (state,action)  =>{
    if(action.type==="2023-11-14")
        return ["16:00","13:00","21:00"]
    return state;
}


const Main = () => {
    const initializeTimes = ["17:00","18:00","21:00"];
    const [availableTime,dispatch] = useReducer(updateTimes,initializeTimes);
    console.log(availableTime)

    return ( <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<BookingPage><BookingForm availableTime={availableTime} dispatch={dispatch}/></BookingPage>} />
    </Routes>
    </main> );
}
export default Main;