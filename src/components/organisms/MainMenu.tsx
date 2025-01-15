"use client";

import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@/components/ui/dialog";
import { MenuIcon } from "lucide-react";
import MenuItem from "../molecules/MenuItem";
import LangageSelector from "../molecules/LangageSelector";

import { useTranslations } from "next-intl";

export default function MainMenu() {
  const navT = useTranslations("navbar");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <nav className="sticky top-0 z-50 bg-background/75 py-4 backdrop-blur-sm">
      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center px-4">
        <Drawer
          direction="right"
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
        >
          <DrawerTrigger asChild>
            <button
              aria-label="Open menu"
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DialogTitle className="sr-only">Main Menu</DialogTitle>
            <ul className="py-6 space-y-4 ">
              <MenuItem href={"/"} onClick={handleClose}>
                {navT("home")}
              </MenuItem>
              <MenuItem href={"/projects/1"} onClick={handleClose}>
                {navT("projects")}
              </MenuItem>
              <MenuItem href={"/contact"} onClick={handleClose}>
                {navT("contact")}
              </MenuItem>
            </ul>
          </DrawerContent>
        </Drawer>
        <LangageSelector />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between w-full px-4">
        <ul className="flex grow justify-center md:gap-24">
          <MenuItem href={"/"}>{navT("home")}</MenuItem>
          <MenuItem href={"/projects/1"}>{navT("projects")}</MenuItem>
          <MenuItem href={"/contact"}>{navT("contact")}</MenuItem>
        </ul>
        <div>
          <LangageSelector />
        </div>
      </div>
    </nav>
  );
}
