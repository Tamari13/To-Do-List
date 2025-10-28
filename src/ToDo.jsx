import React, { useState } from 'react'

const ToDo = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    function handleInputChange(event) {
        setNewTodo(event.target.value);
    }

    function addTodo() {
        if (newTodo.trim() === "") { 
            alert("Please enter a task before adding.");
            return;
        };
        if (todos.length >= 5) { 
            alert("You can only have a maximum of 5 tasks.");
            return;
        }
        setTodos(todos=>[...todos, newTodo]);
        setNewTodo("");

    }

    function deleteTodo(index) {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }
    function moveUp(index) {
        if (index > 0) {
            const updatedTodos = [...todos];
            [updatedTodos[index - 1], updatedTodos[index]] = [updatedTodos[index], updatedTodos[index - 1]];
            setTodos(updatedTodos);
        }
    }
    function moveDown(index) {
        if (index < todos.length - 1) {
            const updatedTodos = [...todos];
            [updatedTodos[index + 1], updatedTodos[index]] = [updatedTodos[index], updatedTodos[index + 1]];
            setTodos(updatedTodos);
        }   
    
    }
    


  return (
    <div className='todo-container'>
        <h1>To Do Tasks:</h1>

        <div>
            <input type="text" placeholder='Enter to do task...' value={newTodo} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTodo}>Add Task</button>
        </div>
        <ol>
            {todos.map((todo, index) => (
                <li key={index}>
                    <p className='tasks'>{todo}</p>
                    <button className='delete-button' onClick={() => deleteTodo(index)}>Delete</button>
                    <button className='moveup-button' onClick={() => moveUp(index)}>Move Up ⬆️</button>
                    <button className='movedown-button' onClick={() => moveDown(index)}>Move Down ⬇️</button>
                </li>
            ))} 
        </ol>

    </div>
    )
}

export default ToDo