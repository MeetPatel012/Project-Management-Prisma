import { Priority } from "@/lib/constant";
import ReusablePriorityPage from "../reusablePriorityPage";

function Backlog() {
  return <ReusablePriorityPage priority={Priority.Backlog} />;
}

export default Backlog;
