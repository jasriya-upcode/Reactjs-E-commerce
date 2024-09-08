import React from "react";
import styles from "./Product.module.css";
import image from "../image/pirure.jpeg";
import image2 from "../image/plug.jpg";
import image3 from "../image/mouse.jpg";
import image4 from "../image/chrger.jpg";
import image5 from "../image/pendrive.jpg";
import image7 from "../image/kiebord.jpg";
import image8 from "../image/blase.jpg";
import im1 from '../image/bike.jpg';
import im2 from '../image/bike1.jpg';
import im3 from '../image/bike2.jpg';
import im4 from '../image/bike4.jpg';
import im5 from '../image/blue.jpg';
import im6 from '../image/green.jpg';
import im7 from '../image/green2.jpg';
import im8 from '../image/ipad.jpg';
import im9 from '../image/puppys.jpg';
import im10 from '../image/red.jpg';
import im11 from '../image/rode.jpg';
import im12 from '../image/violet.jpg';

function ProductBar() {
  
  const products = [
    {
      id: 1,
      name: "Flower plot",
      price: "$29.99",
      image: "https://m.media-amazon.com/images/I/718DSiX9NLL._AC_SY200_.jpg",
    },
    {
      id: 2,
      name: "flower",
      price: "$39.99",
      image: "https://m.media-amazon.com/images/I/61wrqsOzmOL._AC_SY200_.jpg",
    },
    {
      id: 3,
      name: "Wall decore",
      price: "$49.99",
      image: "https://m.media-amazon.com/images/I/71Eugcj1NFL._AC_SY200_.jpg",
    },
    {
      id: 4,
      name: "Flower plot",
      price: "$59.99",
      image: "https://m.media-amazon.com/images/I/616m2ss+3sS._AC_SY200_.jpg",
    },
    {
      id: 5,
      name: "Flower plot",
      price: "$55.93",
      image: "https://m.media-amazon.com/images/I/616m2ss+3sS._AC_SY200_.jpg",
    },
    {
      id: 6,
      name: "decore",
      price: "$52.679",
      image: "https://m.media-amazon.com/images/I/6167eROMXxL._AC_SY200_.jpg",
    },
    {
      id: 7,
      name: "flower plot",
      price: "$89.49",
      image: "https://m.media-amazon.com/images/I/616m2ss+3sS._AC_SY200_.jpg",
    },

   
  ];

  return (
    <>
      <div className={styles.sliderContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productPrice}>{product.price}</div>
          </div>
        ))}
      </div>
      <div className={styles.main}>
        <div className={styles.box2}>
          <h2>Minimum 50% off | Indoor plants</h2>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/PCCC/01-379_X_304-min._SY304_CB556163815_.jpg" />
          </div>
        </div>
        <div className={styles.box2}>
          <h2>Yeh Meri Family | Season 4 | Streaming Now</h2>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/SiddMiniTV/DeskCC-379x304_V2_NS._SY304_CB567084151_.jpg" />
          </div>
        </div>

        <div className={styles.box2}>
          <h2>Continue shopping for|up to 50%off</h2>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/GW_Mar/25th/Combo_low_res_2_1_1_1_1._SY304_CB579829084_.jpg" />
          </div>
        </div>
      </div>

      <div className={styles.offersection}>
        {/* first box */}
        <div className={styles.box1}>
          <h2>
           Keep shopping for
          </h2>
          <div className={styles.b2}>
            <div>
              <img src={im1} className={styles.img1} height={100}></img>
              <p>Flower plot</p>
            </div>
            <div>
              <img src={im2} className={styles.img2} height={100}></img>
              <p>Bike</p>
            </div>
          </div>
          <div className={styles.b2}>
            <div>
              <img src={im3} className={styles.img1} height={100}></img>
              <p>Bike</p>
            </div>
            <div>
              <img src={im4} className={styles.img2} height={100}></img>
              <p>Bike</p>
            </div>
          </div>
          <a href="/">Explore all...</a>
        </div>

        {/* second box */}

        <div className={styles.box1}>
          <h2>
          Continue shopping for
          </h2>
          <div className={styles.b2}>
            <div>
              <img src={im5} className={styles.img1} height={100}></img>
              <p>TIED RIBBONS Multicolor...</p>
            </div>
            <div>
              <img src={im6} className={styles.img2} height={100}></img>
              <p>Potted Plants Ideal</p>
            </div>
          </div>
          <div className={styles.b2}>
            <div>
              <img src={im7} className={styles.img1} height={100}></img>
              <p>Artificial plot</p>
            </div>
            <div>
              <img src={im8} className={styles.img2} height={100}></img>
              <p>Samsung galaxy</p>
            </div>
          </div>
          <a href="/">Explore ...</a>
        </div>

        {/* third box  */}

        <div className={styles.box1}>
          <h2>
          Pick up where you left off
          </h2>
          <div className={styles.b2}>
            <div>
              <img src={im9} className={styles.img1} height={100}></img>
              <p>Flower pot</p>
            </div>
            <div>
              <img src={im10} className={styles.img2} height={100}></img>
              <p>Artificial Flowers Plants</p>
            </div>
          </div>
          <div className={styles.b2}>
            <div>
              <img src={im11} className={styles.img1} height={100}></img>
              <p>Artificial Flowers Plants</p>
            </div>
            <div>
              <img src={im12} className={styles.img2} height={100}></img>
              <p>Artificial Flowers Plants</p>
            </div>
          </div>
          <a href="/">Explore all...</a>
        </div>
      </div>
          <div className={styles.imagediv}>
              <img src={image}/>
         </div>
            
         <div className={styles.co15}>
      <div className={styles.basic}>
        <span> Computers & Accessories </span>
      </div>
      <div className={styles.row1}>
        <div className={styles.box}>
          <img src={image2} className={styles.boximg}/>
          <p>Top selling stationery</p>
          <p className={styles.text}>From $49</p>
        </div>
        <div className={styles.box}>
          <img src={image3} className={styles.boximg}/>
          <p >Geared cycles</p>
          <p className={styles.text}>up to 70% off</p>
        </div>
        <div className={styles.box}>
          <img
             src={image4}
             className={styles.boximg}/>
           <p >Remote control toys </p>
           <p className={styles.text}>Up to 80% off</p>
         </div>
         <div className={styles.box}>
           <img
             src={image5}
             className={styles.boximg}/>
           <p>Soft toys </p>
           <p className={styles.text}>Up to 70% off </p>
         </div>
         <div className={styles.box}>
           <img src={image7} className={styles.boximg}/>
           <p>Electric cycle </p>
           <p className={styles.text}>Up to 40% off</p>
         </div>
         <div className={styles.box}>
           <img src={image8}className={styles.boximg}/>
          <p>Gym essential </p>
          <p className={styles.text}>From 139</p>
        </div>
      </div>
    </div>



    </>
  );
}

export default ProductBar;
