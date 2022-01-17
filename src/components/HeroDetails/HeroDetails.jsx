import {
  Link,
  Route,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getById } from '../../services/api'
import s from './HeroDetails.module.css'

function HeroDetail(props) {
  const history = useHistory()
  const location = useLocation()
  const [detArray, setDetArray] = useState([])
  const { slug } = props.match.params
  const id = slug.match(/[a-z0-9]+$/)[0]

  //   const [searchQuery, setSearchQuery] = useState('')
  //   const { url, path } = useRouteMatch()
  //   console.log(url, path)

  useEffect(() => {
    getById(id)
      .then(setDetArray)
      .catch(({ message }) => alert(message))

    //   setSearchQuery(location.state.from.search)
  }, [])
  //   [location.state.from.search, id]

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/')
  }
  return (
    <>
      <button className={s.button} type="button" onClick={onGoBack}>
        ⬅ Go back
      </button>
      <div>
        <div className={s.container}>
          <div>
            {detArray.imageUrl && (
              <img
                src={'https://superherous.herokuapp.com/' + detArray.imageUrl}
                alt=""
              />
            )}
            <form className={s.formContainer} encType="multipart/form-data">
              <input id="file" className={s.inputfile} type="file" multiple />
              <label className={s.label} htmlFor="file">
                🧷 attach photo
              </label>
              <button className={s.buttonUpdate} type="submit">
                📤 Update
              </button>
            </form>
          </div>
          {detArray ? (
            <div className={s.about}>
              <h1>{detArray.nickname ?? detArray.real_name}</h1>
              <h2>Real name</h2>
              <p>{detArray.real_name}</p>
              <h2>Origin description</h2>
              <p>{detArray.origin_description}</p>
              <h2>Superpowers</h2>
              <p>{detArray.superpowers}</p>
              <h2>Catch phrase</h2>
              <p>{detArray.catch_phrase}</p>
            </div>
          ) : (
            <p className={s.about}>
              "The resource you requested could not be found"
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default HeroDetail
