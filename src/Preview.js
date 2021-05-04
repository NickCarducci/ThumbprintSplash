import React from "react";

export default class Preview extends React.Component {
  render() {
    return (
      <div
        style={{
          display: !this.props.closePreview ? "flex" : "none",
          width: "100%",
          height: "min-content"
        }}
      >
        <div
          onClick={this.props.close}
          style={{ zIndex: "1", fontSize: "45px" }}
        >
          &times;
        </div>
        <div
          style={{
            height: "min-content",
            backgroundColor: "rgb(25,25,35)"
          }}
        >
          <div
            style={{
              width: "100%",

              color: "white"
            }}
          >
            pouchdb for plans
          </div>
          <div
            style={{
              backgroundColor: "rgb(45,175,220)",
              width: "100%",
              height: "20%"
            }}
          >
            save: download plans from firestore chat or keep them in your
            browser's local storage
          </div>
          <div
            style={{
              width: "100%",

              color: "white"
            }}
          >
            firestore, youtube live stream, drive links
          </div>
          <div
            style={{
              backgroundColor: "rgb(125,105,220)",
              width: "100%",
              height: "20%"
            }}
          >
            chat: share plans, drive links, go live on youtube (soon), videochat
            with peerjs (soon)
          </div>
          <div
            style={{
              width: "100%",

              color: "white"
            }}
          >
            mapbox: explore the community catalog geospatially
          </div>
        </div>
      </div>
    );
  }
}
