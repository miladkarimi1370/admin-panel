import {
    Card,
    CardAction,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore";

import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    scales,
} from "chart.js";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
);



import { Circle } from "lucide-react";
import { useEffect, useMemo, useState } from "react"
import { Bar } from "react-chartjs-2";
export default function TaskOverview() {
    interface OnGoingAndFinished {
        onGoing: number,
        finished: number
    }
    const { dark } = openOrCloseDrawerStore()
    const [selected, setSelected] = useState<string>("weekly");
    const [allCountOfWeeklyOrDaily, setAllCountOfWeeklyOrDaily] = useState<OnGoingAndFinished>({
        onGoing: 0,
        finished: 0
    });
    useEffect(() => {


        const maxOfOngoing = Math.max(
            ...dataFromDOrW[selected].map((item: any) => item.ongoing)
        )
        const maxOfFinished = Math.max(
            ...dataFromDOrW[selected].map((item: any) => item.finished)
        )
        setAllCountOfWeeklyOrDaily({ onGoing: maxOfOngoing, finished: maxOfFinished })

    }, [selected])

    const DATA_COUNT: number = selected === "daily" ? 5 : 7;
    const labels = useMemo(() => {
        return Array.from({ length: DATA_COUNT }, (_, i) => {
            const exactI = i + 1;
            if (DATA_COUNT === 5) {
                return (exactI * 8) - (i * 4) + ":00"
            } else {
                if (exactI < 10) {
                    return "0" + exactI + " " + "February"
                } else {
                    return exactI + " " + "February"
                }
            }
        })
    }, [selected])

    const dataFromDOrW: any = {
        weekly: [{ ongoing: 48, finished: 40 }, { ongoing: 51, finished: 47 }, { ongoing: 60, finished: 55 }, { ongoing: 70, finished: 67 }, { ongoing: 86, finished: 80 }, { ongoing: 123, finished: 110 }, { ongoing: 142, finished: 129 }],
        daily: [{ ongoing: 15, finished: 10 }, { ongoing: 20, finished: 15 }, { ongoing: 23, finished: 16 }, { ongoing: 24, finished: 17 }, { ongoing: 25, finished: 18 }]
    }


    const data: any = {
        labels,
        datasets: [
            {
                label: "On Going",
                data: dataFromDOrW[selected].map((item: any) => item.ongoing),
                backgroundColor: "oklch(76.9% 0.188 70.08)",
                borderRadius: 15
            },
            {
                label: "Finished",
                data: dataFromDOrW[selected].map((item: any) => item.finished),
                backgroundColor: "oklch(68.5% 0.169 237.323)",
                borderRadius: 15
            },


        ]
    }

    const options: any = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false

                },
                title: {
                    display: true,
                    text: 'Chart.js Floating Bar Chart'
                }
            },

        },
        scales: {
            x: {
                ticks: {
                    color: dark ? "#cecece" : "#262626"
                },
                grid: {
                    color: dark ? "#171717" : "#f5f5f5"
                }
            },
            y: {

                min: 0,
                max: Math.max(allCountOfWeeklyOrDaily.onGoing, allCountOfWeeklyOrDaily.finished) + 10,
                ticks: {
                    color: dark ? "#cecece" : "#262626",
                    stepSize: selected === "daily" ? 5 : 50
                } , 
                grid : {
                    color : dark ? "#171717" : "#f5f5f5"
                }
            },

        }
    };



    return (
        <>
            <Card className="w-11/12  border-0 shadow-2xl mt-8  bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">task overview</CardTitle>

                    <CardAction>
                        <ToggleGroup
                            value={selected}
                            onValueChange={(val) => val && setSelected(val)}
                            type="single"
                            variant="outline"
                            spacing={1}
                            size="default"
                            className="*:transition-all *:duration-300 *:ease-out *:border-0 shadow-2xl bg-[var(--background)] p-1 *:cursor-pointer *:hover:text-[var(--foreground-primary)]"
                        >
                            <ToggleGroupItem
                                value="daily"
                                aria-label="daily"
                                className={`${selected === "daily" ? "bg-[var(--bg-primary)]" : ""} capitalize  text-[var(--foreground)] `}

                            >

                                daily
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="weekly"
                                aria-label="weekly"
                                className={`${selected === "weekly" ? "bg-[var(--bg-primary)]" : ""} capitalize text-[var(--foreground)] `}

                            >

                                weekly
                            </ToggleGroupItem>

                        </ToggleGroup>
                    </CardAction>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 w-full">
                    {/* کارت‌ها */}
                    <div className="flex justify-evenly items-center gap-4 flex-wrap">
                        <div className="flex flex-col">
                            <h5 className="text-lg font-bold text-[var(--foreground-primary)]">{allCountOfWeeklyOrDaily && allCountOfWeeklyOrDaily.onGoing + allCountOfWeeklyOrDaily.finished}</h5>
                            <p className="text-[var(--foreground)] text-base capitalize">total tasks</p>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-lg font-bold text-[var(--foreground-primary)] flex justify-center items-baseline gap-1.5"><Circle className="w-2 h-2 fill-amber-500 stroke-amber-500" />{allCountOfWeeklyOrDaily && allCountOfWeeklyOrDaily.onGoing}</h5>
                            <p className="text-[var(--foreground)] text-base capitalize">on going</p>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-lg font-bold text-[var(--foreground-primary)] flex justify-center items-baseline gap-1.5"><Circle className="w-2 h-2 fill-sky-500 stroke-sky-500" />{allCountOfWeeklyOrDaily.finished}</h5>
                            <p className="text-[var(--foreground)] text-base capitalize">finished</p>
                        </div>
                    </div>

                    {/* نمودار */}
                    <div className="w-full">
                        <Bar data={data} options={options} />
                    </div>
                </CardContent>


            </Card>

        </>
    )
}