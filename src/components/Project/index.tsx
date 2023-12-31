import { Link } from "@/components/Link";

import ProjectIcon from "../../assets/icons/project.svg?react";

import "@/components/Project/style.scss";

interface Props {
  title: string;
  link: string;
}

export function Project({ title, link }: Props) {
  return (
    <div className="nav-container">
      <ProjectIcon className="project-icon" />

      <Link linkTo={link} title={title} isDecorated={false} />
    </div>
  );
}
