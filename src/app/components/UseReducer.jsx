"use client"
import { useEffect, useReducer, useState } from 'react';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.payload !== "") {
                return [...state, action.payload];
            }
            else { alert("Please enter a valid todo") }
        case 'REMOVE_TODO':
            return state.filter(todo => todo !== action.payload);
        default:
            return state;
    }
};
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return state === 'light' ? 'dark' : 'light';
        default:
            return state;
    }
};
const UseReducer = () => {
    const ComnBTn = "px-4 mx-5 py-2 font-bold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700 px-4 py-2 font-bold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700"
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    const [todos, dispatchTodo] = useReducer(todoReducer, []);
    const [newTodo, setNewTodo] = useState('');
    const [theme, dispatchTheme] = useReducer(themeReducer, 'light');
    const handleAddTodo = () => {
        dispatchTodo({ type: 'ADD_TODO', payload: newTodo });
        setNewTodo('');
    };
    useEffect(()=>{
        document.body.style.backgroundColor = theme === 'light'? 'white' : 'black';
        document.body.style.color = theme === 'light'? 'black' : 'white';
    })
    return (
        <div className="pt-8 mt-10 border-t border-black max-w-[700px] mx-auto pb-20">
            <h1 className="text-3xl font-bold text-center">Use Reducer</h1>
            <p className="text-center text-gray-600">
                This is a simple example of how to use Reducer in React.
            </p>
            <div className="pt-5">
                <h2 className="text-xl font-bold text-center">Counter</h2>
                <div className='flex justify-around w-full pt-5'>
                    <button className={ComnBTn} onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                    <p>Count: {state.count}</p>
                    {console.log(state.count)}
                    <button className={ComnBTn} onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
                </div>
            </div>
            <div className="pt-5">
                <h2 className="text-xl font-bold text-center">ToDo</h2>
                <div className='flex flex-col items-center justify-center mx-auto'>
                    <div className='mt-3'>
                        <input className='px-2 py-3 border border-black outline-none' type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
                        <button className={ComnBTn} onClick={handleAddTodo}>Add Todo</button>
                    </div>
                    <ul className='pt-4'>
                        {todos.map(todo => (
                            <li className='flex items-center justify-between w-full mb-4 max-w-[700px]' key={todo}>
                                {todo}{' '}
                                <button className={ComnBTn} onClick={() => dispatchTodo({ type: 'REMOVE_TODO', payload: todo })}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="pt-5">
                <h2 className="text-xl font-bold text-center">ToDo</h2>
                <div className='flex flex-col items-center justify-center mx-auto'>
                    <div>
                        <p>Current Theme: {theme}</p>
                        <button onClick={() => dispatchTheme({ type: 'TOGGLE_THEME' })}>Toggle Theme</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
