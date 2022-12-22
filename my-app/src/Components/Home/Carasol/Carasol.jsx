import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";


export default function Carasol(){
  const [text, settext] = useState([]);
  const handleData = () => {
   
    const requestParam = {
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/topDestinations`,
    };
    axios(requestParam)
      .then((response) => {
        console.log(response.data);
        settext(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
       
      });
  };

  useEffect(() => {
    handleData();
  }, []);
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 5,
    className: "slides",
  };

 
  return (
    <div style={{ marginTop: "80px" }}>
      <div
        style={{
          textAlign: "left",
          marginLeft: "20px",
        }}
      >
        <h2 style={{ fontWeight: "300", color: "#000000", marginLeft: "20px" }}>
          Top Destinations
        </h2>
      </div>
      <Slider {...settings}>
        {text.map((item, index) => (
          <div key={index}>
            <div className="bg-image" >
              <Link to={`/holiday-homes/${item.location}`}>
                <img
                  src={item.img}
                  style={{
                    height: "180px",
                    width: "300px",
                  }}
                  alt=""
                />
              </Link>
            </div>
            <h2
              style={{
                marginTop: "-110px",
                position: "absolute",
                color: "whitesmoke",
                marginLeft: "120px",
              }}
            >
              {item.location} <br />{" "}
              <a href style={{ color: "white" }}>
                {item.text}
              </a>
            </h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};


