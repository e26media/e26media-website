import React, { Suspense, lazy } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage }))
);
const ServiceDetailPage = lazy(() =>
  import("./pages/ServiceDetailPage").then((m) => ({ default: m.ServiceDetailPage }))
);
const PortfolioPage = lazy(() =>
  import("./pages/PortfolioPage").then((m) => ({ default: m.PortfolioPage }))
);
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage }))
);

function PageLoader() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div
        className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin"
        aria-label="Loading page"
      />
    </div>
  );
}

function App() {
  return (
    <div className="App selection:bg-green-500/15 selection:text-green-900 font-body">
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
