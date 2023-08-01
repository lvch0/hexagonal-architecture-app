import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TrpcProvider from "./trpc.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <TrpcProvider>
            <App />
        </TrpcProvider>
    </React.StrictMode>
);
