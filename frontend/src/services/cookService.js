import utilService from './utilService.js'

var cooks = [
    {
        id: utilService.makeId(),
        username: 'tot',
        password: '123',
        firstName: 'tamara',
        lastName: 'ali',
        userImage: '',
        age: 25,
        phone: '0528172685',
        address: {
            district: 'north',
            city: 'kawkab abu alhiga',
        },
        food: [
            {
                name: 'kabab',
                description: 'kabab is good',
            }
        ],
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
    },
    {
        id: utilService.makeId(),
        username: 'tot',
        password: '123',
        firstName: 'tamara',
        lastName: 'ali',
        userImage: '',
        age: 25,
        phone: '0528172685',
        address: {
            district: 'north',
            city: 'kawkab abu alhiga',
        },
        food: [
            {
                name: 'kabab',
                description: 'kabab is good',
            }
        ],
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
    },
    {
        id: utilService.makeId(),
        username: 'tot',
        password: '123',
        firstName: 'tamara',
        lastName: 'ali',
        userImage: '',
        age: 25,
        phone: '0528172685',
        address: {
            district: 'north',
            city: 'kawkab abu alhiga',
        },
        food: [
            {
                name: 'kabab',
                description: 'kabab is good',
            }
        ],
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
    },
]




function query() {
    return Promise.resolve(cooks)
}

function addNewcook(newcook) {
    cooks.push(newcook)
    console.log(cooks);
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