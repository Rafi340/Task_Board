/* eslint-disable no-unused-vars */
const initialState = {
    taskList: [],
    mainList: []
}
const projectifyReducer = (state, action) => {
    switch(action.type){
        case "ADD_TASK":
            return {
                taskList: [...state.taskList, action.payload],
                mainList: [...state.taskList, action.payload]
            }
           
        case "REMOVE_FROM_TASK":
            return {
                ...state,
                taskList: state.taskList?.filter(t=> t.id !== action.payload.id),
                mainList: state.taskList?.filter(t=> t.id !== action.payload.id),
            }
        case "UPDATE_TASK":
            return {
                ...state,
                taskList: state.taskList.map(t=> 
                {
                    if(t.id === action.payload.id) return action.payload;
                    else return t
                }
                 ),
                 mainList: state.mainList.map(t=> 
                    {
                        if(t.id === action.payload.id) return action.payload;
                        else return t
                    }
                     )
            }
        case "SEARCH_TASK": 
         return {
            ...state,
            taskList: action.payload
            ? state.taskList.filter(task =>
                task.taskName.toUpperCase().includes(action.payload.toUpperCase())
            )
            : state.mainList
         }
         case "SORT": 
         return {
            ...state,
            taskList: state.taskList.map((task, index) => {
              if (task.category === "") {
                return { ...task, originalIndex: index };
              }
              return task;
            })
            .sort((a, b) => {
              if (a.category === action.payload && b.category === action.payload) {
                const dateA = new Date(a.dueDate);
                const dateB = new Date(b.dueDate);
                return dateA - dateB;
              }
              return a.originalIndex - b.originalIndex;
            })
            .map((task) => {
              const { originalIndex, ...rest } = task;
              return rest;
            }),
            mainList: [...state.taskList]
          }
          
        default: 
            return state;
    }

}
export { initialState, projectifyReducer }

