import React, { useState } from "react";
import axios from "axios";
import qs from "qs";

// function saveJSON(data, filename) {
//   if (!data) {
//     alert("There is no saving data");
//     return;
//   }
//   if (!filename) filename = "json.json";
//   if (typeof data === "object") {
//     data = JSON.stringify(data, undefined, 4);
//   }
//   var blob = new Blob([data], { type: "text/json" }),
//     e = document.createEvent("MouseEvents"),
//     a = document.createElement("a");
//   a.download = filename;
//   a.href = window.URL.createObjectURL(blob);
//   a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
//   e.initMouseEvent(
//     "click",
//     true,
//     false,
//     window,
//     0,
//     0,
//     0,
//     0,
//     0,
//     false,
//     false,
//     false,
//     false,
//     0,
//     null
//   );
//   a.dispatchEvent(e);
// }
// function Submit_Data() {
//   var county = document.getElementById("county").value;
//   var date = document.getElementById("date").value;
//   var temp = document.getElementById("temp").value;
//   var hum = document.getElementById("hum").value;
//   var day30 = document.getElementById("day30").value;
//   var day60 = document.getElementById("day60").value;
//   var day90 = document.getElementById("day90").value;


//   const user_data = {
//     County: county,
//     datetime: date,
//     temp: temp,
//     humidity: hum,
//     "30-day avg prec": day30,
//     "60-day avg prec": day60,
//     "90-day avg prec": day90,
//   };
// }

function submit1() {
  console.log(666);
  var county = document.getElementById("county").value;
  var date = document.getElementById("date").value;
  var temp = document.getElementById("temp").value;
  var hum = document.getElementById("hum").value;
  var day30 = document.getElementById("day30").value;
  var day60 = document.getElementById("day60").value;
  var day90 = document.getElementById("day90").value;

  const user_data = {
    County: county,
    datetime: date,
    temp: temp,
    humidity: hum,
    "30-day avg prec": day30,
    "60-day avg prec": day60,
    "90-day avg prec": day90,
  };
  
  
  axios.post("/api/postWeather_Data", user_data).then((res) => {
    console.log(res.data);
    alert("success");
  });
 
}
const btn = document.getElementById("btn");
btn.addEventListener("click", submit1);
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  axios.get("/api/getWeather_Data").then((res) => {
    console.log(res.data);
    document.getElementById("res").innerText = JSON.stringify(res.data);
  });
});
const App = () => {};

export default App;
