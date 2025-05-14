/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Componente 'Input'.
*/

/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Comentarios del código.
*/

import React from 'react';

// Se define el componente Input.
const Input = ({ type, id, placeholder, onChange, value, required, name }) => {
    return (
        <input
            type={type} // Tipo de input.
            id={id} // ID del campo de entrada.
            placeholder={placeholder} // Texto que aparece como sugerencia cuando el campo está vacío.
            onChange={onChange} // Función que se ejecuta cuando el valor del input cambia.
            value={value} // Valor actual del input.
            required={required} // Convierte el campo en un campo obligatorio para enviar el formulario.
            name={name} // Nombre del campo que se utiliza cuando se envían los datos del formulario.
        />
    );
};


export default Input; // Se exporta el componente Input para que pueda ser utilizado en otros archivos.

