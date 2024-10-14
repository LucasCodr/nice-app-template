import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="container mx-auto flex min-h-[calc(100vh-65px)] items-center justify-center p-4">
      <h1 className="font-semibold text-4xl">Let's build a nice app!</h1>
    </div>
  ),
});
