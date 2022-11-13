import React from "react";

function RegInfo(props) {
  return (
    <div className="maintext">
      <h1 className="reg-head">Holiday Home Owner/Manager Dashboard</h1>
      <p>
        The Fastest, Simplest way to Manage your Holiday Rental Business. Sell
        online, through your <br /> own website and through over 100 of the
        world's largest websites through 1 Dashboard.
      </p>
      <br /> <br /> <br />
      <button
        style={{
          padding: "7px",
          backgroundColor: "#DB4A67",
          borderRadius: "2px",
          color: "white",
          bordercolor: "white",
          border: "1px solid red",
        }}
      >
        What Do I Pay?
      </button>
      <button
        style={{
          padding: "7px",
          backgroundColor: "#DB4A67",
          borderRadius: "2px",
          color: "white",
          marginLeft: "3px",
          border: "1px solid red",
        }}
      >
        30 Enquries or your $299 Refund
      </button>
      <div style={{ display: "flex" }}>
        <div>
          <br /> <br />
          <br />
          <h3>One Dashboard - Total Control</h3>
          <p style={{ fontsize: "7px" }}>
            Keep all your property details, photos, rates,
            <br /> availability updated in one location and manage all
            <br /> your bookings centrally. No
            <br /> confusion, No Overbookings.
          </p>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <br /> <br />
          <br />
          <h3>Book Now + Distribution</h3>
          <p style={{ fontsize: "7px" }}>
            Use the "Book Now' button to save time - only get <br />
            confirmed bookings. Use Tripvillas Distribution to
            <br /> publish your property and get bookings from over <br />
            100 of the world's largest travel companies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegInfo;
