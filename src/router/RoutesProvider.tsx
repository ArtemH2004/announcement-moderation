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
            <Route path={ERoutes.LIST} element={<>List</>} />
            <Route path={ERoutes.STATS} element={<>Stats</>} />
            <Route path={`${ERoutes.ITEM}/:id`} element={<>Item</>} />
          </Route>

          <Route path="*" element={<>Error404</>} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
