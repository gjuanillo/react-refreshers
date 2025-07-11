import { useState } from "react";

function useCounter(initialValue : number = 0) {
    const [count, setCount] = useState<number>(0);
    const increment = () : void => setCount(count+1);
    const decrement = () : void => setCount(count-1);
    const reset = () => setCount(initialValue);
    return {count, increment, decrement, reset}
}

export default useCounter;
