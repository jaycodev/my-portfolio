import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const stored = localStorage.getItem("theme");
    if (stored) return stored;

    if (document.documentElement.classList.contains("dark")) {
      return "dark";
    }
    if (document.documentElement.classList.contains("light")) {
      return "light";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const disableTransitionsTemporarily = () => {
    const root = document.documentElement;
    root.classList.add("[&_*]:!transition-none");
    setTimeout(() => {
      root.classList.remove("[&_*]:!transition-none");
    }, 100);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    const currentTheme = root.classList.contains("dark") ? "dark" : "light";
    if (currentTheme === theme) return;

    disableTransitionsTemporarily();

    root.classList.remove("dark", "light");
    root.classList.add(theme);

    localStorage.setItem("theme", theme);

    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "dark" ? "oklch(0.141 0.005 285.823)" : "oklch(1 0 0)"
      );
    }
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full scale-95 relative [&>svg]:!transition-all"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="size-4 rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-0 dark:opacity-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
}
