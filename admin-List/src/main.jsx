import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa ReactDOM de esta manera
import './index.css';  // Mueve la importación del archivo de estilo fuera de la instrucción 'import'
import UserList from './components/UserList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserList />
  </React.StrictMode>,
);