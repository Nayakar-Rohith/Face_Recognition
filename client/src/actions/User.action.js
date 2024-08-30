export const AddUserAction=(user)=>(dispatch)=>{
    dispatch({
        type:'ADD_USER',
        payload:user
    })
}

//export const RemoveTodoAction = (todo) => (dispatch, getState) => {
//    const { Todo:{ todos } } = getState(); 
//    dispatch({
//    type: "REMOVE_TODO_SUCCESS",
//    payload: todos.filter((t) => todo !== t),
//    });
//   }