"use client";

import Hero from "@/components/main/Hero";
import PlayerGameData from "@/components/PlayerGameData";
import PlayerGraphStatistics from "@/components/PlayerGraphStatistics";
import PlayerSearch from "@/components/PlayerSearch";
import PlayerView from "@/components/PlayerView";
import { DEBUG } from "@/config";
import { GameLog } from "@/interfaces/GameLog";
import { Player } from "@/interfaces/Player";
import { useState } from "react";

export default function Home() {
  const [gameLogs, setGameLogs] = useState<GameLog[]>([]);
  const [player, setPlayer] = useState<Player | null>(null);
  return (
    <div className="flex flex-col w-full p-4">
      <Hero
        heading="Sports props and matchups all in one convenient location"
        description="Find player props, stats as well as current matchups for NBA, NFL and NHL."
        buttons={[{ name: 'nba', path:`${DEBUG ? '/sportsPicker/NBA' : '/NBA'}`}, { name: 'nfl', path:'/NFL'}]}
      />
    </div>
  );
}
