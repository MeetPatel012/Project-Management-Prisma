import { Priority } from "@/lib/constant";
import ReusablePriorityPage from "../reusablePriorityPage";

function Low() {
  return <ReusablePriorityPage priority={Priority.Low} />;
}

export default Low;
