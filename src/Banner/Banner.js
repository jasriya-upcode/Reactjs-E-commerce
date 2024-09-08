import logoimg from "../image/AugART24_GW_PC_Hero_NTA_2x._CB567915030_.jpg";
import logoimge from "../image/Classy-wall-clocks-no-tag._CB568195187_.jpg";
import logoimgs from "../image/Aug_Art_Tallhero_3000x1200_2._CB566406323_.jpg";

import style from "./Banner.module.css";
function Banner() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logoimg} className={style.image} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={logoimge} className={style.image} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={logoimgs} className={style.image} alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
