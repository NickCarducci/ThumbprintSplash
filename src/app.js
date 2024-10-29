import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavBar from "./navbar.js";
import Ourusers from "./ourusers.js";
import Messageus from "./messageus.js";
import Body from "./body.js";

import "./styles.css";
import Thumbprint from "./Thumbprint/index.js";
import USBudget from "./Thumbprint/USBudget.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: "home",
    };
  }
  render() {
    const { see2017 } = this.state;
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div style={{ width: "100%", height: "min-content" }}>
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000}>
          <div
            style={{
              margin: "70px 0px",
            }}
          >
            "I want to democratize budget proposals and elections for student
            government associations, municipality governments, and corporate
            governance boards."
            <br />- Nick Carducci (CEO, Founder)
          </div>
          <div>
            <h2>Find things to do around you.</h2>
            <a href="https://cityscan.org" style={{ color: "black" }}>
              <img
                style={{ height: "86px", width: "86px" }}
                src="https://www.dl.dropboxusercontent.com/s/cp1vzypyfh1sb03/Thumbprint%20corp%20logo%20-%20colors_round%20%282%29.png?dl=0"
                //<img src="https://www.dl.dropboxusercontent.com/s/9oci4efa4zsh90q/Thumbprint_logo.png?dl=0" />
                alt="err"
              />
            </a>
            <br />
            cityscan.org
          </div>
          <div>
            <h2>Keep track of plans with friends.</h2>
            <a href="https://thumbprint.app" style={{ color: "black" }}>
              <img
                style={{ height: "86px", width: "86px" }}
                src="https://www.dl.dropboxusercontent.com/s/9oci4efa4zsh90q/unnamed.png?dl=0"
                alt="err"
              />
            </a>
            <br />
            thumbprint.app
          </div>
        </Carousel>
        {this.state.openBudget ? (
          <USBudget width={this.props.width} />
        ) : this.state.openThumbprint ? (
          <Thumbprint width={this.props.width} />
        ) : (
          <div style={{ width: "100%", height: "min-content" }}>
            {/*<img
          alt="err background video flyover"
          style={{
            zIndex: "-9999",
            display: "flex",
            position: "fixed",
            height: "100vh",
            opacity: "1",
            transition: ".1s ease-out"
          }}
          src="https://www.dl.dropboxusercontent.com/s/4gw80o7sfivpreu/Screen%20Shot%202020-08-16%20at%204.05.31%20PM.png?dl=0"
        />
        <video
          style={{
            zIndex: "-9",
            display: "flex",
            position: "fixed",
            height: "100vh",
            opacity: !this.state.hideAsk ? 1 : 0,
            transition: ".1s ease-out"
          }}
          ref="vidRef"
          id="video"
          autoPlay
          playsInline
          muted
          onEnded={() => {
            this.setState({ hideAsk: true });
            setTimeout(() => {
              this.setState({ hideAsk: false });
              document.getElementById("video").play();
            }, 300);
          }}
        >
          <source
            src="https://www.dl.dropboxusercontent.com/s/jhn92kxw2wqzvwd/production%20ID_3743056.mp4?dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>*/}
            <Ourusers open={this.state.open} />
            <Messageus open={this.state.open} />
            <div style={{ display: "flex" }}>
              <div
                onClick={() => this.setState({ openThumbprint: true })}
                style={{
                  margin: "4px 0px",
                  padding: "10px",
                  fontSize: "12px",
                  color: "rgb(223, 223, 250)",
                  backgroundColor: "rgba(24, 73, 87, 0.712)",
                  border: "1px solid white",
                }}
              >
                Open Legislation
              </div>
              <div
                onClick={() => this.setState({ openBudget: true })}
                style={{
                  margin: "4px 0px",
                  padding: "10px",
                  fontSize: "12px",
                  color: "rgb(223, 223, 250)",
                  backgroundColor: "rgba(24, 73, 87, 0.712)",
                  border: "1px solid white",
                }}
              >
                Open Budget
              </div>
              <div
                onClick={() =>
                  (window.location.href = "https://humanharvest.info")
                }
                style={{
                  margin: "4px 0px",
                  padding: "10px",
                  fontSize: "12px",
                  color: "rgb(223, 223, 250)",
                  backgroundColor: "rgba(24, 73, 87, 0.712)",
                  border: "1px solid white",
                }}
              >
                Pandemic Data
              </div>
            </div>
            <NavBar
              open={this.state.open}
              setOpen={(open) => {
                if (this.state.open === open) {
                  if (open === "home") {
                    this.setState({ see2017: !see2017 });
                  } else this.setState({ open: "home" });
                } else this.setState({ open });
              }}
            />
            <Body
              history={this.props.history}
              open={this.state.open}
              pathname={this.props.pathname}
              see2017={see2017}
              set2017={(see2017) => this.setState(see2017)}
            />
          </div>
        )}
      </div>
    );
  }
}
export default App;

