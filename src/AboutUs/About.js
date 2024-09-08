import style from "./About.module.css";
import andyjassy from "../image/image/gettyimages-450831356-612x612.jpg";
import Amitagarval from "../image/image/maxresdefault.jpg";
import brian from "../image/image/big-person-16356160771.png";

function AboutUs() {
  return (
    <div>
      <div className={style.aboutsection}>
        <h1>About Us </h1>
        <p>
          Amazon is an American multinational technology company which focuses
          on e-commerce,<br></br> cloud computing, and digital streaming. It has
          been referred to as "one of the most influential economic and cultural
          forces in the world",[1] and is one of the world's most valuable
          brands..<br></br>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <div className="row">
        <div className={style.column}>
          <div className={style.card}>
            <img
              className={style.img}
              src={andyjassy}
              alt="Jane"
              width={150}
              height={100}
            />
            <div className={style.container}>
              <h2>Andy Jassy</h2>
              <p className={style.title}>CEO & Founder</p>
              <p>
                Andrew R. Jassy is an American business executive who is the
                president and chief executive officer of Amazon.....
              </p>
              <p>AndyJassy@gmail.com</p>
              <p>
                <button className={style.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={style.column}>
          <div className={style.card}>
            <img
              className={style.img}
              src={Amitagarval}
              alt="Mike"
              width={150}
              height={100}
            />
            <div className={style.container}>
              <h2>Amit Agarwal</h2>
              <p className={style.title}>Senior Vice President</p>
              <p>
                Amit Agrawal is an Indian engineer and an institute chair
                professor at the Department of Mechanical Engineering....
              </p>
              <p>AmitAgarwal@gmail.com</p>
              <p>
                <button className={style.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={style.column}>
          <div className={style.card}>
            <img
              className={style.img}
              src={brian}
              alt="John"
              width={150}
              height={100}
            />
            <div className={style.container}>
              <h2>Brian Olsavsky</h2>
              <p className={style.title}>Senior Vice President and CFO</p>
              <p>
                Olsavsky joined Amazon.com in April 2002. As CFO of Amazon.com,
                he oversees the company's overall .....
              </p>
              <p>Brianolsavsky@gmail.com</p>
              <p>
                <button className={style.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
