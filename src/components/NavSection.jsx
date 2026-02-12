import { User, Bug, Gamepad2, ChartNoAxesColumnIncreasing } from "lucide-react";

export default function NavSection() {
  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 px-6 py-3 flex gap-20 justify-center text-lg font-["Orbitron",sans-serif] text-cyan-700 font-bold border-b border-white/40 shadow-md'
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <a href="#about" className="flex items-center gap-2 whitespace-nowrap">
        <User size={20} /> About
      </a>
      <a href="#code" className="flex items-center gap-2 whitespace-nowrap">
        <Bug size={20} /> Code
      </a>
      <a href="#games" className="flex items-center gap-2 whitespace-nowrap">
        <Gamepad2 size={20} /> Games
      </a>
      <a
        href="#analytics"
        className="flex items-center gap-2 whitespace-nowrap"
      >
        <ChartNoAxesColumnIncreasing size={20} /> Analytics
      </a>
    </nav>
  );
}
