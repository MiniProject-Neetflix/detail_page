import Detail from "./detail/Index";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
