import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import navStyles from "./NavBar.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutpage } from "../../Redux/LoginAuth/action";

export const NavBar = () => {
  const [state, setState] = React.useState({ right: false });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // >>>>>>>>>>>>>>>>>>>>>>>>

  const dispatch = useDispatch();
  const togg = useSelector((state) => state.login.email);

  const { isAuth, username } = useSelector((state) => state.login);

  console.log(username, togg, isAuth, "nil");

  const togg2 = () => {
    var nil = "";
    for (var i = 0; i < togg.length - 10; i++) {
      console.log(togg[i]);
      nil += togg[i];
    }
    return nil;
  };

  // >>>>>>>>>>>>>>>

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    dispatch(logoutpage());
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
        background: "red",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ background: "#262626", color: "white" }}>
        <div style={{ marginTop: "40px" }} className={navStyles.sideNav_head}>
          FOR PROPERTY MANAGERS/OWNERS
        </div>
        <div className={navStyles.sideNav_cap}>List New Property</div>
        <div className={navStyles.sideNav_cap}>Your Listing Dashboard</div>
      </List>
      <List style={{ background: "#262626", color: "white" }}>
        <div
          style={{
            width: "75%",
            height: "0.8px",
            backgroundColor: "#FFFFFF80",
            margin: "auto",
          }}
        ></div>
      </List>
      <List style={{ background: "#262626", color: "white" }}>
        <div className={navStyles.sideNav_head}>HOLIDAY HOMES FOR SALE</div>
        <div className={navStyles.sideNav_cap}>Tripvillas Managed</div>
        <div className={navStyles.sideNav_sm}>
          Homes from A grade developers. Rentals <br /> guaranteed{" "}
        </div>
        <div className={navStyles.sideNav_cap}>Marketplace</div>
        <div className={navStyles.sideNav_sm}>
          See what homes are up for sale from different property owners.
        </div>
      </List>
      <List style={{ background: "#262626", color: "white" }}>
        <div
          style={{
            width: "75%",
            height: "0.8px",
            backgroundColor: "#FFFFFF80",
            margin: "auto",
          }}
        ></div>
      </List>
      <List style={{ background: "#262626", color: "white" }}>
        <div className={navStyles.sideNav_cap}>About Us</div>
        <div className={navStyles.sideNav_cap}>Privacy Policy</div>
        <div className={navStyles.sideNav_cap}>Terms of Use</div>
        <div className={navStyles.sideNav_cap}>FAQs</div>
        <div className={navStyles.sideNav_cap}>Contact Us</div>
      </List>
      <List style={{ background: "#262626", color: "white" }}>
        <div
          style={{
            width: "75%",
            height: "0.8px",
            backgroundColor: "#FFFFFF80",
            margin: "auto",
          }}
        ></div>
      </List>
      <List style={{ background: "#262626", color: "white" }}>
        <div className={navStyles.sideNav_copyright}>© Tripvillas Pte Ltd</div>
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: "#262626" }} position="static">
          <Toolbar>
            <SwipeableDrawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
              onOpen={toggleDrawer("right", true)}
            >
              {list("right")}
            </SwipeableDrawer>
            <div style={{ height: "45px" }}>
              <Link to="/">
                <img
                  style={{ height: "100%" }}


                  alt="TripVillas"
                />
              </Link>
            </div>
            <div style={{height: '100%', flexGrow:'100'}}></div>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="inherit"
            >
              {isAuth ? (
                <div>
                  <a>{togg2()}</a>
                  <ArrowDropDownIcon />{" "}
                </div>
              ) : (
                <PersonOutlineIcon />
              )}
            </Button>
            <Menu
              sx={{ marginTop: "40px" }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link
                to="/new-login"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <MenuItem
                  sx={{ width: "150px", paddingLeft: "40px" }}
                  onClick={handleClose}
                >
                  SIGN IN
                </MenuItem>
              </Link>
              <MenuItem
                sx={{ width: "150px", paddingLeft: "40px" }}
                onClick={handleClose}
              >
                SIGN UP
              </MenuItem>
            </Menu>
            <Button style={{ marginLeft: "0.5%", marginRight:'0.5%' }} color="inherit">
              INR <ArrowDropDownIcon />{" "}
            </Button>
            <IconButton
              edge="start"
              sx={{ mr: 2, color: "white" }}
              onClick={toggleDrawer("right", true)}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
