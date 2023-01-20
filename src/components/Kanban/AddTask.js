import React from 'react'
import styles from './AddTask.module.css'
import { useState } from 'react'
import uniqid from 'uniqid'
import { useGlobalContext } from '../../utils/context'
import { useParams } from 'react-router-dom'

const AddTask = () => {
  const { id } = useParams()
  const [addedTask, setAddedTask] = useState('')
  const [addedDate, setAddedDate] = useState('')
  const { addTaskHandler } = useGlobalContext()

  const formHandler = (e) => {
    e.preventDefault()
    if (addedTask.trim().length > 0 && addedDate) {
      const newTask = {
        id: uniqid(),
        text: addedTask,
        date: addedDate,
        status: 'todo',
      }
      addTaskHandler(id, newTask)
      setAddedTask('')
      setAddedDate('')
    } else return
  }

  return (
    <form onSubmit={formHandler} className={styles['task-container']}>
      <div className={styles['form-el']}>
        <input
          className={styles.input}
          type='text'
          id='task'
          placeholder='Add New Task'
          required
          autoFocus
          onChange={(e) => {
            setAddedTask(e.target.value)
          }}
          value={addedTask}
        />
      </div>
      <div className={styles['form-el']}>
        <label className={styles.label} htmlFor='deadline'>
          Deadline
        </label>
        <input
          className={`${styles['date-input']} ${styles.input}`}
          type='date'
          id='deadline'
          required
          onChange={(e) => {
            setAddedDate(e.target.value)
          }}
          value={addedDate}
        />
      </div>
      <button className={styles.button} type='submit'>
        Add
      </button>
    </form>
  )
}

export default AddTask
