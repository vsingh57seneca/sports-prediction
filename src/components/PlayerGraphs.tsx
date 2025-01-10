import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // Needed for X-axis with categories
  LinearScale, // Needed for numeric Y-axis
  PointElement,
  Tooltip,
  Legend,
  ChartOptions
} from "chart.js";
import { Line } from "react-chartjs-2";
import { GameLog } from "@/interfaces/GameLog";

// Register required components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface PlayerGraphProps {
  gamelog: GameLog[];
  statistic: keyof GameLog;
  overUnder?: number;
  average?: number;
  prediction?: number;
  deviation?: number;
}

const PlayerGraph: React.FC<PlayerGraphProps> = ({ gamelog, statistic, overUnder, average, prediction, deviation }) => {
  const labels = gamelog.map((game) => game.opposition);
  const dataValues = gamelog.map((game) => game[statistic]);

  const data = {
    labels,
    datasets: [
      
      {
        label: `Player ${statistic}`,
        data: dataValues,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 3,
        tension: 0.4,
      },
      {
        label: `Over/Under`,
        data: Array(labels.length).fill(overUnder),
        borderColor: "rgba(255, 50, 50, 1)", // Red line
        backgroundColor: "rgba(255, 10, 10, 0.5)",
        borderWidth: 3,
        tension: 0,
      },
      {
        label: 'Average',
        data: Array(labels.length).fill(average),
        borderColor: "rgba(255, 165, 0, 1)", // Orange line
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 3,
        tension: 0, // Straight line
      },
      {
        label: 'Deviation',
        data: Array(labels.length).fill(deviation),
        borderColor: "rgba(255, 0, 255, 1)", // Purple line
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 3,
        tension: 0, // Straight line
      },
      // {
      //   label: 'Deviation Overs',
      //   data: Array(labels.length).fill((deviation ?? 0) + (average ?? 0)),
      //   borderColor: "rgba(255, 0, 255, 1)", // Purple line
      //   backgroundColor: "rgba(255, 99, 132, 0.2)",
      //   borderWidth: 3,
      //   tension: 0, // Straight line
      // },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Correct type
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Opposition", // X-axis title
        },
        ticks: {
            stepSize: 0
        }
      },
      y: {
        title: {
          display: true,
          text: statistic, // Y-axis title
        },
        ticks: {
            stepSize: 1
        }
      },
    },
  };
  
  

  return (
    <div className="w-full overflow-x-auto overflow-y-auto">
      <Line className="w-full overflow-x-auto" data={data} options={options} />
    </div>
  );
};

export default PlayerGraph;
