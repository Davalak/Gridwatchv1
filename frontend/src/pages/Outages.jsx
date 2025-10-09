import { useEffect, useState } from "react";

function Outages() {
    const [Outages, setOutages] = useState([]);

    useEffect(() => {
        fetch("/outages.php")
            .then(res => res.json())
            .then(data => setOutages(data));
    }, []);

    return (
        <div className= "page">
            <h2 className="pageTitle"> Outages</h2>
            <ul>
                {Outages.map(o => (
                <li key={o.id}>
                    Device {o.device_id}: {o.start_time} to {o.end_time || "Ongoing."} ({o.reason})
                </li>
                ))}
            </ul>
        </div>
    );
}
    export default Outages;