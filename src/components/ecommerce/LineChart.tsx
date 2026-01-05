import { useMemo } from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
);


export default function LineChart() {
    const DATA_COUNT = 13;
    const { dark } = openOrCloseDrawerStore();

    const labels = useMemo(() => {
        return Array.from({ length: DATA_COUNT }, (_, i) => {
            if (i < 10) {
                return "0" + i + " " + "Jun"
            } else {
                return i + " " + "Jun"
            }
        });
    }, []);

    const datapoints = [240, 330, 300, 360, 340, 430, 380, 480, 405, 495, 375, 400, 590];
    const data = {
        labels,
        datasets: [
            {
                data: datapoints,
                borderColor: dark ? "white" : "oklch(70.7% 0.165 254.624)",

                fill: false,
                tension: 0.4
            }
        ],
    };


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        interaction: { intersect: false },
        scales: {
            x: {
                ticks: { color: dark ? "white" : "black" },
                grid: { color: dark ? "#262626" : "#ffff" },
            },
            y: {
                suggestedMin: 1,
                suggestedMax: 31,
                ticks: { color : dark ? "white" : "black" },
                grid: { color: dark ? "#cecece" : "#cecece" },
            },
        },

    };



    return (
        <>
            <Line data={data} options={options} />
        </>
    )
}