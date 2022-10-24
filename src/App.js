import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Introduction from "./HomePage/Introduction";
import HireFrontPage from "./HomePage/hireFrontPage";
import Administration from "./HomePage/Administration";
import HomePageContent from "./HomePage/content";
function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <HomePageContent />,
        },
        {
          path: "/intro",
          element: <Introduction />,
        },
        {
          path: "hire",
          element: <HireFrontPage />,
        },
        {
          path: "admin",
          element: <Administration />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
