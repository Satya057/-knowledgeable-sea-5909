import React, { useState } from "react";
import homeSearchStyles from "./HomeSearch.module.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPriceVariables } from "../../../Redux/Pricing_Final/action";
export const HomeSearch = () => {
  const [value, setValue] = useState([null, null]);
  const [guest, setGuest] = useState("");
  const [query2, setQuery2] = useState("");
  const dispatch = useDispatch();

  const payload = {
    location: query2,
    checkinDate: value[0],
    checkOutDate: value[1],
    noOfGuest: guest,
  };

  const handleGuest = (event) => {
    setGuest(event.target.value);
  };

  const handleSubmit = () => {
    const pricingAction = setPriceVariables(payload);
    dispatch(pricingAction);
  };

  return (
    <>
      <div className={homeSearchStyles.mainDiv}>
        <img
          src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg"
          alt="backGround"
        />
        <div className={homeSearchStyles.textDiv}>
          <h1 style={{ fontWeight: "bold", color: "white", textAlign: "left" }}>
            Book <span style={{ textDecoration: "line-through" }}>Hotels</span>{" "}
            Vacation Rentals <br /> Top Holiday Homes - Villas, Apartments &
            Homestays
          </h1>
          <div className={homeSearchStyles.searchWidget}>
            <div className={homeSearchStyles.inp_location}>
              <span className={homeSearchStyles.searchIcon}>
                <SearchIcon />
              </span>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
                onChange={(e) => setQuery2(e.target.value)}
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
            <Link to="search">
              <button
                className={homeSearchStyles.searchBtn}
                onClick={handleSubmit}
              >
                SEARCH
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
