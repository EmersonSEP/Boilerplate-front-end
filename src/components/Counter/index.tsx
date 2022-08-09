import { useState } from "react";
import useGlobalContext from "../../hooks/useGlobalContext";

function Counter(){
const { count, setCount} = useGlobalContext();

return (
    <div className="container flex  flex-col items-center justify-center w-[300px] h-[300px]">
        <h1>{count}</h1>
      <button className="border px-4 py-2 rounded bg-orange-600" onClick={() => setCount ((count +1))}>Incrementar</button>
    </div>
  )
}

export default Counter;