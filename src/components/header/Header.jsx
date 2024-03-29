/* eslint-disable jsx-a11y/anchor-has-content */
import Typewriter from "typewriter-effect";

import me from "../../assets/img/me(4).jpg";
import { FOREGROUND, GREEN, PURPLE } from "../../helpers/colors";

import CV from "../../assets/CV.pdf";

import "./header.css";

const Header = () => {
  return (
    <section className="header container" id="home">
      <div className="d-flex flex-column align-items-center mt-4 mb-3 mb-md-5">
        <h5 style={{ color: PURPLE }}>Hello I'm</h5>
        <h4 style={{ color: FOREGROUND }}>Naqibullah Nabizada</h4>
        <h5 style={{ color: GREEN }}>
          <Typewriter
            options={{
              strings: ["Full Stack Developer", "MERN Stack Developer"],
              changeDelay: 3,
              changeDeleteSpeed: 2,
              autoStart: true,
              loop: true,
            }}
          />
        </h5>
      </div>
      <div className="d-md-flex justify-content-md-around">
        <div className="right-header col-12 col-md-4 bg-gradient">
          <img
            src={me}
            alt="Me"
            className="img-fluid rounded d-block mx-auto"
          />
        </div>
        <div className="left-header col-12 col-md-7">
          <p
            style={{ color: FOREGROUND, textAlign: "justify" }}
            className="mt-3 mt-md-5 px-4 py-2"
          >
            I'm a Bachelor Web Developer passionate about creating exceptional
            websites. I hold a Computer Science degree and specialize in
            front-end and back-end development. I have experience working on
            various projects, including designing responsive interfaces. I'm
            committed to staying updated with the latest web development trends
            and enjoy collaborating with others to deliver outstanding results.
            I strive to contribute to the industry by constantly improving my
            skills and creating remarkable user experiences
          </p>
          <div className="mt-3 mt-md-5 d-flex justify-content-around justify-content-md-center">
            <a
              href={CV}
              download
              className="btn-sm text-dark mx-md-2"
              style={{ background: GREEN }}
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="btn-sm text-dark mx-md-2"
              style={{ background: FOREGROUND }}
            >
              Let's Talk
            </a>
          </div>
          <div className="social-media mt-4 mt-md-5">
            <p style={{ color: FOREGROUND }} className="text-center mx-md-5">
              Follow me on social media
            </p>
            <div className="d-flex justify-content-center links">
              <a
                href="https://www.facebook.com/profile.php?id=100032771520136"
                className="fa fa-facebook-official"
                target={"_blank"}
                rel="noreferrer"
              ></a>
              <a
                href="https://www.instagram.com/Naqibullah_Nabizada/"
                className="fa fa-instagram"
                target={"_blank"}
                rel="noreferrer"
              ></a>
              <a
                href="https://twitter.com/naqib_nabizada"
                className="fa fa-twitter-square"
                target={"_blank"}
                rel="noreferrer"
              ></a>
              <a
                href="https://www.linkedin.com/in/naqibullah-nabizada-34a502243/"
                className="fa fa-linkedin-square"
                target={"_blank"}
                rel="noreferrer"
              ></a>
              <a
                href="https://github.com/Naqibullah-Nabizada"
                className="fa fa-github-square"
                target={"_blank"}
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
