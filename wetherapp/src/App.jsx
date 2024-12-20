import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Weather from "./pages/weather/weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

