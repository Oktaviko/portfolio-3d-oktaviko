// src/components/layout/Layout.jsx
import React from "react";
import Background3D from "../common/Background3D";
import Navigation from "../common/Navigation";
import Footer from "../common/Footer";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import { useScrollNavigation } from "../../hooks/useScrollNavigation";

const Layout = () => {
  const { currentSection, scrollToSection } = useScrollNavigation();

  return (
    <div className="portfolio-layout">
      {/* 3D Background - Always rendered */}
      <Background3D />

      {/* Navigation */}
      <Navigation
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="main-content">
        <Home scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
