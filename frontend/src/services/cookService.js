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
// function filteredQuery(filter,sorter) {

//     return Axios.get(`${BASE_URL}/cook?filter[type]=${filter.type}&filter[val]=${filter.val}&sorter[by]=${sorter.by}&sorter[order]=${sorter.order}`)
//         .then(res => res.data)
// }





export default {
    query,
    getById,
    remove,
    update,
    // addNewcook
}