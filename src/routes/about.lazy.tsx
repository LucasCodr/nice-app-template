import { Link } from "@nextui-org/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: () => (
    <div className="container mx-auto flex flex-col justify-center p-4">
      <h1 className="mb-4 font-bold text-2xl">About This App</h1>
      <p className="text-lg">
        I created this app to serve as a template for quickly
        building/prototyping nice client-side applications. It uses:
      </p>
      <ul className="mt-2 list-inside list-disc text-lg">
        <li>
          <Link
            href="https://tanstack.com/router"
            className="text-blue-500 underline"
            isExternal
          >
            Tanstack Router
          </Link>{" "}
          for routing
        </li>
        <li>
          <Link
            href="https://tanstack.com/query"
            className="text-blue-500 underline"
            isExternal
          >
            Tanstack Query
          </Link>{" "}
          for async state management
        </li>
        <li>
          <Link
            href="https://tailwindcss.com"
            className="text-blue-500 underline"
            isExternal
          >
            Tailwind CSS
          </Link>{" "}
          for styling
        </li>
        <li>
          <Link
            href="https://nextui.org"
            className="text-blue-500 underline"
            isExternal
          >
            NextUI
          </Link>{" "}
          for core styled components built with Tailwind
        </li>
        <li>
          <Link
            href="https://biomejs.dev"
            className="text-blue-500 underline"
            isExternal
          >
            Biome
          </Link>{" "}
          for maintaining code quality and formatting
        </li>
      </ul>
    </div>
  ),
});
