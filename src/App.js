import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="overflow-hidden w-full pb-[1px] ranade bg-gradient-to-b from-[#141F5E] to-[#03040C] pt-6 text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
