import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import DataProvider from "./context/DataContext";
import { Router } from "react-router-dom";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <App />
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
