// components/ExperienceCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function ExperienceCard({
  showExperience,
  toggleExperience,
  ChevronUp,
  ChevronDown,
}) {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2
          className="text-2xl font-semibold text-cyan-700 mb-4 flex items-center gap-2 cursor-pointer"
          onClick={toggleExperience}
        >
          <Briefcase size={22} aria-hidden />
          Work Experience{" "}
          {showExperience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </h2>
        {showExperience && (
          <div className="text-sm text-gray-700 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-cyan-700">
                RRS Supply Chain - Qingdao, China
              </h3>
              <p className="italic">
                Cloud Computing Team Leader | Feb.2017 - Jan.2025
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Led a cross-functional team of application, infrastructure, and
                systems engineers to design, deploy, and operate a large-scale
                logistics platform supporting multi-billion-dollar annual
                operations across China.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Designed and built a new enterprise-grade data center from
                  ground up (2020), including infrastructure architecture,
                  deployment standards, and migration strategy
                </li>
                <li>
                  Led full data center migration with minimal service
                  interruption and zero critical data loss
                </li>
                <li>
                  Managed IT asset lifecycle, capacity planning, and cost
                  optimization through infrastructure performance analytics
                  (CPU, memory, deployment metrics)
                </li>
                <li>
                  Administered and optimized MySQL (5.6/5.7) and Oracle
                  (11g/19c) databases, including performance tuning,
                  high-availability setup, backup/recovery strategy, and ETL
                  development
                </li>
                <li>
                  Built and maintained CI/CD and DevOps platform using Docker,
                  Kubernetes, Jenkins, Git, and Ansible to improve development
                  efficiency and deployment reliability
                </li>
                <li>
                  Directed IT security compliance initiatives during corporate
                  IPO process, including vulnerability remediation and
                  governance framework implementation
                </li>
                <li>
                  Designed and implemented ITIL-based incident and change
                  management processes across teams
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-700">
                ZTE Intelligent Transportation - Qingdao, China
              </h3>
              <p className="italic">Oracle DBA | Mar.2014 - Feb.2017</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Managed enterprise Oracle database systems supporting municipal
                Transportation Management Systems for Traffic Police Bureau.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Deployed, maintained, and optimized Oracle databases on Linux
                  and Windows environments
                </li>
                <li>
                  Designed backup/recovery strategies and executed database
                  migration projects
                </li>
                <li>
                  Collaborated with development teams to optimize SQL
                  performance and reduce query latency
                </li>
                <li>
                  Led implementation of Big Data analytics platform using
                  Hadoop, HBase, Elasticsearch, and Spark for OLAP and real-time
                  search capabilities
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-700">
                Shanghai Tianji Technology - Shanghai, China
              </h3>
              <p className="italic">
                Database Engineer / ETL Developer | Jul.2007 - Mar.2014
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Worked on large-scale Data Lake project for Shanghai Police
                Department.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Designed and implemented ETL architecture using Informatica
                  PowerCenter
                </li>
                <li>
                  Managed Oracle, MSSQL, and MySQL databases for structured and
                  semi-structured data processing
                </li>
                <li>
                  Developed complex SQL procedures and performed performance
                  tuning for large-scale data workloads
                </li>
                <li>
                  Monitored and optimized database performance in
                  mission-critical public sector systems
                </li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
