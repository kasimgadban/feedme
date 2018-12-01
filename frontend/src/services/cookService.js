import utilService from './utilService.js'

var cooks = [
    {
        id: utilService.makeId(),
        username: 'tot',
        password: '123',
        firstName: 'Tamara',
        lastName: 'Ali',
        userImage: 'https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/04/avatar-hf545-h_2016.jpg',
        // age: 25,
        // phone: '0528172685',
        address: {
            district: 'north',
            city: 'Kawkab',
        },
        foodCategory: '',
        food: [
            {
                name: 'sawsan',
                description: 'sawsan well done ',
            }
        ],
        prevDesc:'Join me in my house for a hot meal and fun company',
        about: 'my kabab is the top',
        reviews:[
            {
                name: 'kasim',
                content:'ugly',
                rating: 0
            }
        ],
        dates: ['30/11/18' , '7/12/18'],
        foodImages: [],
        price: 99,
        ratingAvg : 5

    },
    {
        id: utilService.makeId(),
        username: 'tot',
        password: '123',
        firstName: 'Tamara',
        lastName: 'Ali',
        userImage: '',
        // age: 25,
        // phone: '0528172685',
        address: {
            district: 'north',
            city: 'Kawkab',
        },
        food: [
            {
                name: 'kabab',
                description: 'kabab is good',
            }
        ],
        prevDesc:'Join me in my house for a hot meal and fun company',

        about: 'my kabab is the top',
        reviews:[
            {
                name: 'kasim',
                content:'ugly',
                rating:0
            }
        ],
        dates: ['30/11/18' , '7/12/18'],
        foodImages: [],
        price: '',
        ratingAvg : 5

    },
    {
        id: utilService.makeId(),
        username: 'tot',
        password: '123',
        firstName: 'Tamara',
        lastName: 'Ali',
        userImage: '',
        // age: 25,
        // phone: '0528172685',
        address: {
            district: 'north',
            city: 'Kawkaba',
        },
        food: [
            {
                name: 'kabab',
                description: 'kabab is good',
            }
        ],
        prevDesc:'Join me in my house for a hot meal and fun company',

        about: 'my kabab is the top',
        reviews:[
            {
                name: 'kasim',
                content:'ugly',
                rating: 5
            }
        ],
        dates: ['30/11/18' , '7/12/18'],
        foodImages: [],
        price: '',
        ratingAvg : 5
    },
    {
        id: utilService.makeId(),
        username: 'saw',
        password: '124',
        firstName: 'Sawsan',
        lastName: 'Elhade',
        userImage: '',
        // age: 25,
        // phone: '0528172685',
        address: {
            district: 'north',
            city: 'Haifa',
        },
        food: [
            {
                name: 'Taboli',
                description: 'Taboli is good',
            }
        ],
        prevDesc:'Come eat at my house',

        about: 'my Taboli is the top',
        reviews:[
            {
                name: 'kasim',
                content:'ugly',
                rating: 5
            }
        ],
        dates: ['30/11/18' , '7/12/18'],
        foodImages: [],
        price: '',
        ratingAvg : 5
    },
    {
        id: utilService.makeId(),
        username: 'saw',
        password: '124',
        firstName: 'Sawsan',
        lastName: 'Elhade',
        userImage: '',
        // age: 25,
        // phone: '0528172685',
        address: {
            district: 'north',
            city: 'Haifa',
        },
        food: [
            {
                name: 'Taboli',
                description: 'Taboli is good',
            }
        ],
        prevDesc:'Come eat at my house',

        about: 'my Taboli is the top',
        reviews:[
            {
                name: 'kasim',
                content:'ugly',
                rating: 5
            }
        ],
        dates: ['30/11/18' , '7/12/18'],
        foodImages: [],
        price: '',
        ratingAvg : 5
    },
    {
        id: utilService.makeId(),
        username: 'saw',
        password: '124',
        firstName: 'Sawsan',
        lastName: 'Elhade',
        userImage: '',
        // age: 25,
        // phone: '0528172685',
        address: {
            district: 'north',
            city: 'Haifa',
        },
        food: [
            {
                name: 'Taboli',
                description: 'Taboli is good',
            }
        ],
        prevDesc:'Come eat at my house',

        about: 'my Taboli is the top',
        reviews:[
            {
                name: 'kasim',
                content:'ugly',
                rating: 5
            }
        ],
        dates: ['30/11/18' , '7/12/18'],
        foodImages: [],
        price: '',
        ratingAvg : 5
    },
]




function query() {
    return Promise.resolve(cooks)
}

function addNewcook(newcook) {
    cooks.push(newcook)
    // console.log(cooks);
    return Promise.resolve(newcook)
}

function remove(id) {
    const cookIdx = cooks.findIndex(cook => cook.id === id)
    cooks.splice(cookIdx, 1)
    return Promise.resolve(cookIdx)
}

function update(cook) {
    const cookIdx = cooks.findIndex(currcook => currcook.id === cook.id)
    cook.splice(cookIdx, 1, cook)
    return Promise.resolve(cookIdx)
}


function getById(cookId){
    const cook = cooks.find(cook => {
       return cook.id === cookId})
    return Promise.resolve(cook)
}





export default {
    query,
    getById,
    remove,
    update,
    addNewcook
}