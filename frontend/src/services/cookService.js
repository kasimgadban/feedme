import axios from "axios"
import storageService, { LOGGEDIN_USER_KEY } from './storageService'

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
  }

  function checkUser(user){

    console.log('user from axios ',user)
    var loggedUserLS = storageService.loadFromStorage(LOGGEDIN_USER_KEY)
    console.log('user from LS',loggedUserLS)
    
    if(loggedUserLS !== null && loggedUserLS.fullName === user.fullName &&
       loggedUserLS.password === user.password ) {
        console.log('I am equal');
        return Promise.resolve(loggedUserLS)
    }

    return axios.post(`${BASE_URL}`,user)
          .then(res => {
            console.log('res from axios line: 55',res.data);
            storageService.saveToStorage(LOGGEDIN_USER_KEY, res.data) 
            return res.data
        })

  }
  
function logout(){
    return axios.post(`${BASE_URL}/logout`)
  }
  function updateUser(user){
    storageService.saveToStorage(LOGGEDIN_USER_KEY,user)
  }

  function loadFromLocalStorage() {
    const userFromLS = storageService.loadFromStorage(LOGGEDIN_USER_KEY);
    return userFromLS ? userFromLS : null;
  }
  
export default {
    query,
    getById,
    remove,
    update,
    getCookById,
    saveCook,
    checkUser,
    loadFromLocalStorage,
    updateUser,
    logout
}