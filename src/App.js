import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Service from "./pages/Service";
import Investers from "./pages/Investers";
import Support from "./pages/Support";

function App() {
  return (
    <div className="overflow-hidden w-full pb-[1px] ranade pt-6  bg-white  dark:bg-gradient-to-b from-[#141F5E] to-[#03040C]  text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/investor" element={<Investers />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
