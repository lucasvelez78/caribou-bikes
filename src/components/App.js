import NewNavbar from "./NewNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "./Category";
import ItemDetail from "./ItemDetail";
import Footer from "./Footer";
import { CartProvider } from "../store/cartContext";
import { OrderProvider } from "../store/orderContext";
import { LogProvider } from "../store/logContext";
import { MenuProvider } from "../store/menuContext";
import ShoppingCart from "../pages/ShoppingCart";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Order from "./Order";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <OrderProvider>
            <LogProvider>
              <MenuProvider>
                <div className="start">
                  <NewNavbar />
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                    <Route path="/success" element={<Order />} />
                  </Routes>
                  <Footer />
                </div>
              </MenuProvider>
            </LogProvider>
          </OrderProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
