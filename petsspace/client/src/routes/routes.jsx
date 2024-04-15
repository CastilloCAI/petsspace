import { createBrowserRouter } from "react-router-dom";
import PetsAdd from "../pages/PetsAdd";
import PetsDetalle from "../pages/PetsDetalle";
import PetsHome from "../pages/PetsHome";
import PetsEditar from "../pages/PetsEditar";

export default createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <PetsHome />,
      },
      {
        path: "/pets/new",
        element: <PetsAdd />,
      },
      {
        path: "/pets/details/:id",
        element: <PetsDetalle />,
      },
      {
        path: "/pets/:id/edit",
        element: <PetsEditar />,
      },
    ],
  },
]);
