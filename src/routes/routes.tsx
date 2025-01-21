import { createBrowserRouter } from "react-router-dom";
import { ShoppingList } from "../components";
import { Login, Register } from "../pages";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <ShoppingList/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])