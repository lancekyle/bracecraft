import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import PlanterFasciitisGuide from "@/pages/PlanterFasciitisGuide";
import VideoLibrary from "@/pages/VideoLibrary";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import PlanterFasciitisGuides from "@/pages/guides/PlanterFasciitisGuides";
import TrainingGuide from "@/pages/guides/TrainingGuide";
import Chapter1 from "@/pages/guides/chapters/Chapter1";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/guides/plantar-fasciitis" component={PlanterFasciitisGuides} />
          <Route path="/guides/plantar-fasciitis/training-guide" component={TrainingGuide} />
          <Route path="/guides/plantar-fasciitis/training-guide/chapter-1" component={Chapter1} />
          <Route path="/videos" component={VideoLibrary} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
