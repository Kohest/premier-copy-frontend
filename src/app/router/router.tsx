import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/main-layout";
import HomePage from "../../pages/home-page";
import ShowPage from "../../pages/show-page/show-page";
import AllPage from "../../pages/all";
import NotFound from "../../pages/not-found";
import SubscriptionsPage from "../../pages/subscriptions-page/subscriptions-page";
import ProfileSettings from "../../pages/profile-settings";
import ProtectedRoute from "../../shared/hocs/ProtectedRoute";
import ProfileFavorite from "../../pages/profile-favorite/profile-favorite";
import ProfileLayout from "../layout/profile-layout";
import SearchPage from "../../pages/search-page";
import CollectionPage from "../../pages/collection-page";

import CollectionsAllPage from "../../pages/collections-all-page";
import ContentPage from "../../pages/content-page";
import OrderPage from "../../pages/order-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "show",
        children: [
          {
            path: ":id",
            element: <ShowPage />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "all",
        element: <AllPage />,
      },
      {
        path: "subscriptions",
        element: <SubscriptionsPage />,
      },
      {
        path: "catalog",
        children: [
          {
            path: ":type",
            element: <ContentPage />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
          {
            index: true,
            element: <Navigate to="/catalog/movies" />,
          },
        ],
      },
      { path: "collections-all", element: <CollectionsAllPage /> },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "settings",
            element: (
              <ProtectedRoute>
                <ProfileSettings />
              </ProtectedRoute>
            ),
          },
          {
            path: "favorites",
            element: (
              <ProtectedRoute>
                <ProfileFavorite />
              </ProtectedRoute>
            ),
          },
          {
            index: true,
            element: <Navigate to="/profile/settings" replace={true} />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "/find",
        element: <SearchPage />,
      },
      {
        path: "/order",
        element: (
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/collection",
        children: [
          {
            path: ":id",
            element: <CollectionPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
