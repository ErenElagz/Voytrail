"use client";

import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <Icon icon="solar:adhesive-plaster-bold-duotone" width="30" height="30" />
      <text className="text-2xl font-light text-zinc-800 dark:text-zinc-600">
        Welcome to&nbsp;
        <span className="font-semibold">Voytrail!</span>
      </text>
      <div className="absolute bottom-4 right-4 opacity-50"></div>
    </div>
  );
}
