'use server'


import { PrismaClient, Project, Task, User } from "@prisma/client";

export interface SearchResult {
  tasks?: Task[];
  projects?: Project[];
  users?: User[];
}
const prisma = new PrismaClient();

export async function search(query: string): Promise<SearchResult> {
  const tasks = await prisma.task.findMany({
    where: {
      OR: [
        { title: { contains: query } },
        { description: { contains: query } },
      ],
    },
    include: {
      author: true,
      assignee: true,
    },
  });

  const projects = await prisma.project.findMany({
    where: {
      OR: [
        { name: { contains: query } },
        { description: { contains: query } },
      ],
    },
  });

  const users = await prisma.user.findMany({
    where: {
      OR: [{ username: { contains: query } }],
    },
  });

  return { tasks, projects, users };
}