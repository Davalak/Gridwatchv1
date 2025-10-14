import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

            {readings.length > 0 ?(
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                    data={readings}
                    margin={{
                        top: 30, right: 30, left: 0, bottom:10
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="device_name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="voltage" stroke="#8884d8" name="Voltage (V)" />
                        <Line type="monotone" dataKey="current" stroke="#82ca9d" name="Current (A)" />
                        <Line type="monotone" dataKey="power" stroke="#ffc658" name="Power (W)" />
                    </LineChart>
                </ResponsiveContainer>
            ) : (<p>No readings available.</p>)
            }
        </div>
    );
}

export default Dashboard;