import axios from "axios"
const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/cook/'
    : '//localhost:3000/cook/'



function query() {
    return axios.get(`${BASE_URL}`)
        .then(res => res.data)
}
function remove(cookId) {
    return axios.delete(`${BASE_URL}${cookId}`)
        .then(res => res.data)
}
function getById(cookId) {
    return axios.get(`${BASE_URL}${cookId}`)
        .then(res => res.data)
}

function update(order) {
    return axios.put(`${BASE_URL}${order.cookId}`, order)
      .then(res => res.data)
      .catch(err => {
        console.warn(err);
        return Promise.reject(err);
      });
  }
  function getCookById(cookId) {
      return axios.get(`${BASE_URL}${cookId}`)
          .then(res => res.data)
  }
  
  function saveCook(cook) {
  
      if (cook._id) {
          console.log('I should take care of editing the cook',cook);
          
          return axios.put(`${BASE_URL}${cook._id}`, cook)
      } else {
          console.log('the url sen is',BASE_URL);
          console.log('the cook sent to the url above is',cook);
          
          return axios.post(`${BASE_URL}`, cook)
      }
  
  
  
      // if()
      // return axios.put(`${BASE_URL}${cook._id}`, cook)
      //   .then(res => res.data)
      //   .catch(err => {
      //     console.warn(err);
      //     return Promise.reject(err);
      //   });
    }




export default {
    query,
    getById,
    remove,
    update,
    getCookById,
    saveCook
    // addNewcook
}