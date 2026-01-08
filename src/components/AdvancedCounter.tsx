import { useState } from "react"

export default function AdvancedCounter() {
    const [currentCount, setCurrentCount] = useState(0);

    // handle increment
    function handleIncrement() {
        console.log('Increasing count');
        setCurrentCount(prevCount => prevCount + 1);
    }

    // handle decrement
    function handleDecrement() {
        console.log('Decreasing count');
        setCurrentCount(prevCount => prevCount - 1);
    }

    return (
        <div className="py-6 px-4 bg-yellow-50 flex flex-col rounded-2xl border-2 border-green-100/60 gap-8">
            <h3>Current Count: {currentCount}</h3>
            {/* increment and decrement buttons */}
            <div className="flex flex-row gap-10 justify-center">
                <button className="bg-red-400 hover:bg-linear-to-tr hover:from-red-500 hover:to-red-400" aria-label="decrease button" role="button" onClick={handleDecrement}>Decrease</button>
                <button className="bg-green-300 hover:bg-linear-to-tr hover:from-green-400 hover:to-green-300" aria-label="increase button" role="button" onClick={handleIncrement}>Increase</button>
            </div>
            {/* history section */}
            <div>
                <h4>Count History</h4>

            </div>
            <button className="bg-yellow-200 hover:bg-linear-to-tr hover:from-yellow-500 hover:to-yellow-200 mx-6" aria-label="reset count button" role="button">Reset</button>
        </div>
    )
}