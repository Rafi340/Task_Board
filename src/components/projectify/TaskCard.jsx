import { DeleteIcon, EditIcon } from "../../assets/icons/Icon";
import DateFormat from "../../utils/DateFormat";

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <>
      <div className="mb-4 rounded-lg bg-gray-800 p-4" key={task.id}>
        <div className="flex justify-between">
          <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
            {task.taskName}
          </h4>

          <div className="flex gap-2">
            <a onClick={() => onDelete(task)}>
              <DeleteIcon />
            </a>
            <a onClick={(e) => onEdit(e, task)}>
              <EditIcon />
            </a>
          </div>
        </div>
        <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

        <p className="mt-6 text-xs text-zinc-400">{DateFormat(task.dueDate)}</p>
      </div>
    </>
  );
};

export default TaskCard;
