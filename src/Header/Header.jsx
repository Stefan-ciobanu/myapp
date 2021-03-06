import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { detectDevice } from "../Shared/shared";
import { Container, Row, Col, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import homesolid from "../Utils/homesolid.svg";
import usersolid from "../Utils/usersolid.svg";
import taskssolid from "../Utils/taskssolid.svg";
import barssolid from "../Header/barssolid.svg";

class Header extends React.Component {
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
      <div>
        {
          userDevice == "mobile" ? (
            <Container className="appname-container-mobile">
              <NavDropdown title="MENU" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/" className="drop">
                  Home
                </NavDropdown.Item>
                <NavDropdown.Item href="/about" className="drop">
                  About
                </NavDropdown.Item>
                <NavDropdown.Item href="/project" className="drop">
                  Projects
                </NavDropdown.Item>
              </NavDropdown>
            </Container>
          ) : (
            <Container className="header" fluid>
              <Row>
                <Col className="appname-container">
                  <Link to={"/"}>
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
            </Container>
          ) //mobile
        }
      </div>
    );
  }
}

export const HeaderWR = withRouter(Header);
