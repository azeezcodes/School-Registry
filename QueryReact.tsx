"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();

interface QueryReactProps {
   children: ReactNode;
}

export default function QueryReact({ children }: QueryReactProps) {
   return (
      <QueryClientProvider client={queryClient}>
         {children}
         <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
   );
}
