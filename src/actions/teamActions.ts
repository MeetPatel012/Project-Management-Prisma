'use server'

import { PrismaClient, Team } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTeams(): Promise<Team[]> {
  const teams = await prisma.team.findMany();
  return teams;
}