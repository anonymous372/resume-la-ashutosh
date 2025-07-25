import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../screens/about";
import Research from "../screens/research";
import Teaching from "../screens/teaching";
import Contact from "../screens/contact";
import NoMatch from "../screens/noMatch";
import Home from "../screens/home";
import Post from "../screens/writingblog";
import Infographic from "../screens/infographic";
import MieTheory from "../mietheory/MieTheory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/research",
        element: <Research />,
      },
      {
        path: "/teaching",
        element: <Teaching />,
      },
      {
        path: "/infographic",
        element: <Infographic />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Post />,
      },
      {
        path: "/mietheory",
        element: <MieTheory/>
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

export default router;
