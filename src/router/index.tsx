import { Route, Routes } from "react-router-dom";

import { Main } from "@/components/Main";
import { BuildingAndConstructionWorks } from "@/components/BuildingAndConstructionWorks";
import { Management } from "@/components/Management";
import { NotFound } from "@/pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/view" element={<BuildingAndConstructionWorks />} />
      <Route path="/management" element={<Management />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
