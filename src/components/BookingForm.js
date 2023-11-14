import { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState(0);
    const [occasion, setOccasion] = useState("occasion");

    const handelSubmit = (e) => {
        e.preventDefault();
        alert("table has been reserved successfully")
        setDate("")
        setTime("")
        setOccasion("occasion")
        setNumber(0)
    }

    return (<>
        <div className="container">
            <h1>Book Now</h1>
            <form className="form1" onSubmit={handelSubmit}>
                <label htmlFor={"date"}>Choose date:</label>
                <input id={"date"} value={date} name={"date"} type="date" onChange={(e) => { setDate(e.target.value); props.dispatch({ type: e.target.value }) }} required />
                <label htmlFor={"time"}>Choose time:</label>

                <select id={"time"} value={time} name={"time"} onChange={(e) => setTime(e.target.value)}>
                    {
                        Array.isArray(props.availableTime) &&
                        props.availableTime.map(t => {
                            return <option key={t} name={t} value={t}>{t}</option>
                        })
                    }
                </select>
                <label htmlFor={"number"}>Number of people:</label>
                <input name={"number"} value={number} id={"number"} type="number" placeholder={"1"} min={1} max={10} onChange={(e) => setNumber(e.target.value)} />
                <label htmlFor={"occasion"}>Select occasion:</label>
                <select name={"occasion"} id={"occasion"} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value={"occasion"} name={"occasion"}>occasion</option>
                    <option value={"Birthday"} name={"Birthday"}>Birthday</option>
                    <option value={"Anniversary"} name={"Anniversary"}>Anniversary</option>
                </select>
                <input className="btn" type="submit" value="Make Your reservation" />
            </form>
        </div>
    </>);
}
export default BookingForm;