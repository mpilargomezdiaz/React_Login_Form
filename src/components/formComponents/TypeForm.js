/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Componente 'TypeForm'.
*/

/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Comentarios del código.
*/

import React from 'react';

// Se define el componente TypeForm.
const TypeForm = ({ onSubmit, children, className }) => {
    return (
        // Se renderiza un formulario (<form>) con un evento onSubmit y clases dinámicas.
        <form onSubmit={onSubmit} className={className}>
            {/* Muestra los elementos hijos del formulario*/}
            {children}
        </form>
    );
};

export default TypeForm; // Se exporta el componente TypeForm para que pueda ser utilizado en otros archivos.


