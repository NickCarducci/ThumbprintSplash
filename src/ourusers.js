import React from "react";
import final01 from "./final01.gif";
import citygif from "./city.gif";

class Ourusers extends React.Component {
  state = {};
  selectExample = (userexampleSelected) =>
    this.setState({
      userexampleSelected
    });
  render() {
    return (
      <div
        className={this.props.open === "ourusers" ? "ourusers" : "ourusersClsd"}
      >
        <div
          className={
            this.props.open === "ourusers" ? "ourusersdiv" : "ourusersClsddiv"
          }
        >
          <div>
            {this.state.userexampleSelected === "city" ? (
              <div
                className={
                  this.props.open === "ourusers"
                    ? "cityexamplehighlightbkgd"
                    : "cityexamplehighlightbkgdClsd"
                }
              >
                <img
                  onClick={() => this.selectExample("city")}
                  src={citygif}
                  alt="error"
                  className={
                    this.props.open === "ourusers"
                      ? "cityexamplehighlight"
                      : "cityexamplehighlightClsd"
                  }
                />
              </div>
            ) : (
              <img
                onClick={() => this.selectExample("city")}
                src={citygif}
                alt="error"
                className={
                  this.props.open === "ourusers"
                    ? "cityexample"
                    : "cityexampleClsd"
                }
              />
            )}
          </div>
          <div>
            {this.state.userexampleSelected === "school" ? (
              <div
                className={
                  this.props.open === "ourusers"
                    ? "privatecitygifbkgd"
                    : "privatecitygifbkgdClsd"
                }
              >
                <img
                  onClick={() => this.selectExample("school")}
                  src={require("./final02.gif")}
                  alt="error"
                  className={
                    this.props.open === "ourusers"
                      ? "privatecitypng"
                      : "privatecitypngClsd"
                  }
                />
              </div>
            ) : (
              <img
                onClick={() => this.selectExample("school")}
                src={require("./final02.gif")}
                alt="error"
                className={
                  this.props.open === "ourusers"
                    ? "privatecitygif"
                    : "privatecitygifClsd"
                }
              />
            )}
          </div>
          {this.state.userexampleSelected === "firm" ? (
            <div
              className={
                this.props.open === "ourusers"
                  ? "privatecitygifbkgd"
                  : "privatecitygifbkgdClsd"
              }
            >
              <img
                onClick={this.selectFirmexample}
                src={final01}
                alt="error"
                className={
                  this.props.open === "ourusers"
                    ? "privatecitypng"
                    : "privatecitypngClsd"
                }
                type="gif"
              />
            </div>
          ) : (
            <img
              onClick={() => this.selectExample("firm")}
              src={final01}
              alt="error"
              className={
                this.props.open === "ourusers"
                  ? "privatecitygif"
                  : "privatecitygifClsd"
              }
            />
          )}
        </div>
        <div
          className={
            this.props.open === "ourusers"
              ? "userdescription"
              : "userdescriptionClsd"
          }
        >
          {this.state.userexampleSelected === "firm"
            ? "Cultivate teams, launch events and inspire a company culture"
            : this.state.userexampleSelected === "school"
            ? "Host events, discover clubs and manage classes"
            : "Promote events, form social clubs and meet new people"}
        </div>
      </div>
    );
  }
}
export default Ourusers;
