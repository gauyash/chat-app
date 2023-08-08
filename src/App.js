import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Authentication from "./Components/Authentication";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Authentication />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="login" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
