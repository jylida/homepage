import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
const Introduction = lazy(() => import("./HomePage/Introduction"));
const HireFrontPage = lazy(() => import("./HomePage/hireFrontPage/index"));
const Administration = lazy(() => import("./HomePage/Administration"));
const HomePageContent = lazy(() => import("./HomePage/content/index"));
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
  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <RouterProvider router={routers} />
    </Suspense>
  );
}

export default App;
