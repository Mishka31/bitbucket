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
    .then(({ data }) => data.data.result)
    .catch((error) => console.log(error.message))
}
export function postHeroes(data) {
  return axios.post('https://superherous.herokuapp.com/api/superheros/', data, {
    headers: {
      'content-type': 'multipart/form-data', // do not forget this
    },
  })
}
export function putHero(data, id) {
  return axios.put(
    `https://superherous.herokuapp.com/api/superheros/${id}`,
    data,
    {
      headers: {
        'content-type': 'multipart/form-data', // do not forget this
      },
    }
  )
}
export function deleteHeroes(id) {
  return axios.delete(`https://superherous.herokuapp.com/api/superheros/${id}`)
}
