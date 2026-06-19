"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register ChartJS elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ data }: { data: any }) {
  return (
    <div className="p-4 flex justify-center items-center h-64 border-t border-[#eee]">
      <Doughnut data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
}