import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TasksContext } from "./context";
import Home from "./Home";
import { initialState, projectifyReducer } from "./reducer/ProjectifyReducer";

function App() {
  const [state, dispatch] = useReducer(projectifyReducer, initialState);
  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      <div className="flex h-screen">
        <Home />

        <ToastContainer />
      </div>
    </TasksContext.Provider>
  );
}

export default App;
