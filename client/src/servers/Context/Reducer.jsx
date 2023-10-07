import { ADD_TODO } from './Contants';
const initState = {
  todos: [],
  todoId: '',
  todoNameProduct: '',
  todoColor: '',
};

function reducer(state, action) {
  switch (action.hola) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            nameproduct: action.name,
            color: action.color,
            size: action.size,
            quantity: action.quantity,
          },
        ],
        todoId: action.id,
        todoNameProduct: action.name,
      };

    default:
      throw new Error('invlid');
  }
}

export { initState };
export default reducer;
