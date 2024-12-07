import { useContext } from "react";
import { SortIcon } from "../../assets/icons/Icon";
import { TasksContext } from "../../context";
import TaskCard from "./TaskCard";

const ProgessTask = ({ onEditTask, onDelete }) => {
  const { state, dispatch } = useContext(TasksContext);
  const taskList = state.taskList.filter((t) => t.category == "inprogress");
  const handleSort = () => {
    console.log("===");
    dispatch({
      type: "SORT",
      payload: "inprogress",
    });
  };
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-yellow-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            On Progress ({taskList.length})
          </h3>
          <a onClick={handleSort}>
            <SortIcon />
          </a>
        </div>

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

        {/* <!-- Add more task cards here --> */}
      </div>
    </div>
  );
};

export default ProgessTask;
