// source goes here
import React from "react";
import { createRoot } from "react-dom/client";
import Multiplication from "./Multiplication";

const app = () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<Multiplication />);
};

export default app;
