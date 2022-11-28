import React, {useState} from 'react';

// const json_data = JSON.stringify(user_data)

function saveJSON(data, filename){
  if(!data) {
      alert('There is no saving data');
      return;
  }
  if(!filename) 
      filename = 'json.json'
  if(typeof data === 'object'){
      data = JSON.stringify(data, undefined, 4)
  }
  var blob = new Blob([data], {type: 'text/json'}),
  e = document.createEvent('MouseEvents'),
  a = document.createElement('a')
  a.download = filename
  a.href = window.URL.createObjectURL(blob)
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  a.dispatchEvent(e)

}
function Submit_Data(){
  var county = document.getElementById('county').value;
  var date = document.getElementById('date').value;
  var temp = document.getElementById('temp').value;
  var hum = document.getElementById('hum').value;
  
  console.log(county);
  console.log(date);
  console.log(temp);
  console.log(hum);

  const user_data = {
    County: county,
    Date: date,
    Temp: temp,
    Hum: hum,
    Day_avg_prec_30: 0.0,
    Day_avg_prec_60: 0.0,
    Day_avg_prec_90: 0.0
}
saveJSON(user_data, 'test.json')
}

const form = document.getElementById('form');

form.addEventListener('submit', Submit_Data);

const App = () => {
    

 };

export default App;
