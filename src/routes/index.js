import { lazy } from "react";
const HomePage = lazy(() => import("pages/HomePage"));
const mainRoutes = [
  {
    path: "/",
    title: "Home",
    component: HomePage,
  },
];

export default mainRoutes;
