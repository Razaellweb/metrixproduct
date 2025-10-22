import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import ResetPassword from "./pages/auth/ResetPassword";
import Overview from "./pages/dashboard/Overview";
import Pricing from "./pages/dashboard/Pricing";
import PricingEdit from "./pages/dashboard/PricingEdit";
import Invoices from "./pages/dashboard/Invoices";
import Revenue from "./pages/dashboard/Revenue";
import Quickstart from "./pages/docs/Quickstart";
import { AuthProvider } from "@/features/auth-context";
import { ThemeProvider } from "@/features/theme-context";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Auth */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Dashboard (protected) */}
            <Route path="/dashboard" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
            <Route path="/dashboard/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
            <Route path="/dashboard/pricing/edit" element={<ProtectedRoute><PricingEdit /></ProtectedRoute>} />
            <Route path="/dashboard/invoices" element={<ProtectedRoute><Invoices /></ProtectedRoute>} />
            <Route path="/dashboard/revenue" element={<ProtectedRoute><Revenue /></ProtectedRoute>} />

            {/* Docs */}
            <Route path="/docs/quickstart" element={<ProtectedRoute><Quickstart /></ProtectedRoute>} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
