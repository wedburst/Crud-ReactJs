import React from 'react'

export const TodoListItem = ({todo, index, handleToggle, handleDelete}) => {
    return (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center">
            {/* <input type="checkbox" className="mr-3" onClick={() => handleToggle(todo.id)}/> */}
            <p
              className={`${todo.done && "complete"}`}
              onClick={() => handleToggle(todo.id)}
            >
              {index + 1}. {todo.desc}
            </p>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(todo.id)}
          >
            Borrar
          </button>
        </li>
    )
}
