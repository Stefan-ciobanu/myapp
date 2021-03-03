import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { detectDevice } from "../Shared/shared";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import homesolid from "../Utils/homesolid.svg";
import usersolid from "../Utils/usersolid.svg";
import taskssolid from "../Utils/taskssolid.svg";
export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "",
    };
  }

  onHover() {
    this.setState({
      hover: "",
    });
  }
  render() {
    const userDevice = detectDevice();

    return (
      <Container className="header" fluid>
        <Row
          style={
            userDevice !== "mobile" ? { width: "100%" } : { width: "auto" } //mobile
          }
        >
          <Col>
            <Row>
              <Col className="appname-container">
                <Link to="/">
                  <img src={homesolid} className="app-name  " />
                </Link>

                <Link to="/about">
                  <img src={usersolid} className="app-name" />
                </Link>
                <Link to="/project">
                  <img src={taskssolid} className="app-name" />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const HeaderWR = withRouter(Header);
