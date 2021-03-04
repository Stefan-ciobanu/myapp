import React from "react";
import "./ProjectPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Image1 from "../HomePage/Image1.jpg";
import PopUp from "../PopUpPage/PopUp";

const urls = [
  { name: "Apex", url: "https://apexprivacy.com/new-apex-home-page/" },
  { name: "Thrupny", url: "https://www.thrupny.com/" },
  { name: "Datapod", url: "https://dataprivacypod.com/" },
];
export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      urls: [],
    };
  }

  togglePop = () => {
    window.location.href = `/pop/${urls.name}`;
    this.setState({
      seen: !this.state.seen,
      urls: urls.url,
    });
  };

  render() {
    return (
      <Container fluid className="cont-main2 color-change-3x2">
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
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
              <li className="port-box" onClick={this.togglePop}>
                <div className="figure-li-box-1 figure-li-box">
                  <div></div>
                </div>
              </li>
              <li className="port-box" onClick={this.togglePop}>
                <figure className="figure-li-box-2 figure-li-box">
                  <div></div>
                </figure>
              </li>
              <li className="port-box" onClick={this.togglePop}>
                <figure className="figure-li-box-3 figure-li-box">
                  <div></div>
                </figure>
              </li>
              <li className="port-box" onClick={this.togglePop}>
                <figure className="figure-li-box-4 figure-li-box">
                  <div></div>
                </figure>
              </li>
              <li className="port-box" onClick={this.togglePop}>
                <figure className="figure-li-box-5 figure-li-box">
                  <div></div>
                </figure>
              </li>

              <li className="port-box" onClick={this.togglePop}>
                <figure className="figure-li-box-6 figure-li-box">
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
