import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import ProgressBar from "./framerComponent/ProgressBar";
import ExitAndEnterAnimation from "./framerComponent/ExitAndEnterAnimation";




const AppLayout = () => {
    
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Outlet />
        <Footer/>
      </div>
    );
  };


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            }, 
            {
              path: "/progress-bar",
              element: <ProgressBar/>
            },
            {
              path: "exit-and-enter-animation",
              element: <ExitAndEnterAnimation/>
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);