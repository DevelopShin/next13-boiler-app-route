"use client";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const onChanger = useCallback(() => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }, [setTheme, theme]);
  return (
    <div>
      <button
        className="px-2 py-[10px] rounded-sm bg-zinc-900 dark:bg-zinc-100 "
        onClick={onChanger}
      >
        <>
          <span className="inline-block text-sm dark:hidden text-zinc-100 ">
            Switch to Dark
          </span>
          <span className="hidden text-sm dark:inline-block text-zinc-800 ">
            Switch to Light
          </span>
        </>
      </button>
    </div>
  );
};
