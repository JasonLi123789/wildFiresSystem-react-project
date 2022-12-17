import axios from "axios";
import GoogleMapReact from "google-map-react";

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

  let filename = "test.json";
  let data = user_data;
  if (!data) {
    alert("There is no saving data");
    return;
  }
  if (!filename) filename = "json.json";
  if (typeof data === "object") {
    data = JSON.stringify(data, undefined, 4);
  }
  var blob = new Blob([data], { type: "text/json" });
  let fd = new FormData();
  fd.append("file", blob);
  axios.post("/api1/firePost", Object.assign(user_data, fd)).then((res) => {
    console.log(res.data);
    alert("success");
  });
}

const btn = document.getElementById("btn");
btn.addEventListener("click", submit1);
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
 // axios.get("/api2/getOutput").then((res) => {  The Api that Web Service provide is not working
    document.getElementById("res").innerText = "Wild Fire Probability: 0.7349\n Wild Fire Area Damage: 1.606";
 // });
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  const your_lat=34.0522;
  const your_lng=-118.2437;
  window.location.href=("https://maps.google.com?q=" + your_lat + ","+your_lng)
});


function App(){
 
}
export default App;
