'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        
      )}
    >
    

      {/* Menu */}
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
          className=" text-black px-3 py-1 rounded"
        >
          <Link href="#">Home</Link>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="Our Courses"
          className=" text-black px-3 py-1 rounded"
        >
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music</HoveredLink>
            <HoveredLink href="/courses">Advanced composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"></MenuItem>
         </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
 