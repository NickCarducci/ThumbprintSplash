import React from "react";

class History extends React.Component {
  render() {
    const { showHistory } = this.props;
    return (
      <div
        style={{
          height: showHistory ? "min-content" : "0px",
          overflow: "hidden"
        }}
      >
        <a
          className="protobuttons"
          href="https://projects.invisionapp.com/share/RSBG9X06H#/screens"
          style={{
            display: "flex",
            flexDirection: "column",
            wordBreak: "break-all",
            maxWidth: "100%"
          }}
        >
          Invisionapp.com Design 2017
          <div
            style={{
              fontSize: "12px",
              color: "grey",
              wordBreak: "break-all",
              maxWidth: "100%"
            }}
          >
            https://projects.invisionapp.com/share/RSBG9X06H#/screens
          </div>
        </a>
        <iframe
          style={{ border: "1px solid black" }}
          title="vid1"
          src="https://player.vimeo.com/video/202766890"
          allowFullScreen
        ></iframe>
        <div
          onClick={() => {
            var answer = window.confirm("open vimeo.com/video/202766890");
            if (answer) {
              window.location.href = "https://vimeo.com/video/202766890";
            }
          }}
        >
          open Business Plan
        </div>
        <br />
        <a
          className="protobuttons"
          href="https://codesandbox.io/s/zen-dijkstra-1c31n"
          style={{
            display: "flex",
            flexDirection: "column",
            wordBreak: "break-all",
            maxWidth: "100%"
          }}
        >
          Codesandbox.io Test Build 2019 (depreciated)
          <div style={{ fontSize: "12px", color: "grey" }}>
            https://codesandbox.io/s/nostalgic-bhaskara-onytp
          </div>
        </a>
        <br />
        <a
          style={{ color: "white", backgroundColor: "rgb(70,180,250)" }}
          href="https://thumbprint.app"
        >
          thumbprint.app
        </a>
        <br />
        <a
          className="protobuttons"
          href="https://codesandbox.io/s/recursing-paper-4vosh"
          style={{
            display: "flex",
            flexDirection: "column",
            wordBreak: "break-all",
            maxWidth: "100%"
          }}
        >
          Codesandbox.io v1-beta-alpha
          <div style={{ fontSize: "12px", color: "grey" }}>
            https://codesandbox.io/s/recursing-paper-4vosh
          </div>
        </a>
        <br />
        <a href="https://github.com/nickcarducci">github.com/nickcarducci</a>
        <br />
        <div>
          <iframe
            style={{
              display: "flex",
              position: "relative",
              border: "1px solid black",
              width: "300px",
              left: "50%",
              transform: "translateX(-50%)"
            }}
            title="vid2"
            src="https://www.youtube-nocookie.com/embed/19d3eY0iAGg"
            allowFullScreen
          ></iframe>
          <div
            onClick={() => {
              var answer = window.confirm("open https://youtu.be/19d3eY0iAGg");
              if (answer) {
                window.location.href = "https://youtu.be/19d3eY0iAGg";
              }
            }}
          >
            open Screengrab
          </div>
          <br />
        </div>
        <a
          style={{ color: "white", backgroundColor: "rgb(20,80,170)" }}
          href="https://wavv.art"
        >
          wavv.art
        </a>
        <a
          className="protobuttons"
          href="https://pineapple-mint.com"
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            wordBreak: "break-all",
            maxWidth: "100%"
          }}
        >
          pineapple-mint.com
          <div style={{ fontSize: "12px", color: "grey" }}>
            product studio experiences and tools
          </div>
        </a>
        <div
          style={{
            margin: "20px 0px",
            flexDirection: "column",
            left: "0px",
            display: "flex",
            position: "relative",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <iframe
            style={{ border: "1px solid black" }}
            title="vid1"
            src="https://player.vimeo.com/video/447315470?byline=0&portrait=0&playsinline=0"
            allowFullScreen
          ></iframe>
          <div
            onClick={() => {
              var answer = window.confirm("open https://vimeo.com/447315470");
              if (answer) {
                window.location.href = "https://vimeo.com/447315470";
              }
            }}
          >
            open Advertisement
          </div>
          <br />
          <iframe
            style={{ border: "1px solid black" }}
            title="vid1 https://vimeo.com/448329299"
            src="https://player.vimeo.com/video/448329299?byline=0&portrait=0&playsinline=0"
            allowFullScreen
          ></iframe>
          <div
            onClick={() => {
              var answer = window.confirm("open https://vimeo.com/448329299");
              if (answer) {
                window.location.href = "https://vimeo.com/448329299";
              }
            }}
          >
            open Journey
          </div>
        </div>
      </div>
    );
  }
}
export default History;
