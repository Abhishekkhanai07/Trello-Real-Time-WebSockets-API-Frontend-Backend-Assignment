import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export async function getBoards() {
  const res = await API.get('/boards');
  return res.data;
}

export async function createTask(boardId, listId, name) {
  const res = await API.post('/tasks', { boardId, listId, name });
  return res.data;
}

export async function updateTask(id, name) {
  const res = await API.put(`/tasks/${id}`, { name });
  return res.data;
}

export async function deleteTask(id) {
  const res = await API.delete(`/tasks/${id}`);
  return res.data;
}
