// src/App.tsx
import { BrowserRouter, useRoutes } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />
  },
];

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      
    </>
  );
}

export default App;
