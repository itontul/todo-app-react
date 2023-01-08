import React, { useState } from "react";
import styles from "./NewTodo.module.css";
import uniqid from "uniqid";
import Card from "../Layout/Card";
import { useGlobalContext } from "../utils/context";

const NewTodo = () => {
  const { addTodo } = useGlobalContext();

  const [addedTodo, setAddedTodo] = useState("");
  const [addedDate, setAddedDate] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    if (addedTodo.trim().length > 0 && addedDate) {
      const newTodo = {
        id: uniqid(),
        text: addedTodo,
        date: new Date(addedDate),
        completed: false,
      };
      addTodo({ type: "ADD", payload: newTodo });
      setAddedTodo("");
      setAddedDate("");
    } else return;
  };

  return (
    <Card className={styles["form-container"]}>
      <form className={styles.form} onSubmit={formHandler}>
        <label className={styles.label} htmlFor="todo">
          New Todo
        </label>
        <input
          className={styles.input}
          type="text"
          id="todo"
          required
          autoFocus
          onChange={(e) => {
            setAddedTodo(e.target.value);
          }}
          value={addedTodo}
        />
        <label className={styles.label} htmlFor="deadline">
          Deadline
        </label>
        <input
          className={styles.input}
          type="date"
          id="deadline"
          required
          onChange={(e) => {
            setAddedDate(e.target.value);
          }}
          value={addedDate}
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </Card>
  );
};

export default NewTodo;
