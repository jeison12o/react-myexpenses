import "./App.css";
//importamos el router
import { BrowserRouter, Route, Routes } from "react-router-dom";
//components
import CompShowBuys from "./components/showBuys";
import CompCreateBuy from "./components/createBuy";
import CompEditBlog from "./components/editBuy";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowBuys />} />
          <Route path="/create" element={<CompCreateBuy />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
