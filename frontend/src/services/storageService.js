export const LOGGEDIN_USER_KEY = 'loggedInUser'
export const USER_MSGS = 'userMsgs'

function loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
  localStorage[key] = JSON.stringify(val);
}

function clearStorage() {
  localStorage.removeItem(LOGGEDIN_USER_KEY);
}

// function removeFromStorage(key,val){

// }

export default {
  loadFromStorage,
  saveToStorage,
  clearStorage
};
