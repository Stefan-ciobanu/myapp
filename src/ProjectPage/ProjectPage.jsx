import React from "react";
import "./ProjectPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from "../HomePage/Image1.jpg";
import PopUp from "../PopUpPage/PopUp";

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
    };
  }
  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };

  render() {
    return (
      <Container fluid className="cont-main2 color-change-3x2">
        <Row className="title-about">
          <h1 className="about-align ">
            MY
            <span className="style-me">PORTFOLIO</span>
          </h1>
          <span className="background-title">WORKS</span>
        </Row>
        <Row>
          <Col>
            <ul className="ul-port">
              <li className="port-box">
                <div className="figure-li-box">
                  <div></div>
                </div>
              </li>
              <li className="port-box">
                <figure className="figure-li-box">
                  <div></div>
                </figure>
              </li>
              <li className="port-box">
                <figure className="figure-li-box">
                  <div></div>
                </figure>
              </li>
              <li className="port-box">
                <figure className="figure-li-box">
                  <div></div>
                </figure>
              </li>
              <li className="port-box">
                <figure className="figure-li-box">
                  <div></div>
                </figure>
              </li>
              <div>
                <div className="btn" onClick={this.togglePop}>
                  <button className="cont-show"> New</button>
                </div>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
              </div>
              <li className="port-box">
                <figure className="figure-li-box">
                  <div></div>
                </figure>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
