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

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

  const handleAddUserToList = () => {
    const { userName, userSurname1, userSurname2, userEmail, userPhone } = inputValues;
    const user = `${userName} ${userSurname1} ${userSurname2} - ${userEmail} - ${userPhone}`;
    setUserList([...userList, user]);
    cleanFields();
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
                <li key={index}>{user}</li>
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
