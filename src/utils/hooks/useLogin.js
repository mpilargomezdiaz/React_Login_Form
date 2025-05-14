/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Custom hook que se utiliza en el formulario de Inicio de sesión (pages/Login.js).
*/

/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Comentarios del código.
*/

import { useState } from 'react'; // Se importa useState para manejar el estado en el componente

// Definición del hook useLogin
export const useLogin = () => {
    const [login, setLogin] = useState(''); // Estado para almacenar el nombre de usuario o correo
    const [password, setPassword] = useState(''); // Estado para almacenar la contraseña
    const [showPassword, setShowPassword] = useState(false); // Estado para manejar la visibilidad de la contraseña
    const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar los mensajes de error
    const [successMessage, setSuccessMessage] = useState(''); // Estado para manejar los mensajes de éxito
    const [loading, setLoading] = useState(false); // Estado para indicar si se está enviando la solicitud

    // Función que maneja el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        setLoading(true); // Activa el estado de carga

        if (!login || !password) {
            setErrorMessage("Por favor rellene todos los campos.");
            setLoading(false); // Desactiva el estado de carga
            return;
        }

        const formData = { // Prepara los datos del formulario para enviarlos
            login,
            password
        };

        try {
            // Realiza una solicitud POST al backend, concretamente a la parte encargada del inicio de sesión
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
                },
                body: JSON.stringify(formData), // Convierte el objeto formData a una cadena JSON
            });

            // Si la respuesta es exitosa, procesa el token recibido
            if (response.ok) {
                const data = await response.json(); // Convierte la respuesta a un objeto JSON
                setErrorMessage('');
                setSuccessMessage(data.message || "Login exitoso."); // Guarda el mensaje de éxito
            } else {
                const errorData = await response.json(); // Parsea los errores del servidor
                setErrorMessage(errorData.message || "Error al iniciar sesión.");
                setSuccessMessage(''); // Se elimina el mensaje de éxito que pudiera haber anteriormente
            }
        } catch (error) {
            // Manejo de errores.
            setErrorMessage("Se ha producido un error");
            setSuccessMessage(''); // Borra cualquier mensaje de éxito previo
        } finally {
            setLoading(false); // Desactiva el estado de carga
        }
    };

    // Retorna los valores y funciones necesarias para que el componente 'Login.js' pueda acceder a ellos
    return {
        setLogin, // Función para actualizar el estado de login
        setPassword, // Función para actualizar el estado de password
        showPassword, // Estado que controla la visibilidad de la contraseña
        setShowPassword, // Función para cambiar el estado de visibilidad de la contraseña
        handleSubmit, // Función que maneja el envío del formulario
        errorMessage, // Devuelve el mensaje de error para mostrarlo en el componente
        successMessage, // Devuelve el mensaje de éxito para mostrarlo en el componente
        loading, // Estado que indica si la solicitud está en proceso
    };
};
