import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, SET_TODO_INPUT_AGE } from './Contants';
export const setTodoInput = (payload) => ({
  hola: SET_TODO_INPUT,
  payload,
});

export const addTodoInput = (id, name, color, size, quantity) => ({
  hola: ADD_TODO,
  id,
  name,
  color,
  size,
  quantity,
});

export const deleteTodo = (payload) => ({
  hola: DELETE_TODO,
  payload,
});

export const setTodoInputAge = (payload) => ({
  hola: SET_TODO_INPUT_AGE,
  payload,
});
