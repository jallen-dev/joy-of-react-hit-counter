"use client";
import React, { useState } from "react";

export function Reveal({ children }) {
  const [censored, setCensored] = useState(true);

  return (
    <button
      className={censored ? "censored" : undefined}
      onClick={() => setCensored(!censored)}
    >
      {children}
    </button>
  );
}
