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
          <div style={{ width: "50%" }}>
            now a sole-proprietorship with some royalty contracts w/max-profit
            under $50k
            <br />
            was a non-profit in{" "}
            <a
              style={{ color: "grey" }}
              href="https://vianickcarducci.medium.com/im-on-the-blockchain-742e3702721"
            >
              November 5, 2012
            </a>{" "}
            until I realized the gov gets it when I die,
            <br />
            unless I make a clean break, with my dns-domain-whois, into a sole
            proprietorship
          </div>
          <div style={{ width: "50%" }}>
            <br />
            Please contact us with your username to delete your information at
            nick@thumbprint.us <b>or feature requests</b>, or use the web-app
            (in-dev)
            <br />
            <br />
            This policy may change. Please return here to stay updated.
          </div>
          <div style={{ width: "50%" }}>
            <br />
            <br />
            &bull; Login uses reCAPTCHA - <b>Screenshots taken</b>
            <br />
            &bull; Google Drive Api for documents - <b>OAuth</b>
            <br />
            &bull; Firebase Cloud storage - <b>Firebase Authentication</b> -
            (phone)
          </div>
          <div style={{ width: "50%" }}>
            <br />
            <br />
            &bull; In-browser calendar - <b>PouchDB local storage</b>
            <br />
            &bull; Voting & banking - (address, email & ID){" "}
            <em>(in development)</em>
          </div>
        </div>
        <br />
        <br />
        reCAPTCHA is a free service from Google that helps protect our web-app
        from spam/abuse by collecting personal information about users to
        determine that they are humans, not spam bots
        <br />
        <br />
        "This ... [cookie & screenshot] information ... no longer reflects or
        references an individually-identifiable user," but informs marketing
        partners of your profile and trends for third-party users on Google's
        brand of products
        <br />
        <br />
        Otherwise, the Firebase Database (Firestore & Cloud storage) data is
        encrypted in transit, stored on encrypted disks on the servers, and may
        be stored in your browser's cache.{" "}
        <b>
          So, please only open your chats on a private device. <br />
          <br />
          Data is otherwise only controlled by you, granting that it is deemed
          by us to be appropriate for all audiences
        </b>
        <br />
        <div
          style={{
            backgroundColor: "rgb(200,100,100)",
            margin: "10px",
            width: "calc(100% - 20px)"
          }}
        >
          <div
            onClick={() => this.setState({ convicted: !this.state.convicted })}
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              width: "calc(100% - 20px)"
            }}
          >
            (View as {this.state.convicted ? "Unconvicted" : "Convicted"})
          </div>
          {this.state.convicted && (
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                width: "calc(100% - 20px)",
                backgroundColor: "rgba(150,150,250,.6)"
              }}
            >
              Are you on a private computer?
            </div>
          )}
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
                <br />
                share your <i className="fas fa-box"></i> & open thread +
                children-document <i className="fas fa-key"></i>'s with your
                accounts' <i className="fas fa-key"></i>'s.
                <br />
                To access your <i className="fas fa-box"></i>'s on the cloud{" "}
                <br />
                <span
                  style={{
                    color: this.state.convicted ? "green" : "rgb(100,220,150)"
                  }}
                >
                  (a) Never destoy this <i className="fas fa-laptop"></i>{" "}
                  <i className="fas fa-tablet-alt"></i>
                </span>
                <br />
                <span
                  style={{
                    color: this.state.convicted ? "blue" : "rgb(170,190,250)"
                  }}
                >
                  (b) 1. Click the button. 2. Visit your original{" "}
                  <i className="fas fa-laptop"></i>{" "}
                  <i className="fas fa-tablet-alt"></i> . 3. Then, come back. 4.
                  Never destroy the auxilliary <i className="fas fa-laptop"></i>{" "}
                  <i className="fas fa-tablet-alt"></i>.
                </span>
                <br />
                <span
                  style={{
                    color: this.state.convicted
                      ? "rgb(200,50,200)"
                      : "rgb(250,150,250)"
                  }}
                >
                  or (c) 1. Save the <i className="fas fa-key"></i> in a file,
                  then drop it into a new <i className="fas fa-laptop"></i>{" "}
                  <i className="fas fa-tablet-alt"></i>.
                </span>{" "}
                <br />
                <br />
              </div>
            )}
          </div>
          <br />
          <br />
        </div>
        <br />
        <b>Hidden </b>
        <br />
        &bull;Review communication to:from your contacts, store blocks & mutes
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
    );
  }
}
export default Policy;
