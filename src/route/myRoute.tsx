// src/route/myRoute.js
import BaseStructure from "@/BaseStructure";
import Account from "@/components/Account/Account";
import NotificationAccount from "@/components/Account/NotificationAccount";
import PersonalInformation from "@/components/Account/PersonalInformation";
import Security from "@/components/Account/Security";
import Ecommerce from "@/components/ecommerce/Ecommerce";
import Marketing from "@/components/marketing/Marketing";
import Project from "@/components/project/Project";
import { createBrowserRouter, Navigate } from "react-router-dom";


const routes = [
  {
    path: "/",
    element: <BaseStructure />,
    children: [
      { index: true, element: <Navigate to="/ecommerce" replace /> },
      { path: "ecommerce", element: <Ecommerce /> },
      { path: "project", element: <Project /> },
      { path: "marketing", element: <Marketing /> },
      {
        path: "account",
        element: <Account />,
        children: [
          { path: "profile", element: <PersonalInformation /> },
          { path: "security", element: <Security /> },
          { path: "notification", element: <NotificationAccount /> },
        ],
      },
    ],
  },
];

export const myR = createBrowserRouter(routes);
