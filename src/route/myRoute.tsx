
import BaseStructure from "@/BaseStructure";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const Ecommerce = lazy(() => import("@/components/ecommerce/Ecommerce"))
const Project = lazy(() => import("@/components/project/Project"));
const Marketing = lazy(() => import("@/components/marketing/Marketing"));
const Account = lazy(() => import("@/components/Account/Account"));
const PersonalInformation = lazy(() => import("@/components/Account/PersonalInformation"));
const NotificationAccount = lazy(() => import("@/components/Account/NotificationAccount"));
const Security = lazy(() => import("@/components/Account/Security"));
const routes = [
  {
    path: "/",
    element: <BaseStructure />,
    children: [
      { index: true, element: <Navigate to="/ecommerce" replace /> },
      { path: "/ecommerce", element: <Ecommerce /> },
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
