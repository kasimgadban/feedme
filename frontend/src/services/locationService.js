// const API_KEY = 'AIzaSyCs3dFAQQdwpkPsFoTWeHxumSywRJm0YkY';
const API_KEY = 'AIzaSyDlfCngyGCBHwBOr5EO_Ej7_TfZN1_ekqI';
const axios = require('axios');

export default {
  getAddressFromLoc,
  getPosition,
  getPositionByName,
  getDistance,
  getAppLoc
};

function getAddressFromLoc(loc) {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${loc[0]},${
      loc[1]
      }&key=${API_KEY}`,
      {
        withCredentials: false
      }
    )
    .then(res => {
      return res.data.results[0].formatted_address;
    })
    // .catch(err => 'no location name access');
}

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function getPositionByName(cityName) {
  var params = axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${API_KEY}`,
          { withCredentials: false }
      );
  return params.then(res => {
      var location = res.data.results[0].geometry.location;
      location.address = res.data.results[0].formatted_address;
      return location;

  });
}

function getDistance(userLoc, diffLoc) {
  var R = 6371e3; // metres
  var φ1 = (userLoc[0] * Math.PI) / 180;
  var φ2 = (diffLoc[0] * Math.PI) / 180;
  var Δφ = ((diffLoc[0] - userLoc[0]) * Math.PI) / 180;
  var Δλ = ((diffLoc[1] - userLoc[1]) * Math.PI) / 180;
  var a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  return d / 1000;
}

function getAppLoc() {
  var currLoc = {};
  currLoc.type = 'Point';
  return getPosition().then(res => {
    currLoc.coordinates = [res.coords.latitude, res.coords.longitude];
    return getAddressFromLoc(currLoc.coordinates).then(name => {
      currLoc.name = name;
      return currLoc;
    });
  });
}