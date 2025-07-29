// src/hooks/useScrollNavigation.js
import { useState } from "react";

export const useScrollNavigation = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionId);
    }
  };

  return {
    currentSection,
    setCurrentSection,
    scrollToSection,
  };
};
