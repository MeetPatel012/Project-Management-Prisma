import { getTimelineProjects } from "../../server-actions/_timeline_action";
import TimelineComponent from "./TimelineComponent";

export default async function TimelinePage() {
  try {
    const projects = await getTimelineProjects();
    return <TimelineComponent initialProjects={projects} />;
  } catch (error) {
    // Return a simple error UI
    return (
      <div className="p-4 text-red-500">
        Error loading timeline projects. Please try again later.
      </div>
    );
  }
}
