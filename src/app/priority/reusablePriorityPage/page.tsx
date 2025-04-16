import { Priority } from "@/lib/constant";
import { getTasksByUserAndPriority } from "@/server-actions/_priority_actions";
import ReusablePriorityPageComponent from "./PriorityPageComponent";

interface PageProps {
  params: {};
  searchParams: {
    priority?: Priority;
  };
}

export default async function PriorityPage({ searchParams }: PageProps) {
  const userId = 1; // You might want to get this from session/auth
  const priority = searchParams.priority as Priority;
  const tasks = await getTasksByUserAndPriority(userId, priority);
  return (
    <ReusablePriorityPageComponent initialTasks={tasks} priority={priority} />
  );
}
