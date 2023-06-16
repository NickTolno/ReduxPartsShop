import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Products, Checkout, ThankYou, ItemCardNewTest } from "../pages";
import TestFonts from "../pages/TestFonts/TestFonts";
import TestColors from "../pages/TestColors/TestColors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "/test-fonts",
    element: <TestFonts />,
  },
  {
    path: "/test-colors",
    element: <TestColors />,
  },
  {
    path: "/item-card-new-test",
    element: <ItemCardNewTest />,
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
