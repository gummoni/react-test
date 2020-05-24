import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export type TaskItem = {
  date: Date;
  text: string;
};

type TaskListProp = {
  taskitems: TaskItem[] | null | undefined;
  selectObj: TaskItem | null | undefined;
  doSelect(item: TaskItem): void;
};

function TaskList(prop: TaskListProp) {
  return (
    <ListGroup variant="flush">
      {prop.taskitems?.map((item) => {
        const key = item.date.toLocaleString();
        const selectionColor: any =
          prop.selectObj === item ? "primary" : "light";
        return (
          <ListGroup.Item
            key={key}
            onClick={() => prop.doSelect(item)}
            variant={selectionColor}
          >
            {item.text}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TaskList;
