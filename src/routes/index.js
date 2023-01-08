import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../screens/about";
import Research from "../screens/research";
import Teaching from "../screens/teaching";
import Contact from "../screens/contact";
import NoMatch from "../screens/noMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

export default router;
