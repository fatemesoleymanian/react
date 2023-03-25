'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

const queryWrapper = ({ children }) =>(
    <QueryClientProvider>
        {children}
    </QueryClientProvider>
)

export default queryWrapper;
