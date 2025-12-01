// APP LAYOUT COMPONENT
// This wraps all routes with providers and global UI elements

import { ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "@/components/ThemeProvider";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ScrollToTop from "@/components/ScrollToTop";
import { AIChatWidget } from "@/components/AIChatWidget";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});

const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="animate-pulse text-muted-foreground">Loading...</div>
            </div>
          }>
            <ScrollToTop />
            <BreadcrumbNav />
            <Outlet />
            <AIChatWidget />
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default Layout;
