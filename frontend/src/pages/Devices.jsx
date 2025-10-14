import { useEffect, useState } from "react";

function Devices() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        fetch("/devices.php")
            .then(res => res.json())
            .then(data => setDevices(data));
    }, []);
    
    return (
        <div className= "page">
            <h2 className = "pageTitle"> Devices</h2>
            <ul>
                {devices.map(d => (
                    <li key={d.id}>
                        {d.device_name} {d.location}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Devices;