import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WalletProvider } from "@/contexts/WalletContext";
import ProfessionalHome from "@/pages/ProfessionalHome";
import About from "@/pages/About";
import Work from "@/pages/Work";
import Projects from "@/pages/Projects";
import Creative from "@/pages/Creative";
import Contact from "@/pages/Contact";
import BuildLog from "@/pages/BuildLog";
import Redeem from "@/pages/Redeem";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ProfessionalHome} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/projects" component={Projects} />
      <Route path="/creative" component={Creative} />
      <Route path="/contact" component={Contact} />
      <Route path="/build-log" component={BuildLog} />
      <Route path="/redeem" component={Redeem} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </WalletProvider>
    </QueryClientProvider>
  );
}

export default App;
