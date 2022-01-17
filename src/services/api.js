const axios = require('axios')

export function getAllHeros() {
  return axios
    .get('https://superherous.herokuapp.com/api/superheros/')
    .then(({ data }) => data.data.superheros)
    .catch((error) => console.log(error.message))
}
