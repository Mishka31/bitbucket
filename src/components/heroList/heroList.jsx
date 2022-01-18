import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHeros, deleteHeroes } from '../../services/api'
import slugify from 'slugify'
import s from './heroList.module.css'

function HeroList() {
  const [superheros, setSuperheros] = useState([])

  getAllHeros().then(
    (res) => {
      if (res.length !== superheros.length) {
        setSuperheros(res)
      }
    },
    [superheros]
  )

  const onDelete = (e) => {
    deleteHeroes(e.target.id)
    getAllHeros().then((res) => setSuperheros(res))
  }
  return (
    <section>
      <h2 className={s.titleH2}>List of Superheros</h2>
      <ul className={s.ul}>
        {superheros.map((hero) => {
          return (
            <li key={hero._id} className={s.li}>
              <Link
                className={s.Link}
                to={{
                  pathname: `home/${slugify(
                    `${hero.nickname ?? hero.origin_description} ${hero._id}`,
                    {
                      lower: true,
                    }
                  )}`,
                  //   state: { from: location },
                }}
              >
                <div className={s.nameAndImg}>
                  <h4 className={s.name}>{hero.nickname}</h4>{' '}
                  <img
                    src={'https://superherous.herokuapp.com/' + hero.imageUrl}
                    alt={hero.nickname}
                    className={s.img}
                  />
                </div>
              </Link>
              <button className={s.button} id={hero._id} onClick={onDelete}>
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default HeroList
