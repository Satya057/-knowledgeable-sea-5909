import React, { useState } from "react";
import "./style.css";
import RegInfo from "./Register/RegInfo";
import { useDispatch, useSelector } from "react-redux";
import { loginruser } from "../../Redux/LoginAuth/action";
import { Link, Navigate} from "react-router-dom";
import Loadingg from "../Loading/Loadingg";
export default function LogIn(){
  const obj2 = {
    loginemail: "",
    loginpassword: "",
    stay: false,
  };
  const [query, setquery] = useState(obj2);

  const dispatch = useDispatch();

  const [done, notDone] = useState(false);
  const { stay, loginpassword, loginemail } = query;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let val = type === "checkbox" ? checked : value;
    setquery({
      ...query,
      [name]: val,
    });
  };
  const togg = useSelector((state) => state.login.isAuth);

  console.log(togg);
  const isLoading = useSelector((state) => state.login.isloading);
  const handleRegister = () => {
    if (query.loginemail !== "" && query.loginpassword !== "") {
      let payload = {
        email: query.loginemail,
        password: query.loginpassword,
        stay: query.stay,
      };
      setquery(payload);
      dispatch(loginruser(payload));
    } else {
      if (query.loginemail === "") {
        alert("Please Enter Email");
      } else if (query.loginpassword === "") {
        alert("Please Enter Password");
      }
    }
  };

  console.log(done, "abhi");
  if (isLoading) return <Loadingg />;
  return !togg ? (
    <div>
      <div>
        <div className="navbar">
          <br /> <br />
          <Link to="/">
            <img
              src="https://i.postimg.cc/L8GF6bv9/PROJECTLOGO.jpg"
              alt=""
              className="img-register"
            />
          </Link>
          <p className="nav-text">Own/Manage a holiday home? </p>
          <button className="nav-button-sign">
            <Link
              to="/new-register"
              style={{ textDecoration: "none", color: "white" }}
            >
              REGISTER HERE
            </Link>
          </button>
        </div>
        <br /> <br /> <br />
        {/* /////////////////////////////////////////mililil */}
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "-20px" }}>
            <RegInfo />
            
          </div>
          <div
            style={{
              border: "1px solid #DDDDDD",
              marginTop: "-20px",
              width: "26%",
              marginLeft: "30px",
              height: "440px",
            }}
          >
            <header className="header-navbar">Sign In</header>

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="input-icons">
              <br />
              <label
                style={{
                  marginRight: "330px",
                }}
              >
                E-mail
              </label>
              <br />
              <i className="fa fa-user icon"></i>
              <input
                type="text"
                className="input-field"
                placeholder=" nil123@gmail.com"
                value={loginemail}
                name="loginemail"
                onChange={handleChange}
              />
              <br /> <br />
              <label
                style={{
                  marginRight: "300px",
                }}
              >
                Password
              </label>
              <br />
              <i className="fa fa-lock icon"></i>
              <input
                className="input-field"
                type="password"
                placeholder="xxxxxx"
                onChange={handleChange}
                value={loginpassword}
                name="loginpassword"
              />
              {/* <input
                type="text"
                placeholder="Email Address"
                onChange={handleChange}
                value={loginemail}
                name="loginemail"
                className="register-input5"
              /> */}
              {/* <br /> <br />
              <label className="inputname" style={{ marginLeft: "19px" }}>
                Password
              </label>
              <input
                type="text"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={loginpassword}
                name="loginpassword"
                className="register-input7"
              /> */}
              <p></p>
              <a href style={{ marginRight: "270px" }}>
                Forgot Password
              </a>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #DDDDDD",
              }}
            >
              <input
                value={stay}
                name="stay"
                type="checkbox"
                onChange={handleChange}
                style={{
                  height: "20px",
                  width: "20px",
                  border: "1px solid yellow",
                  marginLeft: "20px",
                  otline: "none",
                }}
              />
              <p
                style={{
                  marginTop: "-1px",
                  marginLeft: "10px",
                }}
              >
                Stay signed in
              </p>
            </div>

            <div
              style={{
                borderBottom: "1px solid #DDDDDD",
                backgroundColor: "#F9F9F9",
                padding: "24px",
                textAlign: "right",
              }}
            >
              <button className="btnregister2" onClick={handleRegister}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

