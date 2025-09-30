import { useEffect, useState } from "react";

function Devices() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        fetch("api/devices.php")
            .then(res => res.json())
            .then(data => setDevices(data));
    }, []);
    
    return (
        <div>
            <h2> Devices</h2>
            <ul>
                {devices.map(d => (
                    <li key={d.id}>
                        {d.device_name}{d.location}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Devices;