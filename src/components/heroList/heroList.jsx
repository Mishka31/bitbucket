import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllHeros } from '../../services/api'
import slugify from 'slugify'
import s from './heroList.module.css'

function HeroList(props) {
  const [superheros, setSuperheros] = useState([])

  useEffect(() => {
    getAllHeros().then((res) => setSuperheros(res))
  }, [])
  console.log(slugify)
  return (
    <section>
      <h2 className={s.titleH2}>List of Superheros</h2>
      <ul className={s.ul}>
        {superheros.map((hero) => {
          return (
            <li key={hero._id} className={s.li}>
              <Link
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
              <button className={s.button} id={hero._id}>
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
