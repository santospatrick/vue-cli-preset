import axios from 'axios';

const api = axios.create({
  // Servidor de mock local.
  // Rode `yarn mock` para subir o servidor
  baseURL: 'http://localhost:3000',
});

export default api;
