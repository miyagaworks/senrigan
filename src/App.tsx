import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import ValueProposition from "./components/ValueProposition";
import Services from "./components/Services";
import Technology from "./components/Technology";
import TechShowcase from "./components/TechShowcase";
import Pricing from "./components/Pricing";
import News from "./components/News";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Books } from "./components/Books";
import DesignValuePage from "./components/values/design";
import FunctionValuePage from "./components/values/function";
import ScalabilityValuePage from "./components/values/scalability";
import Privacy from "./components/Privacy";
import Security from "./components/Security";
import SpecifiedCommercialTransactions from "./components/SpecifiedCommercialTransactions";
import ShareNewsDetail from "./components/ShareNewsDetail";
import Sitemap from "./components/Sitemap/index";
import UIDesignApproach from "./components/values/design/UIDesignApproach";
import WebDevelopment from "./services/WebDevelopment";
import MobileAppDevelopment from "./services/MobileAppDevelopment";
import UIUXDesign from "./services/UIUXDesign";
import FrontendDevelopment from "./components/technology/Frontend";
import BackendDevelopment from "./components/technology/Backend";
import CloudInfrastructure from "./components/technology/Cloud";
import SecurityTechnology from "./components/technology/Security";
import AI from "./components/technology/AI";
import IoT from "./components/technology/IoT";
import Careers from "./components/careers";
import ApplicationForm from "./components/careers/ApplicationForm";
import { HelmetProvider } from "react-helmet-async";
import RootLayout from "./layouts/RootLayout";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const Divider = () => (
    <div className="container mx-auto px-4">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gray-200">
      <div className="relative z-10">
        <Header />
        <Hero />
        <div className="bg-gray-200">
          <ValueProposition />
          <Divider />
          <Services />
          <Divider />
          <Technology />
          <Divider />
          <Pricing />
          <Divider />
          <TechShowcase />
          <Divider />
          <News />
          <Divider />
          <Company />
          <Divider />
          <Books />
          <Divider />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

const ValuesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-gray-200">
      <div className="relative z-10">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <RootLayout>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />} />

            {/* Values Routes */}
            <Route
              path="/values/design"
              element={
                <ValuesLayout>
                  <DesignValuePage />
                </ValuesLayout>
              }
            />
            <Route
              path="/values/function"
              element={
                <ValuesLayout>
                  <FunctionValuePage />
                </ValuesLayout>
              }
            />
            <Route
              path="/values/scalability"
              element={
                <ValuesLayout>
                  <ScalabilityValuePage />
                </ValuesLayout>
              }
            />
            <Route
              path="/values/design/ui-approach"
              element={
                <ValuesLayout>
                  <UIDesignApproach />
                </ValuesLayout>
              }
            />

            {/* Services Routes */}
            <Route
              path="/services/web-development"
              element={
                <ValuesLayout>
                  <WebDevelopment />
                </ValuesLayout>
              }
            />
            <Route
              path="/services/mobile-development"
              element={
                <ValuesLayout>
                  <MobileAppDevelopment />
                </ValuesLayout>
              }
            />
            <Route
              path="/services/design"
              element={
                <ValuesLayout>
                  <UIUXDesign />
                </ValuesLayout>
              }
            />

            {/* Technology Routes */}
            <Route
              path="/technology/frontend"
              element={
                <ValuesLayout>
                  <FrontendDevelopment />
                </ValuesLayout>
              }
            />
            <Route
              path="/technology/backend"
              element={
                <ValuesLayout>
                  <BackendDevelopment />
                </ValuesLayout>
              }
            />
            <Route
              path="/technology/cloud"
              element={
                <ValuesLayout>
                  <CloudInfrastructure />
                </ValuesLayout>
              }
            />
            <Route
              path="/technology/security"
              element={
                <ValuesLayout>
                  <SecurityTechnology />
                </ValuesLayout>
              }
            />
            <Route
              path="/technology/ai"
              element={
                <ValuesLayout>
                  <AI />
                </ValuesLayout>
              }
            />
            <Route
              path="/technology/iot"
              element={
                <ValuesLayout>
                  <IoT />
                </ValuesLayout>
              }
            />

            {/* Company Routes */}
            <Route
              path="/company/about"
              element={
                <ValuesLayout>
                  <Company mode="about" />
                </ValuesLayout>
              }
            />
            <Route
              path="/company/news"
              element={
                <ValuesLayout>
                  <News standalone />
                </ValuesLayout>
              }
            />

            {/* Other Routes */}
            <Route
              path="/pricing"
              element={
                <ValuesLayout>
                  <Pricing standalone />
                </ValuesLayout>
              }
            />
            <Route
              path="/privacy"
              element={
                <ValuesLayout>
                  <Privacy />
                </ValuesLayout>
              }
            />
            <Route
              path="/security"
              element={
                <ValuesLayout>
                  <Security />
                </ValuesLayout>
              }
            />
            <Route
              path="/specified-commercial-transactions"
              element={
                <ValuesLayout>
                  <SpecifiedCommercialTransactions />
                </ValuesLayout>
              }
            />
            <Route
              path="/news/share-release"
              element={
                <ValuesLayout>
                  <ShareNewsDetail />
                </ValuesLayout>
              }
            />
            <Route
              path="/sitemap"
              element={
                <ValuesLayout>
                  <Sitemap />
                </ValuesLayout>
              }
            />
            <Route
              path="/careers"
              element={
                <ValuesLayout>
                  <Careers />
                </ValuesLayout>
              }
            />
            <Route path="/careers/apply" element={<ApplicationForm />} />
          </Routes>
        </Router>
      </RootLayout>
    </HelmetProvider>
  );
}

export default App;