import React from "react";
import Axios from "axios";
import Leftnavbar from "./LeftNavbar";
// import Slider from '@mui/material/Slider';
// import Slider from '@material-ui/core/Slider';
// import { Slider } from "@material-ui/core";
import Top from "./Top";
import frame from "../images/Frame.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CampaignSettings() {
  const desc =
    "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts.";
  const [campaignName, setCampaignName] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [description, setDescription] = useState(desc);
  const addCampaign = () => {
    console.log("here");
    Axios.post("http://localhost:5000/api/campaign/createCampaign", {
      campaignName: campaignName,
      start: startDate,
      end: EndDate,
      budget: budget,
      location: location,
      description: description,
    }).then(() => {
      console.log("Success");
    });
  };
  return (
    <div style={{ width: "100%" }} className="d-flex flex-row ">
      <div className="d-flex flex-column">
        <div
          style={{
            backgroundColor: "#001738",
            display: "inline",
            width: "64px",
            paddingBottom: "35px",
            paddingTop: "20px",
          }}>
          <img src={frame}></img>
        </div>
        <Leftnavbar />
      </div>

      <div className="d-flex flex-column flex-grow-1">
        <Top />
        <div className="progressbar">
          <div className="d-flex flex-column">
            <div>
              <h3 style={{ marginTop: "50px", marginLeft: "15px" }}>Your Ad campaign</h3>
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.5)",
                marginLeft: "20px",
                marginBottom: "30px",
              }}>
              Launch your app in just 3 easy Steps
            </div>
          </div>

          <div className="d-flex coloumn">
            <div className="md-stepper-horizontal orange">
              <div className="md-step active done">
                <div className="md-step-circle">
                  <span>1</span>
                </div>
                <div className="md-step-title">What do you want to do</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step active editable">
                <div className="md-step-circle">
                  <span></span>
                </div>
                <div className="md-step-title">Choose product</div>
                <div className="md-step-optional"></div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step active ">
                <div className="md-step-circle">
                  <span></span>
                </div>
                <div className="md-step-title">Campaign settings</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step last">
                <div className="md-step-circle last">
                  <span> </span>
                </div>
                <div className="md-step-title">Ready to go</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
            </div>
          </div>

          <div style={{ background: "white", marginLeft: "40px", marginRight: "40px" }}>
            <span style={{ fontSize: "20px", marginLeft: "20px" }}>Campaign Settings</span>{" "}
            <span style={{ fontSize: "12px", color: "grey" }}>(Step 3 of 4)</span>
            <div class="container">
              <div class="timeline-block timeline-block-right">
                <div class="marker active">
                  <i class="fa fa-check active" aria-hidden="true"></i>
                </div>
                <div class="timeline-content">
                  <h3 style={{ textDecorationLine: "underline" }}>Budget and dates info</h3>
                  <span>Budget Timeline</span>
                  <p>
                    <button class="button">Lifetime</button>
                    <button class="buttons">Daily</button>
                  </p>
                  <div className="d-flex row" style={{ marginRight: "690px" }}>
                    <div className="d-flex row" style={{ width: "385px" }}>
                      <label style={{ padding: "0" }}>Campaign Name: </label>
                      <input
                        style={{ border: "0.5px solid grey", borderRadius: "10px", width: "385px" }}
                        type="text"
                        onChange={(event) => {
                          setCampaignName(event.target.value);
                        }}></input>
                    </div>
                    <div className="d-flex column" style={{ padding: "0" }}>
                      <div style={{ marginTop: "10px" }}>
                        <label>Start Date: </label>
                        <input
                          style={{
                            border: "0.5px solid grey",
                            borderRadius: "10px",
                            width: "180px",
                          }}
                          type="date"
                          onChange={(event) => {
                            setStartDate(event.target.value);
                          }}></input>
                      </div>
                      <div style={{ marginTop: "10px", marginLeft: "25px" }}>
                        <label>End Date: </label>
                        <input
                          style={{
                            border: "0.5px solid grey",
                            borderRadius: "10px",
                            width: "180px",
                          }}
                          type="date"
                          onChange={(event) => {
                            setEndDate(event.target.value);
                          }}></input>
                      </div>
                    </div>
                    <div className="d-flex row" style={{ marginTop: "10px" }}>
                      <label style={{ padding: "0" }}>Budget: </label>
                      <input
                        style={{ border: "0.5px solid grey", borderRadius: "10px" }}
                        type="text"
                        onChange={(event) => {
                          setBudget(event.target.value);
                        }}></input>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-block timeline-block-right active">
                <div class="marker active">
                  <i class="fa fa-check active" aria-hidden="true"></i>
                </div>
                <div class="timeline-content">
                  <h3 style={{ textDecorationLine: "underline" }}>Location info</h3>
                  <span>Location type</span>
                  <p>
                    <button class="button">Location</button>
                    <button class="buttons">Radius</button>
                  </p>
                  <label>Location: </label>
                  <input
                    style={{ border: "0.5px solid grey", borderRadius: "10px" }}
                    type="text"
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}></input>
                </div>
              </div>
              <div style={{ float: "right", marginRight: "40px" }}>
                <Link to="/Readytogo">
                  {" "}
                  <button class="btn btn-primary" onClick={addCampaign}>
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
