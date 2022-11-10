import axios from "axios";
import React, { useEffect, useState } from "react";

import { BsFilterLeft } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { NavBar } from "../Home_NavBar/NavBar";
import styles from "./Module2.module.css";
import Modal from "react-modal";
import style from "./Map.module.css";
import homeSearchStyles from "../Home/Home_Search/HomeSearch.module.css";
import TextField from "@material-ui/core/TextField";
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import Loadingg from "../Loading/Loadingg";
import { loadData, saveData } from "../../utils/localStorage";
import { Link } from "react-router-dom";
import GoogleMap2 from "./MapLocnComponent/Map2";
import { setPriceVariables } from "../../Redux/Pricing_Final/action";
import { ErrorPage } from "../Error_Page/ErrorPage";

export default function MapLocation(props) {
  const [sort, setSort] = React.useState(null);
  const location = useSelector((state) => state.pricing.location);
  const checkinDate = useSelector((state) => state.pricing.checkinDate);
  const checkOutDate = useSelector((state) => state.pricing.checkOutDate);
  const noOfGuest = useSelector((state) => state.pricing.noOfGuest);
  const [Info2, setInfo] = useState([]);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [guest, setGuest] = useState(noOfGuest);
  const [query, setQuery] = useState(false);
  const [value, setValue] = useState([
    checkinDate || null,
    checkOutDate || null,
  ]);
  const [ModalIsopen2, setModalIsopen2] = useState(false);
  const [isLoading, setLoadng] = useState(true);
  const [isError, setisError] = useState(false);
  const dispatch = useDispatch();

  if (location) {
    saveData("locn", location);
  }

  const payload = {
    location: query,
    checkinDate: value[0],
    checkOutDate: value[1],
    noOfGuest: guest,
  };

  useEffect(() => {
    handleFruits();
  }, [sort]);

  const handleGuest = (event) => {
    setGuest(event.target.value);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handleChange = () => {
    setLoadng(true);
    setisError(false);
    saveData("locn", query);
    setEditModalIsOpen(false);

    const pricingAction = setPriceVariables(payload);
    dispatch(pricingAction);
    axios
      .get(`https://tripvilla.herokuapp.com/hotels?city=${query || loadData("locn")}`)
      .then((res) => {
        setInfo(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        setisError(true);
      })
      .finally(() => {
        setLoadng(false);
      });
  };

  const handleFruits = () => {
    if (query.location === "") {
      alert("Please select a location");
    }
    setLoadng(true);
    setisError(false);
    axios
      .get(
        `https://tripvilla.herokuapp.com/hotels?city=${
          location || loadData("locn")}`)
      .then((response) => {
        setInfo(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        setisError(true);
      })
      .finally(() => {
        setLoadng(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loadingg />
      ) : isError ? (
        <ErrorPage />
      ) : (
        <div>
          <NavBar />
          <div
            style={{
              width: "60%",
              padding: "13px",
            }}
          >
            <button
              style={{
                height: "30px",
                backgroundColor: "white",
                border: "1px solid gray",
                padding: "5px",
                marginRight: "600px",
              }}
              onClick={() => setModalIsopen2(true)}
            >
              <BsFilterLeft /> APPLY FILTERS
            </button>

            <button
              style={{
                height: "30px",
                backgroundColor: "white",
                border: "1px solid gray",
                padding: "5px",
              }}
              onClick={() => setEditModalIsOpen(true)}
            >
              <MdDateRange /> MODIFY SEARCH
            </button>
          </div>

          <div style={{ background: "red" }}>
            <Modal
              isOpen={editModalIsOpen}
              onRequestClose={() => setEditModalIsOpen(false)}
              className={styles.editModal}
            >
              <h1
                style={{
                  color: "black",
                  marginTop: "40px",
                  marginLeft: "30px",
                }}
              >
                Modify Search
              </h1>

              <div>
                <div className={homeSearchStyles.inp_location}>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ width: "540px", marginLeft: "30px" }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: "12px",
                  }}
                >
                  <br />
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
                            style={{ width: "270px", marginLeft: "30px" }}
                            size="small"
                          />
                          <TextField
                            {...endProps}
                            helperText=""
                            className={homeSearchStyles.chckk}
                            style={{ width: "270px" }}
                            size="small"
                          />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider>
                  <br /> <br />
                </div>

                <div style={{ marginTop: "6px" }}>
                  <Box sx={{ minWidth: 120 }}>
                    <br /> <br />
                    <FormControl fullWidth>
                      <InputLabel
                        size="small"
                        id="guest-select-label"
                        className={homeSearchStyles.guestInput}
                        style={{ marginTop: "-40px", marginLeft: "30px" }}
                      >
                        Select Guests
                      </InputLabel>
                      <Select
                        labelId="guest-select-label"
                        id="guest-select"
                        autoWidth={true}
                        size="small"
                        sx={{ minWidth: "160px", marginLeft: "30px" }}
                        value={guest}
                        label="Select Guests"
                        onChange={handleGuest}
                        style={{
                          width: "540px",
                          marginTop: "-40px",
                        }}
                      >
                        {new Array(50).fill(0).map((item, index) => {
                          return (
                            <MenuItem
                              key={`${index}gsts`}
                              value={index + 1}
                              style={{ width: "540px" }}
                            >
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
              </div>
              <div
                className={styles.editModalButtons}
                style={{ marginTop: "-20px" }}
              >
                <br />
                <button
                  onClick={handleChange}
                  style={{ backgroundColor: "#0F7AE5" }}
                >
                  Search
                </button>
                <button
                  onClick={() => setEditModalIsOpen(false)}
                  style={{
                    padding: "9px",
                    width: "25%",
                    marginLeft: "3px",
                    backgroundColor: "#FFFFFF",
                    color: "#333333",
                    border: "1px solid gray",
                  }}
                >
                  Cancel
                </button>
              </div>
            </Modal>
          </div>

          {/* MODAL TO FOR CHECKBOX  */}

          <Modal
            isOpen={ModalIsopen2}
            onRequestClose={() => setModalIsopen2(false)}
            className={styles.editModal2}
          >
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "90px" }}>
                <h2>Features</h2>
                <input
                  type="checkbox"
                  style={{ height: "16px", width: "16px" }}
                />
                <label style={{ fontSize: "15px", color: "black" }}>
                  Swimming Pool
                </label>
                {[
                  "Air Conditioner",
                  "Internet",
                  "Television",
                  "Parking",
                  "Housekeeping",
                  "Functional Kitchen",
                  "Washing Machine",
                  "Spa",
                  "Gym",
                  "Cook On Call",
                ].map((item) => (
                  <React.Fragment key={item}>
                    <br /> <br />
                    <input
                      type="checkbox"
                      style={{ height: "16px", width: "16px" }}
                    />
                    <label style={{ fontSize: "15px", color: "black" }}>
                      Spa
                    </label>{" "}
                  </React.Fragment>
                ))}
              </div>
              {/* Second list */}
              <div style={{ marginLeft: "190px" }}>
                <h2>Property Type</h2>
                <input
                  type="checkbox"
                  style={{ height: "16px", width: "16px" }}
                />
                <label style={{ fontSize: "15px", color: "black" }}>
                  Luxury Yacht
                </label>
                {[
                  "Camping Ground",
                  "Apartment",
                  "Villa",
                  "Hostel",
                  "Serviced Apartment",
                  "Bed and Breakfast",
                  "Boutique Hotel",
                  "Bungalow",
                  "Caravan",
                  "Guesthouse",
                ].map((item) => (
                  <React.Fragment key={item}>
                    {" "}
                    <br /> <br />
                    <input
                      type="checkbox"
                      style={{ height: "16px", width: "16px" }}
                    />
                    <label style={{ fontSize: "15px", color: "black" }}>
                      {item}
                    </label>{" "}
                  </React.Fragment>
                ))}
              </div>
              <div style={{ marginLeft: "190px" }}>
                {[
                  "Villa",
                  "Hostel",
                  "Serviced Apartment",
                  "Bed and Breakfast",
                  "Boutique Hotel",
                  "Bungalow",
                  "Caravan",
                  "Guesthouse",
                ].map((item) => (
                  <React.Fragment key={item}>
                    <br /> <br />
                    <input
                      type="checkbox"
                      style={{ height: "16px", width: "16px" }}
                    />
                    <label style={{ fontSize: "15px", color: "black" }}>
                      {item}
                    </label>{" "}
                  </React.Fragment>
                ))}
                <br /> <br /> <hr />
                <h2>Price</h2>
                <input
                  type="checkbox"
                  style={{ height: "16px", width: "16px" }}
                />
                <label style={{ fontSize: "15px", color: "red" }}>
                  High To Low
                </label>
                <br /> <br />
                <input
                  type="checkbox"
                  style={{ height: "16px", width: "16px" }}
                />
                <label style={{ fontSize: "15px", color: "red" }}>
                  Low To High
                </label>
              </div>
            </div>
            <br />
            <hr />
            <div className={styles.editModalButtons}>
              <br />
              <button>Apply</button>
              <button
                onClick={() => setModalIsopen2(false)}
                style={{ padding: "9px", width: "25%", marginLeft: "15px" }}
              >
                Cancel
              </button>
            </div>
          </Modal>

          <div className={style.MapStyle}>
            <Box id="sortBox" className={styles.sortK}>
              <FormControl fullWidth sx={{ height: "100%" }}>
                <InputLabel
                  style={{ top: "-9px" }}
                  id="demo-simple-select-label"
                >
                  Sort By
                </InputLabel>
                <Select
                  sx={{ height: "100%" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sort By"
                  onChange={handleSort}
                >
                  <MenuItem value={"asc"}>Price (Low To High)</MenuItem>
                  <MenuItem value={"desc"}>Price (High To Low)</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <div style={{ overflow: "auto" }}>
              {Info2?.map((item, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={`locn${index + 1}`}
                  to={`./${item._id}/alor`}
                >
                  <div style={{ overflow: "auto" }}>
                    <div
                      style={{
                        jusfyspace: "evenly",
                        border: "3px solid whitesmoke",
                        width: "900px",
                        marginLeft: "40px",
                        marginTop: "10px",
                        boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.3)",
                        overflow: "auto",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <div>
                          <img
                            src={item.hotImg1}
                            alt=""
                            style={{ height: "300px", width: "300px" }}
                          />
                        </div>
                        <div style={{ marginLeft: "40px", textAlign: "left" }}>
                          <h4 style={{ color: "#999999", fontSize: "14px" }}>
                            Ref id #{item._id}
                          </h4>
                          <h2 style={{ fontsize: "24px", color: "#333333" }}>
                            {item.topTitle}
                          </h2>
                          <p
                            style={{ color: "#1E87F0", fontsize: "24px" }}
                            className={styles.underline1}
                          >
                            {item.state}, India
                          </p>

                          {/* ///////////////////////////////// */}

                          <div
                            style={{
                              width: "50%",
                              boxSizing: "border-box",
                              marginBottom: "20px",
                              display: "flex",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div style={{ padding: "7px 15px 8px 0px" }}>
                                <span
                                  style={{
                                    border: "1px solid #ddddde",
                                    color: "#666",
                                    padding: "3px",
                                  }}
                                >
                                  AC
                                </span>
                              </div>
                              <div style={{ padding: "7px 15px 8px 0px" }}>
                                <span
                                  style={{
                                    border: "1px solid #ddddde",
                                    color: "#666",
                                    padding: "3px",
                                  }}
                                >
                                  WARDROBE
                                </span>
                              </div>
                              <div style={{ padding: "7px 15px 8px 0px" }}>
                                <span
                                  style={{
                                    border: "1px solid #ddddde",
                                    color: "#666",
                                    padding: "3px",
                                  }}
                                >
                                  BALCONY
                                </span>
                              </div>
                              <div style={{ padding: "7px 15px 8px 0px" }}>
                                <span
                                  style={{
                                    border: "1px solid #ddddde",
                                    color: "#666",
                                    padding: "3px",
                                  }}
                                >
                                  TV
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* //////////////////////////////////// */}
                          <h2
                            style={{
                              color: "black",
                              fontsize: "24px",
                              fontFamily: "sans-serif",
                              padding: "3px",
                            }}
                          >
                            ₹{item.basePrice}.00
                            <a
                              href
                              style={{
                                fontSize: "14px",
                                color: "gray",
                                fontWeight: "lighter",
                                marginLeft: "4px",
                              }}
                            >
                              Per night
                            </a>
                          </h2>

                          <button
                            style={{
                              border: "1px solid #1E87F0",
                              backgroundColor: "white",
                            }}
                          >
                            ⚡
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ top: "0", position: "sticky" }}>
              <GoogleMap2 />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
