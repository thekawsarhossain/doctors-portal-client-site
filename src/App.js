import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
