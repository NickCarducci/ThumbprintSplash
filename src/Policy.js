import React from "react";

class Policy extends React.Component {
  state = {};
  render() {
    const { hidePolicy } = this.props;
    return (
      <div
        style={{
          overflow: "hidden",
          backgroundColor: "rgb(20,20,40)",
          color: "rgb(235,235,240)",
          margin: "10px",
          width: "calc(100% - 20px)",
          position: "relative",
          opacity: hidePolicy ? 0 : 1,
          height: hidePolicy ? "0px" : "min-content",
          zIndex: hidePolicy ? -1 : 0,
          transition: ".3s ease-out"
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ width: "calc(50% - 20px)", margin: "10px" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              alt="twitter.com/vaultbiz"
              src="https://www.dl.dropboxusercontent.com/s/5227lmxj88pr5du/Screen%20Shot%202021-08-04%20at%2012.26.08%20PM.png?dl=0"
            />
          </div>
          <div style={{ width: "calc(50% - 20px)", margin: "10px" }}>
            Please contact us with your username to delete your information at
            nick@thumbprint.us <b>or feature requests</b>, or use the web-app
            (in-dev)
            <br />
            <br />
            This policy may change. Please return here to stay updated.
            <br />
            <div style={{ width: "100%" }}>
              <br />
              &bull; In-browser calendar - <b>PouchDB local storage</b>
              <br />
              &bull; Voting & banking - (address, email & ID){" "}
              <em>(in development)</em>
            </div>
            <br />
            <b>Hidden</b>
            <br />
            &bull;Review communication to:from your contacts, store blocks &
            mutes
            <br />
            <br />
            <b>Hide-able entities for members</b>
            <br />
            <div
              style={{
                flexWrap: "wrap",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div>
                &bull; Events
                <br />
                &bull; Clubs
                <br />
                &bull; Shops
              </div>
              <div>
                &bull; Restaurants
                <br />
                &bull; Services
                <br />
                &bull; Jobs
              </div>
              <div>
                &bull; Housing
                <br />
                &bull; Pages
                <br />
                &bull; Venues
              </div>
              <div>
                &bull; Classes
                <br />
                &bull; Departments
                <br />
                &bull; Forms & permits
              </div>
            </div>
            <br />
            <b>Hide-able posts or voting capabilities for members</b>
            <div>
              &bull; Ordinances
              <br />
              &bull; Budget & proposals
              <br />
              &bull; Elections
              <br />
              &bull; Court Cases
            </div>
            <br />
            <b>Show-able </b>
            &bull;Showcase political thumbprint affinity &/or votes
            <br />
            &bull; Toggle indicated experience, education & hobby for polls and
            profile
            <br />
            &bull; Showcase certifications, awards and memberships (soon)
            <br />
            <br />
            <b>Public </b>
            &bull;Total results by hobby, education or experience
            <br /> and all votes by assigned representatives and candidates
            <br />
            <br />
          </div>
          <div
            style={{
              height: "min-content",
              width: "calc(50% - 20px)",
              padding: "10px",
              backgroundColor: "rgba(150,250,250,.6)"
            }}
          >
            &bull; Login uses reCAPTCHA - <b>Screenshots taken</b>
            <br />
            &bull; Google Drive Api for documents - <b>OAuth</b>
            <br />
            &bull; Firebase Cloud storage - <b>Firebase Authentication</b> -
            (phone)
            <br />
            <br />
            reCAPTCHA is a free service from Google that helps protect our
            web-app from spam/abuse by collecting personal information about
            users to determine that they are humans, not spam bots
            <br />
            <br />
            "This ... [cookie & screenshot] information ... no longer reflects
            or references an individually-identifiable user," but informs
            marketing partners of your profile and trends for third-party users
            on Google's brand of products
          </div>
          <div style={{ width: "calc(50% - 20px)", margin: "10px" }}>
            Otherwise, the Firebase Database (Firestore & Cloud storage) data is
            encrypted in transit, stored on encrypted disks on the servers, and
            may be stored in your browser's cache.{" "}
            <b>
              So, please only open your chats on a private device. <br />
              <br />
              Data is otherwise only controlled by you, granting that it is
              deemed by us to be appropriate for all audiences
            </b>
            <div
              onClick={() =>
                this.setState({ convicted: !this.state.convicted })
              }
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                width: "calc(100% - 20px)"
              }}
            >
              (View as {this.state.convicted ? "Unconvicted" : "Convicted"})
            </div>
            <div
              style={{
                color: !this.state.convicted
                  ? "rgb(240,240,180)"
                  : "rgb(240,240,180)",
                padding: "15px",
                marginTop: "10px",
                width: "calc(90% - 30px)",
                flexDirection: "column",
                display: "inline-block",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: !this.state.convicted
                  ? "rgba(150,150,250,.6)"
                  : "rgba(150,250,250,.6)"
              }}
            >
              {this.state.convicted &&
                "Are you on a private computer? Firebase chat uses cache to lessen the download"}
              {/*Firebase chat uses cache to lessen the (down)load
              <br />*/}
              {!this.state.convicted && (
                <div>
                  <span>
                    <i
                      className="fas fa-key"
                      style={{
                        margin: "1px",
                        zIndex: "7",
                        position: "absolute",
                        color: "rgb(150,150,250)"
                      }}
                    ></i>{" "}
                    <i className="fas fa-box" style={{ fontSize: "20px" }}></i>
                  </span>{" "}
                  for your first <i className="fas fa-laptop"></i>{" "}
                  <i className="fas fa-tablet-alt"></i>
                  <br />{" "}
                  <div style={{ display: "flex" }}>
                    {this.state.informationAbout ? (
                      <div style={{ display: "inline-block" }}>
                        While Firestore data is encrypted by Google in transit &
                        their cloud, it is&nbsp;
                        <span
                          style={{
                            color: "red"
                          }}
                        >
                          unencrypted
                        </span>
                        &nbsp;in your browser's cache.
                      </div>
                    ) : (
                      <div style={{ display: "inline-block" }}>
                        End-to-end, on-device, encryption should be fashioned on
                        the&nbsp;
                        <span
                          style={{
                            color: "red"
                          }}
                        >
                          private devices
                        </span>
                        &nbsp;you would like to hold your keys.
                      </div>
                    )}
                    <div
                      style={{
                        color: "white",
                        padding: "9px",
                        paddingTop: "2px",
                        borderRadius: "15px",
                        border: "1px solid",
                        height: "10px"
                      }}
                      onClick={() =>
                        this.setState({
                          informationAbout: !this.state.informationAbout
                        })
                      }
                    >
                      i
                    </div>
                  </div>
                  <br />
                  Your&nbsp;
                  <span
                    style={{
                      color: "red"
                    }}
                  >
                    prime-number-key
                  </span>
                  &nbsp;can decipher jumbled messages & media (
                  <span
                    style={{
                      color: "green"
                    }}
                  >
                    if non-convict, see nationalsecuritycasino.com
                  </span>
                  ) and share this ability with other devices. Chats are
                  encrypted with their own&nbsp;
                  <span style={{ color: "rgb(200,210,220)" }}>
                    <span style={{ textDecoration: "underline" }}>
                      keyboxes per threadId
                    </span>{" "}
                    [recipients, entityCollection+doc.id]
                  </span>
                  ,{" "}
                  <span
                    style={{
                      color: "rgb(30,120,210)"
                    }}
                  >
                    Devices will have to be re-forged by revisiting an&nbsp;
                    <span
                      style={{
                        color: "red"
                      }}
                    >
                      active
                    </span>
                    &nbsp;device.
                  </span>{" "}
                  If you cannot visit an active device your messages and media
                  will likely be unreadable forever.
                  <br />
                  <br />
                </div>
              )}
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Policy;
