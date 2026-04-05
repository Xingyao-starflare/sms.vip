import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import FloatingContact from "./components/FloatingContact";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Voice from "./pages/Voice";
import Data from "./pages/Data";
import Pricing from "./pages/Pricing";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/message"} component={Message} />
      <Route path={"/voice"} component={Voice} />
      <Route path={"/data"} component={Data} />
      <Route path={"/pricing"} component={Pricing} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
          <FloatingContact />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
