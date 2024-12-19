import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>error page</h1>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;