import { ADD_TODO, DELETE_TODO, UPDATE_CART } from './Contants';
const initState = {
  todos: [],
  todoData: [],
};

function reducer(state, action) {
  switch (action.hola) {
    case ADD_TODO:
      var index = state.todos.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        const tempTodos = state.todos;
        tempTodos[index].quantity = action.quantity;
        return {
          ...state,
          todos: tempTodos,
        };
      } else {
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
              img: action.image,
              nameshop: action.nameshop,
              price: action.price,
              quantityInShop: action.quantityInShop,
              checked: false,
              checkitem: false,
            },
          ],
        };
      }

    case DELETE_TODO:
      var news = [...state.todos];
      news.splice(action.index, 1);
      return {
        ...state,
        todos: news,
      };

    case UPDATE_CART:
      return {};

    default:
      throw new Error('invlid');
  }
}

export { initState };
export default reducer;
