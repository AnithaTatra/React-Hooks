import { useState , useEffect, useCallback } from "react";

function Example() {

  const initialCount = +localStorage.getItem('storageaccount') || 0;

  const[counter, setCounter] = useState(initialCount);
  

  const increment = useCallback(() => {

    setCounter(count => count + 1);

  },[])

  const decrement = () => {

    setCounter(count => count - 1);

  }

  const reset = () => {

    setCounter(0);

  }

  useEffect(() => localStorage.setItem('storageaccount', counter));

 

  return (

        <div className="btn_container">
          <div> Counter Value : {counter}</div>
          <div className="py-3">
          <button onClick={increment}>Increase Count Value</button>
          </div>
          <div className="py-3">
          <button onClick={decrement}>Decrease Count Value</button>
          </div>
          <div className="py-3">
          <button onClick={reset}>Reset Count</button>
          </div>
        </div>
  )

  }




export {Example};