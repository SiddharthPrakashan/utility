import { useEffect, useId, useState } from "react";
import { Menu, Wrench, X } from "lucide-react";

import { Button } from "@ui/button";
import { mainNav, siteConfig } from "@config/site";
import { cn } from "@lib/utils";

function normalizePath(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const currentPath = normalizePath(window.location.pathname);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    // Close the mobile menu if the viewport grows to the desktop layout.
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const linkClass = (href: string) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50",
      normalizePath(href) === currentPath
        ? "text-foreground"
        : "text-muted-foreground",
    );

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a
          href="/"
          className="flex items-center gap-2 rounded-md font-semibold outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <Wrench className="size-5" aria-hidden="true" />
          <span className="hidden sm:inline">{siteConfig.name}</span>
          <span className="sm:hidden">{siteConfig.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {mainNav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={linkClass(link.href)}
                aria-current={
                  normalizePath(link.href) === currentPath ? "page" : undefined
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>

      <div id={menuId} hidden={!open} className="border-t md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          {mainNav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(linkClass(link.href), "block")}
                aria-current={
                  normalizePath(link.href) === currentPath ? "page" : undefined
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
