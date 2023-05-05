import { useState } from "react";

const TestState = () => {
    const [count, setCount] = useState(0)

    const countUp = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div>
            current count: {count}
            <button onClick={countUp}>up</button>
        </div>
    )
}

export default TestState