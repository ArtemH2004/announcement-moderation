import { ScrollToTop } from "@/common/components/ScrollToTop";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ERoutes } from "@/router/routes";
import { List } from "@/pages/list/List";
import { Item } from "@/pages/item/Item";
import { Empty } from "@/common/components/Empty";
import { Stats } from "@/pages/stats/Stats";

export default function RoutesProvider() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <Outlet />
            </>
          }
        >
          <Route index element={<Navigate to={ERoutes.LIST} replace />} />

          <Route element={<PageWrapper />}>
            <Route path={ERoutes.LIST} element={<List />} />
            <Route path={ERoutes.STATS} element={<Stats />} />
            <Route path={`${ERoutes.ITEM}/:id`} element={<Item />} />
            <Route path="*" element={<Empty />} />
          </Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
