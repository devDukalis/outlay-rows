import { lazy } from "react";

import { Route, Routes } from "react-router-dom";

const NotFound = lazy(() => import("@/pages/NotFound"));
const CMP = lazy(() => import("@/pages/CMP"));

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CMP />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
