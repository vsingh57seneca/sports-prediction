export interface GameLog {
  headers: {
    columns: Array<{
      index: number;
      text: string;
    }>;
  };
  rows: Array<{
    columns: Array<{
      index: number;
      text: string;
    }>;
  }>;
}

// export interface GameLog {
//   date?: string;
//   opposition: string;
//   winLose: GameResult;
//   minutesPlayed?: number;
//   points?: number;
//   fieldGoals?: {
//     made: number;
//     taken: number;
//   };
//   threePointFieldGoals?: {
//     made: number;
//     taken: number;
//   };
//   freeThrows?: {
//     made: number;
//     taken: number;
//   };
//   offensiveRebounds?: number;
//   defensiveRebounds?: number;
//   rebounds?: number;
//   assists?: number;
//   steals?: number;
//   blocks?: number;
//   personalFouls?: number;
//   turnovers?: number;
//   plusMinus?: number;
//   rushingAttempts?: number;
//   rushingYards?: number;
//   rushingYardsPerAttemptAverage?: number;
//   rushingTouchdowns?: number;
//   fumbles?: number;
//   targets?: number;
//   receptions?: number;
//   receivingTouchdowns?: number;
//   completions?: number;
//   passingAttempts?: number;
//   completionPercent?: number;
//   passingYards?: number;
//   passingYardsPerAttemptAverage?: number;
//   passingTouchdowns?: number;
//   interceptions?: number;
//   sacks?: number;
//   sackYards?: number;
//   receivingYards?: number;
// }
