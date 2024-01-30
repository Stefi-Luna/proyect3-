import React, { useState } from 'react';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [inputValues, setInputValues] = useState({
    userName: '',
    userSurname1: '',
    userSurname2: '',
    userEmail: '',
    userPhone: ''
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

 const handleAddUserToList = () => {
    const { userName, userSurname1, userSurname2, userEmail, userPhone } = inputValues;
    const user = `${userName} ${userSurname1} ${userSurname2} - ${userEmail} - ${userPhone}`;

    // Validación del campo numérico
  if (isNaN(userPhone) || userPhone.length < 9) {
    alert('Por favor, ingrese un número de teléfono válido.');
    return;
  }

  // Validación del campo de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmail)) {
    alert('Por favor, ingrese una dirección de correo electrónico válida.');
    return;
  }

    if (editingIndex !== null) {
      const updatedUserList = [...userList];
      updatedUserList[editingIndex] = user;
      setUserList(updatedUserList);
      setEditingIndex(null);
    } else {
      setUserList([...userList, user]);
    }

    cleanFields();
  };

  const handleEditUser = (index) => {
    const userToEdit = userList[index].split(' - ');
    const [name, surname1, surname2] = userToEdit[0].split(' ');
    setInputValues({
      userName: name || '',
      userSurname1: surname1 || '',
      userSurname2: surname2 || '',
      userEmail: userToEdit[1] || '',
      userPhone: userToEdit[2] || ''
    });
    setEditingIndex(index);
  };
  
 const handleDeleteUser = (index) => {
    const updatedUserList = [...userList];
    updatedUserList.splice(index, 1);
    setUserList(updatedUserList);
  };

  const cleanFields = () => {
    setInputValues({
      userName: '',
      userSurname1: '',
      userSurname2: '',
      userEmail: '',
      userPhone: ''
    });
  };

  console.log(userList);

  return (
    <>
      <div className="formBody">
        <nav className="formBody--header">
          <a href="index.html"><img src="../img/escudo.svg" alt="Escudo escuela" className="escudo" /></a>
          <h1>Listado escolar</h1>
        </nav>

        <main className="formMain">
          <section>
            <section className="form">
              <label htmlFor="userName">Name</label>
              <input type="text" name="userName" value={inputValues.userName} onChange={handleInputChange} />

              <label htmlFor="userSurname1">First Surname</label>
              <input type="text" name="userSurname1" value={inputValues.userSurname1} onChange={handleInputChange} />

              <label htmlFor="userSurname2">Second Surname</label>
              <input type="text" name="userSurname2" value={inputValues.userSurname2} onChange={handleInputChange} />

              <label htmlFor="userEmail">Email</label>
              <input type="text" name="userEmail" value={inputValues.userEmail} onChange={handleInputChange} />

              <label htmlFor="userPhone">Phone Number</label>
              <input type="text" name="userPhone" value={inputValues.userPhone} onChange={handleInputChange} />

              <button onClick={handleAddUserToList}>Añadir usuario</button>
            </section>
          </section>

          <section className="list">
            <ul>
              {userList.map((user, index) => (
                <li key={index}>{user}
                <button onClick={() => handleDeleteUser(index)}>Eliminar</button>
                <button onClick={() => handleEditUser(index)}>Editar</button>
                </li>
              ))}
            </ul>
          </section>

          <section className="listButtons">
            <button onClick={() => addAlertInfo()}>Cargar lista</button>
            <button onClick={() => savedList()}>Guardar lista</button>
          </section>
        </main>

        <footer>
          <section>© Fem-Coders</section>
        </footer>
      </div>
    </>
  );
};

export default UserList;
