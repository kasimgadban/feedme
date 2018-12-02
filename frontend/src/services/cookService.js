import Axios from "axios"
const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/cook/'
    : '//localhost:3000/cook/'



function query() {
    return Axios.get(`${BASE_URL}`)
        .then(res => res.data)
}
function remove(cookId) {
    return Axios.delete(`${BASE_URL}${cookId}`)
        .then(res => res.data)
}
function getById(cookId) {
    return Axios.get(`${BASE_URL}${cookId}`)
        .then(res => res.data)
}

// function filteredQuery(filter,sorter) {
//     console.log(sorter)

//     return Axios.get(`${BASE_URL}/cook?filter[type]=${filter.type}&filter[val]=${filter.val}&sorter[by]=${sorter.by}&sorter[order]=${sorter.order}`)
//         .then(res => res.data)
// }





export default {
    query,
    getById,
    remove,
    // update,
    // addNewcook
}