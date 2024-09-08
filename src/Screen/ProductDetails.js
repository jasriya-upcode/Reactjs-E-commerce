import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Product from "./product";
import style from "./homepage.module.css";
function ProductDetails() {
  const params = useParams();
  const prodId = params.ProductId;

  const [queryParams] = useSearchParams();

  const [product, setproducts] = useState({});

  function loadProductById() {
    fetch(" https://fakestoreapi.com/products/" + prodId)
      .then((Response) => {
        Response.json()
          .then((data) => {
            setproducts(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadProductById();
  }, [prodId]);

  return (
    <div className={style.body}>
      <img src={product.image} height={150} className={style.image} />

      <div className={style.title}>{product.title}</div>
      <div className={style.catagory}>{product.category} </div>
      <div className={style.desc}>{product.price}</div>
      <div className={style.desc}>{product.description}</div>
      {/* <div>{product.rating.rate}</div> */}
      {/* <div>{product.rating.rate}</div>  */}
      {/* <div>{product.rating.count}</div> */}
    </div>
  );
}

export default ProductDetails;
