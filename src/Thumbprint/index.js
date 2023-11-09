import React from "react";
import PouchDB from "pouchdb";
import upsert from "pouchdb-upsert";
import { specialFormatting } from "./Sudo";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import firebase from "./init-firebase.js";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInAnonymously,
  signOut
} from "firebase/auth";
import Votes from "./Votes";

const forbiddenUsernames = [
  "event",
  "events",
  "club",
  "clubs",
  "shop",
  "shops",
  "restaurant",
  "restaurants",
  "service",
  "services",
  "dept",
  "department",
  "departments",
  "classes",
  "class",
  "oldclass",
  "oldclasses",
  "job",
  "jobs",
  "housing",
  "oldhome",
  "page",
  "pages",
  "venue",
  "venues",
  "forum",
  "posts",
  "post",
  "oldelection",
  "elections",
  "election",
  "case",
  "cases",
  "oldcase",
  "oldcases",
  "budget",
  "budgets",
  "oldbudget",
  "oldbudgets",
  "ordinance",
  "ordinances",
  "new",
  "news",
  "login",
  "logins",
  "doc",
  "docs",
  "private",
  "privacy",
  "legal",
  "terms",
  "law",
  "laws",
  "bill",
  "bills"
];
export const standardCatch = (e) => console.log(e);
//const deletion = (d, db) => db.remove(d).catch(standardCatch);
const destroy = (db) => db.destroy();
const set = async (db, c) =>
  await db //has upsert plugin from class constructor
    .upsert(c._id, (copy) => {
      copy = { ...c }; //pouch-db \(construct, protocol)\
      return copy; //return a copy, don't displace immutable object fields
    })
    .then(
      () => null /*"success"*/
      /** or
          notes.find((x) => x._id === c._id)
            ? this.db
              .post(c)
              .then(() => null)
              .catch(standardCatch)
          : deletion(c) && set(db, c);  
          */
    )
    .catch(standardCatch);
const read = async (db, notes /*={}*/) =>
  //let notes = {};
  await db
    .allDocs({ include_docs: true })
    .then(
      (
        allNotes //new Promise cannot handle JSON objects, Promise.all() doesn't
      ) =>
        Promise.all(
          allNotes.rows.map(async (n) => await (notes[n.doc.key] = n.doc))
        )
      // && and .then() are functionally the same;
    )
    .catch(standardCatch);
class AVIDB {
  constructor(name) {
    PouchDB.plugin(upsert);
    const title = "anonymousVotingIds";
    this.db = new PouchDB(title, {});
  }
  deleteAnonymousVotingId = async (note) =>
    await this.db.remove(note).catch(standardCatch);

  destroy = () => destroy(this.db);
  storeAnonymoustVotingId = async (key) => await set(this.db, key);
  readAnonymousVotingIds = async (notes = {}) =>
    //let notes = {};
    await read(this.db, notes);
}

