// components/EducationCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function EducationCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-cyan-700 mb-4 flex items-center gap-2">
          <GraduationCap size={22} aria-hidden />
          Education
        </h2>
        <div className="text-gray-700 space-y-1">
          <p className="text-lg font-medium">Diploma in Computer Programming</p>
          <p className="text-base text-gray-600">
            Red Deer Polytechnic, Expected December 2026
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
