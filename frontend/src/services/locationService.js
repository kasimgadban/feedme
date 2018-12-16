// const API_KEY = 'AIzaSyCs3dFAQQdwpkPsFoTWeHxumSywRJm0YkY';
const API_KEY = 'AIzaSyDlfCngyGCBHwBOr5EO_Ej7_TfZN1_ekqI';
const axios = require('axios');

export default {
  getPositionByName,
  getPosition,
  getAddressFromLoc,
  getCurrAddress
};

function getPositionByName(cityName) {
  var params = axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${API_KEY}&language=en`,
          { withCredentials: false }
      );
  return params.then(res => {
      var location = res.data.results[0].geometry.location;
      location.address = res.data.results[0].formatted_address;
      return location;

  });
}


function getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  function getAddressFromLoc(loc) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${loc[0]},${loc[1]}&key=${API_KEY}&language=en`,
        {withCredentials: false}).then(res => {
        return res.data.results[0].formatted_address;
      })
      .catch(err => 'no location name access');
  }

  function getCurrAddress() {
  var currLoc = {};
  currLoc.type = 'Point';
  return getPosition().then(res => {
    currLoc.coordinates = [res.coords.latitude, res.coords.longitude];
    console.log(currLoc);
    return getAddressFromLoc(currLoc.coordinates).then(name => {
      currLoc.name = name;
      console.log(currLoc);
      return currLoc.name;
    });
  });
}
