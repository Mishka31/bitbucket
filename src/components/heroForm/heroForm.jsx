import { useState } from 'react'
import PropTypes from 'prop-types'
import s from './heroForm.module.css'
const axios = require('axios')

const HeroForm = ({ onSubmit, listArrey }) => {
  const [nickname, setNickname] = useState('')
  const [real_name, setReal_name] = useState('')
  const [origin_description, setOrigin_description] = useState('')
  const [superpowers, setSuperpowers] = useState('')
  const [catch_phrase, setCatch_phrase] = useState('')

  console.log(
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase
  )

  const hendkeSubmit = (e) => {
    e.preventDefault()
    // const nameFromArrey = listArrey.map((c) => c.name.toLowerCase())
    // if (nameFromArrey.includes(name.toLowerCase())) {
    //   reset()
    //   alert(`${name} is already in contacts`)
    //   return
    // }
    onSubmit({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
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
        className={s.imputAndButton}
        onSubmit={hendkeSubmit}
        autoComplete="off"
      >
        <label className={s.labelNickname}>
          <p className={s.name}>Nickname *</p>
          <input
            size="30"
            type="text"
            className={s.imput}
            onChange={handleChange}
            value={nickname}
            name="nickname"
            placeholder=" example: 'Spider-Man'"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add Image
        </button>
        <label>
          <p className={s.name}>Real name</p>
          <input
            size="30"
            type="text"
            className={s.imput}
            onChange={handleChange}
            value={real_name}
            name="real_name"
            required
          />
        </label>

        <label>
          <p className={s.name}>Origin description</p>
          <textarea
            className={s.textarea}
            name="origin_description"
            onChange={handleChange}
            value={origin_description}
            cols="40"
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
            cols="40"
            rows="2"
          ></textarea>
        </label>

        <label>
          <p className={s.name}>Catch phrase</p>
          <input
            size="30"
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
