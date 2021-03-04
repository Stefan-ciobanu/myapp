import React from "react";
import "../PopUpPage/PopUp.css";
import Iframe from "react-iframe";
import ProjectPage from "../ProjectPage/ProjectPage";

const urls = [
  { name: "Apex", url: "https://apexprivacy.com/new-apex-home-page/" },
  { name: "Thrupny", url: "https://www.thrupny.com/" },
  { name: "Datapod", url: "https://dataprivacypod.com/" },
];
export default class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      name: "",
    };
  }
  handleClick = () => {
    this.props.toggle();
  };

  componentDidMount() {
    const name = window.location.pathname;
    this.setState({
      url: urls.url,
      name: urls.name,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="modal-1">
          <div className="modal_content">
            <span className="close" onClick={this.handleClick}>
              X
            </span>
            <div>
              <div className="title-b">
                <div className="div-style-detail">
                  {" "}
                  Client:
                  <h6>{this.state.name}</h6>
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
                    {this.state.url}
                    <a href={this.state.url} />
                  </h6>
                </div>
              </div>

              <Iframe url={this.componentDidMount} className="i-frame"></Iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
