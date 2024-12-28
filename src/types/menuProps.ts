import React from "react";

export type MenuProps = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
};
