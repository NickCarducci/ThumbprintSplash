import React from "react";
import About from "./About";
import History from "./History";
import Policy from "./Policy";
import Preview from "./Preview";
import TwitterTweetEmbed from "./TwitterTweetEmbed";

class Body extends React.Component {
  state = { hidePolicy: true, closePreview: true, hideAbout: true };
  componentDidUpdate = (prevProps) => {
    const { pathname } = this.props;
    if (pathname !== prevProps.pathname) {
      if (pathname === "/privacy") {
        this.setState({ hidePolicy: false });
      } else if (pathname === "/about") {
        this.setState({ hideAbout: false });
      } else if (pathname === "/history") {
        this.setState({ showHistory: true });
      } else if (pathname === "/payments") {
        this.setState({ showPayments: true });
      } else if (pathname === "/speech") {
        this.setState({ showSpeech: true });
      } else if (pathname === "/phone") {
        this.setState({ showPhone: true });
      } else if (pathname === "/stack") {
        this.setState({ closePreview: false });
      } else if (pathname === "/2017") {
        this.props.set2017({ see2017: true });
      } else if (pathname === "/voting") {
        this.setState({ voting: true });
      }
    }
  };
  render() {
    const { see2017 } = this.props;
    const {
      hideAbout,
      closePreview,
      hidePolicy,
      showHistory,
      showDominion,
      showSpeech,
      showPayments,
      showVideos,
      showPhone,
      voting
    } = this.state;
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "rgba(200,200,200,.9)"
        }}
      >
        <div
          style={{
            position: "fixed",
            bottom: "0px",
            right: "0px",
            height: "100px"
          }}
        >
          <a
            style={{
              backgroundColor: "rgba(255,255,255,.8)",
              height: "100%"
            }}
            href="https://lightte.ch"
          >
            <img
              style={{ height: "100%", width: "auto" }}
              alt="light-tech-certified"
              src="https://www.dl.dropboxusercontent.com/s/aj6j953nt8dy7ez/LightTech%20Certified%20%281%29.png?dl=0"
            />
          </a>
        </div>
        <div
          style={{
            width: "max-content",
            position: "relative",
            display: "flex",
            zIndex: "9999",
            backgroundColor: "rgb(250,250,250)"
          }}
          onClick={() => this.props.set2017({ see2017: !see2017 })}
        >
          {see2017 ? "close" : "see"} 2017 mockup
        </div>
        <img
          src={require("./mockup.png")}
          alt="error"
          className="mockup"
          style={{
            height: "auto",
            maxWidth: "600px",
            width: see2017 ? "100%" : "0%",
            transition: ".3s ease-in"
          }}
        />
        <div
          onClick={() => this.setState({ hideAbout: !hideAbout })}
          style={{
            color: "black",
            width: "100px",
            backgroundColor: "rgb(250,250,250)"
          }}
        >
          about
        </div>
        {/*^mockup 2017*/}
        <About hideAbout={hideAbout} />
        <div
          onClick={() => this.setState({ closePreview: !closePreview })}
          style={{
            color: "black",
            width: "100px",
            backgroundColor: "rgb(250,250,250)"
          }}
        >
          stack
        </div>
        <Preview
          closePreview={closePreview}
          close={() => this.setState({ closePreview: !closePreview })}
        />
        <div
          style={{
            width: "400px",
            display: "inline-block"
          }}
        >
          Our company is a non-governmental, unlimited-outlay, non-profit
          sole-proprietorship with some Royalty Contracts W/Max-Profit (RCWMP)
          under $50k, but lightte.ch certified to presently keep salaries under
          $200k.
          <br />
          <br />
          On&nbsp;
          <a style={{ color: "grey" }} href="https://youtu.be/W-Vv1vysGzE">
            November 5th, 2012
          </a>
          , US Thumbprint, Inc. was established as a 501(c)(3) "non-profit,"
          until I realized the gov gets it when I die,
          <br />
          unless I make a clean break, with my dns-domain-whois, into a
          proprietorship without liability-jettisoning-collusions
          <br />
          <br />
          Terms of service
          <br />
          &bull; Price and development changes may occur at our discretion,
          there is no liability of downtime or depreciation granted by using
          this web-app
        </div>
        <br />
        <a href="https://johnshopkins.academia.edu/NickCarducci">
          academic purpose
        </a>
        &nbsp;/&nbsp;
        <a href="https://vianickcarducci.medium.com/">blog</a>
        <br />
        <br />
        <button onClick={() => this.setState({ showSpeech: !showSpeech })}>
          Speech
        </button>
        <br />
        <div
          style={{
            borderRadius: "8px",
            margin: "10px",
            height: showSpeech ? "min-content" : "0px",
            overflow: "hidden"
          }}
        >
          <h2>
            The standing of Speech on the grounds we verbally-quarrel over today
            is not a freedom-issue, it is a slavery-issue. Before the internet,
            speech could not be impeded like government can abett favoritism,
            has so far (they really can only tax/issue for courts toll-less
            roads sewade and plows, otherwise it is monopsony-quota-communism
            for no utility as it is free-rider-mutable and networks, 'market' of
            markets and abject collusion&nbsp;
            <span style={{ color: "purple" }}>
              like discrepancies between 13d/retail, shares & dollars in
              bondage-contracts & credit-counterfeit-laundering-collusion,
              treasury shares not in outstanding and forced insurance or home
              warranty in NJ industries, etc.
            </span>
            &nbsp;are margin-targetable by government&nbsp;
            <span style={{ color: "purple" }}>
              and non-government as needed for non-conflicted jurisprudence
            </span>
            &nbsp;bodies billed-as "protect American consumers"). Now, it is an
            issue-of exclusion not based on a&nbsp;
            <span style={{ color: "green" }}>court-verified</span>&nbsp;part of
            a minimal-viable-product duress, bid of not a option to buy sold
            already (not a deposit or down-payment), or skill (not experience,
            a.k.a. docile, stagnant, counter-productive and focused on competing
            with other suppliers by moat or consumers instead of concentrating
            on consumers and winning their clean favor without any
            duress-of-void or void-of third party dollar or shareholder to which
            extension is forgone of initial-stated intent to give back
            down-payments&nbsp;
            <span style={{ color: "green" }}>if lose</span>, or launder from
            borrowers' customers by prisoners'-dilemma duress here and with
            insurance-coagulation further abetted by invoice
            counterfeit-laundering not bettered by free-rider-immutable
            sales-tax/issuance extension over the free-rider-mutable subservice
            beyond margin-targeting, non-conflictive torts or confusing the
            'State and the 'People'), and certify by&nbsp;
            <span style={{ color: "green" }}>deterministic calculus</span>.
            <br />
            <br />
            "other creative way to make it more fun to get 'vaccinated'" -
            @POTUS holy canoli
          </h2>
          <div
            style={{
              overflow: "hidden",
              transition: ".3s ease-in",
              height: this.state.openOldSpeechPolicy ? "min-content" : "0px"
            }}
          >
            <b>Speech</b>
            &bull; Threats that, are not in-kind, are prosecutable; we will not
            ban that - for evidence &nbsp; (login.gov not partnering or putting
            out a parole intranet for convicted threats and previous criminal
            acts is one of the&nbsp;
            <a href="https://nationalsecuritycasino.com">
              grossest form of malfeasance
            </a>
            &nbsp;there is).
            <br />
            We will also not be removing convicts, for that we advocate for an
            intranet for those on parole, utilizing a hands-off state-issued
            GovID api. For now, we use phone number identification and enforce
            cloud.
            <br />
            AS PER OPINION, I DID NOT WANT TO SAY THIS BECAUSE I WANT IT
            IMPLIED, BUT I WILL NOT REMOVE CONTENT UNLESS cease of desist is
            ordered by court. You need to prove what my users say isn't true
            <br />
            "hate" vs descriptiveness is not allowed to fire ; .
            orderingOfPreference is hate, however we will not remove anything
            except threats and spam (not criticism without-repetition)
            <br />
            Labels are required for confirmations, no errors can be laid without
            logistical proof, not correlative and assumptive. sorting or
            throttling cannot be so adaptive except by a linear variable, or
            labeling select words with institutions - especially when the CDC is
            wrong and often
            <br />
            I'm sure if you ask the insurrectionist if they were trying to
            contest the certification vs overthrow the governemnt (bonds?
            police-comms? I'd bet just the certification) With or without
            Section 230, liability is only ascertainable for contributions of
            the platform if the writers are paid or edited
            <br />
            To boot, platforms should not be destroying evidence, they should be
            highlighting illegal threats so other users know what is not
            acceptable, and investigations without circumstantial/correlative
            data or not, should be unfettered until a cease and decist order is
            properly adjunicated.
          </div>
          <div
            style={{
              overflow: "hidden",
              transition: ".3s ease-in",
              height: !this.state.openOldSpeechPolicy ? "min-content" : "0px"
            }}
          >
            <div style={{ width: "100%", overflow: "auto" }}>
              <TwitterTweetEmbed tweetId={"1389936048260669444"} />
            </div>
            <br />
            Otherwise, for statements of fact, only after spam becomes
            harassment (repeated) will we entertain a label, as we would for
            plans for attack (to show users what not to do) with upmost ability
            for their testimony, prominently above our take. we will own out
            edits for integrity of truth unlike Twitter (nor Facebook, if label
            is considered editing, which I do because I take the publishers'
            reading)
            <br />
            <br />
            You see,
            <br />
            I present Marx/Schumpeter/Piketty as the same as Mises, without the
            rent-seeking/prisoner-dilemma-apathy. Marx wanted labor to have
            profits, which is essentially non-profits (unlimited salaries
            notwithstanding... lightte.ch). This is misnomer, like Jesus never
            said he would die for Sin.
            <br />
            <br />
            Why would 9/11 building collapse without a plane under the same
            weight it always does? Why would italians join axis if for not
            financial-racism?
            <br />
            <br />
            Maoism is quota-communism (basic) and I’m didn’t study how Lenin
            went from serfdom to genocide but residualsplit.us is like castle
            doctrine, and that is also&nbsp;
            <b
              style={{ color: "blue" }}
              onClick={() =>
                this.setState({
                  showPayments: true //, showSpeech: false
                })
              }
            >
              haram
            </b>
            . The market cannot solve prisoners’ dilemma
            <br />
            <br />
            Deterministic-calculus = notation of units by causal effect & if
            partial derivatives are greater than one it is two-full-derivatives
            (or to boot, doubly)
            <br />
            <br />
            Red-herring is of the unobserved but is 0
            <br />
            <br />
            GDP= C + P is laughable in this regard, as is E = mc^2 unless you
            can make an g(m/s)(m/s) by mixing them together; there is ALWAYS a
            diminishing in an exponential-maximum, in algebra one cannot assume
            significance that is not assumed to be shuffled to mimic perfect
            indistimination out of the multitude of chances, or of a
            non-derivative sample-population. Why is stated-intent
            prisoners'-duress pooling/ free-rider-mutable-tax/issuance saves
            money from price-elasticity not being a fact? Why is usury's
            definition not derived from the rental-income-beyond-plausible-use
            by the owner-oneself? Why is condensation not being a fact and
            spit-derived-humidity locked in mask doesn't elongate
            virus-half-life instead of condensate without even a test on
            countertop after speaking given the couch of a&nbsp;
            <a href="https://pubmed.ncbi.nlm.nih.gov/17542834/">
              null hypothesis
            </a>
            <br />
            <br />
            <div style={{ position: "relative" }}>
              <img
                style={{ width: "100%", height: "auto" }}
                alt="https://www.dl.dropboxusercontent.com/s/y4q61y8m4tkxocr/ceaseAndDecist.jpg?dl=0"
                src="https://www.dl.dropboxusercontent.com/s/y4q61y8m4tkxocr/ceaseAndDecist.jpg?dl=0"
              />
            </div>
            Libertarians & finance force us to feast on each other with
            fixed-prices
            <br />
            <br />
            2% of the population owns 4400% of the assets
            <br />
            <br />
            walter bloomberg: "evans says 'would expect longer-term 10-year
            treasury rates to move up as economy improves'"
            <br />
            <br />
            most landlords, bond-holders and mortgage-holders, which is 90% of
            those assets, are above 40
          </div>
          <div
            onMouseEnter={() =>
              this.setState({ hoveroldSP: true }, () => {
                clearTimeout(this.stoppspeech);
                this.stoppspeech = setTimeout(() => {
                  this.setState({ hoveroldSP: false });
                }, 200);
              })
            }
            style={{
              border: "2px dotted",
              transition: ".3s ease-in",
              backgroundColor: this.state.hoveroldSP
                ? "rgba(10,10,10,.5)"
                : "rgba(10,10,10,0)"
            }}
            onClick={() =>
              this.setState({
                openOldSpeechPolicy: !this.state.openOldSpeechPolicy
              })
            }
          >
            {this.state.openOldSpeechPolicy ? "old" : "new"}
          </div>
        </div>
        <div
          onClick={() => this.setState({ hidePolicy: !this.state.hidePolicy })}
        >
          Privacy Policy
          <br />
          <div style={{ transform: "rotate(180deg)", color: "grey" }}>^</div>
        </div>
        <Policy hidePolicy={hidePolicy} />
        <button onClick={() => this.setState({ showPayments: !showPayments })}>
          Payments
        </button>
        <br />
        <br />
        <div
          style={{
            padding: showPayments ? "10px 0px" : "0px 0px",
            margin: showPayments ? "10px" : "0px",
            borderRadius: "8px",
            color: "rgb(235,235,240)",
            height: showPayments ? "min-content" : "0px",
            overflow: "hidden",
            backgroundColor: "rgba(10,20,25)"
          }}
        >
          <b>Payments</b>
          &bull;in order to accept debit cards as a merchant today you need to
          accept credit cards, which are promises of other people’s money. We
          are under duress, extortion to deal in counterfeit! I am forced to
          accept credit cards and banks. Allpoint and Greendot have not gotten
          back to me for 2 months.
          <br /> It is very important to call your&nbsp;
          <a
            style={{ color: "grey" }}
            href="https://www.nclc.org/images/pdf/older_consumers/Your_Credit_Card_Rights.pdf"
          >
            credit/debit
          </a>
          &nbsp;card company as soon as you know of the unauthorized use of your
          credit card. If you call before unauthorized charges are incurred, you
          cannot be charged even $50, "since the [debitor] can take steps to
          cancel your card and send you a new one if Mastercard knows." This is
          why Mastercard says "You have used reasonable care in protecting your
          card from loss or theft; and You promptly reported loss or theft to
          your financial institution."
          <br />
          <br />
          It’s not an accountholder’s obligation to fill out any criminal
          reports or do anything of the sort. All they have to do is make it
          clear that they didn’t authorize the charge.
          <br />
          — Billy Pinilis, Consumer fraud lawyer
          <br />
          <br />(
          <a style={{ color: "grey" }} href="https://squatcommune.com">
            We are not moving forward with payments until we have a service that
            can have instant deposit without a bank or creditor since it is
            illegal
          </a>
          )
          <br />
          Returns for tickets will be locked when both of the following are true
          about today: 2 days after purchasing && 10 days prior to an event.
          <br />
          <br />
          <TwitterTweetEmbed
            key={"nick's tweet - 1389701993841758208"}
            tweetId={"1389701993841758208"}
            /*onLoad={(tweetWidgetEl) => {
                          console.log(parent.twitterString);
                          const tweetEl = tweetWidgetEl.shadowRoot.querySelector(
                            ".EmbeddedTweet"
                          );
                          tweetEl.style.width = "100%";
                        }}*/
          />
          {/*.@Mastercard : “Fees allowed on credit cards, but not debit cards.”
          @ftc @hrw duress...
          <br />
          <br />
          . @Mastercard approved atm marketplace use... $75/mo instead of atm
          fees. I hope they don’t force me to take credit in some fashion.
          #IslamicBanking @ACLU I don’t want to deal/help w
          credit-counterfeit-launderers in a pro-rated fashion @USEEOC @FTC
          @TheJusticeDept @civilrightsorg
          <br />
          <br />
          Is this what the stimulus checks are for? @SecYellen @sidrosenberg
          <br />
          <br />
          Being forced to pay for their net loss credit scheme with responsible
          debit card users? $75/mo? Why so prohibitory for anti-credit startups?
          Just take it from atm fees, you’ll make more on volume...*/}
        </div>
        <br />
        <button onClick={() => this.setState({ showVideos: !showVideos })}>
          Videos
        </button>
        <div
          style={{
            height: showVideos ? "min-content" : "0px",
            overflow: "hidden"
          }}
        >
          <iframe
            style={{ border: "1px solid black" }}
            title="riseoftherest video"
            src="https://www.youtube-nocookie.com/embed/AiwdrWWUVBI"
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
            open RiseOfTheRest
          </div>
          <br />
          <iframe
            style={{ border: "1px solid black" }}
            title="opengovfoundation video"
            src="https://www.youtube-nocookie.com/embed/W-Vv1vysGzE"
            allowFullScreen
          ></iframe>
          <div
            onClick={() => {
              var answer = window.confirm("open https://youtu.be/W-Vv1vysGzE");
              if (answer) {
                window.location.href = "https://youtu.be/W-Vv1vysGzE";
              }
            }}
          >
            open OpenGovFoundation
          </div>
          <br />
          <iframe
            style={{ border: "1px solid black" }}
            title="kickstarter video"
            src="https://player.vimeo.com/video/137201995"
            allowFullScreen
          ></iframe>
          <div
            onClick={() => {
              var answer = window.confirm(
                "open https://vimeo.com/video/137201995"
              );
              if (answer) {
                window.location.href = "https://vimeo.com/video/137201995";
              }
            }}
          >
            open Kickstarter
          </div>
        </div>
        <br />
        <button onClick={() => this.setState({ showPhone: !showPhone })}>
          Phone
        </button>
        <div
          style={{
            height: showPhone ? "min-content" : "0px",
            overflow: "hidden"
          }}
        >
          <a href="//www.slideshare.net/NicholasCarducci/thumbprint-phone">
            https://www.slideshare.net/NicholasCarducci/slideshelf
          </a>
          <iframe
            src="https://www.slideshare.net/slideshow/embed_code/key/uBm7lClHKhbYhz"
            title="https://www.slideshare.net/NicholasCarducci/slideshelf"
            width={"100%"}
            height="300px"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>
          p2p dns router :&nbsp;
          <a href="https://support.apple.com/en-us/HT202303">
            apple cloud keys
          </a>
          /
          <a href="https://jscholarship.library.jhu.edu/handle/1774.2/36569">
            light
          </a>{" "}
          : magnate.company : keybox.email : browser.glass
          <br />
          <div
            style={{
              width: "100%",
              position: "relative"
            }}
          >
            <span
              style={{
                width: "30%",
                position: "absolute",
                right: "0px"
              }}
            >
              On the left is Apple's keybox method, which in comparison to mine
              does not use device-derived keyboxes to transfer &nbsp;
              <a href="https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c">
                non-convict
              </a>
              &nbsp;account key from an Origin device.
            </span>
          </div>
          <div
            style={{
              position: "relative",
              width: "60%"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              src="https://www.dl.dropboxusercontent.com/s/znf4njqgjl4v5jj/AppleCloudKey.png?dl=0"
              alt="err"
            />
          </div>
        </div>
        <br />
        <img
          style={{ height: "86px", width: "86px" }}
          src="https://www.dl.dropboxusercontent.com/s/9oci4efa4zsh90q/unnamed.png?dl=0"
          alt="err"
        />
        <img
          style={{ height: "86px", width: "86px" }}
          src="https://www.dl.dropboxusercontent.com/s/cp1vzypyfh1sb03/Thumbprint%20corp%20logo%20-%20colors_round%20%282%29.png?dl=0"
          alt="err"
        />
        <br />
        <br />
        <button onClick={() => this.setState({ voting: !this.state.voting })}>
          voting
        </button>
        <br />
        <br />
        <div
          style={{
            overflow: "hidden",
            height: !voting ? "0px" : "min-content",
            backgroundColor: "rgba(170,220,250)"
          }}
        >
          <hr />
          <br />
          ArrayArrays - [uuid, way+on-device-key], instead of having field+count
          incremented on the post object
          <br />
          cors origin ssl auth (hope for login.gov api for non-government orgs),
          I am withholding ideas, for your best interests, I've decided
        </div>
        <button
          onClick={() =>
            this.setState({ showDominion: !this.state.showDominion })
          }
        >
          Dominion
        </button>
        <br />
        <br />
        <div
          style={{
            overflow: "hidden",
            height: !showDominion ? "0px" : "min-content",
            backgroundColor: "rgba(170,220,250)"
          }}
        >
          <hr />
          <br />
          Dominion case is not on solid grounds, how can you have no doubt when
          you require a court order to audit? It is a&nbsp;
          <a href="https://squatcommune.com">
            private company but it is serving government
          </a>
          &nbsp;(which is not a person, people or asset). Its subsidiaries
          were&nbsp;
          <a href="https://www.smartmatic.com/us/smartmatic-fact-checked/">
            obviously formed to make fraudulent elections
          </a>
          &nbsp;due to pulling out&nbsp;
          <a href="https://maloney.house.gov/media-center/press-releases/smartmatic-announces-sale-sequoia-voting-systems">
            only after investigations
          </a>
          , if what the CIA says about Chavez is true and not complete
          propoganda... no evidence of widespread fraud is false given
          Associated Press and Google called the election on election day at 61%
          in NJ. That is fraud by definition, especially of an unshuffled
          population, you cannot even call projections an expected value
        </div>
        <button onClick={() => this.setState({ showHistory: !showHistory })}>
          History
        </button>
        <History showHistory={showHistory} />
        <br />
        <br />
      </div>
    );
  }
}
export default Body;
