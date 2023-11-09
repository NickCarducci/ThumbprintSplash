import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteField,
  doc,
  getFirestore,
  increment,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore";
import React from "react";
import firebase from "./init-firebase.js";
import { standardCatch } from "./Sudo.js";

const firestore = getFirestore(firebase);
class Votes extends React.Component {
  state = {};
  componentDidMount = () => {
    this.loadVote();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.chosenBill !== prevProps.chosenBill) {
      this.loadVote();
    }
  };
  loadVote = () => {
    const { chosenBill, abstractAuthorId } = this.props;
    onSnapshot(
      query(
        collection(firestore, "votes"),
        where("voterId", "==", abstractAuthorId),
        where("billId", "==", chosenBill.split("/")[1])
      ),
      (querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.docs.forEach((doc) => {
            if (doc.exists()) {
              var vote = doc.data();
              vote.id = doc.id;
              this.props.setThumbprint({ vote });
            }
          });
        } else {
          //"no-vote"
        }
      },
      (e) => console.log(e.message)
    );
    onSnapshot(
      doc(firestore, "statebills", chosenBill.split("/")[1]),
      (doc) => {
        if (doc.exists()) {
          var bill = doc.data();
          bill.id = doc.id;
          this.setState({ bill });
        }
      },
      (e) => console.log(e.message)
    );
  };
  render() {
    const { bill } = this.state;
    const { abstractAuthorId, vote } = this.props;
    var downvoted, upvoted, downvotesNumber, upvotesNumber;
    if (bill) {
      downvoted =
        bill.downvotes &&
        bill.downvotes > 0 &&
        bill.downvotes.includes(abstractAuthorId);
      upvoted =
        bill.upvotes &&
        bill.upvotes > 0 &&
        bill.upvotes.includes(abstractAuthorId);

      downvotesNumber = bill.downvotes ? bill.downvotes.length : 0;
      upvotesNumber = bill.upvotes ? bill.upvotes.length : 0;
    }
    var totalVotes = downvotesNumber + upvotesNumber;
    var downCalc = downvotesNumber / totalVotes;
    var percentageDown = !isNaN(downCalc) ? Math.round(downCalc) : 0;

    var upCalc = upvotesNumber / totalVotes;
    var percentageUp = !isNaN(upCalc) ? Math.round(upCalc) : 0;
    const voteNow = (up) => {
      var newVote = {};
      const alreadyUp = vote && vote.way === true;
      const alreadyDown = vote && vote.way === false;
      if (up) {
        newVote.upvotes = (alreadyUp ? arrayRemove : arrayUnion)(
          abstractAuthorId
        );
        newVote["partyUp" + this.props.party] = increment(alreadyUp ? -1 : 1);
      } else {
        newVote.downvotes = (alreadyDown ? arrayRemove : arrayUnion)(
          abstractAuthorId
        );
        newVote["partyDown" + this.props.party] = increment(
          alreadyDown ? -1 : 1
        );
      }
      const id = bill ? bill.id : this.props.chosenBill.split("/")[1];

      if (!newVote.voted || !newVote.voted.includes(abstractAuthorId))
        newVote.voted = (!newVote.voted ||
          !newVote.voted.includes(abstractAuthorId)
          ? arrayUnion
          : arrayRemove)(abstractAuthorId);
      (bill ? updateDoc : setDoc)(doc(firestore, "statebills", id), newVote)
        .then(() => {
          const docu = {
            billId: id,
            voterId: abstractAuthorId,
            way: (alreadyUp && up) || (alreadyDown && !up) ? deleteField() : up
          };
          if (vote) {
            updateDoc(doc(firestore, "votes", vote.id), docu);
          } else addDoc(collection(firestore, "votes"), docu);
        })
        .catch(standardCatch);
    };
    const parties = [
      "Democrat",
      "Republican",
      "Libertarian",
      "Saver",
      "Green",
      "Socialist",
      "Progressive",
      "Communist"
    ];
    let all = [],
      allDown = [];
    var mostParties,
      mostPartiesDown,
      mostPartyUp,
      mostPartyDown,
      highest,
      highestDown;

    if (bill) {
      mostParties = parties.map((x) => {
        const number = bill["partyUp" + x] ? bill["partyUp" + x] : 0;
        all.push(number);
        return {
          name: "partyUp" + x,
          number
        };
      });
      mostPartiesDown = parties.map((x) => {
        const number = bill["partyDown" + x] ? bill["partyDown" + x] : 0;
        allDown.push(number);
        return {
          name: "partyDown" + x,
          number
        };
      });
      //console.log(all, allDown);
      highest = Math.max(...all);
      highestDown = Math.max(...allDown);
      mostPartyUp = mostParties.find((x) => {
        if (highest === bill["partyUp" + x]) {
          return x;
        } else return null;
      });
      mostPartyDown = mostPartiesDown.find((x) => {
        if (highestDown === bill["partyDown" + x]) {
          return x;
        } else return null;
      });
    }
    return (
      <div>
        {bill &&
          parties.map((x) => {
            return (
              <div
                style={{
                  justifyContent: "flex-end",
                  position: "relative",
                  display: "flex",
                  height: "14px"
                }}
              >
                <div style={{ position: "relative", zIndex: 1 }}>{x}</div>
                <div
                  style={{
                    left: "0px",
                    width:
                      highestDown > 0 &&
                      bill["partyDown" + x] &&
                      `calc(25% * ${bill["partyDown" + x] / highestDown})`,
                    backgroundColor: "red",
                    height: "100%"
                  }}
                ></div>

                <div
                  style={{
                    right: "0px",
                    width:
                      highest > 0 &&
                      bill["partyUp" + x] &&
                      `calc(25% * ${bill["partyUp" + x] / highest})`,
                    backgroundColor: "blue",
                    height: "100%"
                  }}
                ></div>
              </div>
            );
          })}
        {bill && (
          <div
            onClick={() => this.props.setShowing({ closeFilter: false })}
            style={{
              justifyContent: "center",
              display: "column",
              width: "100%",
              height: "26px"
              //backgroundColor: "rgb(220,170,130)"
            }}
          >
            <div style={{ display: "flex", width: "100%", height: "100%" }}>
              <div
                style={{
                  justifyContent: "flex-start",
                  position: "relative",
                  display: "flex",
                  width: "50%",
                  height: "100%"
                }}
              >
                <div
                  style={{
                    zIndex: "1",
                    padding: "2px",
                    borderRadius: "4px",
                    borderTopLeftRadius: "2px",
                    borderBottomLeftRadius: "2px",
                    borderBottom: "1px solid",
                    borderRight: "1px solid",
                    boxShadow: "1px 1px 1px .1px black",
                    backgroundColor: "red",
                    position: "absolute",
                    color: "white",
                    display: "flex",
                    width: "max-content",
                    height: "min-content"
                  }}
                >
                  {downvotesNumber}&nbsp;{percentageDown * 100}%
                </div>
                <div
                  style={{
                    right: "0px",
                    transform: "rotate(180deg)",
                    width: `calc(100% * ${percentageDown})`,
                    backgroundColor: "red",
                    height: "100%"
                  }}
                ></div>
              </div>
              <div
                style={{
                  justifyContent: "flex-end",
                  position: "relative",
                  display: "flex",
                  width: "50%",
                  height: "100%"
                }}
              >
                <div
                  style={{
                    padding: "2px",
                    borderRadius: "4px",
                    borderTopRightRadius: "2px",
                    borderBottomRightRadius: "2px",
                    borderBottom: "1px solid",
                    borderLeft: "1px solid",
                    boxShadow: "-1px 1px 1px .1px black",
                    backgroundColor: "blue",
                    position: "absolute",
                    color: "white",
                    display: "flex",
                    width: "max-content",
                    height: "min-content"
                  }}
                >
                  {upvotesNumber}&nbsp;{percentageUp * 100}%
                </div>
                <div
                  style={{
                    width: `calc(100% * ${percentageUp})`,
                    backgroundColor: "blue",
                    height: "100%"
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                borderBottomRightRadius: "3px",
                borderBottomLeftRadius: "3px",
                padding: "2px 3px",
                position: "absolute",
                color: "white",
                backgroundColor: "rgb(220,170,130)"
              }}
            >
              votes
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            height: "100%",
            alignItems: "center",
            padding: "0px 30px"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "column",
              height: "100%",
              alignItems: "center",
              zIndex: "9999",
              color: upvoted ? "black" : "grey"
            }}
            onClick={() => voteNow(true)}
          >
            Up
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "column",
              height: "100%",
              alignItems: "center",
              zIndex: "9999",
              color: downvoted ? "black" : "grey"
            }}
            onClick={() => voteNow(false)}
          >
            Down
          </div>
        </div>
      </div>
    );
  }
}
export default Votes;
