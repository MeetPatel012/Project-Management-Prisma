"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  const isSlidebarCollapsed = useAppSelector(
    (state) => state.global.isSliderCollapsed,
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {sidebar}
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
          isSlidebarCollapsed ? "" : "md:pl-64"
        } `}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  return (
    <StoreProvider>
      <DashboardLayout sidebar={sidebar}>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
