import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        
        handleAddTodo( newTodo );
        reset();
        
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <input 
                            type="text"
                            name="description"
                            placeholder="Aprender..."
                            autoComplete="off"
                            className="form-control"
                            value={ description }
                            onChange={handleInputChange}
                        />
                        <button
                        type="submit"
                            className="btn btn-outline-primary"
                        >
                            Agregar
                        </button>
                    </div>
                </form>
            
        </>
    )
}
