import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import BICS from "./pages/BICS";
import Chatbot from "./pages/Chatbot";
import Collaborations from "./pages/Collaborations";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import Session1 from "./pages/sessions/Session1";
import Session2 from "./pages/sessions/Session2";
import Session3 from "./pages/sessions/Session3";
import Session4 from "./pages/sessions/Session4";
import Session5 from "./pages/sessions/Session5";
import Session6 from "./pages/sessions/Session6";
import Session7 from "./pages/sessions/Session7";
import Session8 from "./pages/sessions/Session8";
import Session9 from "./pages/sessions/Session9";
import Session10 from "./pages/sessions/Session10";
import Session11 from "./pages/sessions/Session11";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/bics" element={<BICS />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/bics/session1" element={<Session1 />} />
          <Route path="/bics/session2" element={<Session2 />} />
          <Route path="/bics/session3" element={<Session3 />} />
          <Route path="/bics/session4" element={<Session4 />} />
          <Route path="/bics/session5" element={<Session5 />} />
          <Route path="/bics/session6" element={<Session6 />} />
          <Route path="/bics/session7" element={<Session7 />} />
          <Route path="/bics/session8" element={<Session8 />} />
          <Route path="/bics/session9" element={<Session9 />} />
          <Route path="/bics/session10" element={<Session10 />} />
          <Route path="/bics/session11" element={<Session11 />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
