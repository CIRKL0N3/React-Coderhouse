
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
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Artículos</a></li>
          <li><a href="/#">Carrito</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section id="content" className="content">

        {/* Aquí van los artículos */}
        <article className="peli-item">
          <h3 className="title">Artículo 1</h3>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
          <h3 className="title">Artículo 2</h3>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
          <h3 className="title">Artículo 3</h3>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form>
            <input type="text" id="search_field" />
            <button id="search">Buscar</button>
          </form>
        </div>

        <div className="add">
          <h3 className="title">Añadir artículo</h3>
          <form>
            <input type="text" id="title" placeholder="Título" />
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
          </form>
        </div>
      </aside>

      {/* Pie de página */}
      <footer className="footer">
        &copy; Edgar Hernandez - Proyecto con React + Vite - <a href="https://github.com/Edgar-Hernandez01" target="_blank">GitHub</a>
      </footer>
    </div>
  )
}

export default App
