import styles from "./Navigation.module.css";
function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg   bg-dark ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item  ">
                <a className="nav-link   text-white" href="#">
                  Amazon mini Tv
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link   text-white" href="#">
                  Sell
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  Best Seller
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  Today Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  Mobiles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Prime
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Customer Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Electronics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Fashion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  New Release{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Home kitchen
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Amazon pay
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Computers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Travel{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Two Weelers{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
