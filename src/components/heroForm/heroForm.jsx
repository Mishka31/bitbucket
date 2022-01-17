import { useState } from 'react'
import PropTypes from 'prop-types'
import s from './heroForm.module.css'
const axios = require('axios')

const HeroForm = () => {
  const [nickname, setNickname] = useState('')
  const [real_name, setReal_name] = useState('')
  const [origin_description, setOrigin_description] = useState('')
  const [superpowers, setSuperpowers] = useState('')
  const [catch_phrase, setCatch_phrase] = useState('')

  const hendkeSubmit = (e) => {
    e.preventDefault()
    const file = e.target.file.files[0]
    const data = new FormData()
    data.append('file', file)
    data.append('nickname', nickname)
    data.append('real_name', real_name)
    data.append('origin_description', origin_description)
    data.append('superpowers', superpowers)
    data.append('catch_phrase', catch_phrase)

    axios
      .post('https://superherous.herokuapp.com/api/superheros/', data, {
        headers: {
          'content-type': 'multipart/form-data', // do not forget this
        },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.message)
      })

    reset()
  }

  const handleChange = (event) => {
    const { name: inputName, value } = event.target

    if (inputName === 'nickname') {
      setNickname(value)
    } else if (inputName === 'real_name') {
      setReal_name(value)
    } else if (inputName === 'origin_description') {
      setOrigin_description(value)
    } else if (inputName === 'superpowers') {
      setSuperpowers(value)
    } else if (inputName === 'catch_phrase') {
      setCatch_phrase(value)
    }
  }

  const reset = () => {
    setNickname('')
    setReal_name('')
    setOrigin_description('')
    setSuperpowers('')
    setCatch_phrase('')
  }
  return (
    <div className={s.container}>
      <form
        id="form"
        className={s.imputAndButton}
        onSubmit={hendkeSubmit}
        autoComplete="off"
        encType="multipart/form-data"
      >
        <p className={s.name}>Nickname *</p>
        <label className={s.labelNickname}>
          <input
            size="36"
            type="text"
            className={s.imput}
            onChange={handleChange}
            value={nickname}
            name="nickname"
            placeholder=" required"
            required
          />
          <input className={s.dataInput} name="file" type="file" id="file" />
        </label>
        <label>
          <p className={s.name}>Real name</p>
          <input
            size="36"
            type="text"
            className={s.imput}
            onChange={handleChange}
            value={real_name}
            name="real_name"
          />
        </label>

        <label>
          <p className={s.name}>Origin description</p>
          <textarea
            className={s.textarea}
            name="origin_description"
            onChange={handleChange}
            value={origin_description}
            cols="36"
            rows="3"
          ></textarea>
        </label>

        <label>
          <p className={s.name}>Superpowers</p>
          <textarea
            className={s.textarea}
            name="superpowers"
            onChange={handleChange}
            value={superpowers}
            cols="36"
            rows="2"
          ></textarea>
        </label>

        <label>
          <p className={s.name}>Catch phrase</p>
          <input
            size="36"
            type="text"
            className={s.imput}
            name="catch_phrase"
            onChange={handleChange}
            value={catch_phrase}
          ></input>
        </label>

        <button className={s.button} type="submit">
          Add Superhero
        </button>
      </form>
    </div>
  )
}

export default HeroForm

HeroForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
}
