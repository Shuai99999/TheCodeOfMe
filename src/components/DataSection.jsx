import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, BarChart2 } from "lucide-react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";

// Only zoom map when Ctrl + wheel; disables Leaflet's built-in
function MapCtrlWheelZoom() {
  const map = useMap();
  useEffect(() => {
    if (map.scrollWheelZoom && typeof map.scrollWheelZoom.disable === "function") {
      map.scrollWheelZoom.disable();
    }
    map.whenReady(() => {
      if (map.scrollWheelZoom && typeof map.scrollWheelZoom.disable === "function") {
        map.scrollWheelZoom.disable();
      }
    });
    const container = map.getContainer();
    const onWheel = (e) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      e.stopPropagation();
      if (e.deltaY > 0) map.zoomOut(1);
      else map.zoomIn(1);
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [map]);
  return null;
}

function MapWheelGuard({ children }) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (!e.ctrlKey) e.stopPropagation();
    };
    el.addEventListener("wheel", onWheel, { capture: true });
    return () => el.removeEventListener("wheel", onWheel, { capture: true });
  }, []);
  return <div ref={wrapperRef} className="h-64 w-full [&_.leaflet-container]:rounded-lg [&_.leaflet-container]:z-0">{children}</div>;
}

const timeAllocation = [
  { label: "Coding", percent: 50, color: "#0d9488", textColor: "#fff" },
  { label: "Gaming", percent: 20, color: "#7c3aed", textColor: "#fff" },
  {
    label: "Practicing English",
    percent: 20,
    color: "#ea580c",
    textColor: "#fff",
  },
  { label: "Workout", percent: 10, color: "#059669", textColor: "#fff" },
];

// Skill learning timeline: year, skill name, optional note (e.g. certification)
// Badge colors cycle for visual variety
const timelineColors = [
  { bg: "#ccfbf1", border: "#0d9488", text: "#0f766e" },
  { bg: "#ede9fe", border: "#7c3aed", text: "#5b21b6" },
  { bg: "#ffedd5", border: "#ea580c", text: "#c2410c" },
  { bg: "#d1fae5", border: "#059669", text: "#047857" },
  { bg: "#dbeafe", border: "#2563eb", text: "#1d4ed8" },
  { bg: "#fce7f3", border: "#db2777", text: "#be185d" },
];
const skillTimeline = [
  { year: 2010, skill: "Linux", note: "RHCE" },
  { year: 2014, skill: "Oracle", note: "OCM" },
  { year: 2017, skill: "MySQL" },
  { year: 2018, skill: "Python, Django" },
  { year: 2019, skill: "MSSQL" },
  { year: 2020, skill: "Node.js" },
  { year: 2022, skill: "MongoDB, PostgreSQL" },
  { year: 2023, skill: "React" },
  { year: 2024, skill: "Express, Next.js" },
  { year: 2025, skill: "Azure", note: "AZ-900" },
  { year: 2026, skill: "C#, Java" },
  { year: 2026, skill: "AI Development" },
];

// Footprints: [lat, lng], label. Canada = cities; others = country/region.
const mapFootprints = [
  // Canada (cities)
  { pos: [53.5461, -113.4938], label: "Edmonton, AB" },
  { pos: [51.0447, -114.0719], label: "Calgary, AB" },
  { pos: [52.2681, -113.8112], label: "Red Deer, AB" },
  { pos: [49.2827, -123.1207], label: "Vancouver, BC" },
  // China (cities / provinces)
  { pos: [39.9042, 116.4074], label: "北京 Beijing" },
  { pos: [31.2304, 121.4737], label: "上海 Shanghai" },
  { pos: [25.0406, 102.7129], label: "云南 Yunnan" },
  { pos: [26.647, 106.6302], label: "贵州 Guizhou" },
  { pos: [36.0671, 120.3826], label: "青岛 Qingdao" },
  { pos: [36.8131, 118.0549], label: "淄博 Zibo" },
  { pos: [30.2741, 120.1551], label: "杭州 Hangzhou" },
  { pos: [22.5431, 114.0579], label: "深圳 Shenzhen" },
  { pos: [43.8256, 87.6168], label: "新疆 Xinjiang" },
  { pos: [36.0611, 103.8343], label: "甘肃 Gansu" },
  { pos: [34.3416, 108.9398], label: "陕西 Shaanxi" },
  { pos: [30.5728, 104.0668], label: "成都 Chengdu" },
  { pos: [29.563, 106.5516], label: "重庆 Chongqing" },
  { pos: [26.0745, 119.2965], label: "福州 Fuzhou" },
  // Other countries/regions
  { pos: [37.5665, 126.978], label: "South Korea (Seoul)" },
  { pos: [13.7563, 100.5018], label: "Thailand (Bangkok)" },
  { pos: [7.8804, 98.3923], label: "泰国普吉岛 Phuket" },
  { pos: [36.1699, -115.1398], label: "USA (Las Vegas)" },
  { pos: [15.1778, 145.7508], label: "Saipan" },
];

