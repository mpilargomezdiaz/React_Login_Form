/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Componente 'Label'.
*/

/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Comentarios del código.
*/

import React from 'react';

// Se define el componente Label.
const Label = ({ htmlFor, children }) => {
    return (
        // Se renderiza un elemento <label> y se asocia el atributo 'htmlFor' al id del campo relacionado.
        <label htmlFor={htmlFor}>
            {/* Muestra el contenido dentro del componente Label*/}
            {children}
        </label>
    );
};

export default Label; // Se exporta el componente Label para que pueda ser utilizado en otros archivos
