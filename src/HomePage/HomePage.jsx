import React from "react";
import "./HomePage.css";
import { Link, withRouter } from "react-router-dom";
import Image1 from "../HomePage/Image1.jpg";
//import HeaderWR from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import PopUp from "../PopUpPage/PopUp";
import AboutPage from "../AboutPage/AboutPage";

export default class HomePage extends React.Component {
  render() {
    return (
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
                I am a Roumanian based frontend developer focused on crafting
                clean & user‑friendly experiences, I am passionate about
                building excellent software.
              </p>
              <button className="button-about">More About Me </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
