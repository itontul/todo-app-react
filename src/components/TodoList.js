import React, { useState } from "react";
import Card from "../Layout/Card";
import { useGlobalContext } from "../utils/context";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { list } = useGlobalContext();
  const [filter, setFilter] = useState(null);
  if (list.length === 0) return;

  let content;
  if (filter === null) {
    content = list;
  }
  if (filter === "active") {
    content = list.filter((item) => item.completed === false);
  }
  if (filter === "completed") {
    content = list.filter((item) => item.completed === true);
  }

  return (
    <>
      <Card className={styles["list-container"]}>
        <div className={styles["button-container"]}>
          <button onClick={() => setFilter(null)}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <div className={styles["todo-list"]}>
          {content.map((item) => {
            return <TodoItem key={item.id} {...item} />;
          })}
        </div>
      </Card>
    </>
  );
};

export default TodoList;
