/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Componente principal de la aplicación: se envuelve la aplicación 
  con Router para habilitar la navegación y se define la ruta para el componente de Inicio de sesión.
*/

/*
Ticket de Jira: DP-21
  Nombre: Pilar
  Fecha: 07/04
  Descripción: Comentarios del código.
*/

// Se importan los componentes necesarios de 'react-router-dom' para la navegación.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Se importa el componente Login desde la ruta especificada.
import Login from './pages/Login.js'

// Componente principal de la aplicación.
const App = () => {
  return (
    // Se envuelve la aplicación con el Router para habilitar la navegación.
    <Router>
      <Routes>
        {/* Se define una ruta para el componente Login en la ruta raíz ('/'). */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

// Se exporta el componente App para su uso en otras partes de la aplicación.
export default App;
