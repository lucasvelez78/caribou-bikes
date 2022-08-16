import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "./Category";
import ItemDetail from "./ItemDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="start">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/road"
              element={<Category class="road" type="Road" />}
            />
            <Route
              path="/mountain"
              element={<Category class="mountain" type="Mountain" />}
            />
            <Route
              path="/urban"
              element={<Category class="urban" type="Urban" />}
            />
            <Route
              path="/gravel"
              element={<Category class="gravel" type="Gravel" />}
            />
            <Route
              path="/ebike"
              element={<Category class="ebike" type="e-Bike" />}
            />
            <Route path="/:id" element={<ItemDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
