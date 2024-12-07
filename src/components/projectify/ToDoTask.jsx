import { useContext } from "react";
import { SortIcon } from "../../assets/icons/Icon";
import { TasksContext } from "../../context";
import TaskCard from "./TaskCard";

const ToDoTask = ({ onEditTask, onDelete }) => {
  const { state, dispatch } = useContext(TasksContext);
  const taskList = state.taskList.filter((t) => t.category == "todo");
  const handleSort = () => {
    dispatch({
      type: "SORT",
      payload: "todo",
    });
  };
  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-indigo-600 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              To-Do ({taskList.filter((t) => t.category == "todo").length})
            </h3>
            <a onClick={handleSort}>
              <SortIcon />
            </a>
          </div>
          <div>
            {taskList?.length ? (
              taskList?.map((t) => (
                <TaskCard
                  task={t}
                  key={t.id}
                  onEdit={onEditTask}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <p>Task List is empty!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoTask;
