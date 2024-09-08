import style from "./Footer.module.css";
import logoimg from "../image/amazon_logo[1].png";
function Footer() {
  return (
    <div className={style.Footer}>
      <div className={style.f1}>
        <p> Back To Top</p>
      </div>
      <div className={style.f2}>
        <div className={style.box}>
          <p className={style.text1}>Get to Know Us</p>
          <a href="/" className={style.text}>
            About Us
          </a>
          <a href="/" className={style.text}>
            Careers
          </a>
          <a href="/" className={style.text}>
            Press Releases
          </a>
          <a href="/" className={style.text}>
            {" "}
            Amazon Science{" "}
          </a>
        </div>
        <div className={style.box}>
          <p className={style.text1}>Connect with Us</p>
          <a href="/" className={style.text}>
            Facebook
          </a>
          <a href="/" className={style.text}>
            Twitter
          </a>
          <a href="/" className={style.text}>
            Instagram
          </a>
        </div>
        <div className={style.box}>
          <p className={style.text1}>Make Money with Us</p>
          <a href="/" className={style.text}>
            Sell on Amazon
          </a>
          <a href="/" className={style.text}>
            Sell under Amazon
          </a>
          <a href="/" className={style.text}>
            Become an Affiliate
          </a>
          <a href="/" className={style.text}>
            {" "}
            Fulfilment by Amazon{" "}
          </a>
        </div>

        <div className={style.box}>
          <p className={style.text1}>Let Us Help You</p>
          <a href="/" className={style.text}>
            COVID-19 and Amazon
          </a>
          <a href="/" className={style.text}>
            Your Account
          </a>
          <a href="/" className={style.text}>
            Returns Centre
          </a>
          <a href="/" className={style.text}>
            Recalls and Product Safety
          </a>
        </div>
      </div>
      <div className={style.f3}>
        <div className={style.f4}>
          <img src={logoimg} height={30} width={90} className={style.image} />
          <div className="dropdown">
            <a
              className="btn  dropdown-toggle text-light border"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Arabic
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hindi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Thamiz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* thirdfooter */}
      <div className={style.footer1}>
        <div className="container text-center me-5 ">
          <div className="row  ">
            <div className="col text-light  text-end mt-5">
              <a className={style.text} href="/">
                AbeBooks
              </a>
              <a className={style.text2} href="/">
                Books,arts
              </a>
              <a className={style.text2} href="/">
                &collectibles
              </a>
            </div>
            <div className="col text-light mt-5">
              <a className={style.text} href="/">
                Amazon Web Services
              </a>
              <a className={style.text2} href="/">
                Sclable Cloud
              </a>
              <a className={style.text2} href="/">
                Computing Services
              </a>
            </div>
            <div className="col text-light mt-5 ">
              <a className={style.text} href="/">
                Audible
              </a>
              <a className={style.text2} href="/">
                Download
              </a>
              <a className={style.text2} href="/">
                Audio Books
              </a>
            </div>
            <div className="col text-light mt-5">
              <a className={style.text} href="/">
                IMDB
              </a>
              <a className={style.text2} href="/">
                Movie,Tv
              </a>
              <a className={style.text2} href="/">
                &celebrities
              </a>
            </div>
          </div>
          {/* sectionrow */}

          <div className="row  mt-4">
            <div className="col text-light ">
              <a className={style.text} href="/">
                AbeBooks
              </a>
              <a className={style.text2} href="/">
                Books,arts
              </a>
              <a className={style.text2} href="/">
                &collectibles
              </a>
            </div>
            <div className="col text-light ">
              <a className={style.text} href="/">
                Amazon Web Services
              </a>
              <a className={style.text2} href="/">
                Sclable Cloud
              </a>
              <a className={style.text2} href="/">
                Computing Services
              </a>
            </div>
            <div className="col text-light ">
              <a className={style.text} href="/">
                Audible
              </a>
              <a className={style.text2} href="/">
                Download
              </a>
              <a className={style.text2} href="/">
                Audio Books
              </a>
            </div>
            <div className="col text-light ">
              <a className={style.text} href="/">
                IMDB
              </a>
              <a className={style.text2} href="/">
                Movie,Tv
              </a>
              <a className={style.text2} href="/">
                &celebrities
              </a>
            </div>
          </div>
        </div>
        <div className={style.fo1}>
          <a href="/">condition of use&sale</a>
          <a href="/">Privacy notice</a>
          <a href="/">Intrest-based ads</a>
        </div>
        <div className={style.fo2}>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
