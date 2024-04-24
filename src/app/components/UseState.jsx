"use client"
import { useState } from "react"

const UseState = () => {
    const ComnBTn = "px-4 py-2 font-bold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700 px-4 py-2 font-bold bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700"
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isToggled, setIsToggled] = useState(false);
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [color, setColor] = useState("#ffffff");
    const [isChecked, setIsChecked] = useState(false);
    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, input]);
        setInput("");
    };
    return (
        <div className="pt-8 mt-10 border-t border-black max-w-[700px] mx-auto pb-20">
            <h1 className="text-3xl font-bold text-center">Use State</h1>
            <p className="text-center text-black">
                This is a simple example of how to use state in React.
            </p>
            <div className="pt-5">
                <h2 className="text-xl font-bold text-center">Counter</h2>
                <div className="flex justify-center max-w-[500px] mx-auto gap-10 items-center pt-3">
                    <button className={ComnBTn} onClick={() => setCount(count + 1)}>Increment</button>
                    <p className="text-center text-black"> {count}</p>
                    <button className="px-4 py-2 font-bold text-black bg-red-500 border border-red-500 rounded hover:bg-red-700 hover:border-red-700" onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            </div>
            <div className="pt-3">
                <div className="flex justify-center max-w-[500px] mx-auto gap-10 items-center pt-3">
                    <button className={ComnBTn} onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
                <h2 className="text-xl font-bold text-center">Onchange On input</h2>
                <input type="text" className="p-2 mt-3 border border-black outline-none border-opacity-70 rounded-xl" value={name} onChange={(e) => setName(e.target.value)} />
                <p className="pb-3 text-center text-black">Hello, {name}!</p>
                <button className={ComnBTn} onClick={() => setName("")}>Reset</button>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
                <h2 className="text-xl font-bold text-center">toggled component</h2>
                <div className="flex flex-col items-center justify-center py-3">
                    <button className={ComnBTn} onClick={() => setIsToggled(!isToggled)}>
                        {isToggled ? "Hide" : "Show"}
                    </button>
                    {isToggled && <p className="pt-2 text-center text-black">This is a toggled component!</p>}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
                <h2 className="text-xl font-bold text-center">ToDo</h2>
                <div className="flex flex-col pt-3">
                    <form className="flex gap-5" onClick={addTodo}>
                        <input className="p-2 border border-black outline-none border-opacity-70 rounded-xl" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button className={ComnBTn} type="submit">Add Todo</button>
                    </form>
                    <ul className="p-3">
                        {todos.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
                <h2 className="text-xl font-bold text-center">Color picker</h2>
                <div className="flex gap-10 pt-3">
                    <input className="w-10 h-10" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    <p className="pt-2 text-center" style={{ backgroundColor: color }}>Background color: {color}</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
                <h2 className="text-xl font-bold text-center">Checkbox</h2>
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center gap-5 pt-3">
                        <input className="w-3 h-3 p-0 m-0" id="checkbox" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <label className="text-center text-black" htmlFor="checkbox">I agree to the terms and conditions</label>
                    </div>
                    {
                        isChecked && <p className="pt-2 text-center text-black">Checked</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default UseState
