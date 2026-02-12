// components/Skill.jsx
import React from "react";

export default function Skill({ skill, level, color }) {
  const width =
    level === "advanced"
      ? "w-full"
      : level === "intermediate"
      ? "w-2/3"
      : "w-1/3";
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1 text-sm font-medium text-gray-800">
        <span>{skill}</span>
        <span className="capitalize">{level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-2">
        <div
          className={`${width} h-2 rounded`}
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}
