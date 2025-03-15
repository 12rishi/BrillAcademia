import Dashboard from "@/components/Dashboard";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <Dashboard>{children}</Dashboard>;
};

export default layout;
