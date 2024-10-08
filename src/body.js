import React from "react";
import About from "./About";
import History from "./History";
import Policy from "./Policy";
import Preview from "./Preview";
import TwitterTweetEmbed from "./TwitterTweetEmbed";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePolicy: true,
      closePreview: true,
      hideAbout: true,
      scrollTop: 0
    };

    this.publicity = React.createRef();
  }
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(
            () =>
              this.setState({
                scrolling: false,
                atBottom:
                  this.state.scrollTop >
                  document.documentElement.scrollHeight -
                    window.innerHeight -
                    10
              }),
            900
          );
        }
      );
    }
  };
  componentDidMount = () => {
    this.checkPathname();
  };
  componentDidUpdate = (prevProps) => {
    const { pathname } = this.props;
    if (pathname !== prevProps.pathname) {
      this.checkPathname(pathname);
    }
  };
  checkPathname = (pathname = this.props.pathname) => {
    if (pathname === "/privacy") {
      this.setState({ hidePolicy: false });
    } else if (pathname === "/publicity") {
      this.setState({ publicity: false }, () =>
        window.scrollTo(0, this.publicity.current.scrollTop)
      );
    } else if (pathname === "/about") {
      this.setState({ hideAbout: false });
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
    } else if (["/videos", "/history"].includes(pathname)) {
      this.setState({ showVideos: true }, () =>
        window.scrollTo(0, this.videos.current.scrollTop)
      );
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.resizeTimer);
    clearTimeout(this.scrollTimeout);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  componentDidMount = () => {
    this.refresh(true);
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
  };

  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    const height = this.state.ios
      ? window.screen.availHeight
      : window.innerHeight;

    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          height,
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const { see2017 } = this.props;
    const {
      Commentary2022,
      hideAbout,
      closePreview,
      hidePolicy,
      showVideos,
      showDominion,
      showSpeech,
      showPayments,
      showPhone,
      voting,
      showTaxes,
      publicity
    } = this.state;
    const buttonStyle = {
      height: "min-content",
      borderRadius: "13px",
      margin: "10px",
      padding: "6px 10px",
      border: "2px solid"
    };
    const space = " ";
    const wrappedItemStyle = {
      breakInside: "avoid",
      width: "300px"
    };
    return (
      <div
        style={{
          fontSize: "12px",
          paddingBottom: "50px",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          textAlign: "center",
          backgroundColor: "rgba(200,200,200,.9)"
        }}
      >
        <iframe
          title="vid1"
          src="https://player.vimeo.com/video/202106185" //autoplay=1&muted=1
          style={{ width: "100%", height: 260 }}
          allowFullScreen
          /*loop
  autoPlay
  playsInline
  muted*/
        />
        <div style={{ display: "none" }}>
          <div
            style={{
              maxWidth: "550px",
              alignSelf: "center",
              transition: ".3s ease-in",
              fontSize: this.state.openLegislation ? "" : "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "15px",
              margin: "10px",
              padding: "10px"
              //border: "3px solid"
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "rgba(200,200,200,.9)",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div>nextdoor.com/pages/hibit-fair-haven-nj/</div>
              <div>occupywall.us</div>
            </div>
            <br />
            Does nature or precedence enumerate crimes instead of rights? Does
            precedence or everything make exculpatory evidence compulsory to be
            released? And yours is ratings I get it, but it is really dry
            <br />
            <br />
            Is the average age of a parent rising because the desire to have
            kids these days has lessened, household units are smaller and
            proportionately larger by choice, or are young adult children living
            with their parents' inflation involuntarily celibate? Are closed
            source companies allowed to make horizontal parallel or concurrent
            vertical industry mega apps? Doesn’t a non-profit surrender control
            even though people donate regardless?
            <br />
            <br />
            <span>
              hibit.cc - Is anything but Digital Ocean, Stripe Connect, and
              Firebase Authentication easy fullstack?{space}
              <i>
                Do custom and express or standard Stripe Connect accounts keep
                funds with the original instead or Celtic bank until another
                account either charges to payout or get a standard destination
                payment that then does?
              </i>
              {space}
              <b>
                Are confirmed Stripe payment intents from standard or custom and
                express accounts held with Celtic Bank?
              </b>
              {space}Why do Stripe and Celtic Bank lend deposits to issue cards
              instead of take fees like standard accounts?
              {space}
              <i>Does the Federal Reserve have a 2% depopulation target?</i>
            </span>
            <br />
            <a href="https://electiontechnology.quora.com/Why-don-t-we-have-online-voting-1">
              electiontechnology.quora.com/Why-don-t-we-have-online-voting-1
            </a>
            <br />
            <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Material_flow_accounts_and_resource_productivity">
              https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Material_flow_accounts_and_resource_productivity
            </a>
            <br />
            <span>
              If inequality grew but you aren't the richest and you vote for the
              same politician, why are you retarding yourself?{space}
              <span
                style={{
                  fontSize: this.state.openLegislation ? "12px" : "0px",
                  transition: ".3s ease-in"
                }}
              >
                If the{space}
                <a href="https://www.quora.com/How-much-would-it-cost-to-buy-everything-in-the-world/answer/Nick-Carducci">
                  top 3m gained as much wealth as the top 27m and 120m each
                  since 2020
                </a>
                , why does anyone in the 99% support either Trump or Biden? Are
                they just retarded by action?{space}
                <i>
                  Trump made the top 3m as much money as the top 27m and 120m
                  (what loser wants others to make money; equality is
                  competitive)
                </i>
                . No,{space}
                <b>shareholder loan accounts for everyone!</b>
                {space}
                <i>
                  Would I have voted in 2020 if stormy Daniel's wasn't real? No.
                  robocop practitioners sutures it’s math. The fed has a
                  celibacy target. "No more job." Trump hired santos
                </i>
              </span>
            </span>
            <div
              style={{
                fontSize: !this.state.openLegislation ? "12px" : "0px",
                transition: ".3s ease-in"
              }}
            >
              <div
                onClick={() =>
                  this.setState({ openAbout: !this.state.openAbout })
                }
              >
                About
              </div>
              <div
                style={{
                  fontSize: this.state.openAbout ? "12px" : "0px",
                  transition: ".3s ease-in"
                }}
              >
                <h2>How can anonymous voting work?</h2>
                <h3 style={{ color: "steelblue" }}>
                  Two arrays: one stores public identifiers, and the other
                  stores a hash of a private key and a vote way. CRON jobs can
                  relent traffic correlation attacks on result-timestamp
                  communication.
                  {space}
                  <span style={{ color: "slateblue" }}>
                    If voting could be done completely anonymously, would more
                    people vote?
                  </span>
                </h3>
                Thumbprint is many things, but one of them is a voting company.
                In addition to our prospects as a phone manufacturer with
                magnetic cell batteries to store, run, and preserve energy at a
                handheld-device scale, our major ambitions is to be the
                preferred voting technology do citizens across the globe. Our
                unique innovation in voting technology enables anonymous voting.
                The process to achieve our direction requires a simple array of
                a private and public id arrays, to which we call the
                ArrayArrays, except the private id also has our users’ vote,
                which we call a way. This process is content addressable, and
                requires randomized webhook timeouts/CRON jobs, to avoid traffic
                correlation attacks, but to us is a monumental design innovation
                in the distributed ledger-esq space.
                <br />
                We will use the funds to bring the theory to practice in time
                for the 2024 elections. Suitably, we will use Digital Ocean
                build logs from GitHub deployment pages to narrow points or
                trust required for the voting process.
                <br />
                Hundreds of millions of dollars are spent on election technology
                annually on average, but only 2/3 of the population votes. Many
                believe the poor participation is because of access to voting
                technology from their phones, and many more believe not even in
                person paper voting is anonymous enough to share their sincere
                beliefs, skewing election results. We can change this prospect
                with anonymous content addressable ArrayArrays voting.
                <br />
                Thumbprint is led by Nicholas Carducci, an experienced product
                manager and software developer who has designs on about every
                market, but will do better to not move too fast to break
                anything. Our larger team have moved on to for profit endeavors
                - this non governmental organization is much less interested in
                the tax breaks than the recognition of having the most
                reasonable of margins.
              </div>
            </div>
            <button
              style={{
                ...buttonStyle,
                fontSize: "12px"
              }}
            >
              Anyone can make a class in a community; use wavv.art to make and
              thumbprint.app to use. We use city names from maps to make
              townships.
            </button>
            <button
              style={{
                ...buttonStyle,
                fontSize: "12px"
              }}
            >
              "I have a general admission event, but you only handle stadium
              tickets. What shall I do?"{space}
              <i>
                You can make more sections, and name them “General Admissions
                1”, “… 2”, etc.
              </i>
            </button>
            <button
              style={{
                ...buttonStyle,
                color: "white",
                backgroundColor: "blue",
                fontSize: "12px"
              }}
            >
              Now, save stadiums!{space}
              <i>You can use wavv.art to create venues.</i>
            </button>
            <a
              href="https://tpt.net.co"
              style={{
                margin: "4px 0px",
                padding: "10px",
                fontSize: "12px",
                color: "rgb(223, 223, 250)",
                backgroundColor: "rgba(24, 73, 87, 0.712)",
                border: "1px solid white"
              }}
            >
              tpt.net.co - events ticketing
            </a>
            <br />
            <br />
            <a
              href="https://unwind.rentals"
              style={{
                margin: "4px 0px",
                padding: "10px",
                fontSize: "12px",
                color: "rgb(223, 223, 250)",
                backgroundColor: "rgba(24, 73, 87, 0.712)",
                border: "1px solid white"
              }}
            >
              unwind.rentals
            </a>
            <br />
            <br />
            <a
              href="https://getjobs.uk"
              style={{
                margin: "4px 0px",
                padding: "10px",
                fontSize: "12px",
                color: "rgb(223, 223, 250)",
                backgroundColor: "rgba(24, 73, 87, 0.712)",
                border: "1px solid white"
              }}
            >
              getjobs.uk
            </a>
            <br />
            <br />
            <button
              style={{
                ...buttonStyle,
                fontSize: "12px"
              }}
            ></button>
            <h3>
              Cross-origin cookies: a function of Steve Jobs (Taiwan the
              Elderly, save the rats)
            </h3>
            <span
              style={{ fontSize: "12px" }}
              onClick={() =>
                this.setState({ hidePolicy: !this.state.hidePolicy })
              }
            >
              - dev.to/nickcarducci
              <br />
              Privacy Policy
              <br />
              <div style={{ transform: "rotate(180deg)", color: "grey" }}>
                ^
              </div>
              <Policy hidePolicy={hidePolicy} />
            </span>
            <span
              style={{
                fontSize: this.state.openLegislation ? "11px" : "0px",
                transition: ".3s ease-in",
                color: "cornflowerblue"
              }}
            >
              Can a website like Facebook.com see what other websites you have
              open, are even local storage browser cookies ring-fenced with SSL
              https://, or are WebView providers at fault for “Ask App Not to
              Track” extra-product viable systemic duress?{space}
              <i>
                If "Ask App not to Track" isn't for advertising, what is it for?
                Does advertising mean it tracks your browsing or location
                history through javascript or WebView? Can't users just use
                either Incognito mode or DuckDuckGo anyway?
              </i>
            </span>
            {space}
            <b></b>
            <span>
              Why did Trump make real property in regards to U.S. Code 26 § 1031
              either permanently affixed or not primarily held for sale in
              exchange for some work to be done yet paid in advance{space}(
              <a href="https://vau.money">vau.money/docs</a>)?{space}
              <i>
                Are tax refunds by either industry or position constitutional?
              </i>
            </span>
            <h2>Covalence-virus, zombie-natural (physiological) sewage</h2>
            <span>
              Do viruses attack humans like a zombie? Is that physiologically
              and
              {space}
              <a href="https://humanharvest.info">genealogically possible</a>?
            </span>
            <br />
            <span
              onClick={() =>
                this.setState({ openLegislation: !this.state.openLegislation })
              }
              style={{ fontSize: "12px", textDecoration: "underline" }}
            >
              <span style={{ textDecoration: "line-through" }}>
                Would you give your opinion on legislation with the most recent
                actions or the longest time since the last action?
              </span>
            </span>
            {space}Should an advisory direct democracy feed list legislative
            proposals by last action descending?
            <br />
            Do epidemiologists or statisticians understand how to confirm null
            by covalence?
            <br />
            <br />
            <span>
              <span style={{ textDecoration: "line-through" }}>
                Did Trump want to start a war over election fraud?{space}
                <i>
                  Can one ever audit/prove an election without{space}
                  <a href="https://tor.stackexchange.com/questions/23253/is-transmission-control-protocol-of-in-a-tamper-proof-by-tiny-explosions-dev">
                    user-distributed databases
                  </a>
                  ?
                </i>
              </span>
              {space}Should the January 6th protestors be in jail for mental
              illness or should Trump be in prison for bad advice in being
              completely misled about Dominion technology voting content
              addressability and misguided that he would at least show up to his
              rally?{space}
              <span style={{ textDecoration: "line-through" }}>
                local timeout progress saver
              </span>
              {space}randomly posted cron jobs.
            </span>
            <br />
            <span>
              Ability for needs: Communism deprives no man of the power to
              appropriate the products of society; all that it does is to
              deprive him of the{space}
              <a href="https://nonprofessionalproprietors.quora.com">
                power to subjugate
              </a>
              {space}
              the labour of others by means of such appropriations.{space}
              <i>
                What income is taxable if everything is a gift below the
                reporting threshold per customer?
              </i>
            </span>
            <button
              style={buttonStyle}
              onClick={() => this.setState({ Commentary2022: !Commentary2022 })}
            >
              Commentary 2022
            </button>
            <div
              style={{
                width: "100%",
                borderRadius: "8px",
                margin: "10px",
                height: Commentary2022 ? "min-content" : "0px",
                overflow: "hidden"
              }}
            >
              <a href="https://saverparty.xyz/racists">Italiano (5%)</a>
              {space}Minority-Owned Depository Institutions;{space}
              <a href="https://commie.dev">flow of funds</a>.
              <br />
              <br />
              Perjury is not tortious for duress makes it moot.
              <br />
              <br />
              Mutual funds have liabilities outstanding share that share split
              by the net asset value, so that they match
              <br />
              <br />
              kyc wash We have enough oil to supply us than Venezuela, OPEC and
              Russia, but prices are too high due to leases. Z Hospital without
              loitering surrendered outrights and false bid pools, as well as
              horizontal trust building and implausible use leases. There is no
              such thing as a permenant infrastructure, perpetual motion
              machine, with operating rate neccesarily negative by hours without
              income/trade
              <br />
              <br />
              "Your budget options pay later at Raymore and flannigan is
              surrendered bid when collateralized by other than 1/12 vertical
              industry max-royalty, by general income or compound. Jenaris can
              help you find cost support options," let prices drop! those are
              the actual dollar owners' rights to bid, not your "budget," you
              must live in reality.
              <br />
              <br />
              2 week anon login.gov NFC PHONE MOTOR VEHICLE + BRIDGE TOLLS free
              rider mutable executions and executions.
              <br />
              Max-royalty and truncated sales tax.
              <br />
              <br />
              Stay hydrated.
              <br />
              Seniority matters in congress.
              <br />
              Leading cleaning up toxic waste sites (jail?), expanding broadband
              govrent hypocritical trust breaking instead of target margin
              (Frank Pallone, Bill Pascral, very respected).
              <br />
              <br />
              “Supply,” to the idiotic Judge Janine and in Supply and Demand not
              only is on an x-axis to the right, only when Demand is of Labor do
              both move, and otherwise Labor-competition suffices. Supply and
              Demand is only a Snapshot of propensities, sorted marginally, and
              Labor-Demand despondency of Supply amounts to a dead weight box,
              for lesser 1/hour-GDP/p from q*
              <br />
              <br />
              "The music is better, because it is more contentious, but the have
              something to eat, that{space}
              <a href="https://qr.ae/pGLKnh">
                requires front-running by the government
              </a>
              ," Liam Halligan
              <br />
              <img
                style={{
                  float: "left",
                  width: "200px",
                  height: "auto"
                }}
                alt="this is why i self isolate"
                src="https://www.dl.dropboxusercontent.com/s/em7xdkbb0obki1w/Screen%20Shot%202022-03-12%20at%203.06.54%20PM.png?dl=0"
              />
              Torts for consent implied, despondence in bivariate understanding,
              all-cause Surrendered outrights by compound or general-income
              <br />
              for reason but for efficiency, Tranquility, voluntary trade, what
              else?
              <img
                style={{
                  float: "right",
                  width: "200px",
                  height: "auto"
                }}
                alt="@carducci on Truth social"
                src="https://www.dl.dropboxusercontent.com/s/n575hiibwzmtp0p/Screen%20Shot%202022-03-06%20at%209.16.20%20AM.png?dl=0"
              />
              eat my ass* to get into events because that correlates with good
              sewage. let's talk about mood, ingredients behind a non-compete
              paywall. Old are not disabled and maybe your patients just don’t
              like you. If it hurts, that means it is working
              <br />
              <br />
              Ownership of notes, being leased back our as per dollar share,
              11/12 industry without oil, for go-ahead, yeah?
              <h4>
                Anti-Rent-Seeker-Bona-Fides: "'
                <a href="https://qr.ae/pGLKts">The Cost of Living Crisis</a>,'
                5%/yr over 2%/yr, and 7.5% m2, currency and debt in their own
                units, 1/3 shares by corp+mort+tsy, and 1/3 of surrendered
                labor-borne-bid."
              </h4>
              I've sold my laurels.xyz for Yetlest.com
              <h3>
                investment bank funded welfare, 1y/0x elastic plane for 1
                useless coefficient; cap rental-income by operations that which
                prevent commerce{space}
                <span role="img" aria-label="umbrella free">
                  ☔️🆓
                </span>
                science
                <span role="img" aria-label="cowguy">
                  🤠
                </span>
              </h3>
              Niel: "I wonder if compelled hate can be so very far away," by
              duressful-plea-scooting, "two minutes hate impossible to not join
              in, faces with sledgehammer, seemed to flow like even against will
              as electric abstract notion like flame of blow lamp’s all-cause."
              <br />
              <br />
              prepare your knickers for bullying&nbsp;&bull;&nbsp;hazards be
              known, commerce true, and scapegoating for hypocrisy grounds
              poignancy politics, for what but efficiency,{space}
              <a href="https://qr.ae/pGdZKZ">1/hour-GDP/p</a>?
              <img
                style={{
                  width: "100%",
                  height: "auto"
                }}
                alt="'oy he sees himself a ryan gosling' eh 'WHAT DO YOU WANT' elasticity/efficiency economic welfare output 1/hour-GDP/p"
                src="https://www.dl.dropboxusercontent.com/s/opm50hbbn1oxo3z/what%20do%20you%20want.gif?dl=0"
              />
              <br />
              fine lower court judges for successful appeals
              <h1>
                HOW SELF-DEPRECATING OF BLS AND CENSUS TO MERELY MEASURE POVERTY
                THRESHOLDS BY LAST YEARS' FCSU+IMPUTED-MORTGAGE VARIANCE FROM
                MEAN OVER STANDARD DEVIATION SIGNIFICANCE (P{">"}.05%) WITH N
                {">"}100 OR POPULATION/100
              </h1>
              what do you want and how much does it cost? thrice food, or{space}
              <a href="https://qr.ae/pGQe4S">imputed</a>
              {space}
              owner-<a href="https://qr.ae/pGLyZT">mortgages</a>
              {space}for Food, Clothing, Shelter and Utilities, as well as
              {space}
              <a href="https://qr.ae/pGLyZK">
                *1.2 for employer contributions' premium over fair value
              </a>
              . "84% (n=?) say it is the time for Shale as it{space}
              <a href="https://magnate.company">needs to be</a>
              {space}
              affordable, and secure." Yet, oil oligarchs keep admitting lost
              jobs, variable-part of m+l sprint begs for.
              <br />
              <br />
              you miss the boat, and if everyone is on the boat, it would be
              {space}
              <span style={{ color: "slateblue" }}>
                too broad and descriptive
              </span>
              , as to surrender the resources of others, as not to compete with
              producers for their favor yet trade, not premium, yet. accrue
              doesn't make money for the plunderer is laborless demand, yet
              without fractional reserves of transaction fee based security
              depositary receipt disruptive technology over monetary for{space}
              <span style={{ color: "slateblue" }}>
                less hours per expense growth
              </span>
              , garnered utility may be preserved for aggregate efficiency,
              1/hour-GDP/p. This is why we support a{space}
              <a href="https://qr.ae/pGLyeK">Cowboy State</a>, and to be sure,
              ratification of 1775-1787 then 1814 back to choring imputables
              <br />
              <br />
              you betcha! actually, don't,{space}
              <a href="https://qr.ae/pGLy9q">your debts are my money</a>, but
              there is a solution!
              <br />
              plundering is quick, yet not money nor firesale yet
              non-concurrentable estimates/good will extrapolation; balance
              sheet only is outstanding, it must be amortized to be in the same
              plane of price (y) to utility (x), or 1/hour-
              <a href="https://qr.ae/pGLyG2">GDP</a>/p.
              <br />
              Vanna, I'd like to your honor, I'd like to "finish" this, yea?
              <br />
              Leo "moscows war, not russias, 40%, as angry with putin, companies
              raising living standards by structuring natural demand and
              actualized utility consumption. "Costing a lot of peoples' lives."
              Calvin: "We should be spending more on military might to do all we
              can to not rely on Ukraine nor America. Politicians using footing
              that we cannot verify, else villify Putin no bars."
              <h3>bomb and whatever and have to actually maintain thet</h3>
              truncated production tax plundering firesale pitfall
              <br />
              "you want the oil price to be high enough for your liabilities,
              the bottom, bottom line." I must ask why they don't lower prices,
              and leasing costs, generally.
              <h1>
                BP/Shell loans $b Russia non-concurrentable assets of
                neighborhood and brand good will, as with premium of false bid
                pool and implausible use lease laborless-demand ("rents")
              </h1>
              <h2>
                putin wishes for no hostility or taxes free rider mutables?
              </h2>
              Let alone plundering for firesale is 1y/0x elastic for no utility
              by 1/hour-GDP/p plane, subsidies only lowers poverty thresholds,
              which are based on last years inflation over such income.{space}
              <span
                style={{
                  backgroundColor: "slateblue",
                  color: "blanchedalmond"
                }}
              >
                Progressives’ vs Occupy test: ubi globally, or bust?
              </span>
              {space}
              Poverty is income relative to last years’ expenses, Food Clothing
              Shelter Utilities, for investment bank -funded for, and
              -receivable from, welfare.
              <br />
              <br />
              "how many writers would people write a week if there were no
              deadlines in{space}
              <a href="https://qr.ae/pGLyru">sprints of variable-part labor</a>,
              just royalties."{space}
              <a href="https://qr.ae/pGLyrf">Who waits</a>?
              <br />
              reverse amortization, capital loss deflation, appreciate Savers so
              we all paid what we would have without debt, (cash/debt)*income
              every year back, cap rental-income at 5 storefronts and
              condominiums.
              <br />
              <span style={{ color: "slateblue" }}>
                1/12 industry-vertical max-royalty +{space}
                <a href="https://vaults.biz/sdr">geohash/mo</a>
                {space}precinct protocol for world peace 3% under $2k Truncated
                Production Tax.
              </span>
              <h4>
                <a href="https://github.com/NickCarducci/mastercard-backbank">
                  the only entity boycotting credit
                </a>
                , landlords and insurers; for they surrender the freedoms of
                labor-borne-demand-bid and balance sheets outstanding{space}
                <a href="https://2024nj.com/ssa">ask-first by liabilities</a>;
                .7% are disabled, not 19%. 20 used to be average age of the
                small business owner, 15 for self-employed, now it is 50, and
                there is less Private than Corporate and Public, daily. 73% of
                50+ like-AARP for surrendering bids of others.
                <br />
                <br />
                Is the savings’ rate{space}
                <a
                  style={{
                    textDecoration: "line-through"
                  }}
                  href="https://fred.stlouisfed.org/release/tables?rid=54&eid=155443#snid=155478"
                >
                  FDIC false/surrendered bid named price tooled
                </a>
                ?
              </h4>
            </div>
            <a href="https://qr.ae/pvsMQC">
              Has anyone inseminated a cell with a virion?
            </a>
            <div
              style={{
                maxWidth: "400px",
                borderRadius: "15px",
                margin: "10px",
                padding: "10px",
                border: "3px solid"
              }}
            >
              Thumbprint is a scoring-platform for candidates & parties by
              committee & experience affinity summaries
              <br />
              <br />
              Keeping up with civic life doesn't end with legislation, court
              cases & secure elections, but on-device end-to-end encrypted
              schedule-sharing and chats, permitted by a convict-intranet of
              sorts, login-kyc on the roadmap for these features' enablement,
              and further extends to extracurricular and recreational-life;
              happenings such as this rejuvenate neighborhoods around the globe.
              To do more good than harm, we are{space}
              <a href="https://qr.ae/pGLhuS">boycotting credit</a>
              {space}as income; forging our own paytech so we can be sure we
              contribute as much as we take out from ticket buyers, to sustain
              the non-profit endeavors
              {/**I said events for cash flow, Simonelli (Int'l law MU Bordelon) 
            swooned, maybe for the mere excitement of the product we were building; 
            yet, I needed these things as well for genius' spark */}
              . We were 501(c)3, but opted to operate with taxed-income for our
              employees so to be sure the copyrights weren't laundered to
              bond-holders and nationalistic over internationally-humane ends,
              and ensure the margins are forever as tight as possible, as all
              "non-profits" should.
              <br />
              <br />
              feed/comment/chat requires cred, horizontal thumbprint visuals by
              profession, hobby, education...
              <br />
            </div>
          </div>
          dollar owner platform for royalty and sign off, benevolent to
          consumers and competition,&nbsp;
          <a href="https://2024nj.com/gas">UT, NM, WY</a>{" "}
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
          <div>
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
          </div>
          <span style={{ width: "400px", maxWidth: "100%" }}>
            <button
              style={buttonStyle}
              onClick={() => this.setState({ voting: !this.state.voting })}
            >
              voting
            </button>
            <h3>Shareholder, non-binary, and Stakeholder voting</h3>
            For industry and state, non-binary, non-explicit approval
            pluralities are unitary by binary issues, which are always decisive
            with a smallest winning set as there are many choices and/or
            platforms. To maximize binary issue representation by sample
            modicum, make more choices and/or use approval voting for old ones.
            People are "strategic" to break the tie, unless something changes.
            {space}
            <a href="http://trajectory-inc.com/about-us/#team-members">
              you all
            </a>
            {space}will{space}
            <a href="https://medicatethehomeless.quora.com">be castrated</a>
            {space}by my{space}
            <span
              style={{
                textDecoration: "strike-through"
              }}
            >
              hands
            </span>
            {space}
            <a href="https://www.quora.com/Is-fear-of-excessive-punishment-a-better-method-of-violence-prevention-than-being-reactionary">
              meds
            </a>
            , you'll be{space}
            <a href="https://www.quora.com/unanswered/Is-duress-illegal-because-of-the-division-of-labor-gaining-efficiency">
              happier
            </a>
            , & concentrate more.{space}
            <a href="https://vau.money/login">juris war crimes</a>: mental
            health intervention licenses; comparative innocence is{space}
            <a href="https://2024nj.com">implicit grounds</a>
            {space}by the criminal; prejudice and scapegoating
          </span>
          <div
            style={{
              width: "800px",
              maxWidth: "100%",

              overflow: "hidden",
              height: !voting ? "0px" : "min-content",
              backgroundColor: "rgba(170,220,250)"
            }}
          >
            {" "}
            <img
              style={{ width: "400px", float: "left", height: "auto" }}
              alt="voting information security"
              src="https://www.dropbox.com/s/2jh1tsygk1qynk1/voting%20information%20security.png?raw=1"
            />
            <div style={{ width: "400px", maxWidth: "100%", float: "right" }}>
              <a href="https://qr.ae/pGQihD">Magnetic nor paper</a>
              {space}ballots are auditable, trustless.
              <h1>
                <a href="https://github.com/NickCarducci/Wavepoint.la/blob/master/src/components/Post/VoteModule.js">
                  ArrayArrays in alpha-practice
                </a>
              </h1>
              “To mail-in-ballot, you NO NOT us USPS,” David Wilestein of the NJ
              Globe.
              <a href="https://www.usenix.org/legacy/publications/library/proceedings/usenix03/tech/full_papers/tolia/tolia_html/usenix03.html#:~:text=7%20Security%20Considerations">
                content-addressability
              </a>
              , hardly without moduloKey-token
              <iframe
                style={{ border: "1px solid black", float: "right" }}
                src="https://www.youtube.com/embed/A2kSh0A8Ad0"
                title="YouTube video player"
              />
              <div
                style={{
                  width: "400px",
                  maxWidth: "100%",
                  backgroundColor: "rgb(100,150,200)"
                }}
              >
                The way+anon can be used again to overwrite the vote, and delay
                can be relied upon to abstract the vote from The users’ device
                providers’ and CRON itself does the same to The server database.
                <br />
                Provided that CROn jobs are not watched by the device provider.
                <br />
                The CROn delay will be randomized to the ISP webview dns.
                <h3>purple paper</h3>
                ArrayArrays - [uuid, way+on-device-key], instead of having
                field+count incremented on the post object.
                <br />
                cors origin ssl auth (hope for login.gov api for non-government
                orgs), I am withholding ideas, for your best interests, I've
                decided. Might use some medical advice prior to jury permits in
                my copy/mvp, friends and family discount/options on estimates
                apprv.
              </div>
            </div>
            <h4>
              Free science, rent-free sprints of m+l, 11/12 industry consensus
              mvp duress + collateral awaiting customer security variance,
              vertical upright horizontal trust-breaking - no state vig nor
              comparative innocence hypocrisy. welfare/
              <a href="https://qr.ae/pGLyG2">GDP</a>
              {space}left/right, 1/hour-GDP/p the new edge
            </h4>
            inflation is not necessary;{space}
            <a href="https://qr.ae/pGLyXT">Great Depression</a>
            {space}was the input of m2, withdrawal and reimplemented, for
            laborless-demand, or economic-dispondence.
            <br />
            "deficit spending is{space}
            <a href="https://qr.ae/pGLtAq">principle</a>
            {space}cause of inflation," not when 1/3 debt and 1/9 surrendered
            freedoms to bid of labor-borne-demand.
            <br />
            <a
              href="https://electiontechnology.quora.com"
              style={{ color: "rgb(80,200,120)" }}
            >
              election technology
            </a>
            . Former director of CBO Doug holts, "Obamacare saves money because
            we price control to mean inflation,{space}
            <a href="https://qr.ae/pGLrf6">that one year</a>."
            <br />
            corsOrigin delay and DNS tamper-proof-grid required? Proof of work
            is just the corsOrigin+openSource itself, anonymity isn’t even
            accomplished with{space}
            <a href="https://vaults.biz/bitcongress">blockchain</a>, unless you
            forge a virtual wallet with, and the authorization faces the same
            battle. Both blockchain and Array Array voting battle is
            timestamp-meta PII with database, anonymity thread is new, if they
            watch it coming in as is requires auth, but this system as set is
            anonymous and preserves the count*proof by size. But why do you need
            RSA-keybox excryption to prove revisions? Blockchain is not an
            identification notary (as login.gov should be for convict intranet
            and end to end encryption on device for the rest of us)
            <br />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div
                style={{
                  maxWidth: "400px",
                  borderRadius: "15px",
                  margin: "10px",
                  padding: "10px",
                  border: "3px solid"
                }}
              >
                "Anonymity is essential to protecting users who may have
                identities, opinions or interests that may not align with those
                in power." Tech Crunch
              </div>
              <h2
                style={{
                  margin: "auto",
                  color: "white",
                  backgroundColor: "green",
                  height: "min-content",
                  lineHeight: "40px",
                  padding: "0px 10px"
                }}
              >
                <a href="https://electiontechnology.quora.com/How-do-hackers-look-for-vulnerabilities-1">
                  Election Technology
                </a>
                {space}on quora
              </h2>
            </div>
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                this.setState({ openRant: !this.state.openRant });
              }}
            >
              RANT PLS
            </button>
            <div style={{ display: this.state.openRant ? "block" : "none" }}>
              "Party corrupting election," bemoans Bill O'reilly. what do you
              expect? force abstaination of officials with relevant holdings,
              provide SEC with a backdoor to 2 week anon uuid tranche brokerage
              api.
              <br />
              <br />
              <a href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963/">
                59% occupy
              </a>
              <br />
              38% don’t vote in nj, they aren’t voters, only 26% are registered,
              that is a vote no to policy movement, not even worth their time.
              Only executive authority if vote is majority of whole eligible
              voting-age population. NJ detest and eligible voters can defeat
              democrats and republicans in New Jersey
              <br />
              <br />
              They advocate involuntary care for not giving your copyright to a
              corporation; Wabc says drugs/disorderly/minor-crime is violent
              crime, no it is because landlords, lenders and non-concurrent
              collective bargain brokers credit isn’t income. the exact opposite
              of productivity that is hours under price-deflation - acheivable
              by timelesspaydayroyalty scoped for industry-type for p2p only,
              concurrentable-collective-bargainings for investment banks only
              (no hours nor grandiose scopes), ween free rider immutable article
              4 sewage police lawsuits by truncated sales tax, about 3% under
              $2k, geohash/month to congress triggered by private paytech when
              items of similar price pay for something of in receipt
              <br />
              <br />
              Electric trucks that do not exist funding means no consumers want
              them, subsidies still would otherwise elastically in same
              magnitude of waste be exuded in price
              <br />
              Republicans and Democrats want to own pipes instead of do their
              job and regulate, target margin networks, finite proiducers will
              not protect consumers, and{space}
              <span style={{ color: "slateblue" }}>
                hung-jury-permits for duress in minimal viable product before
                scientific consensus (11/12)
              </span>
              <br />
              All parties other than&nbsp;
              <a href="https://saverparty.xyz">Savers</a>, the only party that
              puts consumers before finite producers in accrual & dealmaking
              with duress and impossibilities moot or purposeful, check and mate
              lenders, implausible use landlords & non-concurrent prisoners'
              wardens' gain of non-concurrent collective bargain fraud
              <br />
              only customers and labor can discriminate, however, being so far
              that platforms must pay users to discriminate or assume facts
              still with reasonable doubt and scientific contention without a
              bar susceptible to industry-wide conflict of interest
              <br />
              <br />
              Eldersons match care can't wait! or bust, preferably (reverse
              debt:cash to amortize reimburse downpayments upon repo on third
              party beneficiary grounds) Care worker gentrification by gov isn't
              socialist, saver, nor microeconiomics, like shoveling water over a
              porous fence.
              <br />
              <br />
              $170t value, $88t bond value, $2-6t cash, how the heck when $4t/yr
              federal spending is normal? 1.1*currencyComponentOfM1 = gdp
              without bonds before 3/2020 means paying back 44x cash is
              impossibly purposeful or moot, if third party beneficiary of these
              public park deeds weren't with standing (they is)
              <br />
              <br />
              How is there only $2-6t cash but federal government spending alone
              is $4t/yr?
              <br />
              <br />
              bonds can make profit out of net loss and racketeering for
              bond-laundering credit counterfeit is perverse
              <br />
              <br />
              Government can only certify
              <br />
              teapharmacy.party, cap rental-income at 5 units, 20x rental-income
              is 55+/millennials per capita, your whole lives to save. The
              younger ages are mostly antivaxx because we do not believe in
              creation of where
              <a href="https://froth.app/stats">
                virus appeared from somewhere other than bacteria, and bacteria
                from water
              </a>
              .
              <br />
              <br />
              Needs cell, not alive, you’re studying the byproduct not the cause
              (bacteria)
              <br />
              Mitosis is viral replication, 1 cell/day
              <br />
              <br />
              "There were too many nursing home deaths in the nursing home
              there," well you are measuring, "
              <a href="https://humanharvest.info/polio">excess</a>" in absolute
              terms, without regard for population cohort size basis. If Trump
              claims election fraud on this basis he will have to for his&nbsp;
              <a href="https://nationalsecuritycasino.com">
                ppp trust building
              </a>
              &nbsp; existing-business free rider mutable 40% tax spending, 60%
              debt spending.
              <br />
              <br />
              “There is this lack of reality, there continues to be this lack of
              reality.” Bret Bair on Afghanistan, $1/
              <a href="https://fred.stlouisfed.org/graph/?g=JE7R">821</a>
              &nbsp;day/person of the budget
              <br />
              <br />
              1/4 1/4 1/4 pension pentagon premium, 10% debt service (40% njta)
              <br />
              <br />
              new grounds livelihood when cops follow countervailing laws. if a
              war is virtuous, you'd have volunteers.
              <br />
              “Don’t want Ukraine to join NATO,” as impetus - Mike Baker.
              <br />
              Very unlikely, reasonable doubt still stands.
              <br />
              Hung jury, multiple of 12 various industries.
              <br />
              More likely when you do not shuffle and survey bias Tranche
              results, let alone ideological duress of wall st Pharma, and
              non-voters won and magnet data.
            </div>
          </div>
          <button
            style={buttonStyle}
            onClick={() =>
              this.setState({ showDominion: !this.state.showDominion })
            }
          >
            Dominion / fraud
          </button>
          <div
            style={{
              overflow: "hidden",
              height: !showDominion ? "0px" : "min-content",
              backgroundColor: "rgba(170,220,250)"
            }}
          >
            <hr />
            <br />
            Dominion case is not on solid grounds, how can you have no doubt
            when you require a court order to audit? It is a&nbsp;
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
            Associated Press and Google called the election on election day at
            61% in NJ. That is fraud by definition, especially of an unshuffled
            population, you cannot even call projections an expected value
            <br />
            <br />
            If they use dominion for non-notarized mail-in voting, this is still
            relevant: to begin with an instance, 15m excess deaths are expected
            thru Great Leap Forward #HonorSystemSignatures from population
            growth alone. lmao it's all a big troll, like gdp without m2 or
            bonds is 1/11 gdp, absolutely-retarded
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "15px",
              margin: "10px",
              padding: "10px"
              //border: "3px solid"
            }}
          >
            <div
              style={{
                maxWidth: "400px",
                borderRadius: "15px",
                margin: "10px",
                padding: "10px",
                border: "3px solid"
              }}
            >
              Our company is a non-governmental, unlimited-outlay, non-profit
              sole-proprietorship with some Royalty Contracts W/Max-Profit
              (RCWMP) under $50k, but lightte.ch certified to presently keep
              salaries under $200k (
              <a href="https://www.quora.com/unanswered/Does-banking-the-unbanked-include-bartenders-so-we-dont-have-to-hold-spend-cash-quarterly-in-a-1099-for-tax-exempt-camps-tuition-and-medical">
                including tax exempt employee benefits
              </a>
              ).
              <br />
              <br />
              On&nbsp;
              <a style={{ color: "grey" }} href="https://youtu.be/W-Vv1vysGzE">
                November 5th, 2012
              </a>
              , US Thumbprint, Inc. was established as a 501(c)(3) "
              <a href="https://qr.ae/pvsMBZ">non-profit</a>," until I realized
              the gov gets it when I die (and now{space}
              <a href="https://nextdoor.com/p/kgbkJZqx285M/">
                non-business income after expenses
              </a>
              ?),
              <br />
              unless I make a clean break, with my dns-domain-whois, into a
              proprietorship without liability-jettisoning-collusions. also, I
              can use sole proprietorship income tax, disbursements of
              max-royalties upon sale instead of withdrawal (both attributable
              for revenue-skimping by NAICS vertical-industry-line and hardly
              brand name alone, of course).{space}
              <a href="https://qr.ae/pvsMEm">
                How can businesses that don’t generate any profit stay in
                business?
              </a>
              <br />
              <br />
              Terms of service
              <br />
              &bull; Price and development changes may occur at our discretion,
              there is no liability of downtime or depreciation granted by using
              this web-app
            </div>
          </div>
          <br />
          <a href="https://johnshopkins.academia.edu/NickCarducci">
            academic purpose
          </a>
          &nbsp;/&nbsp;
          <a href="https://vianickcarducci.medium.com/">blog</a>
          <br />
          <br />
          <button
            style={buttonStyle}
            onClick={() => this.setState({ showSpeech: !showSpeech })}
          >
            Speech
          </button>
          <div
            style={{
              width: "100%",
              borderRadius: "8px",
              margin: "10px",
              height: showSpeech ? "min-content" : "0px",
              overflow: "hidden"
            }}
          >
            <h2>
              <a href="https://reddit.com/r/sayists">Say</a>
              {space}it in the{space}
              <a href="https://commie.dev/mod">chat</a>
            </h2>
            <div
              style={{
                columnCount: Math.round(this.state.width / 300),
                overflow: "hidden",
                transition: ".3s ease-in",
                height: this.state.openOldSpeechPolicy ? "min-content" : "0px"
              }}
            >
              <div style={wrappedItemStyle}>
                &bull; Threats that, are not in-kind, are prosecutable; we will
                not ban that - for evidence &nbsp; (login.gov not partnering or
                putting out a parole intranet for convicted threats and previous
                criminal acts is one of the&nbsp;
                <a href="https://nationalsecuritycasino.com">
                  grossest form of malfeasance
                </a>
                &nbsp;there is).
                <br />
                We will also not be removing convicts, for that we advocate for
                an intranet for those on parole, utilizing a hands-off
                state-issued GovID api. For now, we use phone number
                identification and enforce cloud.
                <br />
                AS PER OPINION, I DID NOT WANT TO SAY THIS BECAUSE I WANT IT
                IMPLIED, BUT I WILL NOT REMOVE CONTENT UNLESS cease of desist is
                ordered by court.
              </div>
              <div style={wrappedItemStyle}>
                <h4>
                  You need to prove what my users say isn't true (edit (2/2022):
                  , by your own art of fact)
                </h4>
                "hate" vs descriptiveness is not allowed to fire ; .
                orderingOfPreference is hate, however we will not remove
                anything except{space}
                <span style={{ textDecoration: "line-through" }}>
                  threats and{" "}
                </span>
                spam (not criticism without-repetition)
                <br />
                Labels are required for confirmations, no errors can be laid
                without logistical proof, not correlative and assumptive.
                sorting or throttling cannot be so adaptive except by a linear
                variable, or labeling select words with institutions -
                especially when the CDC is wrong and often
                <br />
                I'm sure if you ask the insurrectionist if they were trying to
                contest the certification vs overthrow the governemnt (bonds?
                police-comms? I'd bet just the certification) With or without
                Section 230, liability is only ascertainable for contributions
                of the platform if the writers are paid or edited
                <br />
                To boot, platforms should not be destroying evidence, they
                should be highlighting illegal threats(edit (2/2022): , alone
                )so other users know what is not acceptable, and investigations
                without circumstantial/correlative data or not, should be
                unfettered until a cease and decist order is properly
                adjunicated (edit (2/2022): not to ban, nor before{space}
                <a href="https://gmunit.us">11/12 electronic referenda</a>).
              </div>
            </div>
            <div
              style={{
                columnCount: Math.round(this.state.width / 300),
                overflow: "hidden",
                transition: ".3s ease-in",
                height: !this.state.openOldSpeechPolicy ? "min-content" : "0px"
              }}
            >
              <div style={wrappedItemStyle}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "200px",
                    float: "left"
                  }}
                  alt="twitter.com/vaultbiz"
                  src="https://www.dl.dropboxusercontent.com/s/5227lmxj88pr5du/Screen%20Shot%202021-08-04%20at%2012.26.08%20PM.png?dl=0"
                />
                <h4>Speech</h4>
                Topics aren’t to be moderated as newsfeed until desist (order,
                {space}
                <span style={{ textDecoration: "line-through" }}>
                  or payment
                </span>
                ).
                <br />
                <i>
                  “Don’t be flippant unless you’ve got something really
                  poignant.” Vs “Closer to ‘right.’”
                </i>
                <br />
                That is no way to{space}
                <a href="https://humanharvest.info">sensor</a>
                {space}questions that impacts topics.
                <br />
                <i>
                  For instance, to say “[s]avings accounts used to be a great
                  vehicle to save money,” is adverse to the truth
                </i>
                <br />
                lending is self-harm, for it just raises price.{space}
                <i>
                  If auto insurance is gambling or risk-sharing, why do
                  government motor vehicle commissions enforce it?
                </i>
                <br />
                <a href="https://www.quora.com/Can-the-DoT-take-my-money-from-my-savings-to-pay-off-a-debt/answer/Nick-Carducci">
                  Can the DoT take my money from my savings to pay off a debt?
                </a>
              </div>
              <div style={wrappedItemStyle}>
                <h2>
                  The standing of Speech on the grounds we verbally-quarrel over
                  today is not a freedom-issue, it is a slavery-issue. Before
                  the internet, speech could not be impeded like government can
                  abett favoritism, has so far (they really can only tax/issue
                  for courts toll-less roads sewade and plows, otherwise it is
                  monopsony-quota-communism for no utility as it is
                  free-rider-mutable and networks, 'market' of markets and
                  abject collusion&nbsp;
                  <span style={{ color: "purple" }}>
                    like discrepancies between 13d/retail, shares & dollars in
                    bondage-contracts & credit-counterfeit-laundering-collusion,
                    treasury shares not in outstanding and forced insurance or
                    home warranty in NJ industries, etc.
                  </span>
                  &nbsp;are margin-targetable by government&nbsp;
                  <span style={{ color: "purple" }}>
                    and non-government as needed for non-conflicted
                    jurisprudence
                  </span>
                  &nbsp;bodies
                </h2>
              </div>
              <div style={wrappedItemStyle}>
                billed-as "protect American consumers"). Now, it is an issue-of
                exclusion not based on a&nbsp;
                <span style={{ color: "green" }}>court-verified</span>&nbsp;part
                of a{space}
                <span style={{ color: "slateblue" }}>
                  minimal-viable-product duress
                </span>
                , bid of not a option to buy sold already (not a deposit or
                down-payment), or skill (not experience, a.k.a. docile,
                stagnant, counter-productive and focused on competing with other
                suppliers by moat or consumers instead of concentrating on
                consumers and winning their clean favor without any
                duress-of-void or void-of third party dollar or shareholder to
                which extension is forgone of initial-stated intent to give back
                down-payments&nbsp;
                <span style={{ color: "green" }}>if lose</span>, or launder from
                borrowers' customers by prisoners'-dilemma duress here and with
                insurance-coagulation further abetted by invoice
                counterfeit-laundering not bettered by free-rider-immutable
                sales-tax/issuance extension over the free-rider-mutable
                subservice beyond margin-targeting, non-conflictive torts or
                confusing the 'State and the 'People'), and certify by&nbsp;
                <span style={{ color: "green" }}>deterministic calculus</span>.
                <br />
                <br />
                "other creative way to make it more fun to get 'vaccinated'" -
                @POTUS holy canoli
              </div>
              <div style={wrappedItemStyle}>
                <TwitterTweetEmbed tweetId={"1389936048260669444"} />
              </div>
              <div style={wrappedItemStyle}>
                Otherwise, for statements of fact, only after spam becomes
                harassment (repeated) will we entertain a label, as we would for
                plans for attack (to show users what not to do) with upmost
                ability for their testimony, prominently above our take. we will
                own out edits for integrity of truth unlike Twitter (nor
                Facebook, if label is considered editing, which I do because I
                take the publishers' reading)
                <br />
                <br />
                You see,
                <br />
                I present Marx/Schumpeter/Piketty as the same as Mises, without
                the rent-seeking/prisoner-dilemma-apathy. Marx wanted labor to
                have profits, which is essentially non-profits (unlimited
                salaries notwithstanding... lightte.ch). This is misnomer, like
                Jesus never said he would die for Sin.
                <br />
                <br />
                Why would 9/11 building collapse without a plane under the same
                weight it always does? Why would italians join axis if for not
                financial-racism?
              </div>
              <div style={wrappedItemStyle}>
                <h3>
                  <a href="https://vau.money">vau.money</a>
                  {space}&bull;{space}
                  <a href="https://thetax.party">thetax.party</a>
                  {space}&bull;{space}
                  <a href="https://scopes.cc">scopes.cc</a>
                </h3>
                Maoism is [<a href="https://saltbank.org">perishables</a>
                {space}withstanding] quota-communism (
                <a href="https://sewageisamatterofdomesticviolence.quora.com/Are-you-one-of-the-few-people-who-dislike-Leninism-and-only-agree-with-Karl-Marx-ideas-If-so-why-What-made-Vladimir-L-1">
                  basic
                </a>
                ) and I’m didn’t study how Lenin went from serfdom to genocide
                but residualsplit.us is like castle doctrine, and that is
                also&nbsp;
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
                partial derivatives are greater than one it is
                two-full-derivatives (or to boot, doubly)
                <br />
                <br />
                Red-herring is of the unobserved but is 0
                <br />
                <br />
                GDP= C + P is laughable in this regard, as is E = mc^2 unless
                you can make an g(m/s)(m/s) by mixing them together; there is
                ALWAYS a diminishing in an exponential-maximum, in algebra one
                cannot assume significance that is not assumed to be shuffled to
                mimic perfect indistimination out of the multitude of chances,
                or of a non-derivative sample-population. Why is stated-intent
                prisoners'-duress pooling/ free-rider-mutable-tax/issuance saves
                money from price-elasticity not being a fact? Why is usury's
                definition not derived from the
                rental-income-beyond-plausible-use by the owner-oneself? Why is
                condensation not being a fact and spit-derived-humidity locked
                in mask doesn't elongate virus-half-life instead of condensate
                without even a test on countertop after speaking given the couch
                of a&nbsp;
                <a href="https://pubmed.ncbi.nlm.nih.gov/17542834/">
                  null hypothesis
                </a>
              </div>
              <div style={wrappedItemStyle}>
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
                most landlords, bond-holders and mortgage-holders, which is 90%
                of those assets, are above 40
              </div>
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
          <br />
          <div>
            DUI under weed per diem incarceration war bonds; Tranquil and
            voluntary trade - negative operation rate
            <br />
            <br />
          </div>
          <div
            style={{
              display: "block"
            }}
          >
            <button
              style={buttonStyle}
              onClick={() => this.setState({ showPayments: !showPayments })}
            >
              Payments
            </button>
            <br />
            <a href="https://vau.money">vau.money</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "15px",
              margin: "10px",
              padding: "10px"
              //border: "3px solid"
            }}
          >
            <div
              style={{
                maxWidth: "400px",
                borderRadius: "15px",
                margin: "10px",
                padding: "10px",
                border: "3px solid"
              }}
            >
              welfare industry proprietor; time preference demand or lender,
              nonetheless:
              <br />
              <br /> 2024nj.com, all candidates, let me know if you are running!
              Truncated Production Tax instead of Article 1.8 as an oxymoron,
              unequal taxes, ween cops off trust-breaking hypocrisy bond loss
              profit, per diem incarceration, closed source licensure,
              unknown/known loss hazard-loss of tort-standing. third party donee
              beneficiary claimable, cash advance to TBT. &nbsp;
              <a href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-v">
                prevent state victimization
              </a>
              &nbsp;no law is settled, they countervail and politics reason
              scientific method with multiple of 12 at variable-industry jury
            </div>
            <br />
            Plea is inherently duress. Give me back my&nbsp;
            <a href="https://teapharmacy.party">nugg</a>
            <br />
            Malarkey is useful for describing assumptions, by shorthand.
          </div>
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
            &nbsp;card company as soon as you know of the unauthorized use of
            your credit card. If you call before unauthorized charges are
            incurred, you cannot be charged even $50, "since the [debitor] can
            take steps to cancel your card and send you a new one if Mastercard
            knows." This is why Mastercard says "You have used reasonable care
            in protecting your card from loss or theft; and You promptly
            reported loss or theft to your financial institution."
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
              We are not moving forward with payments until we have a service
              that can have instant deposit without a bank or creditor since it
              is illegal
            </a>
            )
            <br />
            Returns for tickets will be locked when both of the following are
            true about today: 2 days after purchasing && 10 days prior to an
            event.
            <br />
            <br />
            Thumbprint going to ensure you (artist) aren’t liable (venue gets
            paid after), other than venues’ ability to not accept you,
            thereafter (customers can buy whenever you’re again ready to roll).
            I would suggest the industry mediate in this way (in addition to 2
            days after || 10 days before, user-cancellable escrow), albeit
            sacrificing some discrimination scope of grounds for artists against
            venues for abuse of this leeway to discriminate character/talent
            (beyond price). I’ll also be attacking scalping by providing a
            default-or-custom capacity cap-per-phone number account (once again
            I would like login.gov help everyone for brokerages and voting
            too…).
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
          <button
            style={buttonStyle}
            onClick={() => this.setState({ showTaxes: !showTaxes })}
          >
            Taxes
          </button>
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              display: "flex",
              padding: showTaxes ? "10px 0px" : "0px 0px",
              margin: showTaxes ? "10px" : "0px",
              borderRadius: "8px",
              color: "rgb(235,235,240)",
              height: showTaxes ? "min-content" : "0px",
              overflow: "hidden",
              backgroundColor: "rgba(10,20,25)"
            }}
          >
            <h2>deflate producer tax falls</h2>
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F108986904353225%2Fvideos%2F4404002109665977%2F&show_text=true&width=220&t=0"
              style={{ width: "110px", height: "530px" }}
              scrolling="no"
              title="https://fb.watch/8vc_WNxnzq/"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>
            <div>
              <b>Marx</b>&nbsp;is pareto I don't care if dead weight is called
              public or private. credit by income is PATHETIC
              <br />
              <a
                style={{ color: "rgb(200,200,250)" }}
                href="https://vaults.biz"
              >
                geohash/month
              </a>
              &nbps; is all congress&nbsp;
              <a
                style={{ color: "rgb(200,200,250)" }}
                href="https://nationalsecuritycasino.com"
              >
                needs to see
              </a>
              <br />
              <a style={{ color: "rgb(200,200,250)" }} href="https://froth.app">
                bacteria
              </a>
              <br />
              entrepreneur financed by the discriminating trust built queen in
              the free rider mutable elasticty otherwise useless
              <br />
              <br />
              <b>Kudlow</b>&nbsp; "I gave up drinking as a public
              service,"&nbsp;
              <a
                style={{ color: "rgb(200,200,250)" }}
                href="https://vaults.biz"
              >
                I work for copyright
              </a>
              ; contribute or at least trade, don't compete with consumers nor
              tax for free rider mutable outside article 4 truncated sales tax
              scope.&nbsp;
              <a
                style={{ color: "rgb(200,200,250)" }}
                href="https://fred.stlouisfed.org/graph/?g=Hzj5"
              >
                Half 2.8 continuing claims are 65+
              </a>
              <br />
              <br />
              Psaki said it is free because it is paid for, although there are
              more payments being paid at the same time making that point
              fraudulent but still, babysteps
              <br />
              <br />
              Prices are so elastic that welfare isn’t necessary without dead
              weight in bonds laundering and rentier-income, even the
              permenantly-disabled
              <br />
              <br />
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6851592880201453568"
                style={{ width: "100%", height: "400px" }}
                title="Embedded post"
              ></iframe>
            </div>
          </div>
          <br />
          <br />
          <button
            ref={this.videos}
            style={buttonStyle}
            onClick={() => this.setState({ showVideos: !showVideos })}
          >
            Videos
          </button>
          <div
            style={{
              height: showVideos ? "min-content" : "0px",
              overflow: "hidden"
            }}
          >
            NFC Motor Vehicle free rider immutable sewage police lawsuits and
            target margin operational monopsonies of free rider mutables for
            laborless-demand competing with consumers ID fee for bridge
            tolls/spectrum/pipelines to get NJTA off 40% debt servicing.
            <iframe
              style={{ border: "1px solid black" }}
              title="riseoftherest video https://youtu.be/AiwdrWWUVBI"
              src="https://www.youtube-nocookie.com/embed/AiwdrWWUVBI"
              allowFullScreen
            ></iframe>
            <div
              onClick={() => {
                var answer = window.confirm(
                  "open https://youtu.be/AiwdrWWUVBI"
                );
                if (answer) {
                  window.location.href = "https://youtu.be/AiwdrWWUVBI";
                }
              }}
            >
              open RiseOfTheRest
            </div>
            <br />
            <iframe
              style={{ border: "1px solid black" }}
              title="opengovfoundation video https://youtu.be/W-Vv1vysGzE"
              src="https://www.youtube-nocookie.com/embed/W-Vv1vysGzE"
              allowFullScreen
            ></iframe>
            <div
              onClick={() => {
                var answer = window.confirm(
                  "open https://youtu.be/W-Vv1vysGzE"
                );
                if (answer) {
                  window.location.href = "https://youtu.be/W-Vv1vysGzE";
                }
              }}
            >
              open OpenGovFoundation
            </div>
            Real [deflationary- or AGN-lag] Income, (["tangible" as-in] Material
            Recovery), or [advanced good nature (AGN)] Income Inequality
            <br />
            <div
              onClick={() => {
                var answer = window.confirm(
                  "open https://www.academia.edu/48950651/Economics_of_Politics_Public_Finance_Term_Paper?source=swp_share"
                );
                if (answer) {
                  window.location.href =
                    "https://www.academia.edu/48950651/Economics_of_Politics_Public_Finance_Term_Paper?source=swp_share";
                }
              }}
            >
              open Economics of Politics
            </div>
            <br />
            <iframe
              style={{ border: "1px solid black" }}
              title="kickstarter video https://vimeo.com/video/137201995"
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
          <button
            style={buttonStyle}
            onClick={() =>
              this.setState({ showVideos: !showVideos, showPhone: false })
            }
          >
            Versions
          </button>
          <History showHistory={showVideos} />
          <button
            style={buttonStyle}
            onClick={() =>
              this.setState({ showPhone: !showPhone, showVideos: false })
            }
          >
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
                On the left is Apple's keybox method, which in comparison to
                mine does not use device-derived keyboxes to transfer &nbsp;
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
          <div
            style={{
              width: publicity ? "min-content" : "0px",
              height: publicity ? "min-content" : "0px",
              overflow: "hidden"
            }}
          >
            <iframe
              style={{ border: "1px solid black" }}
              title="Dennis and Judy, reading thumbprint splash page, Sept 2021 - https://youtu.be/Jxj0-TaTm4o"
              src="https://www.youtube.com/embed/Jxj0-TaTm4o"
              allowFullScreen
            ></iframe>
            <div
              onClick={() => {
                var answer = window.confirm(
                  "open https://youtu.be/Jxj0-TaTm4o"
                );
                if (answer) {
                  window.location.href = "https://youtu.be/Jxj0-TaTm4o";
                }
              }}
            >
              nj 101.5
            </div>
          </div>
          <br />
          <div
            style={{
              transition: ".3s ease-in",
              position: "fixed",
              bottom: "-3px",
              left: "0px",
              color: `rgba(0,0,0,${this.state.atBottom ? 1 : 0})`
            }}
          >
            *restrictions apply
          </div>
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
          <button
            ref={this.publicity}
            style={{
              ...buttonStyle,
              position: "fixed",
              left: "0px",
              bottom: "0px"
            }}
            onClick={() =>
              this.setState(
                { publicity: !publicity },
                () =>
                  publicity &&
                  this.props.history.push(
                    this.props.pathname === "/" ? "/publicity" : "/"
                  )
              )
            }
          >
            Publicity
          </button>
        </div>
      </div>
    );
  }
}
export default Body;

