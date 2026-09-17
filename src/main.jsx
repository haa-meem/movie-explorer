import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import App from "./App.jsx";
import Loading from "./components/Loading.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "movies",
        Component: Movies,
        loader: async () => {
          const res = await fetch("https://api.tvmaze.com/shows");
          if (!res.ok) {
            throw new Error("Failed to fetch shows");
          }
          return res.json();
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
