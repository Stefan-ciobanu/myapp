import React from "react";
import "./HomePage.css";
import { Link, withRouter } from "react-router-dom";
import Image1 from "../HomePage/Image1.jpg";
//import HeaderWR from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import PopUp from "../PopUpPage/PopUp";
import AboutPage from "../AboutPage/AboutPage";
import lf30_editor_ovtejlh3 from "../LottieFiles/lf30_editor_ovtejlh3.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { detectDevice } from "../Shared/shared";

export default class HomePage extends React.Component {
  render() {
    const userDevice = detectDevice();

    const mobile = {};
    const mobileTitle = {};
    return (
      <div>
        {userDevice === "mobile" ? (
          <div className="background-page-mobile">
            <Col xs={12} style={mobile} className="photo-mobile">
              <div className="description-mobile">
                <h5 className="name-title-mobile">HI THERE!</h5>
                <h1 className="name-title-mobile">
                  I AM
                  <span className="name"> STEFAN CIOBANU</span>
                </h1>
                <p className="descrip-paraf-mobile">
                  I am a Roumanian based frontend developer focused on crafting
                  clean & user‑friendly experiences, I am passionate about
                  building excellent software.
                </p>

                <Link to="/about">
                  <button className="button-about-mobile">More About Me</button>
                </Link>
              </div>
            </Col>
          </div>
        ) : (
          <div className="background-page">
            <div>
              <div className="table-home">
                <div className="photo"></div>

                <div className="description">
                  <h5 className="name-title">HI THERE!</h5>
                  <h1 className="name-title">
                    I AM
                    <span className="name"> STEFAN CIOBANU</span>
                  </h1>
                  <p className="descrip-paraf">
                    I am a Roumanian based frontend developer focused on
                    crafting clean & user‑friendly experiences, I am passionate
                    about building excellent software.
                  </p>

                  <Link to="/about">
                    <button className="button-about">More About Me</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
