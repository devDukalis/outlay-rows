import { PropsWithChildren } from "react";

import "@/components/Container/style.scss";

export default function Container({ children }: PropsWithChildren) {
  return <div className="container">{children}</div>;
}
