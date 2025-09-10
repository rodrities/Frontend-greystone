import React, { useState } from "react";

export default function ContadorPage() {
  const [count, setCount] = useState<number>(0);

  return (
    <main >
      <div >
        <h1 >Contador</h1>
        <p >{count}</p>
        <div >
          <button
            onClick={() => setCount(count - 1)}

          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}    >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
