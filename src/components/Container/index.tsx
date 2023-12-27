import { PropsWithChildren } from "react";

import "@/components/Container/style.scss";

export function Container({ children }: PropsWithChildren) {
  return <div className="container">{children}</div>;
}
