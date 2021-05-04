import React from "react";
import NavBar from "./navbar.js";
import Ourusers from "./ourusers.js";
import Messageus from "./messageus.js";
import Body from "./body.js";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: "home"
    };
  }
  render() {
    const { see2017 } = this.state;
    return (
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
          open={this.state.open}
          pathname={this.props.pathname}
          see2017={see2017}
          set2017={(see2017) => this.setState(see2017)}
        />
      </div>
    );
  }
}
export default App;
