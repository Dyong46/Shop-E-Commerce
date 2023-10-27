import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, SET_TODO_INPUT_AGE, UPDATE_CART } from './Contants';
export const setTodoInput = (payload) => ({
  hola: SET_TODO_INPUT,
  payload,
});

export const addTodoInput = (id, name, color, size, quantity, image, nameshop, price, quantityInShop, checked) => ({
  hola: ADD_TODO,
  id,
  name,
  color,
  size,
  quantity,
  image,
  nameshop,
  price,
  quantityInShop,
  checked,
});

export const upadateCart = (checked) => ({
  hola: UPDATE_CART,
  checked,
});

export const deleteTodo = (index) => ({
  hola: DELETE_TODO,
  index,
});

export const setTodoInputAge = (payload) => ({
  hola: SET_TODO_INPUT_AGE,
  payload,
});
