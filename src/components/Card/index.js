import styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorie}>
        <img img src="/imgs/heart-unliked.svg" alt="Unlicked"></img>
      </div>
      <img height={112} width={133} src={props.imageUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="/imgs/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>  
  );
}

export default Card;
