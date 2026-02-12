import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, ChevronDown, ChevronUp } from "lucide-react";
import HeaderCard from "./HeaderCard";
import EducationCard from "./EducationCard";
import CertificationsProjectsCard from "./CertificationsProjectsCard";
import ExperienceCard from "./ExperienceCard";
import CodeSection from "./CodeSection";
import SidebarProfile from "./SidebarProfile";

export default function App() {
  const [showExperience, setShowExperience] = useState(false);
  const toggleExperience = () => setShowExperience(!showExperience);

  return (
    <main className="min-h-screen bg-[#F0F9FF] text-gray-900 p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-6">
          <HeaderCard />
          <EducationCard />
          <CertificationsProjectsCard />
          <ExperienceCard
            showExperience={showExperience}
            toggleExperience={toggleExperience}
            ChevronUp={ChevronUp}
            ChevronDown={ChevronDown}
          />
          <section id="code">
            <CodeSection />
          </section>
        </div>
        <SidebarProfile />
      </div>
    </main>
  );
}
