'use server'

import { PrismaClient, Task } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTasks(projectId: number): Promise<Task[]> {
  const tasks = await prisma.task.findMany({
    where: { projectId },
    include: {
      author: true,
      assignee: true,
      comments: true,
      attachments: true,
    },
  });
  return tasks;
}

export async function getTasksByUser(userId: number): Promise<Task[]> {
  const tasks = await prisma.task.findMany({
    where: {
      OR: [
        { authorUserId: userId },
        { assignedUserId: userId },
      ],
    },
    include: {
      author: true,
      assignee: true,
    },
  });
  return tasks;
}

export async function createTask(task: Partial<Task>): Promise<Task> {
  const newTask = await prisma.task.create({
    data: task as any,
    include: {
      author: true,
      assignee: true,
    },
  });
  return newTask;
}

export async function updateTaskStatus(taskId: number, status: string): Promise<Task> {
  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: { status },
    include: {
      author: true,
      assignee: true,
    },
  });
  return updatedTask;
}