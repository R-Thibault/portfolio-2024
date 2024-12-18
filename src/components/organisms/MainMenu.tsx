"use client";

import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@/components/ui/dialog";
import { MenuIcon } from "lucide-react";
import MenuItem from "../molecules/MenuItem";

export default function MainMenu() {
  return (
    <nav className="sticky top-0 z-50 bg-background/75 py-4 backdrop-blur-sm">
      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center px-4">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button aria-label="Open menu">
              <MenuIcon className="h-6 w-6" />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DialogTitle className="sr-only">Main Menu</DialogTitle>
            <ul className="py-6 space-y-4 ">
              <MenuItem href={"/"}>home</MenuItem>
              <MenuItem href={"/projects/1"}>projects</MenuItem>
              <MenuItem href={"/contact"}>contact</MenuItem>
            </ul>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Menu */}
      <div className=" hidden md:flex ">
        <ul className=" grow flex justify-center">
          <MenuItem href={"/"}>home</MenuItem>
          <MenuItem href={"/projects/1"}>projects</MenuItem>
          <MenuItem href={"/contact"}>contact</MenuItem>
        </ul>
      </div>
    </nav>
  );
}
