import React, { useRef, useState } from "react";
import styles from "./TodoItem.module.css";
import { FaCheck, FaTimes, FaEdit, FaTrashAlt } from "react-icons/fa";
import Card from "../Layout/Card";
import { useGlobalContext } from "../utils/context";
import moment from "moment/moment";

const TodoItem = ({ completed, text, date, id }) => {
  const { completeTodo, removeTodo, editTodo } = useGlobalContext();
  const [isEditing, setIsEditing] = useState(false);
  const textRef = useRef(null);
  const dateRef = useRef(null);

  const todoDate = moment(date);
  const now = moment();
  const difference = todoDate.diff(now, "hours");
  let content;
  if (difference > 72) {
    content = (
      <p className={styles.diff}>
        You have {Math.floor(difference / 24)} days to complete the task
      </p>
    );
  } else {
    content = (
      <p className={styles.diff}>
        You have {difference} hours to complete the task
      </p>
    );
  }

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      if (textRef.current.value && dateRef.current.value) {
        const editedTodo = {
          text: textRef.current.value,
          date: new Date(dateRef.current.value),
        };
        editTodo(id, editedTodo);
        setIsEditing(false);
      }
    }
  };
  return (
    <Card
      className={
        completed
          ? `${styles["todo-item"]} ${styles["completed"]}`
          : `${styles["todo-item"]}`
      }
    >
      <div className={styles["info-container"]}>
        {isEditing ? (
          <>
            <input type="text" value={text} required ref={textRef} />
            <input type="date" ref={dateRef} required />
          </>
        ) : (
          <>
            <p className={styles.title}>{text}</p>
            <p className={styles.date}>{moment(date).format("L")}</p>
            {content}
          </>
        )}
      </div>
      <div className={styles["button-container"]}>
        {!isEditing && (
          <button
            onClick={() => {
              completeTodo(id);
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
              removeTodo(id);
            }}
          >
            <FaTrashAlt />
          </button>
        )}
      </div>
    </Card>
  );
};

export default TodoItem;
