import { useState } from "react";

const GoodButton = (props) => {
    const [count, setCount] = useState(0)

    const countUp = ()=> {
        setCount(prevState => prevState + 1)
    }

    return (
        <button onClick={countUp}>{props.icon} {count}</button>
    )
}

export default GoodButton