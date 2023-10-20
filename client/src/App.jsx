import Web3Context from "./contexts";
import Navbar from "./components/Navbar";
import { AddCause } from "./pages/AddCause";
import { Donate } from "./pages/Donate";
import { AllCauses } from "./pages/AllCauses";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
        <div className="min-w-screen min-h-[100vh] bg-[#000000]">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<AddCause />}></Route>
            <Route path="/Donate" element={<Donate />}></Route>
            <Route path="/AllCauses" element={<AllCauses />}></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
