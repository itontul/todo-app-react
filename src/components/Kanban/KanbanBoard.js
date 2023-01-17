import React from "react";
import AddTask from "./AddTask";
import styles from "./KanbanBoard.module.css";

const KanbanBoard = (props) => {
  return (
    <div className={styles.kanban}>
      <AddTask />
    </div>
  );
};

export default KanbanBoard;
