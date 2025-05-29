# React_Login_Form

Frontend desarrollado en **React** con validaciones de formulario y conexión con la API RESTful de autenticación para integrar con los servicios de Fiskaly.

---

## 📝 Sobre el proyecto

Este frontend fue desarrollado durante mis prácticas (160 horas) como parte del curso de formación **IFCD0210**, con el objetivo de construir una interfaz funcional de login conectada a la API creada en Node.js para gestionar datos fiscales mediante los servicios de Fiskaly.

Dado que el foco principal del proyecto estaba centrado en el backend y en la integración con servicios externos, la parte de frontend fue más limitada y se orientó exclusivamente a implementar un formulario de acceso funcional. Aun así, se aplicaron buenas prácticas de validación, separación de componentes y estructuración del código.

Este repositorio contiene **únicamente código propio** y no incluye información confidencial, sensible ni privada de ninguna empresa. El desarrollo se realizó con fines **formativos**, durante horario de prácticas, y **no está vinculado a ningún producto comercial**.

---

## Tecnologías utilizadas

- **Frontend:** React  
- **Hooks personalizados:** Custom Hook para manejo de estado y lógica del formulario  
- **Componentes:** Componentes reutilizables para los campos del formulario  
- **Gestión de estado:** useState  
- **Validación de formularios:** Validaciones propias en el cliente  
- **Estilado:** CSS  
- **Comunicación con backend:** fetch API  
- **Control de versiones:** Git, GitHub

---

## Funcionalidades

- Formulario de login con validación de campos  
- Arquitectura basada en componentes reutilizables  
- Lógica desacoplada del formulario mediante un custom hook  
- Conexión con la API backend para autenticación  
- Gestión de errores del servidor y del cliente  

---

## Cómo ejecutar

1. Si aún no te has clonado el repositorio correspondiente al Backend,  
   pincha [aquí](https://github.com/mpilargomezdiaz/Api_Fiskaly_Integration) y sigue las instrucciones del `README.md` de dicho repositorio.

2. Una vez tengas arrancado el servidor (`npm start` en el repositorio del backend), clona este repositorio:

```bash

git clone https://github.com/mpilargomezdiaz/React_Login_Form.git

```

3. Accede al directorio del proyecto.

4. Instala las dependencias con npm install.

5. Ejecuta npm start.

Por defecto la aplicación se abrirá en http://localhost:3000

---

**¡Importante!**  

El usuario de prueba que se registra (si no está registrado con anterioridad) en la base de datos MySQL es el siguiente:

- **Username:** `testuser`  
- **Email:** `test@example.com`  
- **Password:** `testpassword`

> ⚠️ Aunque la contraseña está cifrada en la base de datos, puedes encontrarla en texto plano en el backend, ya que este usuario fue creado únicamente con fines de prueba.  
> Si deseas adaptar el sistema de autenticación para un entorno más realista, deberías configurar variables de entorno adecuadas y reforzar la seguridad del backend.

---

## 📄 License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License. See the [LICENSE](./LICENSE) file for details.

You can freely use, copy, and modify this code for non-commercial purposes, but commercial use is not permitted.


