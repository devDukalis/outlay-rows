import { SelectContent } from "@/components/SelectContent";
import { Divider } from "@/components/Divider";
import { ProjectList } from "@/components/ProjectList";

import "@/components/SideBar/style.scss";

export function SideBar() {
  return (
    <aside className="aside">
      <SelectContent />
      <Divider />

      <ProjectList />
    </aside>
  );
}
