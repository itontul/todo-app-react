import React, { useState } from 'react'
import styles from './NewTodo.module.css'
import uniqid from 'uniqid'
import Card from '../Layout/Card'
import { useGlobalContext } from '../utils/context'

const NewTodo = () => {
  const { addTodo } = useGlobalContext()

  const [addedTodo, setAddedTodo] = useState('')
  const [addedDate, setAddedDate] = useState('')
  const [importance, setImportance] = useState(false)

  const formHandler = (e) => {
    e.preventDefault()
    if (addedTodo.trim().length > 0 && addedDate) {
      const newTodo = {
        id: uniqid(),
        text: addedTodo,
        date: addedDate,
        completed: false,
        importance: importance,
        task: [],
      }
      console.log(newTodo)
      addTodo({ type: 'ADD', payload: newTodo })
      setAddedTodo('')
      setAddedDate('')
    } else return
  }

  return (
    <Card className={styles['form-container']}>
      <form className={styles.form} onSubmit={formHandler}>
        <div className={styles['todo-container']}>
          <input
            className={styles.input}
            type='text'
            id='todo'
            placeholder='New Todo'
            required
            autoFocus
            onChange={(e) => {
              setAddedTodo(e.target.value)
            }}
            value={addedTodo}
          />
        </div>
        <div className={styles['info-container']}>
          <label className={styles.label} htmlFor='deadline'>
            Deadline
          </label>
          <input
            className={`${styles['date-input']} ${styles.input}`}
            type='date'
            id='deadline'
            placeholder='Deadline'
            required
            onChange={(e) => {
              setAddedDate(e.target.value)
            }}
            value={addedDate}
          />
          <div className={styles.importance}>
            <label className={styles.label} htmlFor='importance'>
              Important
            </label>
            <input
              type='checkbox'
              value='yes'
              className={styles.checkbox}
              onChange={() => setImportance((prev) => !prev)}
            />
          </div>
        </div>
        <button className={styles.button} type='submit'>
          Add
        </button>
      </form>
    </Card>
  )
}

export default NewTodo
