import { useEffect, useState } from "react";

function Dashboard() {
    const [readings, setReadings] = useState([]);

    useEffect(() => {
        fetch("/readings.php")
            .then((res) => res.json())
            .then((data) => setReadings(data));
    }, []);

    return (
        <div className= "page">
            <h2 className = "pageTitle">Dashboard</h2>
            <ul>
                {readings.map((r) => (
                    <li key={r.id}>
                        Device {r.device_id}: {r.voltage}V, {r.current}A, {r.power}W
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Dashboard;