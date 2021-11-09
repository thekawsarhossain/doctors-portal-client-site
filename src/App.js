import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
