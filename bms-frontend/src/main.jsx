import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";

import { LocationProvide } from "./context/LocationContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <LocationProvide>
          <AuthProvider>
            <App />
          </AuthProvider>
        </LocationProvide>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);