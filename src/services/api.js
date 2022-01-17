const axios = require('axios')

export function getAllHeros() {
  return axios
    .get('https://superherous.herokuapp.com/api/superheros/')
    .then(({ data }) => data.data.superheros)
    .catch((error) => console.log(error.message))
}
export function getById(id) {
  return axios
    .get(`https://superherous.herokuapp.com/api/superheros/${id}`)
    .then(({ data }) => console.log(data))
    .catch((error) => console.log(error.message))
}
