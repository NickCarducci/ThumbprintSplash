import React from "react";

class Messageus extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(135,90,205)",
          display: ["messageus", "ourusers"].includes(this.props.open)
            ? "block"
            : "none",
          position: "relative",
          color: "rgb(200,200,250)"
        }}
      >
        nick@thumbprint.us
      </div>
    );
  }
}
export default Messageus;
