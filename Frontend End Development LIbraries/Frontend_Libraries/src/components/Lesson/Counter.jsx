import { useState, useEffect } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component renders");
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

