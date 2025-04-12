"use client";

import dynamic from "next/dynamic";
import { getSidebarProjects } from "@/server-actions/_sidebar_action";

const SidebarWrapper = dynamic(() => import("./SidebarComponent"), {
  ssr: false,
});

export default async function Sidebar() {
  const projects = await getSidebarProjects();
  return <SidebarWrapper initialProjects={projects} />;
}
