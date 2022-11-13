import { Link } from "react-router-dom";
import React from "react";

import propertyStyles from  "./Property.module.css";

import { Infotab } from "./Infotab";
function Property() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        {Infotab.map((item,i) => (
          <div style={{ marginLeft: "20px", marginTop: "80px" }} key={i}>
            <div
              style={{
                height: "340px",
                width: "660px",
                marginLeft: "10px",
                padding: "10px",
                border: "3px solid whitesmoke",
              }}
            >
              <div>
                <p className={propertyStyles.uk_fonthead}>{item.headline}</p>
              </div>
              <div className={propertyStyles.uk_card}>
                <div>
                  <img src={item.img1} alt=" " className={propertyStyles.uk_img1} />
                  <p>{item.text1}</p>
                </div>
                <div>
                  <img src={item.img2} alt=" " className={propertyStyles.uk_img2} />
                  <p>{item.text2}</p>
                </div>
                <div>
                  <img src={item.img3} alt=" " className={propertyStyles.uk_img2} />
                  <p>{item.text3}</p>
                </div>
                <div>
                  <img src={item.img4} alt=" " className={propertyStyles.uk_img2} />
                  <p>{item.text4}</p>
                </div>
              </div>
              <Link to={`${item.path}`}>
                <button className={propertyStyles.uk_bttn1}>{item.bttn}</button>
              </Link>
              <br />
              <br />
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Property;
