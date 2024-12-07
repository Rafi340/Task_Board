import { useContext, useState } from "react";
import { AddIcon } from "../../assets/icons/Icon";
import { TasksContext } from "../../context";
import DoneTask from "./DoneTask";
import ProgessTask from "./ProgessTask";
import RevisedTask from "./RevisedTask";
import TaskFormModal from "./TaskFormModal";
import ToDoTask from "./ToDoTask";

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useContext(TasksContext);
  const [editTask, setEditTask] = useState(null);
  const handleAdd = (e, value) => {
    e.stopPropagation();
    setEditTask(value);
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(!showModal);
  };
  const handleDelete = (task) => {
    dispatch({
      type: "REMOVE_FROM_TASK",
      payload: task,
    });
  };
  return (
    <>
      {showModal && (
        <TaskFormModal
          editTask={editTask}
          key={editTask ? editTask.id : "new"}
          onClose={handleClose}
        />
      )}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
            onClick={(e) => handleAdd(e, null)}
          >
            <AddIcon />
            Add
          </button>
        </div>
      </div>

      <div className="-mx-2 mb-6 flex flex-wrap">
        <ToDoTask onEditTask={handleAdd} onDelete={handleDelete} />

        <ProgessTask onEditTask={handleAdd} onDelete={handleDelete} />

        <DoneTask onEditTask={handleAdd} onDelete={handleDelete} />

        <RevisedTask onEditTask={handleAdd} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default Project;
