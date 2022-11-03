import React from 'react'

export const ItemList = () => {
    return (
        <>
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
        </>
    )
}
