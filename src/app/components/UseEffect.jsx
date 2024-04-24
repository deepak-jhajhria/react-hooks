"use client"
import { useEffect, useState } from "react";

const UseEffect = () => {
    const ComnBTn = "px-4 py-2 font-bold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700 px-4 py-2 font-bold bg-blue-500 border border-blue-500 rounded hover:bg-blue-700 hover:border-blue-700"
    const [count, setCount] = useState(0);
    const [isCount, setIsCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => isCount * 2);
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, [count]);
    return (
        <div className="pt-8 mt-10 border-t border-black max-w-[700px] mx-auto pb-20">
            <h1 className="text-3xl font-bold text-center">Use Effect</h1>
            <p className="text-center text-black">
                This is a simple example of how to use Effect in React.
            </p>
            <div className="pt-5">
                <h2 className="text-xl font-bold text-center">Timer</h2>
                <div className="flex justify-center max-w-[500px] mx-auto gap-10 items-center pt-3">
                    <p className="text-center text-black"> {count}</p>
                </div>
            </div>
            <div className="pt-5">
                <h2 className="text-xl font-bold text-center">Counter</h2>
                <div className="flex justify-center max-w-[500px] mx-auto gap-10 items-center pt-3">
                    <p className="text-center text-black"> {isCount}</p>
                    <button className={ComnBTn} onClick={() => setIsCount((c) => c + 1)}>+</button>
                    <p className="text-center text-black">Calculation: {calculation}</p>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
