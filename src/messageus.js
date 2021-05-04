import React from "react";
import { SocialIcon } from "react-social-icons";

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
        <SocialIcon
          style={{
            margin: "4px",
            height: "14px",
            width: "14px"
          }}
          url="https://twitter.com/viathumbprint"
        />
      </div>
    );
  }
}
export default Messageus;
