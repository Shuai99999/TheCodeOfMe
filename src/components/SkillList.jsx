// components/SkillList.jsx
import React from "react";
import Skill from "./Skill";

const skills = [
  // Backend
  {
    skill: "Node.js",
    level: "advanced",
    color: "#3C873A",
  },
  {
    skill: "Express.js",
    level: "advanced",
    color: "#000000",
  },

  // Frontend
  {
    skill: "React",
    level: "intermediate",
    color: "#61DBFB",
  },
  {
    skill: "JavaScript (ES6+)",
    level: "advanced",
    color: "#F7DF1E",
  },
  {
    skill: "HTML5 + CSS3",
    level: "intermediate",
    color: "#E34F26",
  },

  // Mobile
  {
    skill: "React Native (Expo)",
    level: "intermediate",
    color: "#4630EB",
  },

  // Database
  {
    skill: "MongoDB",
    level: "advanced",
    color: "#4DB33D",
  },
  {
    skill: "PostgreSQL",
    level: "advanced",
    color: "#336791",
  },

  // BaaS
  {
    skill: "Supabase",
    level: "intermediate",
    color: "#3ECF8E",
  },
  {
    skill: "Appwrite",
    level: "intermediate",
    color: "#F02E65",
  },

  // DevOps & Deployment
  {
    skill: "Docker",
    level: "intermediate",
    color: "#2496ED",
  },
  {
    skill: "Git & GitHub",
    level: "advanced",
    color: "#181717",
  },

  // Cloud
  {
    skill: "Cloud Deployment",
    level: "intermediate",
    color: "#FF9900",
  },

  // Architecture
  {
    skill: "RESTful API Design",
    level: "advanced",
    color: "#6C63FF",
  },
];

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillObj) => (
        <Skill
          key={skillObj.skill}
          skill={skillObj.skill}
          level={skillObj.level}
          color={skillObj.color}
        />
      ))}
    </div>
  );
}
