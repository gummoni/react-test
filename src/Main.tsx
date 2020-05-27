import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TaskList, { TaskItem } from "components/TaskList";

function Main() {
  const [selObj, setSelObj] = useState<TaskItem | null>();
  const [todo_text, setTodo_text] = useState<string>("");
  const [tasks, setTask] = useState<TaskItem[]>([]);

  function doInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo_text(e.target.value);
  }

  function doSelect(item: TaskItem) {
    setSelObj(item);
    setTodo_text(item.text);
  }

  function doToggleState(item: TaskItem) {
    item.done = (item.done) ? false : true;
    useState(tasks);
  }

  function doReset() {
    setTodo_text("");
    setSelObj(null);
  }

  function doAdd() {
    let data = tasks.slice();
    data.push({
      date: new Date(),
      text: todo_text,
      done: false,
    });
    setTask(data);
    doReset();
  }

  function doModify() {
    let data = tasks.slice();
    let info = data.find((item) => item.date === selObj?.date);
    if (!!info) {
      info.text = todo_text;
    }
    setTask(data);
    doReset();
  }

  function doDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const data = tasks.filter((item) => item.date !== selObj?.date);
    setTask(data);
  }

  function doClear() {
    setTask([]);
    doReset();
  }

  function doEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.charCode === 13) {
      doAdd();
    }
  }

  return (
    <main>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>TODO list</h2>
        <br />
        <br />
        <br />
        <InputGroup className="justify-content-md-center">
          <FormControl
            placeholder="task message"
            aria-label="task message"
            aria-describedby="basic-addon2"
            value={todo_text}
            onChange={doInputChange}
            onKeyPress={doEnter}
          />
          <InputGroup.Append>
            <Button type="submit" variant="primary" onClick={doAdd}>
              add
            </Button>
            <Button type="submit" variant="warning" onClick={doModify}>
              modify
            </Button>
            <Button type="submit" variant="danger" onClick={doDelete}>
              delete
            </Button>
            <Button type="submit" variant="outline-dark" onClick={doClear}>
              clear
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <br />
        <br />
        <br />
        <br />
        <Tabs defaultActiveKey="all" id="controlled-tab-example">
          <Tab eventKey="all" title="all">
            <TaskList
              taskitems={tasks}
              selectObj={selObj}
              doSelect={doSelect}
              doToggleState={doToggleState}
            />
          </Tab>
          <Tab eventKey="task" title="task">
            <TaskList
              taskitems={tasks.filter(item => !item.done)}
              selectObj={selObj}
              doSelect={doSelect}
              doToggleState={doToggleState}
            />
          </Tab>
          <Tab eventKey="done" title="done">
            <TaskList
              taskitems={tasks.filter(item => item.done)}
              selectObj={selObj}
              doSelect={doSelect}
              doToggleState={doToggleState}
            />
          </Tab>
        </Tabs>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </main>
  );
}

export default Main;
