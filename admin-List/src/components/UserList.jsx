import React, { useState } from 'react';
import { userService } from '../server/config';
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const { getUsers, createUser, deleteUser, updateUser } = userService

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [inputValues, setInputValues] = useState({
    userName: '',
    userSurname1: '',
    userSurname2: '',
    userEmail: '',
    userPhone: '',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const fetchUser = async () => {
    const users = await getUsers()
    setUserList(users)
  }

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

 const handleAddUserToList = async () => {
    const {userEmail, userPhone } = inputValues;

    // Validación del campo numérico
  if (isNaN(userPhone) || userPhone.length < 9) {
    swal("Atención",'Por favor, ingrese un número de teléfono válido.', "error");
    return; 
  }

  // Validación del campo de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmail)) {
    swal("Atención", 'Por favor, ingrese una dirección de correo electrónico válida.', "error");
    return; 
  
  }

  let statusCode
  if (isEditMode) {
     statusCode = await updateUser(inputValues);
  } else{
    statusCode = await createUser(inputValues);
  }
 
  const text = isEditMode ? "actualizado" : "creado"
  if (statusCode === 201 || statusCode === 200) {
    swal("Éxito", `Usuario ${text} con éxito`, "success")
  };

  fetchUser();

  cleanFields();
  setIsEditMode(false);
};

  const handleEditUser = async (id) => {
  setIsEditMode(true)
  const userToEdit = userList.find(person => person.id === id)
  const {userName, userSurname1, userSurname2, userEmail, userPhone} = userToEdit || {};

  setInputValues({
    userName: userName || '',
    userSurname1: userSurname1 || '',
    userSurname2: userSurname2 || '',
    userEmail: userEmail || '',
    userPhone: userPhone || '',
    id
  });

};
  
 const handleDeleteUser = async (userId) => {
    const status = await deleteUser(userId);
    fetchUser();

    if (status === 200 ){
      swal("Éxito", 'El usuario se ha eliminado con exito', "success")
    }
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

  //operación ternaria ??
 const buttonText = isEditMode ? "Editar usuario" : "Añadir usuario"

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
              <input type="number" name="userPhone" value={inputValues.userPhone} onChange={handleInputChange} />

              <Button style={{ backgroundColor: '#EBDEF0', color: 'black' }} onClick={handleAddUserToList}>{buttonText}</Button>
            </section>
          </section>

             <Table striped bordered hover size="sm" responsive="lg">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Segundo Apellido</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                   {userList.map((user, index) => (
                    <tr key={index}>
                      <td>
                        {user.id}
                      </td>
                      <td>
                        {user.userName}
                      </td>
                      <td>
                         {user.userSurname1}
                      </td>
                      <td>
                         {user.userSurname2}
                      </td>
                      <td>
                        {user.userEmail}
                      </td>
                       <td>
                        {user.userPhone}
                      </td>
                      <td>
                          <Button variant="outline-info" size="sm" onClick={() => handleEditUser(user.id)}>Editar</Button>
                      </td>
                      <td>
                          <Button variant="outline-danger" size="sm" onClick={() => handleDeleteUser(user.id)}>Eliminar</Button>
                      </td>
                    </tr>
                    
                 ))}
                </tbody>
            </Table>

          <section className="listButtons">
            <Button variant="light" onClick={() => fetchUser()}>Cargar lista</Button>
            <Button variant="light" onClick={() => savedList()}>Guardar lista</Button>
          </section>
        </main>

        <footer className='footer'>
          <section>© Fem-Coders</section>
        </footer>
      </div>
    </>
  );
};

export default UserList;