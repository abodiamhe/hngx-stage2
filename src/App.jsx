import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Ticket from "./components/ticket/Ticket";
import RootLayout from "./components/ticket/Root";
import About from "./components/ticket/About";
import MyTicket from "./components/ticket/MyTicket";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Ticket /> },
        { path: "about", element: <About /> },
        { path: "tickets", element: <MyTicket /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
