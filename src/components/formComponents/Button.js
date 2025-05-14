/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Componente 'Button'.
*/

/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Comentarios del código.
*/

import React from 'react';

// Se declara el componente Button.
const Button = ({ type, onClick, disabled, className, children }) => {
    return (
        <button
            type={type} // El tipo de botón.
            onClick={onClick} // Función que se ejecutará cuando se haga click en el botón.
            disabled={disabled} // Determina si el botón está deshabilitado o no.
            className={className} // Para el CSS.
        >
            {/* Muestra el contenido dentro del botón (puede ser texto o elementos JSX) */}
            {children}
        </button>
    );
};


export default Button; // Se exporta el componente Button para que pueda ser utilizado en otros archivos.

