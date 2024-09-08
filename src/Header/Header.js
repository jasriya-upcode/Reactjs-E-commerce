import styles from "./Header.module.css";
import logoimg from "../image/amazon_logo[1].png";
import cartimg from "../image/Screenshot 2024-08-06 150329.png";

function Header(props) {
  return (
    <div className={styles.body}>
      <nav class="navbar navbar-expand-lg  bg-black  ">
        <div class="container-fluid">
          <img src={logoimg} height={50} width={150} className={styles.image} />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active  bg-black  text-light"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active  bg-black  text-light"
                  aria-current="page"
                  href="products"
                >
                  products
                </a>
              </li>
            </ul>

            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                className={styles.search}
              />

              <div class="btn-group">
                <button
                  class="btn bg-black  text-light btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </button>
                <ul class="dropdown-menu">
                  <li>malayalm</li>
                  <li>Hindi</li>
                  <li>Thamiy</li>
                  <li>urudu</li>
                </ul>
              </div>

              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active  bg-black  text-light"
                    aria-current="page"
                    href="Contact"
                  >
                    contact Us
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active  bg-black  text-light"
                    aria-current="page"
                    href="About"
                  >
                    About us
                  </a>
                </li>
              </ul>
              <a
                class="btn bg-success text-light"
                type="cart"
                className={styles.cart}
                href="cart"
              >
                Cart <img src={cartimg} height={-10} />
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
