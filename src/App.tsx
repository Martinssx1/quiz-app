import { Route, Routes } from "react-router-dom";
import "./App.css";

import Gaming from "./pages/Gaming";
import Home from "./Home";
import Coding from "./pages/Coding";
import Football from "./pages/Football";
import Nigerianhis from "./pages/Nigerianhis";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/Coding" element={<Coding />} />
        <Route path="/Football" element={<Football />} />
        <Route path="/Nigerianhis" element={<Nigerianhis />} />
      </Routes>
    </>
  );
}

export default App;
