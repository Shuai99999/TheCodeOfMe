import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";

// 图片放在 public/game 文件夹里，按文件名排序展示
const gameImageNames = [
  "Bloodborne.webp",
  "Dark Souls 1.png",
  "Driveclub.avif",
  "Elden Ring.avif",
  "God of War 3.avif",
  "God of War 5.avif",
  "GTA5.avif",
  "Horizon 1.avif",
  "Horizon 2.avif",
  "Resident Evil 4.avif",
  "Resident Evil 5.avif",
  "Resident Evil 6.webp",
  "Resident Evil 7.webp",
  "Resident Evil 8.avif",
  "Resident Evil Revelations 1.avif",
  "Resident Evil Revelations 2.avif",
  "The Last of Us PART I.avif",
  "The Last of Us PART II.webp",
];

export default function GameSection() {
  return (
    <Card className="bg-white border border-cyan-200 shadow-xl card-hover">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
          <Gamepad2 size={22} aria-hidden />
          Game
        </h2>
        <div className="flex flex-wrap gap-4">
          {gameImageNames.map((name) => (
            <img
              key={name}
              src={`/game/${encodeURIComponent(name)}`}
              alt="Game"
              className="rounded-lg object-contain h-36 w-36 border border-gray-200"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
