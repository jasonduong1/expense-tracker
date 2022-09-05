import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetProvider } from "./contexts/BudgetsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </React.StrictMode>
);
