"use client";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [state, setState] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => {
        setState(JSON.stringify(data));
      });
  }, []);

  return (
    <div>
      <h1>CSR Page</h1>
      <pre>{state}</pre>
    </div>
  );
}
