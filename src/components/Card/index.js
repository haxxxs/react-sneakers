import styles from "./Card.module.scss";
import React from "react";

function Card({ onFavorite, imageUrl, price, title, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, price, imageUrl});
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorie} onClick={onFavorite}>
        <img img src="/imgs/heart-unliked.svg" alt="Unlicked"></img>
      </div>
      <img height={112} width={133} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/imgs/btn-checked.svg" : "/imgs/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
