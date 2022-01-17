import { useLocation, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getById, deleteHeroes } from '../../services/api'
import s from './HeroDetails.module.css'

function HeroDetail(props) {
  const history = useHistory()
  const location = useLocation()
  const [detArray, setDetArray] = useState([])
  const { slug } = props.match.params
  const id = slug.match(/[a-z0-9]+$/)[0]

  useEffect(() => {
    getById(id)
      .then(setDetArray)
      .catch(({ message }) => alert(message))
  }, [id])

  const onDelete = () => {
    deleteHeroes(id).catch(({ message }) => alert(message))
    history.push(location?.state?.from ?? '/')
  }
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
                className={s.image}
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
            <button className={s.buttonDelete} type="button" onClick={onDelete}>
              🧺 Detele SHero
            </button>
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
