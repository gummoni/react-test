import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
//import Badge from "react-bootstrap/Badge";

export type TaskItem = {
  date: Date;
  text: string;
  done: boolean;
};

type TaskItemProp = {
  selectObj: TaskItem | null | undefined;
  currentObj: TaskItem;
};
function TaskItem(prop: TaskItemProp) {
  //  if (sel === item) {
  return <input>{prop.currentObj.text}</input>;
  //return ("heko"); //prop.currentObj.text;
}

type TaskListProp = {
  taskitems: TaskItem[] | null | undefined;
  selectObj: TaskItem | null | undefined;
  doSelect(item: TaskItem): void;
  doToggleState(item: TaskItem): void;
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
            <td>
              <button onClick={() => prop.doToggleState(item)}>
                {item.done ? "-" : "v"}
              </button>
            </td>
            <td>
              {/* <TaskItem selectObj={prop.selectObj} currentObj={item} /> */}
              {item.text}
            </td>
            <td>
              <button>...</button>
            </td>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TaskList;
