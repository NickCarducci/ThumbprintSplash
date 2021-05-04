import React from "react";
import "./navbar.css";

class NavBar extends React.Component {
  state = {};
  render() {
    const relativeNavBtns = {
      padding: "10px",
      fontSize: "16px",
      color: "rgb(223, 223, 250)",
      backgroundColor: "rgba(24, 73, 87, 0.712)",
      border: "1px solid white"
    };
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          height: "56px",
          alignItems: "center"
        }}
      >
        <div
          style={relativeNavBtns}
          onClick={() => this.props.setOpen("ourusers")}
        >
          Our use cases
        </div>
        &nbsp;
        <div
          style={relativeNavBtns}
          onClick={() => this.props.setOpen("messageus")}
        >
          Message us
        </div>
        &nbsp;
        <div style={relativeNavBtns} onClick={() => this.props.setOpen("home")}>
          See prototype
        </div>
      </div>
    );
  }
}
export default NavBar;
