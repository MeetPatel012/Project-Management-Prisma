import { Priority } from "@/lib/constant";
import { getTasksByUserAndPriority } from "@/server-actions/_priority_actions";
import ReusablePriorityPageComponent from "./PriorityPageComponent";

interface PriorityPageProps {
  priority: Priority;
}

export default async function PriorityPage({ priority }: PriorityPageProps) {
  const userId = 1; // You might want to get this from session/auth
  const tasks = await getTasksByUserAndPriority(userId, priority);
  return (
    <ReusablePriorityPageComponent initialTasks={tasks} priority={priority} />
  );
}
