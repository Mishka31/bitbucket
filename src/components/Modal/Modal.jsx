import { useState } from 'react'
import s from './Modal.module.css'
import { putHero } from '../../services/api'

export function Modal({ id, detArray, onModalClose }) {
  const [nickname, setNickname] = useState(detArray.nickname)
  const [real_name, setReal_name] = useState(detArray.real_name)
  const [origin_description, setOrigin_description] = useState(
    detArray.origin_description
  )
  const [superpowers, setSuperpowers] = useState(detArray.superpowers)
  const [catch_phrase, setCatch_phrase] = useState(detArray.catch_phrase)

  const hendkeSubmit = (e) => {
    const data1 = new FormData()
    data1.append('nickname', nickname)
    data1.append('real_name', real_name)
    data1.append('origin_description', origin_description)
    data1.append('superpowers', superpowers)
    data1.append('catch_phrase', catch_phrase)
    putHero(data1, id)
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
  return (
    <div className={s.Overlay} onClick={onModalClose}>
      {/* onClick={onModalClose} */}
      <div className={s.Modal}>
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
            />
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
              typeof="text"
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
              typeof="text"
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
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal
