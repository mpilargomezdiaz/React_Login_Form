/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Formulario de Inicio de sesión que aparece en la ruta raíz.
*/

/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Comentarios del código.
*/

// Se importan los componentes necesarios y hooks para el formulario de inicio de sesión.
import React from 'react';
import TypeForm from '../components/formComponents/TypeForm.js';
import Button from '../components/formComponents/Button.js';
import { useLogin } from '../utils/hooks/useLogin.js';
import FormField from '../components/formComponents/FormField.js';
import '../styles/Login.css'; // Se importa el CSS.

const Login = () => {

    // Desestructuración del custom hook 'useLogin'.
    const { setLogin, setPassword, showPassword, setShowPassword, handleSubmit, errorMessage, successMessage, loading } = useLogin();

    return (
        <div className='Login'>
            <TypeForm onSubmit={handleSubmit} method="POST" className="Login__Form">
                <div className='Login__divForm'>
                    {/* Título del formulario */}
                    <h1>Login</h1>

                    <div>
                        {/* Campo para ingresar el nombre de usuario o correo electrónico */}
                        <FormField
                            htmlFor="login" // Se utiliza para asociar la etiqueta con el input.
                            label="Username / Email:" // Etiqueta para el campo.
                            type="text" // Tipo de campo (texto).
                            id="login" // ID del campo.
                            placeholder="Username / Email" // Texto de sugerencia cuando el campo está vacío.
                            name="login" // Nombre del campo.
                            onChange={(e) => setLogin(e.target.value)} // Actualiza el estado de 'setLogin' cuando el valor cambia.
                            required // Hace que el campo sea obligatorio.
                        />
                    </div>

                    <div className="PasswordContainer">
                        {/* Campo para la contraseña */}
                        <FormField
                            htmlFor="password"
                            label="Password:"
                            type={showPassword ? "text" : "password"} // Si 'showPassword' es true, se muestra el texto de la contraseña, sino, se oculta.
                            id="password"
                            placeholder="Enter your password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)} // Se actualiza el estado de 'setPassword' cuando el valor cambia.
                            required
                        />
                        {/* Botón para alternar la visibilidad de la contraseña */}
                        <Button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} // Cambia el valor de 'showPassword' para alternar la visibilidad.
                            className="Login__Button--togglePasswordVisibility"
                        >
                            {/* Muestra diferentes iconos según la visibilidad de la contraseña */}
                            <img src={showPassword ? '/images/ojo.jpg' : '/images/ojo2.jpg'} className="Login_img--icon" alt="Toggle visibility" />
                        </Button>
                    </div>

                    {/* Si hay un mensaje de error, se muestra debajo del formulario */}
                    {errorMessage && (
                        <div className="Login__errorMessage">
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    {/* Si hay un mensaje de éxito, se muestra debajo del formulario */}
                    {successMessage && (
                        <div className="Login__successMessage">
                            <p>{successMessage}</p>
                        </div>
                    )}

                    <div className='Login__divBotones'>
                        {/* Botón para enviar el formulario, que cambia su texto dependiendo del estado de carga */}
                        <Button type="submit" className="Login__ButtonLog" disabled={loading}>
                            {loading ? "Cargando..." : "LOGIN"}
                        </Button>
                    </div>
            
                </div>
            </TypeForm>
        </div>
    );
}

export default Login; // Se exporta el componente Login para usarlo en otras partes de la aplicación.
