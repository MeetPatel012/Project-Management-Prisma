'use server'

import { PrismaClient, Project } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProjects(): Promise<Project[]> {
  const projects = await prisma.project.findMany();
  return projects;
}

export async function createProject(project: Partial<Project>): Promise<Project> {
  const newProject = await prisma.project.create({
    data: project as any,
  });
  return newProject;
}