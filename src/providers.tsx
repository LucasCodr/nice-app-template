import { HeroUIProvider } from "@heroui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";
import { queryClient } from "~/lib/query.ts";

export function Providers({ children }: PropsWithChildren) {
  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        {children}
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
