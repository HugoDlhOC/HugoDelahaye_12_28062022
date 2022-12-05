import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Choice } from "./pages/Choice";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Choice />}></Route>
        <Route exact path={"/home/user/:userid"} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
