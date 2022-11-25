import React from "react";
import buyplan from "../images/buyplan.png";
import gift from "../images/gift.png";
import proimg from "../images/proimg.png";
import notification from "../images/notification.png";
import langimg from "../images/langimg.png";

function Top() {
  return (
    <div
      className="d-flex justify-content-end"
      style={{ height: "70px", left: "82px", background: "#FFFFFF", border: "1px solid #DAE6FF" }}>
      <div style={{ fontSize: "12px", marginTop: "23px", marginRight: "5px" }}>
        Your plan expires in 3 days
      </div>
      <div style={{ marginTop: "19px" }}>
        <img style={{ marginLeft: "10px" }} src={buyplan} alt="img" />
      </div>
      <div style={{ marginTop: "23px" }}>
        <img src={gift} style={{ marginLeft: "10px", marginRight: "10px" }} alt="img" />
      </div>
      <div style={{ marginTop: "23px" }}>
        <img src={notification} style={{ marginLeft: "10px", marginRight: "10px" }} alt="img" />
      </div>
      <div style={{ marginTop: "15px" }}>
        <img
          src={proimg}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            height: "40px",
            width: "40px",
            borderRadius: "35px",
          }}
          alt="img"
        />
      </div>
      <div style={{ fontSize: "12px", marginTop: "25px", marginRight: "5px" }}>
        Mukand cake shop
      </div>

      <div style={{ marginTop: "24px", marginRight: "25px" }}>
        <img src={langimg} style={{ marginLeft: "10px", marginRight: "10px" }} alt="img" />
      </div>
    </div>
  );
}

export default Top;
