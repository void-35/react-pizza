import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Card from "./components/Card";
import Skeleton from "./components/Card/Skeleton";
import Cart from "./components/pages/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [fetched, setFeched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://63d8f4295a330a6ae1717ee5.mockapi.io/items"
      );
      setPizzas(res.data);
      setFeched(true);
    };
    fetchData();
  }, []);
  return (
    <div className="wrapper">
      <div className="App">
        <div className="wrapper">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  Categories={Categories}
                  fetched={fetched}
                  pizzas={pizzas}
                />
              }
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
