/* eslint-disable react/prop-types */
import "./Task.css";
import { useStore } from "../store";
import classNames from "classnames";

export function Task({ task }) {
  const deleteTask = useStore((store) => store.deleteTask);
  const setDragged = useStore((store) => store.setDragged);

  return (
    <div
      className={classNames("mainTask", task.state)}
      draggable
      onDragStart={() => setDragged(task.title)}
    >
      <div className="task">{task.title}</div>
      <small onClick={() => deleteTask(task.title)} className="delete">
        <i className="bi bi-trash"></i>
      </small>
    </div>
  );
}
