import { Fragment } from "react";

import { Project } from "@/components/Project";

import { projects } from "@/components/ProjectList/temp-data";

export function ProjectList() {
  return (
    <Fragment>
      {projects.map((project) => (
        <Project key={project.id} title={project.title} link={project.link} />
      ))}
    </Fragment>
  );
}