export default function DataSection() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-6 flex items-center gap-2">
          <BarChart2 size={22} aria-hidden />
          Analytics
        </h2>

        {/* Time allocation bar */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-cyan-700 mb-2">
            Weekly time allocation
          </h3>
          <div className="flex h-10 rounded-lg overflow-hidden border border-gray-200">
            {timeAllocation.map(({ label, percent, color, textColor }) => (
              <div
                key={label}
                className="flex items-center justify-center min-w-0 px-1 text-xs font-medium whitespace-nowrap overflow-hidden"
                style={{
                  width: `${percent}%`,
                  backgroundColor: color,
                  color: textColor,
                }}
                title={`${label}: ${percent}%`}
              >
                {label} {percent}%
              </div>
            ))}
          </div>
        </div>

        {/* Skill learning timeline */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-cyan-700 mb-3">
            Skill learning timeline
          </h3>
          <ul className="space-y-2">
            {skillTimeline.map(({ year, skill, note }, i) => {
              const c = timelineColors[i % timelineColors.length];
              return (
                <li
                  key={`${year}-${skill}`}
                  className="flex items-center gap-3 flex-wrap rounded-lg py-1.5 px-2 -mx-2 border-l-4"
                  style={{
                    borderLeftColor: c.border,
                    backgroundColor: `${c.bg}40`,
                  }}
                >
                  <span
                    className="shrink-0 w-12 text-center text-xs font-semibold rounded px-2 py-1"
                    style={{
                      backgroundColor: c.bg,
                      borderColor: c.border,
                      color: c.text,
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    {year}
                  </span>
                  <span className="text-sm text-gray-800 font-medium">
                    {skill}
                  </span>
                  {note && (
                    <span
                      className="text-xs font-medium rounded px-2 py-0.5"
                      style={{
                        backgroundColor: `${c.border}20`,
                        color: c.text,
                      }}
                    >
                      {note}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Map section */}
        <div>
          <h3 className="text-sm font-semibold text-cyan-700 mb-2 flex items-center gap-1.5 flex-wrap">
            <MapPin size={16} aria-hidden /> Places I’ve been
            <span className="text-xs font-normal text-gray-500 normal-case">
              Ctrl + scroll to zoom
            </span>
          </h3>
          <div className="rounded-lg border border-cyan-200 overflow-hidden bg-cyan-50/30">
            <MapWheelGuard>
              <MapContainer
                center={[30, 10]}
                zoom={2}
                minZoom={2}
                maxBounds={[
                  [-85, -180],
                  [85, 180],
                ]}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
              >
                <MapCtrlWheelZoom />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapFootprints.map(({ pos, label }) => (
                  <CircleMarker
                    key={label}
                    center={pos}
                    radius={8}
                    pathOptions={{
                      fillColor: "#0891b2",
                      color: "#0e7490",
                      weight: 1.5,
                      fillOpacity: 0.85,
                    }}
                  >
                    <Popup>{label}</Popup>
                  </CircleMarker>
                ))}
              </MapContainer>
            </MapWheelGuard>
            <div className="border-t border-cyan-100 px-3 py-2 flex flex-wrap gap-2 bg-white/80">
              {mapFootprints.map(({ label }) => (
                <span
                  key={label}
                  className="text-xs px-2 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
