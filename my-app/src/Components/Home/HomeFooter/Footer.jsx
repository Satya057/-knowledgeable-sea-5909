import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import style from "./Footer.module.css";
import Data from "./data.json";
export default function Footer(){
  const [data] = useState(Data);
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.log(val);
    setValue(val);
  };
  return (
    <div className={style.footer_container} style={{ marginTop: "90px" }}>
      <h2 style={{ textAlign: "left" }}>Holiday Homes Across The Globe</h2>
      <br />
      <Tabs value={value} onChange={handleTabs} className={style.footer_tab}>
        <Tab label="ASIA" />
        <Tab label="EUROPE" />
        <Tab label="NORTH AMERICA" />
        <Tab label="SOUTH AMERICA" />
        <Tab label="AFRICA" />
        <Tab label="OCEANIA" />
      </Tabs>
      <hr />
      <br />
      <TabelPanel value={value} index={0}>
        {data.asia.map((item,i) => {
          return (
            <div className={style.display} key={i}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={1}>
        {data.europe.map((item,i) => {
          return (
            <div className={style.display} key={i}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={2}>
        {data.northamerica.map((item,i) => {
          return (
            <div className={style.display} key={i}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={3}>
        {data.southamerica.map((item,i) => {
          return (
            <div className={style.display} key={i}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={4}>
        {data.africa.map((item,i) => {
          return (
            <div className={style.display} key={i}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <TabelPanel value={value} index={5}>
        {data.oceania.map((item,i) => {
          return (
            <div className={style.display} key={i}>
              <div className={style.footer_list}>
                <div style={{ marginBottom: 10 }}>
                  
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  
                </div>
              </div>
            </div>
          );
        })}
      </TabelPanel>
      <br /> <br />
    </div>
  );
};

function TabelPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <p>{children}</p>}</div>;
}
