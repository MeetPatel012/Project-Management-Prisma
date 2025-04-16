import { Priority } from "@/lib/constant";
import ReusablePriorityPage from "../reusablePriorityPage";

function High() {
  return <ReusablePriorityPage priority={Priority.High} />;
}

export default High;
