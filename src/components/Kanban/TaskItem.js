import moment from 'moment'
import React, { useState } from 'react'
import { useGlobalContext } from '../../utils/context'
import styles from './TaskItem.module.css'
import { TbChecks, TbCheck, TbTrash } from 'react-icons/tb'

const TaskItems = ({ text, date, id, status }) => {
  const { editTaskHandler, deleteTaskHandler } = useGlobalContext()
  const { completedDate, setCompletedDate } = useState('')
  const editTask = () => {
    editTaskHandler(id)
    setCompletedDate(new Date())
  }

  return (
    <div className={styles.task}>
      <h4>{text}</h4>
      {status !== 'todo' && (
        <p>
          {status === 'doing' ? 'Started' : 'Finished'}:{' '}
          {moment(completedDate).format('DD MMM YYYY')}
        </p>
      )}
      <p>Deadline: {moment(date).format('DD MMM YYYY')}</p>
      <div className={styles.btns}>
        {status !== 'done' && (
          <button className={styles.btn} onClick={editTask}>
            {status === 'todo' ? <TbCheck /> : <TbChecks />}
          </button>
        )}
        <button onClick={() => deleteTaskHandler(id)} className={styles.btn}>
          <TbTrash />
        </button>
      </div>
    </div>
  )
}

export default TaskItems
