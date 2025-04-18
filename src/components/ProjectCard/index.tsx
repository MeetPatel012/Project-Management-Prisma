import { Project } from "@/lib/constant";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      <h3>{project.name}</h3>
      <h3>{project.description}</h3>
      <h3>Start Date: {project.startDate?.toLocaleDateString()}</h3>
      <h3>End Date: {project.endDate?.toLocaleDateString()}</h3>
    </div>
  );
};

export default ProjectCard;
