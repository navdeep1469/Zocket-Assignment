import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBSwitch, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.png";
import pic1 from "../images/pic1.png";
import utube from "../images/utube.png";
import fb from "../images/fb.png";
import google from "../images/google.png";
import edit from "../images/edit_icon.png";
import Axios from "axios";
import deletee from "../images/deletee.png";
import { useEffect } from "react";
const Body = () => {
  const [campaignList, setCompaignList] = useState([]);
  const [num, setNum] = useState(1);
  useEffect(() => getCampaigns, []);
  const getCampaigns = () => {
    Axios.get("http://localhost:5000/api/campaign/getCampaigns").then((response) => {
      setCompaignList(response.data);
    });
  };
  const deleteCampaign = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setCompaignList(
        campaignList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };
  Date.prototype.getDateWithoutTime = function () {
    return new Date(this.toDateString());
  };

  return (
    <div
      style={{
        background: "white",
        marginTop: "20px",
        marginLeft: "30px",
        marginRight: "30px",
        border: "1px solid #eaeaea",
        borderRadius: "10px",
      }}>
      <table>
        <thead>
          <tr id="theading">
            <th
              style={{
                width: "2%",
                paddingLeft: "30px",
                paddingRight: "10px",
                paddingRight: "18px",
                paddingTop: "12px",
                paddingBottom: "12px",
              }}>
              <MDBCheckbox name="flexCheck" id="flexCheckDefault" />
            </th>
            <th
              style={{
                width: "5%",
                paddingRight: "18px",
                paddingTop: "12px",
                paddingBottom: "12px",
                fontSize: "14px",
              }}>
              On/Off
            </th>
            <th
              style={{
                width: "20%",
                paddingRight: "18px",
                paddingTop: "12px",
                paddingBottom: "12px",
                fontSize: "14px",
              }}>
              Campaign
            </th>
            <th
              style={{
                width: "15%",
                paddingRight: "18px",
                paddingTop: "12px",
                paddingBottom: "12px",
                fontSize: "14px",
              }}>
              Date Range
            </th>
            <th style={{ width: "2%", paddingLeft: "1px", paddingRight: "15px", fontSize: "14px" }}>
              Clicks
            </th>
            <th
              style={{
                width: "5%",
                paddingLeft: "10px",
                paddingRight: "18px",
                paddingTop: "12px",
                paddingBottom: "12px",
                fontSize: "14px",
              }}>
              Budget
            </th>
            <th
              style={{
                width: "5%",
                paddingLeft: "10px",
                paddingRight: "18px",
                paddingTop: "12px",
                paddingBottom: "12px",
                fontSize: "14px",
              }}>
              Location
            </th>
            <th
              style={{
                width: "5%",
                paddingRight: "18px",
                paddingTop: "12px",
                paddingBottom: "12px",
                fontSize: "14px",
              }}>
              Platform
            </th>
            <th
              style={{
                width: "5%",
                paddingRight: "18px",
                paddingTop: "12px",
                paddingBottom: "12px",
                fontSize: "14px",
              }}>
              Status
            </th>
            <th
              style={{
                width: "5%",
                paddingRight: "18px",
                paddingTop: "12px",
                paddingBottom: "12px",
                fontSize: "14px",
              }}>
              Actions
            </th>
          </tr>
        </thead>

        {campaignList.map((data) => (
          <tr>
            <td style={{ width: "2%", paddingLeft: "30px", paddingRight: "10px" }}>
              <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" />
            </td>
            <td>
              <MDBSwitch id="flexSwitchCheckDefault" />
            </td>
            <td>
              <img
                src={
                  num == 1
                    ? pic1
                    : num == 2
                    ? pic2
                    : num == 3
                    ? pic3
                    : num == 4
                    ? pic4
                    : num == 5
                    ? pic5
                    : setNum((num + 1) % 5)
                }
                style={{
                  borderRadius: 5,
                  height: 54,
                  width: 58,
                  marginLeft: 10,
                  marginTop: 15,
                  float: "left",
                }}
                alt="img"
              />
              <p style={{ float: "left", marginLeft: "10px", marginTop: "20PX" }}>
                {data.campaignName}
                <div className="subhead">Created on {data.date}</div>
              </p>
            </td>
            <td>
              {data.start} to {data.end}
            </td>
            <td>{data.clicks}</td>
            <td>{data.budget}</td>
            <td>{data.location}</td>
            <td>
              <img src={fb}></img>
            </td>
            <td>
              {" "}
              <MDBBtn
                rounded
                style={{
                  width: "90px",
                  height: "30px",
                  backgroundColor: "#E1FFE0",
                  borderColor: "#E1FFE0",
                  fontSize: "12px",
                }}>
                <span style={{ color: "#317C2E" }}>{data.campaignStatus}</span>
              </MDBBtn>
            </td>
            <td>
              {" "}
              <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                  <img src={edit}></img>
                </div>
                <div
                  onClick={() => {
                    deleteCampaign(data.id);
                  }}
                  class="p-2 bd-highlight">
                  <img src={deletee} />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Body;
