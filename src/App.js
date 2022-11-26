import logo1 from "./jonface.png";
import logo2 from "./joelface.png";
import logo3 from "./fionaface.png";
import logo4 from "./bakerface.png";
import logo5 from "./coreyface.png";
import logo6 from "./mikface.png";
import logo7 from "./joseface.png";
import logo8 from "./cookieface.png";
import cwlogo from "./cwlogo.png";
import "./App.css";
import snortSfx from "./snort.mp3";
import musicSfx from "./music.mp3";
import { SoundButton } from "./components/SoundButton";
import Clock from "./components/Clock";
import React, { useState, useEffect } from "react";
import Popup from "./components/Popup";
import Alert from "@mui/material/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import HydrationModal from "./components/HydrationModal";
import Dropdowny from "./components/Dropdown";
import { storyArray } from "./components/Story";
import { answerArray } from "./components/Story";

function App() {
  const [logo, setLogo] = useState(logo1);
  const [cardNumber, setCard] = useState(0);
  const [guideText, setGuideText] = useState("");
  const [show, setShow] = useState(false);
  const [wrongCount, setWrong] = useState(0);
  const hangman = answerArray[cardNumber]
    .replace(/\s/, "/")
    .replace(/\w/g, "_ ");
  const changeGuide = () => {
    console.log(show);
    setShow(!show);
    show ? setGuideText(hangman) : setGuideText("");
    setTimeout(() => {
      console.log(show);
    }, 200);
  };
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (
          document.getElementById("enterbox").value === answerArray[cardNumber]
        ) {
          console.log("correct");
          setCard(cardNumber + 1);
          setGuideText("");
          setWrong(0);
        } else {
          console.log("wrong");
          setGuideText(answerArray[cardNumber].substring(0, wrongCount + 1));
          // setGuideText(
          //   guideText.replaceAll("_ ", "") + answerArray[cardNumber][wrongCount]
          // );
          setWrong(wrongCount + 1);
          if (wrongCount === answerArray[cardNumber].length) {
            setWrong(0);
            document.getElementById("reset").click();
            return;
          }
          console.log("count:", wrongCount);
          // document.getElementById("snortbtn").click();
          console.log("snortsoundeffect");
          console.log(document.getElementById("enterbox").value);
        }
        if (
          !isNaN(document.getElementById("enterbox").value) &&
          document.getElementById("enterbox").value < storyArray.length
        ) {
          setCard(parseInt(document.getElementById("enterbox").value), 10);
          setWrong(0);
          setGuideText("");
        }
        document.getElementById("enterbox").value = "";
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [cardNumber, wrongCount]);

  return (
    <div className="App">
      <HydrationModal />
      <header className="App-header">
        <Container>
          <Row className="thingo">
            <Col className="form thirds">
              <form>
                <h1>TODO List</h1>

                <Row className="form-title">
                  <Col className="time">
                    <div className="time-title">Time</div>
                    <label>
                      <input type="number" name="name" placeholder="6" />
                    </label>
                    <label>
                      <input type="number" name="name" placeholder="" />
                    </label>
                    <label>
                      <input type="number" name="name" placeholder="12" />
                    </label>
                    <label>
                      <input type="number" name="name" placeholder="1" />
                    </label>
                    <label>
                      <input type="number" name="name" placeholder="" />
                    </label>
                    <label>
                      <input type="number" name="name" placeholder="5" />
                    </label>
                    <label>
                      <input type="number" name="name" placeholder="9" />
                    </label>
                    <label>
                      <input type="number" name="name" placeholder="10" />
                    </label>
                  </Col>
                  <Col className="task">
                    Task
                    <input type="text" name="name" placeholder="Wake Up/세수" />
                    <input type="text" name="name" placeholder="Coding" />
                    <input type="text" name="name" placeholder="Clean/Chores" />
                    <input type="text" name="name" placeholder="Eat/Cook" />
                    <input type="text" name="name" placeholder="Korean" />
                    <input type="text" name="name" placeholder="Exercise" />
                    <input type="text" name="name" placeholder="Read" />
                    <input type="text" name="name" placeholder="Sleep" />
                  </Col>
                  <Col className="desc">
                    <label className="desc-title">Description</label>
                    <textarea rows="1" cols="20" />
                    <textarea rows="1" cols="20" />
                    <textarea rows="1" cols="20" />
                    <textarea rows="1" cols="20" />
                    <textarea rows="1" cols="20" />
                    <textarea rows="1" cols="20" />
                    <textarea rows="1" cols="20" />
                    <textarea rows="1" cols="20" />
                  </Col>
                </Row>
              </form>
              <div>
                <h2>Other ToDo's</h2>
                <textarea></textarea>
              </div>
            </Col>
            <Col className="thirds">
              <Clock />
              <Alert variant="filled" severity="warning">
                It's time to hydrate my Nibba
              </Alert>
              <img src={logo} className="App-logo" alt="logo" />
              <Row>
                <Dropdowny
                  one="Go"
                  two="to"
                  three="bread"
                  four="zzzzaaaappp"
                  five="SMRT"
                  six="bone dry"
                  seven="monorail"
                  eight="Hi everybody"
                  onSelect={(href) => {
                    switch (href) {
                      case "#/action-1":
                        return setLogo(logo1);
                      case "#/action-2":
                        return setLogo(logo2);
                      case "#/action-3":
                        return setLogo(logo3);
                      case "#/action-4":
                        return setLogo(logo4);
                      case "#/action-5":
                        return setLogo(logo5);
                      case "#/action-6":
                        return setLogo(logo6);
                      case "#/action-7":
                        return setLogo(logo7);
                      case "#/action-8":
                        return setLogo(logo8);
                      default:
                        return "gun";
                    }
                  }}
                />
              </Row>
              <SoundButton
                sound={snortSfx}
                text="Snort"
                allowPause={false}
                id="snortbtn"
              ></SoundButton>
              <Popup />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <SoundButton
                sound={musicSfx}
                text="Music"
                allowPause={true}
              ></SoundButton>
            </Col>
            <Col className="thirds">
              <h1>Your Adventure {cardNumber}</h1>
              <button
                id="reset"
                onClick={() => {
                  setCard(0);
                  setGuideText("");
                  document.getElementById("enterbox").value = "";
                }}
                style={{ fontSize: 10 }}
              >
                Reset
              </button>
              <p
                style={{
                  backgroundColor: "#A8A6FF",
                  color: "black",
                  textAlign: "left",
                  padding: 15,
                  fontSize: "2vh",
                  maxHeight: 330,
                }}
              >
                {storyArray[cardNumber]}
              </p>
              <div name="guide" style={{ marginTop: 52 }}>
                <label>Guide</label>
                <label>{guideText}</label>
                <button
                  id="showbtn"
                  onClick={changeGuide}
                  style={{ fontSize: 12 }}
                >
                  Show/Hide
                </button>
              </div>
              <div name="response" style={{ marginTop: 52 }}>
                <label>Your Response</label>
                <input
                  id="enterbox"
                  style={{
                    width: "50%",
                    textAlign: "center",
                    margin: "auto",
                  }}
                />
                <label style={{ fontSize: 12 }}>Press Enter to Respond</label>
              </div>
              <img
                src={cwlogo}
                className="watermark"
                style={{
                  width: "12%",
                  opacity: 0.2,
                  marginLeft: "85%",
                }}
                alt="logo"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}
export default App;
