import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/items/ListItems";
import CreateItems from "./pages/items/CreateItem";
import ShowItem from "./pages/items/ShowItem";
import Updateitem from "./pages/items/UpdateItem";
import ItemsLayout from "./pages/items/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{index: true, element: <Home />},
            {
                path: "items",
                element: <ItemsLayout />,
                children: [
                    { index: true, element: <ListItems /> },
                    { path: "new", element: <CreateItems /> },
                    { path: ":id", element: <ShowItem /> },
                    { path: ":id/update", element: <Updateitem /> },
                ]
            },

        ]
    }
])


export default router