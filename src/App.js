import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/login/Loginpage";
import Registerpage from "./pages/register/Registerpage";
import ProtectedComponent from "./Auth/ProtectedComponent";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedComponent>
              <Loginpage />
            </ProtectedComponent>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedComponent>
              <Registerpage />
            </ProtectedComponent>
          }
        />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
