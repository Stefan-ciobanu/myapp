import React, { useEffect, useState } from "react";
import "./ProjectPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from "../HomePage/Image1.jpg";
import PopUp from "../PopUpPage/PopUp";
import lf20_eiubpejs from "../LottieFiles/lf20_eiubpejs.json";
import lf30_editor from "../LottieFiles/lf30_editor.json";
import lf30_p8LA from "../LottieFiles/lf30_p8LA.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function ProjectPage() {
  const data = [
    {
      name: "Apex",
      url: "https://apexprivacy.com/new-apex-home-page/",
    },
    {
      name: "My IMDB",
      url: "http://localhost:3003/",
    },
    {
      name: "Datapod",
      url: "https://dataprivacypod.com/",
    },
    {
      name: "Nasa API",
      url: "http://192.168.0.100:5500/nasa.html",
    },
    {
      name: "Card Game",
      url: "http://192.168.0.100:5501/index.html",
    },
  ];

  const [seen, setSeen] = useState(false);
  const [clickedCompany, setClickedCompany] = useState(null);

  useEffect(() => {}, [clickedCompany]);

  const togglePop = () => {
    setSeen(true);
  };

  const unTogglePop = () => {
    setSeen(false);
  };

  return (
    <Container fluid className="cont-main2 color-change-3x2">
      {seen ? (
        <PopUp unToggle={unTogglePop} clickedCompany={clickedCompany} />
      ) : null}
      {data.map((company, index) => {
        return (
          <Row className="title-about">
            <Col>
              <li
                className="port-box"
                onClick={() => {
                  setSeen(true);
                  setClickedCompany(company);
                }}
              >
                <div className="client-name">{company.name}</div>
                <Player
                  autoplay
                  loop={false}
                  className="figure-li-box-2"
                  src={company.lofiFile}
                  style={{ height: "200px", width: "200px" }}
                >
                  <Controls visible={false} />
                </Player>
              </li>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

// export default class ProjectPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       seen: false,
//       companyClicked: null,
//     };
//   }

//   togglePop = () => {
//     console.log("a");
//     this.setState({
//       seen: true,
//       // companyClicked: company,
//     });
//   };

//   unTogglePop = () => {
//     this.setState({
//       seen: false,
//       // companyClicked: null,
//     });
//   };

//   render() {
//     return (
//       <Container fluid className="cont-main2 color-change-3x2">
//         {this.state.seen ? (
//           <PopUp
//             unToggle={this.unTogglePop}
//             companyClicked={this.companyClicked}
//           />
//         ) : null}
//         {data.map((company) => {
//           <Row className="title-about">
//             <Col>
//               <li className="port-box" onClick={this.togglePop}>
//                 <div className="client-name">{company.name}</div>
//                 <Player
//                   autoplay
//                   loop={false}
//                   className="figure-li-box-2"
//                   src={lf30_p8LA}
//                   style={{ height: "200px", width: "200px" }}
//                 >
//                   <Controls visible={false} />
//                 </Player>
//               </li>
//             </Col>
//           </Row>;
//         })}
//         {/* <Row className="title-about">
//           <h1 className="about-align ">
//             MY
//             <span className="style-me">PORTFOLIO</span>
//           </h1>
//           <span className="background-title">WORKS</span>
//         </Row>
//         <Row>
//           <Col>
//             <ul className="ul-port">
//               <li className="port-box" onClick={this.togglePop}>
//                 <div className="client-name">Apex Website</div>

//                 <Player
//                   autoplay
//                   loop={false}
//                   className="figure-li-box-2"
//                   src={lf30_p8LA}
//                   style={{ height: "200px", width: "200px" }}
//                 >
//                   <Controls visible={false} />
//                 </Player>
//               </li>
//               <li className="port-box" onClick={this.togglePop}>
//                 <Player
//                   autoplay
//                   loop={false}
//                   className="figure-li-box-2"
//                   src={lf20_eiubpejs}
//                   style={{ height: "200px", width: "200px" }}
//                 >
//                   <Controls visible={false} />
//                 </Player>
//                 <div className="client-name">Thrupny Website</div>
//               </li>
//               <li className="port-box" onClick={this.togglePop}>
//                 <Player
//                   autoplay
//                   loop={false}
//                   className="figure-li-box-2"
//                   src={lf30_editor}
//                   style={{ height: "200px", width: "200px" }}
//                 >
//                   <Controls visible={false} />
//                 </Player>
//                 <div className="client-name">Podcast Website</div>
//               </li>
//               <li className="port-box" onClick={this.togglePop}>
//                 <Player
//                   autoplay
//                   loop={false}
//                   className="figure-li-box-2"
//                   src={lf30_editor}
//                   style={{ height: "200px", width: "200px" }}
//                 >
//                   <Controls visible={false} />
//                 </Player>
//                 <div className="client-name">Podcast Website</div>
//               </li>
//               <li className="port-box" onClick={this.togglePop}>
//                 <Player
//                   autoplay
//                   loop={false}
//                   className="figure-li-box-2"
//                   src={lf30_editor}
//                   style={{ height: "200px", width: "200px" }}
//                 >
//                   <Controls visible={false} />
//                 </Player>
//                 <div className="client-name">Podcast Website</div>
//               </li>

//               <li className="port-box" onClick={this.togglePop}>
//                 <div className="client-name">Podcast Website</div>
//                 <Player
//                   autoplay
//                   loop={false}
//                   className="figure-li-box-2"
//                   src={lf30_editor}
//                   style={{ height: "200px", width: "200px" }}
//                 >
//                   <Controls visible={false} />
//                 </Player>
//               </li>
//             </ul>
//           </Col>
//         </Row> */}
//       </Container>
//     );
//   }
// }