const firestore = getFirestore(firebase);
class Thumbprint extends React.Component {
  constructor(props) {
    super(props);

    let avidb = new AVIDB();
    this.state = {
      avidb,
      searching: "",
      predictions: [],
      bills: [],
      page: 1
    };
  }
  componentWillUnmount = () => {
    clearTimeout(this.closer);
  };
  componentDidMount = async () => {
    await signInAnonymously(getAuth()).catch(standardCatch);

    (window.RequestFileSystem || window.webkitRequestFileSystem)(
      window.TEMPORARY,
      100,
      () =>
        this.setState({ incognito: false }, async () => {
          return await this.state.avidb.readAnonymousVotingIds().then((obj) => {
            const anonVotingIds = Object.values(obj);
            if (anonVotingIds) {
              const thisAccountParty = anonVotingIds.find(
                (x) => x._id === "party"
              );
              thisAccountParty &&
                this.setState({
                  party: thisAccountParty.party
                });

              const thisAccountAVID = anonVotingIds.find(
                (x) => x._id === "voterId"
              );
              var abstractAuthorId;
              if (!thisAccountAVID) {
                window.alert("forging your magically anonymous ID");

                const randomString = (length, chars) => {
                  var mask = "";
                  if (chars.indexOf("a") > -1)
                    mask += "abcdefghijklmnopqrstuvwxyz";
                  if (chars.indexOf("A") > -1)
                    mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                  if (chars.indexOf("#") > -1) mask += "0123456789";
                  if (chars.indexOf("!") > -1)
                    mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
                  var result = "";
                  for (var i = length; i > 0; --i)
                    result += mask[Math.floor(Math.random() * mask.length)];
                  return result;
                };
                abstractAuthorId = randomString(30, "aA#");
                this.state.avidb.storeAnonymoustVotingId({
                  _id: "voterId",
                  abstractAuthorId
                });
              } else {
                abstractAuthorId = thisAccountAVID.abstractAuthorId;
              }
              this.setState({
                abstractAuthorId
              });
            }
          });
        }),
      () => this.setState({ incognito: true })
    );
  };
  render() {
    const hiddenUserData = (ath) => {
        //console.log("hiddenuserdata");
        onSnapshot(
          doc(firestore, "userDatas", ath.uid),
          (doc) => {
            var userDatas = undefined;
            if (doc.exists()) {
              var u = this.state.user;
              userDatas = doc.data(); //{...,doc.id}

              //delete u.defaultEmail;
              const user = {
                ...u,
                ...userDatas,
                userDatas: true
              };
              this.setState(
                {
                  user,
                  userDatas
                }
                //() => this.getEntities(meAuth)
              );
            } else
              console.log(
                `user: ${
                  this.state.user.username //+ " " + ath.uid
                }, has no hidden data`
              );
          },
          standardCatch
        );
      },
      logoutofapp = (yes) => {
        var answer = yes || window.confirm("Are you sure you want to log out?");
        if (!answer) {
          //this.ra.current.click();
          return this.gui.current.click();
        } //ra;//null;
        signOut(getAuth())
          .then(async () => {
            console.log("logged out");
            await setPersistence(getAuth(), browserSessionPersistence);
            this.setState({
              user: undefined,
              auth: undefined
            });
            this.ra.current.click();
          })
          .catch((err) => {
            console.log(err);
          });
      };
    const meAuth =
      window.meAuth &&
      window.meAuth.constructor === Object &&
      Object.keys(window.meAuth).length > 0
        ? window.meAuth
        : undefined;
    const stateCity = [
      {
        name: "Alabama",
        abbreviation: "AL"
      },
      {
        name: "Alaska",
        abbreviation: "AK"
      },
      {
        name: "American Samoa",
        abbreviation: "AS"
      },
      {
        name: "Arizona",
        abbreviation: "AZ"
      },
      {
        name: "Arkansas",
        abbreviation: "AR"
      },
      {
        name: "California",
        abbreviation: "CA"
      },
      {
        name: "Colorado",
        abbreviation: "CO"
      },
      {
        name: "Connecticut",
        abbreviation: "CT"
      },
      {
        name: "Delaware",
        abbreviation: "DE"
      },
      {
        name: "District Of Columbia",
        abbreviation: "DC"
      },
      {
        name: "Federated States Of Micronesia",
        abbreviation: "FM"
      },
      {
        name: "Florida",
        abbreviation: "FL"
      },
      {
        name: "Georgia",
        abbreviation: "GA"
      },
      {
        name: "Guam",
        abbreviation: "GU"
      },
      {
        name: "Hawaii",
        abbreviation: "HI"
      },
      {
        name: "Idaho",
        abbreviation: "ID"
      },
      {
        name: "Illinois",
        abbreviation: "IL"
      },
      {
        name: "Indiana",
        abbreviation: "IN"
      },
      {
        name: "Iowa",
        abbreviation: "IA"
      },
      {
        name: "Kansas",
        abbreviation: "KS"
      },
      {
        name: "Kentucky",
        abbreviation: "KY"
      },
      {
        name: "Louisiana",
        abbreviation: "LA"
      },
      {
        name: "Maine",
        abbreviation: "ME"
      },
      {
        name: "Marshall Islands",
        abbreviation: "MH"
      },
      {
        name: "Maryland",
        abbreviation: "MD"
      },
      {
        name: "Massachusetts",
        abbreviation: "MA"
      },
      {
        name: "Michigan",
        abbreviation: "MI"
      },
      {
        name: "Minnesota",
        abbreviation: "MN"
      },
      {
        name: "Mississippi",
        abbreviation: "MS"
      },
      {
        name: "Missouri",
        abbreviation: "MO"
      },
      {
        name: "Montana",
        abbreviation: "MT"
      },
      {
        name: "Nebraska",
        abbreviation: "NE"
      },
      {
        name: "Nevada",
        abbreviation: "NV"
      },
      {
        name: "New Hampshire",
        abbreviation: "NH"
      },
      {
        name: "New Jersey",
        abbreviation: "NJ"
      },
      {
        name: "New Mexico",
        abbreviation: "NM"
      },
      {
        name: "New York",
        abbreviation: "NY"
      },
      {
        name: "North Carolina",
        abbreviation: "NC"
      },
      {
        name: "North Dakota",
        abbreviation: "ND"
      },
      {
        name: "Northern Mariana Islands",
        abbreviation: "MP"
      },
      {
        name: "Ohio",
        abbreviation: "OH"
      },
      {
        name: "Oklahoma",
        abbreviation: "OK"
      },
      {
        name: "Oregon",
        abbreviation: "OR"
      },
      {
        name: "Palau",
        abbreviation: "PW"
      },
      {
        name: "Pennsylvania",
        abbreviation: "PA"
      },
      {
        name: "Puerto Rico",
        abbreviation: "PR"
      },
      {
        name: "Rhode Island",
        abbreviation: "RI"
      },
      {
        name: "South Carolina",
        abbreviation: "SC"
      },
      {
        name: "South Dakota",
        abbreviation: "SD"
      },
      {
        name: "Tennessee",
        abbreviation: "TN"
      },
      {
        name: "Texas",
        abbreviation: "TX"
      },
      {
        name: "Utah",
        abbreviation: "UT"
      },
      {
        name: "Vermont",
        abbreviation: "VT"
      },
      {
        name: "Virgin Islands",
        abbreviation: "VI"
      },
      {
        name: "Virginia",
        abbreviation: "VA"
      },
      {
        name: "Washington",
        abbreviation: "WA"
      },
      {
        name: "West Virginia",
        abbreviation: "WV"
      },
      {
        name: "Wisconsin",
        abbreviation: "WI"
      },
      {
        name: "Wyoming",
        abbreviation: "WY"
      }
    ];
    const paginate = async (page, subject) => {
      const state = this.state.selectedCommunity.split(", ")[1];

      const stateAbbr = stateCity.find((y) => state.includes(y.name));
      //const jurisdictionsUrl = `https://v3.openstates.org/jurisdictions/ocd-jurisdiction/country:us/state:${stateAbbr.abbreviation.toLowerCase()}/government`;
      const billsJurisdiction = `ocd-jurisdiction/country:us/state:${stateAbbr.abbreviation.toLowerCase()}/government`;
      const pager =
        !page || page === 1
          ? 1
          : page === "last"
          ? this.state.page - 1
          : page === "first"
          ? this.state.page + 1
          : this.state.page;
      const billsUrl =
        `https://v3.openstates.org/bills?jurisdiction=${billsJurisdiction}` +
        `&sort=latest_action_asc&apikey=3149e0d2-85a6-40c7-b980-e15d23847fc5` +
        `&per_page=20&page=${pager}` +
        (subject || this.state.subject
          ? `&subject=${subject || this.state.subject}`
          : "");

      await fetch(
        billsUrl /*, {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": ["Origin", "Content-Type"] //allow referer
          //"x-api-key": "f6d51945-d31e-47f6-8e4b-13f8348d5b4a"
        },
        body: JSON.stringify({
          jurisdiction: billsJurisdiction,
          sort: "latest_action_desc",
          apiKey: "3149e0d2-85a6-40c7-b980-e15d23847fc5"
        })
      }*/
      )
        .then(async (response) => await response.json())
        .then((body) => {
          if (!body.results) {
            if (body.details) window.alert("slow down");
            return console.log(body);
          }
          console.log(body.results);
          this.setState(
            {
              bills: body.results,
              page: pager,
              subject: subject ? subject : this.state.subject
            },
            () => {}
          );
        })
        .catch((err) => {
          console.log(err);
          alert("no bills");
        });
    };
    return (
      <div style={{ position: "relative", width: "100%" }}>
        {/*<PromptAuth
          ref={{
            current: {
              pa: this.pa,
              gui: this.gui,
              ra: this.ra
            }
          }}
          onPromptToLogin={() => {}} //this.props.history.push("/login")}
          verbose={false}
          onStart={() => {
            //if (window.meAuth !== undefined) return this.props.navigate("/");
            window.alert("loading authentication...");
          }}
          onEnd={() => {
            //window.alert("loading authentication...");
          }}
          windowKey={"meAuth"} //window.meAuth
          hydrateUser={(me, reload, isStored) => {
            if (me && me.constructor === Object) {
              if (isStored) return console.log("isStored: ", me); //all but denied

              if (me.isAnonymous) return console.log("anonymous: ", me);

              if (!me.uid)
                return this.setState({
                  user: undefined,
                  auth: undefined
                });
              //console.log("me", me);
              //this.pa.current.click();

              onSnapshot(
                doc(firestore, "users", me.uid),
                (doc) =>
                  doc.exists() &&
                  this.setState(
                    {
                      user: { ...doc.data(), id: doc.id },
                      loaded: true
                    },
                    () => hiddenUserData(me)
                  )
              );
              return reload && window.location.reload();
            }
            console.log("me", me);
          }} //detract alternative, kurt carface bank
          onFinish={() => {}}
          meAuth={window.meAuth === undefined ? null : window.meAuth}
        />
        {meAuth === undefined ? (
          <Sudo
            ref={{ current: {} }}
            forbiddenUsernames={forbiddenUsernames}
            phoneNumberCollection={"numbers"}
            width={this.props.width}
            rooturi={"https://thumbprint.us/"} //comment out to use click
            homeuri={"https://thumbprint.us"} // emulateRoot onroot instead
            logoutofapp={this.props.logoutofapp}
            auth={meAuth}
            lastWidth={this.props.lastWidth}
            availableHeight={this.props.appHeight}
            backgroundColor={null} //transparent
            position={"relative"}
            supportemail={"nick@thumbprint.us"}
            welcomeName={"Thumbprint.us - Social calendar"}
            onroot={true}
            emulateRoot={(e) => this.setState(e)}
            getUserInfo={this.props.getUserInfo}
            setAuth={this.props.setAuth}
            //
            meAuth={this.props.auth}
            user={this.state.user}
            pathname={this.props.pathname}
            navigate={this.props.navigate}
            useTopComment={null}
            memberMessage=""
            subTop=""
            useTitle={<span></span>}
            useCan={null} //trash
            useCanComment={null}
            root={(a) => this.state.onroot && <div></div>}
            rootArguments={[
              {
                current: {}
              }
            ]}
            subRoot=""
            //emulateRoot={() => this.props.navigate("/")}
            home={!this.state.onroot && <div></div>} //Are drug gangs not pharmacists because they have no shop nor employees?
            //Do employees of regular businesses with diverse customers have to report gifted sweat up to $15,000 per year?
          />
        ) : (
          <button
            onClick={() => logoutofapp()}
            style={{
              wordWrap: "unset",
              width: "max-content",
              border: "1px solid",
              borderRadius: "2px",
              padding: "3px 6px"
            }}
          >
            logout of app (
            {this.state.user !== undefined && this.state.user.username})
          </button>
        )*/}
        <form
          style={{ display: "flex" }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="Communities"
            style={{
              paddingLeft: "10px",
              margin: "10px",
              height: "36px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid black"
            }}
            value={this.state.searching}
            onChange={(e) => {
              var va = e.target.value;
              this.setState(
                {
                  searching: specialFormatting(va)
                },
                async () => {
                  clearTimeout(this.closer);
                  this.closer = setTimeout(async () => {
                    const letterEntered = /^[\W\D]/;
                    if (
                      this.state.searching &&
                      letterEntered.test(this.state.searching)
                    ) {
                      await fetch(
                        //`https://atlas.microsoft.com/search/address/json?subscription-key={sxQptNsgPsKENxW6a4jyWDWpg6hOQGyP1hSOLig4MpQ}&api-version=1.0&query=${enteredValue}&typeahead={typeahead}&limit={5}&language=en-US`
                        `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.searching}.json?limit=2&types=place&access_token=pk.eyJ1Ijoibmlja2NhcmR1Y2NpIiwiYSI6ImNrMWhyZ3ZqajBhcm8zY3BoMnVnbW02dXQifQ.aw4gJV_fsZ1GKDjaWPxemQ`
                      )
                        .then(async (response) => await response.json())
                        .then(
                          (body) =>
                            body.features &&
                            body.features.constructor === Array &&
                            body.features.length > 0 &&
                            this.setState(
                              {
                                predictions: [
                                  ...this.state.predictions,
                                  ...body.features
                                ],
                                lastPredictions: body.features
                              },
                              () => {
                                console.log(this.state.predictions);
                              }
                            ),
                          (err) => console.log(err)
                        )
                        .catch((err) => {
                          console.log(err);
                          alert(
                            "please try another city name than " +
                              this.state.searching
                          );
                        });
                    }
                  }, 2000);
                }
              );
            }}
          />
          {this.state.searching !== "" && (
            <div
              onClick={() => this.setState({ searching: "" })}
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "0px 4px",
                height: "min-content"
              }}
            >
              &times;
            </div>
          )}
        </form>
        {this.state.predictions.length > 0 && (
          <select
            onChange={async (e) =>
              this.setState({ selectedCommunity: e.target.value }, async () => {
                paginate();
              })
            }
          >
            {["", ...this.state.predictions].map((x, i) => (
              <option key={i} value={x.place_name}>
                {x.place_name}
              </option>
            ))}
          </select>
        )}
        <hr />
        {this.state.changeParty ? (
          <div style={{ display: "flex" }}>
            <select
              onChange={(e) => {
                if (e.target.value === "party") return null;
                //console.log(e.target.value);
                this.state.avidb.storeAnonymoustVotingId({
                  _id: "party",
                  party: e.target.value
                });
              }}
            >
              {[
                "party",
                "Democrat",
                "Republican",
                "Libertarian",
                "Saver",
                "Green",
                "Socialist",
                "Progressive",
                "Communist"
              ].map((x, i) => {
                return <option key={i}>{x}</option>;
              })}
            </select>
            <div
              onClick={() => {
                this.setState({
                  changeParty: false
                });
              }}
            >
              &times;
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              this.setState({ changeParty: true });
            }}
          >
            {this.state.party ? this.state.party : "No party"}
          </div>
        )}
        {this.state.subject && (
          <div
            onClick={() => this.setState({ subject: null }, () => paginate())}
            style={{
              padding: "6px",
              border: "2px solid",
              borderRadius: "6px",
              backgroundColor: "green",
              color: "white"
            }}
          >
            {this.state.subject} &times;
          </div>
        )}
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px"
            }}
            onClick={() => {
              paginate("last");
            }}
          >
            {"<"}
          </div>
          {this.state.bills[0] &&
            new Date(
              this.state.bills[0].latest_action_date
            ).toLocaleDateString()}
          <div
            style={{
              padding: "10px"
            }}
            onClick={() => {
              paginate("first");
            }}
          >
            {">"}
          </div>
        </div>
        <div
          style={{
            fontSize: "12px",
            columnCount: Math.round(this.props.width / 200),
            width: "100%"
          }}
        >
          {this.state.bills.map((x, i) => {
            return (
              <div
                key={i}
                style={{
                  breakInside: "avoid-column",
                  padding: "10px",
                  position: "relative",
                  display: "block"
                }}
              >
                {x.id === this.state.chosenBill && (
                  <Votes
                    abstractAuthorId={this.state.abstractAuthorId}
                    chosenBill={this.state.chosenBill}
                    setThumbprint={(e) => this.setState(e)}
                    party={this.state.party}
                    vote={this.state.vote}
                  />
                )}
                {new Date(x.latest_action_date).toLocaleDateString()}
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {x.subject &&
                    x.subject.map((x, i) => {
                      return (
                        <div
                          key={i}
                          style={{
                            width: "max-content",
                            padding: "6px",
                            border: "2px solid",
                            borderRadius: "6px",
                            backgroundColor:
                              this.state.subject === x ? "green" : "",
                            color: this.state.subject === x ? "white" : ""
                          }}
                          onClick={() => paginate(null, x)}
                        >
                          {x}
                        </div>
                      );
                    })}
                </div>
                <div
                  onClick={async () => {
                    this.setState({ chosenBill: x.id });
                    /*const state = this.state.selectedCommunity.split(", ")[1];

                    const stateAbbr = stateCity.find((y) =>
                      state.includes(y.name)
                    );
                    //const jurisdictionsUrl = `https://v3.openstates.org/jurisdictions/ocd-jurisdiction/country:us/state:${stateAbbr.abbreviation.toLowerCase()}/government`;
                    const billsJurisdiction = `ocd-jurisdiction/country:us/state:${stateAbbr.abbreviation.toLowerCase()}/government`;
                    const billsUrl = //${billsJurisdiction}/${x.session}/
                      `https://v3.openstates.org/bills/${x.id}` +
                      `?apikey=3149e0d2-85a6-40c7-b980-e15d23847fc5`;
                    //return console.log(billsUrl);
                    await fetch(billsUrl)
                      .then(async (response) => await response.json())
                      .then((body) => {
                        if (!body.results) return console.log(body);
                        return console.log(body.results);
                        this.setState(
                          {
                            ["billDetail" + x.id]: body.results
                          },
                          () => {}
                        );
                      })
                      .catch((err) => {
                        console.log(err);
                        alert("no bills");
                      });*/
                  }}
                >
                  {x.title}
                </div>
                {JSON.stringify(this.state["billDetail" + x.id])}
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px"
            }}
            onClick={() => {
              paginate("last");
            }}
          >
            {"<"}
          </div>
          {this.state.bills[0] &&
            new Date(
              this.state.bills[0].latest_action_date
            ).toLocaleDateString()}
          <div
            style={{
              padding: "10px"
            }}
            onClick={() => {
              paginate("first");
            }}
          >
            {">"}
          </div>
        </div>
      </div>
    );
  }
}
export default Thumbprint;
