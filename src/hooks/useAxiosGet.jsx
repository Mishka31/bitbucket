// import { useState, useEffect } from 'react'
const axios = require('axios')

const HeroList = () => {
  //   const [state, setState] = useState('')

  //   useEffect(() => {
  //     if (!state) {
  const imgContainer = document.getElementById('imagesContainer')
  const imagesRequest = axios.get(
    'https://superherous.herokuapp.com/api/superheros/'
  )

  imagesRequest
    .then(({ data }) => {
      console.log(data.data.superheros)
      const imgElements = data.data.superheros
        .map(
          (item) => `<div>
          <h2>${item.nickname}</h2>
          <img src="https://superherous.herokuapp.com/${item.imageUrl}" width=180>
          </div>`
        )
        .join()
      imgContainer.insertAdjacentHTML('beforeEnd', imgElements)
    })
    .catch((error) => console.log(error.message))
  //     }
  //   }, [state])

  //   return [state, setState]
}

export default HeroList
