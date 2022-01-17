import PropTypes from 'prop-types'
import s from './heroList.module.css'

function HeroList({ contacts, onDelete }) {
  return (
    <section className={s.section}>
      <ul>
        {/* {contacts.map((contact) => {
          return (
            <li key={contact.id} className={s.li}>
              <span className={s.name}>{contact.name}:</span>{' '}
              <a className={s.number} href="tel:{contact.number}">
                {contact.number}
              </a>
              <button className={s.button} id={contact.id} onClick={onDelete}>
                Delete
              </button>
            </li>
          )
        })} */}
      </ul>
    </section>
  )
}

export default HeroList

// HeroList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func,
// }
