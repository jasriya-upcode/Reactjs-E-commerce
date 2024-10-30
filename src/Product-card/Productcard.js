import { Link } from "react-router-dom";
import style from "./product.module.css";
import { useContext } from "react";

function Productcard(props) {
  var prod = props.product;

  function onADCClick() {
    props.onAddTwoCartClik(prod);
  }
  
  function modifiedProductTitle(title) {
    const titleLenth = 22;
    if (title.length > titleLenth) {
      return title.substring(0, titleLenth) + "...";
    }
    return title;
  }

  return (
    <>
      <div className={style.body}>
        <div className={style.image}>
          <img src={prod.image} height={150} />
        </div>
        <div className={style.content}>
          <div className={style.title}>{modifiedProductTitle(prod.title)}</div>
          <div className={style.category}>{prod.category}</div>
          <div className={style.price}>{prod.price}</div>
          <Link to={"/products/" + prod.id}>
            <button onClick={onADCClick} className={style.cart}>
              Product Deatails
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Productcard;
