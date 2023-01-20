import React from "react";
import { useGlobalContext } from "../../utils/context";
import TaskItems from "./TaskItems";

import styles from "./KanbanList.module.css";

const KanbanList = () => {
  const { list } = useGlobalContext();
  const statusTodo = list[0].task.filter((i) => i.status === "todo") || [];
  const statusDoing = list[0].task.filter((i) => i.status === "doing");
  const statusDone = list[0].task.filter((i) => i.status === "done") || [];

  console.log(statusDoing);
  return (
    <div className={styles["kanban-grid"]}>
      <div className={`${styles.todo} ${styles.item}`}>
        <h2 className={styles["item-header"]}>I will do...</h2>
        {statusTodo.map((item) => {
          return (
            <>
              <TaskItems key={item.id} {...item} todoId />
            </>
          );
        })}
      </div>

      <div className={`${styles.doing} ${styles.item}`}>
        <h2 className={styles["item-header"]}>I am doing...</h2>
        {statusDoing.map((item) => {
          return (
            <>
              <TaskItems key={item.id} {...item} todoId />
            </>
          );
        })}
      </div>

      <div className={`${styles.done} ${styles.item}`}>
        <h2 className={styles["item-header"]}>Yayyy, it's done!</h2>
        {statusDone.map((item) => {
          return (
            <>
              <TaskItems key={item.id} {...item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanList;
