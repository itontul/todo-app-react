import moment from 'moment'
import React from 'react'
import styles from './EisenhoverItem.module.css'

const EisenhoverItem = ({ text, date, category }) => {
  const todoDate = moment(date)
  const now = moment()
  const difference = todoDate.diff(now, 'hours')
  let content
  if (difference > 72) {
    content = <p>{Math.floor(difference / 24)} days left</p>
  } else {
    content = <p>{difference} hours left</p>
  }

  return (
    <div className={styles.card}>
      <strong>{text}</strong>
      {content}
    </div>
  )
}

export default EisenhoverItem
