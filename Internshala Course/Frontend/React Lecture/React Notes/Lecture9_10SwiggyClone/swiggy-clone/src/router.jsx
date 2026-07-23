import { createBroweserRouter } from "react-router-dom";
import App from "./App";

const router = createBroweserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/offer",
      },
    ],
  },
]);

export default router;
