import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/login/Loginpage";
import Registerpage from "./pages/register/Registerpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
      </Routes>
    </>
  );
}

export default App;
