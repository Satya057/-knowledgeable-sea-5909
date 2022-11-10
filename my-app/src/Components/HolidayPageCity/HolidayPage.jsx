import React, { useEffect, useState } from "react";

import { NavBar } from "../Home_NavBar/NavBar";
import homeSearchStyles from "../Home/Home_Search/HomeSearch.module.css";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Loadingg from "../Loading/Loadingg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/HoliadayPage.css";
import { Link } from "react-router-dom";

import GoogleMap1 from "./MapGoogle/GoogleMap";
import axios from "axios";

function HolidayPage(props) {
  const [value, setValue] = useState([null, null]);
  const [guest, setGuest] = useState("");
  const [text2, setText2] = useState([]);
  const [isLoading, setLoadng] = useState(false);
  const handleGuest = (event) => {
    setGuest(event.target.value);
  };

  /////////// Carasol

  const handleData = () => {
    setLoadng(true);
    const requestParam = {
      method: "get",
      url: "https://tripvilla.herokuapp.com/hotels",
    };
    axios(requestParam)
      .then((response) => {
        console.log(response.data.data);
        setText2(response.data.data);
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
    slidesToScroll: 4,
    className: "slides",
  };

  if (isLoading) return <Loadingg />;

  return (
    <div>
      <NavBar />

      <div
        style={{
          border: "3px solid whitesmoke",
          height: "250px",
          marginTop: "40px",
          width: "80%",
          marginLeft: "140px",
          backgroundColor: "white",
        }}
      >
        <div
          className={homeSearchStyles.textDiv}
          style={{ marginTop: "-130px" }}
        >
          <h1 style={{ fontsize: "22.5px", color: "black" }}>
            Goa Holiday Homes <br />
            <a href style={{ fontsize: "8.5px", color: "#33333" }}>
              We have 300 Vacation Rentals - search by dates for availability
            </a>
          </h1>
          <div
            className={homeSearchStyles.searchWidget}
            style={{ border: "none" }}
          >
            <div className={homeSearchStyles.inp_location}>
              <span className={homeSearchStyles.searchIcon}>
                <SearchIcon />
              </span>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
              />
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                startText="Check In"
                endText="Check Out"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField
                      {...startProps}
                      helperText=""
                      className={homeSearchStyles.chckk}
                      size="small"
                    />
                    <TextField
                      {...endProps}
                      helperText=""
                      className={homeSearchStyles.chckk}
                      size="small"
                    />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel
                    size="small"
                    id="guest-select-label"
                    className={homeSearchStyles.guestInput}
                  >
                    Select Guests
                  </InputLabel>
                  <Select
                    labelId="guest-select-label"
                    id="guest-select"
                    autoWidth={true}
                    size="small"
                    sx={{ minWidth: "160px" }}
                    value={guest}
                    label="Select Guests"
                    onChange={handleGuest}
                  >
                    {new Array(50).fill(0).map((item, index) => {
                      return (
                        <MenuItem key={`${index}gsts`} value={index + 1}>
                          {index === 0
                            ? `${index + 1} guest`
                            : `${index + 1} guests`}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <button className={homeSearchStyles.searchBtn}>SEARCH</button>
          </div>
        </div>
      </div>

      {/*               CARASOL                   */}

      <div style={{ marginTop: "150px" }}>
        <div
          style={{
            textAlign: "left",
            marginLeft: "20px",
          }}
        >
          <h2 style={{ fontWeight: "lighter" }}>Holiday Homes</h2>
        </div>
        <Slider {...settings}>
          {text2.map((item, index) => (
            <div>
              <div className="bg-image22">
                <Link to={`/${item._id}/alor`}>
                  <img
                    src={item.hotImg1}
                    style={{
                      height: "180px",
                      width: "320.3px",
                    }}
                    alt=""
                  />
                </Link>
                <h5>Ref id #{item._id}</h5>
                <h4 className="bg-text22" style={{ marginTop: "-30px" }}>
                  {item.topTitle} <br />
                  <a
                    href
                    style={{ color: "#484848", fontfamily: " sans-serif" }}
                  >
                    {item.city},{item.state},{item.country}
                  </a>
                </h4>
                <div style={{ marginTop: "-30px" }}>
                  {item.tagsArr
                    .filter((item, index) => index < 2)
                    .map((item) => (
                      <a href style={{ color: "#1e87f0" }}>
                        {item} |
                      </a>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <GoogleMap1 />
    </div>
  );
}

export default HolidayPage;
