"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Counter</h1>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </main>
  );
}