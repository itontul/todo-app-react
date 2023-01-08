import React from "react";
import Card from "../Layout/Card";
import { useGlobalContext } from "../utils/context";
import styles from "./Stats.module.css";

const Stats = () => {
  const { list } = useGlobalContext();
  const totalItems = list.length;
  const completedItems = list.filter((item) => item.completed).length;
  const remainingTask = totalItems - completedItems;
  const completed = Math.floor((completedItems / totalItems) * 100, 2);

  const fillerStyles = {
    width: `${completed}%`,
  };

  if (totalItems === 0) return;

  if (remainingTask === 0) {
    return (
      <Card className={styles.stats}>
        <p>Yayy! You completed all of the tasks</p>
      </Card>
    );
  }

  return (
    <Card className={styles.stats}>
      <p>You have {remainingTask} active task</p>
      <p>
        You completed {completedItems} of {totalItems} tasks until now
      </p>
      <div className={styles.container}>
        <div style={fillerStyles} className={styles.filler}>
          <span className={styles.label}>{`${completed}%`}</span>
        </div>
      </div>
    </Card>
  );
};

export default Stats;
