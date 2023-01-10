import moment from 'moment'
import React, { useState } from 'react'
import Card from '../Layout/Card'
import { useGlobalContext } from '../utils/context'
import styles from './Eisenhover.module.css'
import EisenhoverItem from './EisenhoverItem'

const Eisenhover = () => {
  const [show, setShow] = useState(false)
  const { list } = useGlobalContext()
  console.log(list)
  const doItems = []
  const decideItems = []
  const delegateItems = []
  const deleteItems = []

  list.map((item) => {
    const todoDate = moment(item.date)
    const now = moment()
    const difference = todoDate.diff(now, 'hours')
    if (item.importance && !item.completed && difference < 120) {
      doItems.push(item)
    }
    if (item.importance && !item.completed && difference >= 120) {
      decideItems.push(item)
    }
    if (!item.importance && !item.completed && difference < 120) {
      delegateItems.push(item)
    }
    if (!item.importance && !item.completed && difference >= 120) {
      deleteItems.push(item)
    }
    return item
  })

  return (
    <Card className={styles.eisenhover}>
      <h2>Eisenhover Matrix</h2>
      <p>Use this matrix to decide the priority </p>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Matrix' : 'Show Matrix'}
      </button>
      {show && (
        <div className={styles.matrix}>
          <div className={styles.do}>
            <h3>Do</h3>
            {doItems.length > 0 ? (
              doItems.map((item) => {
                return (
                  <EisenhoverItem key={item.id} {...item} category={'doItem'} />
                )
              })
            ) : (
              <p> No task found</p>
            )}
          </div>
          <div className={styles.decide}>
            <h3>Decide</h3>
            {decideItems.length > 0 ? (
              decideItems.map((item) => {
                return (
                  <EisenhoverItem
                    key={item.id}
                    {...item}
                    category={'decideItem'}
                  />
                )
              })
            ) : (
              <p> No task found</p>
            )}
          </div>
          <div className={styles.delegate}>
            <h3>Delegate</h3>
            {delegateItems.length > 0 ? (
              delegateItems.map((item) => {
                return (
                  <EisenhoverItem
                    key={item.id}
                    {...item}
                    category={'delegateItem'}
                  />
                )
              })
            ) : (
              <p> No task found</p>
            )}
          </div>
          <div className={styles.delete}>
            <h3>Delete</h3>
            {deleteItems.length > 0 ? (
              deleteItems.map((item) => {
                return (
                  <EisenhoverItem
                    key={item.id}
                    {...item}
                    category={'deleteItem'}
                  />
                )
              })
            ) : (
              <p> No task found</p>
            )}
          </div>
        </div>
      )}
    </Card>
  )
}

export default Eisenhover
