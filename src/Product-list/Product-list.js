import { useEffect, useState } from "react";
import Productcard from "../Product-card/Productcard";
import Cart from "../CartPage/Cart";
import Filtercontext from "../Context/Filtercontext";

const Productlist = (props) => {
  function addtwoCart(prod) {
    console.log("productlist.addtwoCart:", prod);
  }

  console.log("line in productlist");
  const searchText = props.searchText;
  const [productlist, setproductlist] = useState([]);
  const [categories, setcategories] = useState([]);

  const loadcategories = () => {
    fetch(" https://fakestoreapi.com/products/categories").then((Response) => {
      Response.json().then((data) => {
        setcategories(data);
      });
    });
    console.log(" loadcategories");
  };

  const loadBrands = () => {
    console.log("loadbrands");
  };

  function loadProductsbysearchText() {
    fetch("https://fakestoreapi.com/products").then((Response) => {
      Response.json().then((data) => {
        setproductlist(data);
      });
    });
  }

  useEffect(() => {
    loadBrands();
  }, []);

  useEffect(() => {
    loadProductsbysearchText();
  }, [searchText]);

  useEffect(() => {
    loadcategories();
  }, []);

  return (
    <>
      <Filtercontext.Provider
        value={{
          brands: [],
          categories: categories,
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vw",
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginLeft: "40px",
            marginTop: "20px",
            transition: " transform 0.2s",
          }}
        >
          {productlist.map((p) => {
            return <Productcard product={p} onAddTwoCartClik={addtwoCart} />;
          })}
        </div>
      </Filtercontext.Provider>
    </>
  );
};

export default Productlist;
