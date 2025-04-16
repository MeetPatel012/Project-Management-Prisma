"use server";

import { Priority, Status } from "@/lib/constant";
import prisma from "@/lib/prisma";

export async function getTasks(projectId: number) {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: projectId,
      },
      include: {
        author: true,
        assignee: true,
      },
    });

    return tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description || undefined, // Convert null to undefined
      status: (task.status as Status) || undefined,
      priority: (task.priority as Priority) || undefined,
      tags: task.tags || undefined,
      startDate: task.startDate?.toISOString() || undefined,
      dueDate: task.dueDate?.toISOString() || undefined,
      points: task.points || undefined,
      projectId: task.projectId,
      authorUserId: task.authorUserId,
      assignedUserId: task.assignedUserId || undefined,
      author: {
        userId: task.author.userId,
        username: task.author.username,
        profilePictureUrl: task.author.profilePictureUrl || undefined,
        cognitoId: task.author.cognitoId,
        teamId: task.author.teamId || undefined,
        email: "", // Required by User interface
      },
      assignee: task.assignee
        ? {
            userId: task.assignee.userId,
            username: task.assignee.username,
            profilePictureUrl: task.assignee.profilePictureUrl || undefined,
            cognitoId: task.assignee.cognitoId,
            teamId: task.assignee.teamId || undefined,
            email: "", // Required by User interface
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error("Failed to fetch tasks");
  }
}

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
  }
}
