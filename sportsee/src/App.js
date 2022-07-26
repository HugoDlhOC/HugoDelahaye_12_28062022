import "./App.css";
import { Home } from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route>
        <Route path={"*"} element={<Error />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
