import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./pages/Error";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import Provider from "./provider/Provider";
import { Toaster } from "react-hot-toast";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/quiz",
        element: <Quiz></Quiz>,
        loader: () => fetch("/quizzes.json"),
      },
      { path: "quiz/result", element: <Result></Result> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster toastOptions={{ duration: 2000 }} />
    </Provider>
  </StrictMode>
);
