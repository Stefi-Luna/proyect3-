import { useState, useEffect } from "react";


return(
        <>
        <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado Escolar</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="shortcut icon" href="img/escudo.svg" type="image/x-icon">
</head>

<body class="formBody">
    <header class="formBody--header">
        <a href="index.html"><img src="img/escudo.svg" alt="Escudo escuela" class="escudo"></a>
        <h1>Listado escolar</h1>
        <button onclick="location.href='index.html'">Ir atrás</button>
    </header>

    <main class="formMain">
        <section>
            <section class="form">
                <label for="name">Nombre</label>
                <input type="text" name="" id="name">
                <label for="lastName1">Primer apellido</label>
                <input type="text" name="" id="lastName1">
                <label for="lastName2">Segundo apellido</label>
                <input type="text" name="" id="lastName2">
                <label for="category">Categoría</label>
                <select name="" id="category">
                    <option value="" disabled selected>Elige</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="docente">Docente</option>
                    <option value="pas">PAS</option>
                </select>
                <label for="course">Curso</label>
                <input type="number" name="" id="course" min="0" max="10" pattern="\d{2}" maxlength="2"
                    title="Escribe un número" placeholder="Ej.: 3" disabled>
                <label for="email">E-mail</label>
                <input type="email" name="" id="email" placeholder="Ej.: hola@hola.com">
                <label for="class">Clase</label>
                <input type="text" name="" id="class" disabled>
                <button onclick="getInfoCreateObject()" class="btnAdd">Enviar</button>
            </section>

            <section id="list">

            </section>
        </section>

        <section id="listButtons">
            <button onclick="addAlertInfo()">Cargar lista</button>
            <button onclick="savedList()"> Guardar lista</button>
        </section>
    </main>

    <footer>
        <section>© Fem-Coders</section>
    </footer>

    <script src="/js/script.js"></script>
</body>

</html>
        </>
        
    )
}

export default UserList;
