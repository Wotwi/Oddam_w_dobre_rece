import "./styles/main.scss";
import Home from "./components/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login.jsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
    ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
