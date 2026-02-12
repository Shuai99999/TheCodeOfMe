// components/ContactCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Contact } from "lucide-react";

export default function ContactCard() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
          <Contact size={22} aria-hidden />
          Contact & Repositories
        </h2>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
          <li>
            <a
              href="https://github.com/Shuai99999/cmdb"
              target="_blank"
              className="text-cyan-700 underline"
            >
              cmdb
            </a>{" "}
            – Django project for automating daily tasks
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/officeAutomation"
              target="_blank"
              className="text-cyan-700 underline"
            >
              officeAutomation
            </a>{" "}
            – Workflow automation via API
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/DemoDataxJob"
              target="_blank"
              className="text-cyan-700 underline"
            >
              DemoDataxJob
            </a>{" "}
            – MySQL ⇄ BigData migration demo
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/DemoShellMySQL"
              target="_blank"
              className="text-cyan-700 underline"
            >
              DemoShellMySQL
            </a>{" "}
            – Core MySQL shell scripts
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/DemoOracleSource"
              target="_blank"
              className="text-cyan-700 underline"
            >
              DemoOracleSource
            </a>{" "}
            – Oracle auto archiving tool
          </li>
          <li>
            <a
              href="https://github.com/Shuai99999/React_Curriculum"
              target="_blank"
              className="text-cyan-700 underline"
            >
              React_Curriculum
            </a>{" "}
            – Practice projects in React
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
