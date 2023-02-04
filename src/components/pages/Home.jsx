import Header from "../Header";
import Sort from "../Sort";
import Card from "../Card";
import Skeleton from "../Card/Skeleton";

const Home = ({ Categories, fetched, pizzas }) => {
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
                  ? pizzas.map((pizza, id) => <Card key={id} {...pizza} />)
                  : [...Array(10)].map((_, id) => <Skeleton key={id} />)}
              </div>
            </div>
          </div>
  );
};

export default Home;
