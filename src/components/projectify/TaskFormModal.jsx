import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TasksContext } from "../../context";
const TaskFormModal = ({ editTask, onClose }) => {
  const [task, setTask] = useState(
    editTask || {
      taskName: "",
      description: "",
      dueDate: "",
      category: "todo",
    }
  );
  const { dispatch } = useContext(TasksContext);
  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    console.log(name, value);
    setTask({
      ...task,
      [name]: value,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (!task.taskName) {
      toast.warning("TaskName is required !", {
        position: "top-center",
      });
      return;
    }
    if (!task.description) {
      toast.warning("Description is required !", {
        position: "top-center",
      });
      return;
    }
    if (!task.dueDate) {
      toast.warning("Date is required !", {
        position: "top-center",
      });
      return;
    }

    if (editTask) {
      dispatch({
        type: "UPDATE_TASK",
        payload: { ...task },
      });
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: { ...task, id: crypto.randomUUID() },
      });
    }
    setTask({
      taskName: "",
      description: "",
      dueDate: "",
      category: "todo",
    });
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            Create Task
          </h2>
          <form onSubmit={handleSave}>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Task Name
              </label>
              <input
                type="text"
                value={task.taskName}
                name="taskName"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={task.description}
                rows="3"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={task.dueDate}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-300">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleChange}
                value={task.category}
              >
                <option value="todo">To-Do</option>
                <option value="inprogress">On Progress</option>
                <option value="done">Done</option>
                <option value="revised">Revised</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {editTask ? "Update" : "Create"} Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskFormModal;
