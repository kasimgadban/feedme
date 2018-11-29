// import StorageService from '@/services/StorageService.js';
// import utilService from './utilService.js'
// const USERS_KEY = 'users';

// var usersDB = [] ;

// export default {
//     query
// }


// function query() {
//     var users = storageService.load(USERS_KEY);
//     if (!users) {
//         users = generateUsers();
//         storageService.store(USERS_KEY, users)
//     }
//     usersDB = users;
//     return usersDB;
// }


// function generateUsers() {
//     var users = []
//     for (let index = 0; index < 20; index++) {
//         var user = createUser()
//         users.push(user)

//     }
//     return users;
// }


// function createUser() {
//     var user = {
//         id: utilService.makeId(),
//         username: 'kasim',
//         password: '',
//         userimg: '',
//         address: '',
//         images: [],
//         food: [
//             {
//                 name: '',
//                 desc: ''
//             }
//         ],
//         reviews: [{
//             username: '',
//             content: ''
//         }],
//         dates: []
//     }
//     return user;
// }


import axios from 'axios'
const BASE_URL = process.env.NODE_ENV !== 'development'
    ? ''
    : '//localhost:3000'

function login(userName){
    return axios.put(`${BASE_URL}/login`,{
        userName
    })
    .then(res => res.data)
}

export default {
    login
}


