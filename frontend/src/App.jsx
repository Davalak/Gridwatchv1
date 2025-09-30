import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Outages from "./pages/Outages";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/outages" element={<Outages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
