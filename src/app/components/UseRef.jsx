"use client"
import { useEffect, useRef, useState } from "react"

const UseRef = () => {
    const ComnBTn = "px-4 py-2 font-bold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700 px-4 py-2 font-bold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700"
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    };
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });
    return (
        <div className="pt-8 mt-10 border-t border-black max-w-[700px] mx-auto pb-20">
            <h1 className="text-3xl font-bold text-center">Use Ref</h1>
            <p className="text-center text-gray-600">
                This is a simple example of how to use Ref in React.
            </p>
            <div className="pt-5">
                <h2 className="text-xl font-bold text-center">Input Ref</h2>
                <div className="flex items-center justify-center gap-5 mt-3">
                    <input className="p-2 border border-black border-opacity-70 rounded-xl" ref={inputRef} type="text" />
                    <button className={ComnBTn} onClick={handleClick}>Focus Input</button>
                </div>
            </div>
            <div className="pt-5">
                <h2 className="text-xl font-bold text-center">Track application renders</h2>
                <div className="flex items-center justify-center gap-5 pt-3">
                    <input className="p-2 border border-black outline-none border-opacity-70 rounded-xl" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <h3>Render Count: {count.current}</h3>
                </div>
            </div>
        </div>
    )
}

export default UseRef
