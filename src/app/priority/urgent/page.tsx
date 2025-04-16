import { Priority } from "@/lib/constant";
import ReusablePriorityPage from "../reusablePriorityPage";

function Urgent() {
  return <ReusablePriorityPage priority={Priority.Urgent} />;
}

export default Urgent;
