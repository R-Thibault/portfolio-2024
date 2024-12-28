"use client";

import { cn } from "@/lib/utils";
import { MenuProps } from "@/types/menuProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItem({ children, href, onClick }: MenuProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <li>
      <Link
        className={cn(
          "block p-2 hover:text-lg hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
          isActive &&
            "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground"
        )}
        href={href}
        onClick={handleClick}
      >
        {children}
      </Link>
    </li>
  );
}
