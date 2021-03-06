import React, { useEffect, useState } from "react";
import "../PopUpPage/PopUp.css";
import { Link, useRouteMatch, withRouter } from "react-router-dom";
import Iframe from "react-iframe";

const PopUp = (props) => {
  const [company, setCompany] = useState({});

  useEffect(() => {
    setCompany(props.clickedCompany);
  }, [props]);

  useEffect(() => {}, [company]);

  const handleClick = () => props.unToggle();

  return (
    <div className="container">
      <div className="modal-1">
        <div className="modal_content">
          <button className="close" onClick={handleClick}>
            X
          </button>
          <div>
            <div className="title-b">
              <div className="div-style-detail">
                {" "}
                Client:
                <h6>{company ? company.name : ""}</h6>
              </div>
              <div className="div-style-detail">
                {" "}
                Project:
                <h6>{company ? company.project : ""}</h6>
              </div>
              <div className="div-style-detail">
                {" "}
                Website:
                <h6>
                  {company ? company.url : ""}
                  <a href={company ? company.url : ""} />
                </h6>
              </div>
            </div>

            <Iframe
              url={company ? company.url : ""}
              className="i-frame"
            ></Iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

/*class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pop: [],
    };
  }

  handleClick = () => this.props.history.goBack();

  render() {
    return (
      <div className="container">
        <div className="modal-1">
          <div className="modal_content">
            <button className="close" onClick={this.handleClick}>
              X
            </button>
            <div>
              <div className="title-b">
                <div className="div-style-detail">
                  {" "}
                  Client:
                  <h6>{this.props.name}</h6>
                </div>
                <div className="div-style-detail">
                  {" "}
                  Project:
                  <h6> Website</h6>
                </div>
                <div className="div-style-detail">
                  {" "}
                  Website:
                  <h6>
                    {this.props.url}
                    <a href={this.props.url} />
                  </h6>
                </div>
              </div>

              <Iframe url={this.props.url} className="i-frame"></Iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}*/
