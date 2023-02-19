import "./scss/app.scss";
import Header from "./components/Header";
import Cart from "./components/pages/Cart";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const SearchContext = createContext();

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [fetched, setFeched] = useState(false);
  const [paginateIndex, setPaginateIndex] = useState(1);
  const curentSort = useSelector(state => state.sort.value.sort)
  const [searchText, setSearchText] = useState("");
  const filterIndex = useSelector(state => state.filter.value)

  useEffect(() => {
    const fetchData = async () => {
      setFeched(false);
      const res = await axios.get(
        `https://63d8f4295a330a6ae1717ee5.mockapi.io/items?page=${paginateIndex}&limit=4&sortBy=${curentSort.sortProp.replace(
          "-",
          ""
        )}&order=${
          curentSort.sortProp.includes("-") ? "ask" : "desc"
        }&category=${filterIndex > 0 ? filterIndex : ""}`
      );
      setPizzas(
        res.data.filter((obj) =>
          obj.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
      setFeched(true);

      window.scrollTo(0, 0);
    };
    fetchData();
  }, [curentSort, filterIndex, searchText, paginateIndex]);
  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <div className="wrapper">
        <div className="App">
          <div className="wrapper">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setPaginateIndex={setPaginateIndex}
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
    </SearchContext.Provider>
  );
}

export default App;
