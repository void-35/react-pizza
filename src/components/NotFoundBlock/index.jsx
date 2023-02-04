import styles from "./NotFoundlock.modal.scss";

function NotFoundBlock() {
  return (
    <div className="root">
      <h1>
        <span>😕</span>
        <br />
        <p>Корзина пустая</p>
      </h1>
      <p className="description">К сожелению товар не был найден</p>
    </div>
  );
}

export default NotFoundBlock;
