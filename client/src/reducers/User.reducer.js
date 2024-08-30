export const AddUserReducer =(state={users:[]},action)=>{
    switch (action.type) {
        case 'ADD_USER':
            return {...state,users:[action.payload,...state.users]}
        
            //case "REMOVE_TODO_SUCCESS":
            //    return { todos: action.payload };
            //removes the todo

        default:
           return state
    }
}