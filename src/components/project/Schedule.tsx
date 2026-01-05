import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Bar } from 'react-chartjs-2';
import { useMemo } from "react";
import { openOrCloseDrawerStore } from '@/store/openAndCloseDarwerStore';


export default function Schedule() {
    const DATA_COUNT = 30;
    const { dark } = openOrCloseDrawerStore();
    const tasks = useMemo(() => [
        { name: "User Research", color: "rgba(255, 99, 132, 0.3)", border: "rgb(255, 99, 132)" },
        { name: "Design System", color: "rgba(54, 162, 235, 0.3)", border: "rgb(54, 162, 235)" },
        { name: "Prototype", color: "rgba(255, 205, 86, 0.3)", border: "rgb(255, 205, 86)" },
        { name: "Infra Architecture", color: "rgba(75, 192, 192, 0.3)", border: "rgb(75, 192, 192)" },
        { name: "Develop Core Modules", color: "rgba(153, 102, 255, 0.3)", border: "rgb(153, 102, 255)" },
        { name: "Integrate Modules", color: "rgba(255, 159, 64, 0.3)", border: "rgb(255, 159, 64)" },
    ], []);

    const labels = tasks.map(t => t.name);

    const data = {
        labels,
        datasets: [{
            label: "Task Duration",
            data: [[4, 7], [17, 29], [7, 27], [9, 12], [17, 25], [11, 22]],
            backgroundColor: tasks.map(t => t.color),
            borderColor: tasks.map(t => t.border),
            color: tasks.map((t) => t.color),
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
            hoverBackgroundColor: tasks.map(t => t.color.replace("0.3", "0.5")),
        }]
    };

    const options: any = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'linear',
                min: 0,
                max: DATA_COUNT,
                grid: {
                    color: dark ? "rgba(245, 245, 245, 0.5)" : "rgba(118, 118, 118, 0.5)",
                    lineWidth: 1,
                },
                ticks: {
                    stepSize: 2,
                    color: dark ? "rgba(245, 245, 245, 0.5)" : "rgba(118, 118, 118, 0.5)",
                    font: { size: 12 },
                    padding: 10,
                    callback: (value: number) => `${value < 10 ? '0' : ''}${value} June`,
                },
                title: {
                    display: true,
                    text: 'June 2025',
                        color: dark ? "rgba(245, 245, 245, 0.9)" : "rgba(118, 118, 118, 0.9)" ,
                    font: { size: 14, weight: 'bold' },
                    padding: { top: 15 }
                }
            },
            y: {
                grid: { display: false },
                ticks: {
                    color: dark ? "rgba(245, 245, 245, 0.9)" : "rgba(118, 118, 118, 0.9)" ,
                    font: {
                        size: 13,
                        weight: 500
                    },
                    padding: 20,
                    crossAlign: 'far',
                    maxRotation: 0,
                    minRotation: 0,
                }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                cornerRadius: 8,
                padding: 12,
                titleFont: { size: 14 },
                bodyFont: { size: 13 },
                callbacks: {
                    title: (ctx: any) => ctx[0].label,
                    label: (ctx: any) => {
                        const [start, end] = ctx.raw;
                        return `from ${start} to ${end} june (${end - start + 1} day)`;
                    }
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        datasets: {
            bar: {
                barPercentage: 0.8,
                categoryPercentage: 0.9,
            }
        },
        layout: {
            padding: {
                left: 15,
                right: 20,
                top: 30,
                bottom: 20 , 
                
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutQuart'
        }
    };

    return (
        <Card className="w-11/12 max-w-7xl mx-auto border-0 shadow-2xl mt-8 bg-[var(--bg-primary)] rounded-3xl overflow-hidden">
            <CardHeader className="pb-5 border-b border-white/5">
                <CardTitle className="text-[var(--foreground-primary)] font-bold text-2xl tracking-wider text-center sm:text-left">
                    schedule
                </CardTitle>
            </CardHeader>

            <CardContent className="  px-4 sm:px-8">
                <div className="bg-[var(--bg-secondary)/0.4] backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-inner border border-white/5">
                    {/* ارتفاع چارت کاملاً ریسپانسیو و مناسب موبایل */}
                    <div className="w-full h-80 sm:h-96 md:h-[500px] lg:h-[550px]">
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}