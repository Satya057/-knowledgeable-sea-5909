import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Carasol.css";
import { Link } from "react-router-dom";
import { Loadingg } from "react-loadingg";
import { useEffect, useState } from "react";
import axios from "axios";
import { WaveLoading } from "react-loadingg";
const Carasol = () => {
  const [text, settext] = useState([]);
  const [isLoading, setLoadng] = useState(false);
  const handleData = () => {
    setLoadng(true);
    const requestParam = {
      method: "get",
      url: "https://tripvilla.herokuapp.com/hotels",
    };
    axios(requestParam)
      .then((response) => {
        console.log(response.data.data);
        settext(response.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadng(false);
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

  if (isLoading)
    return <WaveLoading style={{ marginTop: "80px", marginLeft: "720px" }} />;

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
              <Link to={`/holiday-homes/${item._id}`}>
                <img
                  src={item.hotImg1}
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
              {item.city} <br />{" "}
              <a href style={{ color: "white" }}>
                Vacation Rental
              </a>
            </h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { Carasol };
