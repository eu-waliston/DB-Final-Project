
import { Home } from "@/pages/dashboard";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {

        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      
    ],
  },
];

export default routes;
