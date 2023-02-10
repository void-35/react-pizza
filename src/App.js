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
  const [activeIndex, setActiveIndex] = useState(0);
  const [curentSort, setCurentSort] = useState({
    title: "популярности (ASC)",
    sortProp: "rating",
  });
  const [searchText, setSearchText] = useState("");

  console.log(searchText);

  useEffect(() => {
    const fetchData = async () => {
      setFeched(false);
      const res = await axios.get(
        `https://63d8f4295a330a6ae1717ee5.mockapi.io/items?sortBy=${curentSort.sortProp.replace(
          "-",
          ""
        )}&order=${
          curentSort.sortProp.includes("-") ? "ask" : "desc"
        }&category=${activeIndex !== 0 ? activeIndex : ""
        }`
      );
      console.log()
      setPizzas(res.data.filter((obj) => obj.title.toLowerCase().includes(searchText.toLowerCase())));
      setFeched(true);

      window.scrollTo(0, 0);
    };
    fetchData();
  }, [curentSort, activeIndex, searchText]);
  return (
    <div className="wrapper">
      <div className="App">
        <div className="wrapper">
          <Header searchText={searchText} setSearchText={setSearchText} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  fetched={fetched}
                  pizzas={pizzas}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  curentSort={curentSort}
                  setCurentSort={setCurentSort}
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
