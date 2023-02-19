import Sort from "../Sort";
import Card from "../Card";
import Skeleton from "../Card/Skeleton";
import Categories from "../Categories";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const Home = ({
  fetched,
  pizzas,
  setPaginateIndex,
}) => {
  const pizzasArr = useSelector(state => state.cards.value)
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {fetched
            ? pizzas.map((pizza, id) => <Card pizzas={pizzas} key={id} {...pizza} itemId={id} />)
            : [...Array(10)].map((_, id) => <Skeleton key={id} />)}
        </div>
      </div>
      <Pagination setPaginateIndex={setPaginateIndex} />
    </div>
  );
};

export default Home;
