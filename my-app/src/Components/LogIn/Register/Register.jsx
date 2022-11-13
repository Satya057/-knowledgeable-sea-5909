import React, { useState } from "react";
import "../style.css";
import RegInfo from "./RegInfo";
import { useDispatch, useSelector } from "react-redux";

import { Link, Navigate } from "react-router-dom";
// import Loadingg from "../Loading/Loadingg";
const Register = () => {
  const obj1 = {
    name2: "",
    lastname: "",
    code: "",
    number2: "",
    email: "",
    password: "",
    confirmpassword: "",
    terms: false,
  };
  const [query, setQuery] = useState(obj1);

  const dispatch = useDispatch();

  const [done, notDone] = useState(false);
  const {
    name2,
    lastname,
    code2,
    number,
    email,
    password,
    confirmpassword,
    terms,
  } = query;
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let val = type === "checkbox" ? checked : value;
    setQuery({
      ...query,
      [name]: val,
    });
  };

  const handleRegister = () => {
    console.log(query.name2);
    if (
      query.name2 !== "" &&
      query.lastname !== "" &&
      query.code2 !== "" &&
      query.email !== "" &&
      query.password !== "" &&
      query.confirmpassword !== "" &&
      query.terms !== false
    ) {
      let payload = {
        name2: query.name2,
        lastname: query.lastname,
        code2: query.code2,
        number: query.number,
        email: query.email,
        password: query.password,
        confirmpassword: query.confirmpassword,
        terms: true,
      };

      setQuery(payload);
      console.log(payload);
      alert("Register successfully");
      notDone(true);
      
    } else {
      if (query.terms === false) {
        alert("Please Agree Terms and Conditions");
      } else if (query.name2 === "") {
        alert("Please Enter Your Name");
      } else if (query.lastname === "") {
        alert("Please Enter Your Last name");
      } else if (query.code2 === "") {
        alert("Please Enter Valid country code");
      } else if (query.email === "") {
        alert("Please Enter Your Email Address");
      } else if (query.password === "") {
        alert("Please Enter Your Password");
      } else if (query.password === "") {
        alert("Please Enter Your Password");
      } else if (query.confirmpassword === "") {
        alert(" Please Confirm-Password ");
      }
    }
  };

  return !done ? (
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
          <p className="nav-text">Already registered ? </p>
          <button className="nav-button-sign">
            <Link
              to="/new-login"
              style={{ textDecoration: "none", color: "white" }}
            >
              SIGN IN
            </Link>
          </button>
        </div>
        <br /> <br /> <br />
        <div style={{ display: "flex" }}>
          <div classname="disnav" style={{ marginTop: "-20px" }}>
            <RegInfo />
          </div>
          <div
            style={{
              border: "1px solid #DDDDDD",
              flex: "0.64",
              marginLeft: "30px",
              marginTop: "-30px",
            }}
          >
            <header className="header-navbar">
              Register & List your home. Its Free.
            </header>
            <div>
              <br />
              <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                value={name2}
                name="name2"
                className="register-input"
              />

              <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                value={lastname}
                name="lastname"
                className="register-input2"
              />
            </div>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #DDDDDD",
                padding: "10px",
              }}
            >
              <br /> <br />
              <p style={{ marginLeft: "5px" }}>Mobile With Country Code</p>
              <input
                type="text"
                placeholder="+91"
                onChange={handleChange}
                value={code2}
                name="code2"
                className="register-input3"
              />
              <input
                type="text"
                placeholder="123456781"
                onChange={handleChange}
                value={number}
                name="number"
                className="register-input4"
              />
            </div>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div>
              <div className="input-icons2">
                <i className="fa fa-envelope icon2"></i>
                <input
                  className="input-field2"
                  type="text"
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={email}
                  name="email"
                />
              </div>

              <div className="input-icons2">
                <i className="fa fa-lock icon icon2"></i>
                <input
                  className="input-field"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={password}
                  name="password"
                />
              </div>

              <div className="input-icons2">
                <i className="fa fa-lock icon icon2"></i>
                <input
                  className="input-field2"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={confirmpassword}
                  name="confirmpassword"
                />
              </div>
            </div>

            {/* <div>
              
              <input
                type="text"
                placeholder="Email Address"
                onChange={handleChange}
                value={email}
                name="email"
                className="register-input5"
              />

              <br />

              <input
                type="text"
                placeholder="Password"
                onChange={handleChange}
                value={password}
                name="password"
                className="register-input6"
              />
              <br />
              <input
                type="text"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={confirmpassword}
                name="confirmpassword"
                className="register-input7"
              />
            </div> */}

            {/* 
            ///////////////////////////////////////////////////////////////////////////////////// */}
            <br />
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #DDDDDD",
              }}
            >
              <input
                value={terms}
                name="terms"
                type="checkbox"
                onChange={handleChange}
                style={{
                  height: "20px",
                  width: "20px",
                  border: "1px solid yellow",
                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  marginTop: "-1px",
                  marginLeft: "10px",
                }}
              >
                I accept all
                <a href="https://www.tripvillas.com/"> terms & conditions</a>
              </p>
            </div>

            <div
              style={{
                borderBottom: "1px solid #DDDDDD",
                backgroundColor: "#F9F9F9",
                padding: "15px",
                textAlign: "right",
              }}
            >
              <button className="btn-register" onClick={handleRegister}>
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/new-login" />
  );
};

export { Register };
