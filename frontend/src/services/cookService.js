import axios from "axios"
import storageService, { LOGGEDIN_USER_KEY } from './storageService'

const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/api/cook/'
    : '//localhost:3000/api/cook/'

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

function update(cook) {
    return axios.put(`${BASE_URL}${cook.cookId}`, cook)
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
          return axios.put(`${BASE_URL}${cook._id}`, cook)
      } else {
          return axios.post(`${BASE_URL}signup`, cook)
          .then(res => {
             storageService.saveToStorage(LOGGEDIN_USER_KEY, res.data)
              return res.data
          })
      }
  }

  function checkUser(user){
    var loggedUserLS = storageService.loadFromStorage(LOGGEDIN_USER_KEY)
    if(loggedUserLS !== null && loggedUserLS.fullName === user.fullName &&
       loggedUserLS.password === user.password ) {
        return Promise.resolve(loggedUserLS)
    }

    return axios.post(`${BASE_URL}login`,user)
          .then(res => {
            storageService.saveToStorage(LOGGEDIN_USER_KEY, res.data) 
            return res.data
        })

  }
  
function logout(){
    return axios.post(`${BASE_URL}logout`).then(() => {
        storageService.clearStorage()
    })
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