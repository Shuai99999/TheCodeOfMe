// components/CertificationsProjectsCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const skillSections = [
  {
    title: "Frontend",
    items: [
      "React (Hooks, Context API)",
      "React Native (Expo)",
      "JavaScript (ES6+)",
      "HTML5, CSS3, Responsive Design",
      "RESTful API Integration",
      "State Management",
      "Component-based architecture",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "Authentication (JWT, OAuth basics)",
      "Middleware architecture",
      "MVC pattern",
    ],
  },
  {
    title: "Database",
    items: [
      "MongoDB (Mongoose ODM)",
      "PostgreSQL",
      "Supabase",
      "Appwrite",
      "Database schema design & optimization",
    ],
  },
  {
    title: "Dev & Deployment",
    items: [
      "Git & GitHub",
      "Docker (basic containerization)",
      "Basic CI/CD understanding",
      "API testing (Postman)",
      "Environment configuration (.env management)",
    ],
  },
];

export default function CertificationsProjectsCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-cyan-700 mb-4 flex items-center gap-2">
          <Wrench size={22} aria-hidden />
          Core Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillSections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-base font-semibold text-cyan-600 border-b border-cyan-100 pb-1">
                {section.title}
              </h3>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
