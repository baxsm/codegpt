import ThemeProvider from "./providers/ThemeProvider";
import LandingPage from "./scenes/LandingPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <div className="bg-backgroundLight dark:bg-backgroundDark gradientMain">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
