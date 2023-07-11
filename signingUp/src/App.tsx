// import Main from "./Components/Main.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
