import React from "react";
import { useGlobalContext } from "../../utils/context";
import TodoItems from "./TodoItems";
import Doing from "./Doing";
import Done from "./Done";
import styles from "./KanbanList.module.css";

const KanbanList = () => {
  const { list } = useGlobalContext();
  console.log(list);
  return (
    <div className={styles["kanban-grid"]}>
      {list[0].task.map((item) => {
        if (item.status === "todo") {
          return (
            <div className={styles.todo}>
              <TodoItems key={item.id} {...item} todoId />
            </div>
          );
        }
        if (item.status === "doing") {
          return (
            <div className={styles.doing}>
              <Doing key={item.id} {...item} id todoId />
            </div>
          );
        }
        if (item.status === "done") {
          return (
            <div className={styles.done}>
              return <Done key={item.id} {...item} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default KanbanList;
