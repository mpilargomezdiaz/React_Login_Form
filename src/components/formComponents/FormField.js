/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Componente 'FormField'.
*/

/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Comentarios del código.
*/

// Se importan los componentes Label e Input para ser utilizados dentro de este componente.
import Label from "./Label";
import Input from "./Input";

// Se declara el componente FormField.
export default function FormField({ id, label, type, value, onChange, placeholder }) {
  return (
    <div>
      <div>
        {/* Se asocia el label con el input a través del atributo htmlFor */}
        <Label htmlFor={id} className="label">
          {label}
        </Label>

        {/* Si el tipo es 'textarea', renderiza un campo de texto grande */}
        {type === "textarea" ? (
          <textarea
            id={id} // Se asocia el id del campo con el atributo id.
            className="input" // Se aplica la clase CSS 'input'.
            value={value} // Se establece el valor del textarea desde el estado.
            onChange={onChange} // Se llama a la función onChange para actualizar el estado.
            placeholder={placeholder} // Se establece el texto que aparece cuando el campo está vacío
          ></textarea>
        ) : (
          // Si no es un 'textarea', se renderiza un componente Input para otros tipos de campos.
          <Input
            type={type} // Se establece el tipo de input.
            id={id} // Se asocia el id del campo con el atributo id.
            className="input" // Se aplica la clase CSS 'input'.
            value={value} // Se establece el valor del input.
            onChange={onChange} // Se llama a la función onChange para actualizar el estado.
            placeholder={placeholder} // Se establece el texto que aparece cuando el campo está vacío.
          />
        )}
      </div>
    </div>
  );
}
