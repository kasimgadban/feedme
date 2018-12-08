// const API_KEY = 'AIzaSyCs3dFAQQdwpkPsFoTWeHxumSywRJm0YkY';
const API_KEY = 'AIzaSyDlfCngyGCBHwBOr5EO_Ej7_TfZN1_ekqI';
const axios = require('axios');

export default {
  getPositionByName,
};

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
