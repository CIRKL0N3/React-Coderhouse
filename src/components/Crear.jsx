import React from 'react'

export const Crear = () => {
  return (
    <div className="add">
        <h3 className="title">Añadir artículo</h3>
        <form>
            <input type="text" id="title" placeholder="Título" />
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
