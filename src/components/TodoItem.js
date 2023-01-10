import React, { useState } from 'react'
import styles from './TodoItem.module.css'
import { FaCheck, FaTimes, FaEdit, FaTrashAlt } from 'react-icons/fa'
import Card from '../Layout/Card'
import { useGlobalContext } from '../utils/context'
import moment from 'moment/moment'

const TodoItem = ({ completed, text, date, id }) => {
  const { completeTodo, removeTodo, editTodo } = useGlobalContext()
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(text)
  const [editedDate, setEditedDate] = useState(date)

  console.log(date.slice(0, 10))

  const todoDate = moment(date)
  const now = moment()
  const difference = todoDate.diff(now, 'hours')
  let content
  if (difference > 72) {
    content = (
      <p className={styles.diff}>{Math.floor(difference / 24)} days left</p>
    )
  } else {
    content = <p className={styles.diff}>{difference} hours left</p>
  }

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true)
    } else {
      if (editedText && editedDate) {
        const editedTodo = {
          text: editedText,
          date: editedDate,
        }
        editTodo(id, editedTodo)
        setIsEditing(false)
      }
    }
  }
  return (
    <Card
      className={
        completed
          ? `${styles['todo-item']} ${styles['completed']}`
          : `${styles['todo-item']}`
      }
    >
      <div className={styles['info-container']}>
        {isEditing ? (
          <form className={styles['edit-form']}>
            <input
              type='text'
              required
              className={styles.input}
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <input
              type='date'
              required
              className={styles.input}
              value={editedDate.slice(0, 10)}
              onChange={(e) => setEditedDate(e.target.value)}
            />
          </form>
        ) : (
          <>
            <p className={styles.title}>{text}</p>
            <p className={styles.date}>{moment(date).format('DD MMM YYYY')}</p>
            {content}
          </>
        )}
      </div>
      <div className={styles['button-container']}>
        {!isEditing && (
          <button
            onClick={() => {
              completeTodo(id)
            }}
          >
            {completed ? <FaTimes /> : <FaCheck />}
          </button>
        )}
        {!completed && (
          <button onClick={handleEdit}>
            {isEditing ? <FaCheck /> : <FaEdit />}
          </button>
        )}
        {!isEditing && (
          <button
            onClick={() => {
              removeTodo(id)
            }}
          >
            <FaTrashAlt />
          </button>
        )}
      </div>
    </Card>
  )
}

export default TodoItem
