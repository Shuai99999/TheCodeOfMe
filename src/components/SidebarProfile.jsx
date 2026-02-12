// components/SidebarProfile.jsx
import React from "react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import SkillList from "./SkillList";

export default function SidebarProfile() {
  return (
    <div className="rounded-xl overflow-hidden border border-sky-200 bg-white shadow-xl">
      <img
        src="/portrait.jpg"
        alt="Shuai Gao portrait"
        className="w-full h-full object-cover aspect-video"
      />
      <div className="p-4 text-sm text-center">
        <h3 className="text-lg font-semibold text-sky-700 mb-2 text-center">
          Shuai Gao
        </h3>
        <p className="sidebar-intro text-sky-700">
          Hi, I’m a full stack and mobile developer with a strong backend
          foundation and over 15 years of experience in enterprise systems. I
          specialize in building scalable web and cross-platform applications
          using Node.js, Express, React, and React Native. With a deep
          understanding of databases and production environments, I enjoy
          designing reliable systems that perform well under real-world
          constraints. When I’m not coding, I’m probably exploring new game
          worlds, hitting the gym (sometimes), or spending quality time with my
          family. For me, it’s all about balance — building great software by
          day, enjoying life by heart.
        </p>
      </div>
      <div className="p-4 border-t border-sky-100">
        <h3 className="text-lg font-semibold text-sky-700 mb-2 flex items-center justify-center gap-2">
          <Sparkles size={20} aria-hidden />
          My Core Skills
        </h3>
        <SkillList />
      </div>
    </div>
  );
}
