import React, {useState} from 'react';

// const json_data = JSON.stringify(user_data)

function saveJSON(data, filename){
  if(!data) {
      alert('保存的数据为空');
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
  var city = document.getElementById('city').value;
  var date = document.getElementById('date').value;
  var temp = document.getElementById('temp').value;
  var hum = document.getElementById('hum').value;
  console.log(city);
  console.log(date);
  console.log(temp);
  console.log(hum);

  const user_data = {
    City: city,
    Date: date,
    Temp: temp,
    Hum: hum
}
saveJSON(user_data, 'test.json')
}

const form = document.getElementById('form');

form.addEventListener('submit', Submit_Data);

const App = () => {
    

 };

export default App;
