// source goes here
import React from "react";
import { createRoot } from "react-dom/client";
import Multiplicator from "./pages/Multiplicator";

const app = () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<Multiplicator />);
};

export default app;
