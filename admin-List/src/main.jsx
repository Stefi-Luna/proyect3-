import React from 'react';
import ReactDOM from 'react-dom/client';  
import './index.css';
import UserList from './components/UserList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserList />
  </React.StrictMode>,
);