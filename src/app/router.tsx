import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index: true, Component: Home},
            {path: "blog", Component: Blog},
            {path: "projects", Component: Projects},
            {path: "contact", Component: Contact}
        ]

    }
]);