'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type Props{
    children? : ReactNode
}
const queryClient = new QueryClient();

const queryWrapper = ({ children }:Props) =>(
    <QueryClientProvider>
        {children}
    </QueryClientProvider>
)

export default queryWrapper;
