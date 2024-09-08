import style from "./Offer.module.css";
import firstpic from "../image/image/1pic.jpg";
import secondpic from "../image/image/2pic.jpg";
import thirdpic from "../image/image/3pic.jpg";
import fourthpic from "../image/image/4pic.jpg";
import f1pic from "../image/image/f1pic.jpg";
import s1pic from "../image/image/fpic.jpg";
import t1pic from "../image/image/spic.jpg";
import fo1pic from "../image/image/42pic.jpg";
import noice from "../image/image/noise.jpg";
import boat from "../image/image/boat.jpg";
import zebric from "../image/image/zebronic.jpg";
import boult from "../image/image/boult.jpg";
import bedsheet from "../image/image/bedsheet.jpg";
import curatain from "../image/image/iron.jpg";
import iron from "../image/image/curatain.jpg";
import homedecor from "../image/image/homedecor.jpg";
import homestorage from "../image/image/homestorage.jpg";
import storageracks from "../image/image/storageracks.jpg";
import toysgames from "../image/image/toysgames.jpg";
import jackets from "../image/image/jackets.jpg";
import accesiories from "../image/image/accessiores.jpg";
import car from "../image/image/car.jpg";
import helmet from "../image/image/helmet.jpg";
import cleaner from "../image/image/cleaner.jpg";
function Offersection() {
  return (
    <div>
      <div className={style.offersection}>
        {/* first box */}
        <div className={style.box1}>
          <h2>
            Revamb your home <br></br> in style
          </h2>
          <div className={style.b2}>
            <div>
              <img src={firstpic} className={style.img1} height={100}></img>
              <p>cushion cover,</p>
            </div>
            <div>
              <img src={secondpic} className={style.img2} height={100}></img>
              <p>Fiqurines,vases&more</p>
            </div>
          </div>
          <div className={style.b2}>
            <div>
              <img src={thirdpic} className={style.img1} height={100}></img>
              <p>Home stage</p>
            </div>
            <div>
              <img src={fourthpic} className={style.img2} height={100}></img>
              <p>Lighting solution</p>
            </div>
          </div>
          <a href="/">Explore all...</a>
        </div>

        {/* second box */}

        <div className={style.box1}>
          <h2>
            Applience for your home| <br></br> up to 55%off{" "}
          </h2>
          <div className={style.b2}>
            <div>
              <img src={f1pic} className={style.img1} height={100}></img>
              <p>Air conditioner</p>
            </div>
            <div>
              <img src={s1pic} className={style.img2} height={100}></img>
              <p>Washing machine</p>
            </div>
          </div>
          <div className={style.b2}>
            <div>
              <img src={t1pic} className={style.img1} height={100}></img>
              <p>Refrigrator</p>
            </div>
            <div>
              <img src={fo1pic} className={style.img2} height={100}></img>
              <p>Microwaves</p>
            </div>
          </div>
          <a href="/">Explore all...</a>
        </div>

        {/* third box  */}

        <div className={style.box1}>
          <h2>
            Revamb your home<br></br> in style
          </h2>
          <div className={style.b2}>
            <div>
              <img src={noice} className={style.img1} height={100}></img>
              <p>Staring 240|Noise</p>
            </div>
            <div>
              <img src={boat} className={style.img2} height={100}></img>
              <p>Starting 342|bouAt</p>
            </div>
          </div>
          <div className={style.b2}>
            <div>
              <img src={zebric} className={style.img1} height={100}></img>
              <p>Starting 435| Zebronics</p>
            </div>
            <div>
              <img src={boult} className={style.img2} height={100}></img>
              <p>Starting 342|boult</p>
            </div>
          </div>
          <a href="/">Explore all...</a>
        </div>
      </div>
      {/* Second row */}
      <div className={style.offersection2}>
        <div className={style.box1}>
          <h2>
            Starting 199|Amazon <br></br>Brands &more
          </h2>
          <div className={style.b2}>
            <div>
              <img src={bedsheet} className={style.img1} height={100}></img>
              <p>Starting 199|Bedsheets</p>
            </div>
            <div>
              <img src={curatain} className={style.img2} height={100}></img>
              <p>Minimum 40% |iron box</p>
            </div>
          </div>
          <div className={style.b2}>
            <div>
              <img src={iron} className={style.img1} height={100}></img>
              <p>Starting 199 |cutains</p>
            </div>
            <div>
              <img src={homedecor} className={style.img2} height={100}></img>
              <p>up to 40%off  |Home decor</p>
            </div>
          </div>
          <a href="/">Explore all</a>
        </div>

        {/* second box */}

        <div className={style.box1}>
          <h2>
            Starting 99 | Amazon <br></br> Brands &more{" "}
          </h2>
          <div className={style.b2}>
            <div>
              <img src={homestorage} className={style.img1} height={100}></img>
              <p> 50% off | home& organisation</p>
            </div>
            <div>
              <img src={toysgames} className={style.img2} height={100}></img>
              <p>Toys&Games</p>
            </div>
          </div>
          <div className={style.b2}>
            <div>
              <img src={storageracks} className={style.img1} height={100}></img>
              <p>up to 60%off | home racks</p>
            </div>
            <div>
              <img src={jackets} className={style.img2} height={100}></img>
              <p>up to 60% off | shoes</p>
            </div>
          </div>
          <a href="/">Explore all</a>
        </div>

        {/* third box  */}

        <div className={style.box1}>
          <h2>
            Automotive essential |<br></br> up to 60% off
          </h2>
          <div className={style.b2}>
            <div>
              <img src={accesiories} className={style.img1} height={100}></img>
              <p>cleaning accesiories</p>
            </div>
            <div>
              <img src={car} className={style.img2} height={100}></img>
              <p>tyre|rim care</p>
            </div>
          </div>
          <div className={style.b2}>
            <div>
              <img src={helmet} className={style.img1} height={100}></img>
              <p> Helmet</p>
            </div>
            <div>
              <img src={cleaner} className={style.img2} height={100}></img>
              <p>Vaccum cleaner</p>
            </div>
          </div>
          <a href="/">Explore all</a>
        </div>
      </div>
    </div>
  );
}

export default Offersection;
