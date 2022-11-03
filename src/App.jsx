import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { ItemList } from "./components/ItemList";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>Mi Tienda</h1>
      </header>

      {/* Barra de navegación */}
      <NavBar></NavBar>

      {/* Contenido principal */}
      <section id="content" className="content">

        {/* Aquí va el listado de artículos */}
        <ItemList/>

      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador></Buscador>

        <Crear></Crear>
      </aside>

      {/* Pie de página */}
      <footer className="footer">
        &copy; Edgar Hernandez - Proyecto con React + Vite - <a href="https://github.com/Edgar-Hernandez01" target="_blank">GitHub</a>
      </footer>
    </div>
  )
}

export default App
