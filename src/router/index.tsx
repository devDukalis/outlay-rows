import { Route, Routes } from "react-router-dom";

import { NotFound } from "@/pages/NotFound";
import { CMP } from "@/pages/CMP";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CMP />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
