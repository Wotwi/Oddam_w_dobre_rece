import "./styles/main.scss";
import Home from "./components/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login.jsx";
import ThreeColumns from "./components/ThreeColumns.jsx";
import Register from "./components/Register.jsx";

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
        {
            path: "/register",
            element: <Register />
        }
    ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
