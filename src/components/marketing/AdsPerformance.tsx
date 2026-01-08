import {
    Card,
    CardAction,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
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



import { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function AdsPerformance() {

    const {dark} = openOrCloseDrawerStore()
    const [selected, setSelected] = useState<string>("all");

    const DATA_COUNT: number = 12;

    const labels = Array.from({ length: DATA_COUNT }, (_, i: number) => {
        const exactI = (i + 1);
        if (exactI < 10) {
            return "0" + exactI + " " + "Jan"
        } else {
            return exactI + " " + "Jan"
        }
    })

    const inforOfDatasets = [
        {
            type: "bar" as const,
            label: "campagin",
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
            backgroundColor: "oklch(75% 0.183 55.934/0.7)",
            borderWidth: 15,
            borderColor: "transparent",
            borderRadius: 25,
            yAxisID: 'y',

        },
        {
            label: "email",
            type: "line" as const,
            data: [23, 12, 42, 35, 27, 43, 22, 17, 31, 22, 12, 16],
            backgroundColor: "blue",
            borderColor: "blue",
            borderWidth: 3,
            borderRadius: 5,
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8,
            tension: 0.4,
            fill: false,
            yAxisID: 'y1',
        },
    ]

    const getDatasets = () => {
        switch (selected) {
            case "all":
                return [inforOfDatasets[0], inforOfDatasets[1]]
            case "campagin":
                return [inforOfDatasets[0]]
            case "email":
                return [inforOfDatasets[1]]


        }
    }

    const data: any = {
        labels,
        datasets: getDatasets()
    }

    const options = {
        responsive: true,
        interaction: {
            mode: "index" as const,
            intersect: false,
        },
        scales: {
            x: {
                grid: {
                   
                    display: false,
                },
            },
            y: {
                type: "linear" as const,
                display: selected === "all" || selected === "campagin" ? true : false,
                position: "left" as const,
                title: {
                    display: false,
                    text: "Campaign Value",
                    color: "rgb(255, 99, 132)",
                    
                },
                grid : {
                    color :  dark ? "oklch(44.6% 0.03 256.802/0.3)" : "oklch(70.7% 0.022 261.325/0.2)"
                }

            },
            y1: {
                type: "linear" as const,
                display: selected === "all" || selected === "email" ? true : false,
                position: "right" as const,   // ← اینجاست! محور دوم سمت راست
                grid: {
                    drawOnChartArea: selected === "all" || selected === "campagin" ? false : true, // فقط خطوط محور چپ نشون داده بشه
                },
                title: {
                    display: false,
                    text: "Email Count",
                    color: "rgb(54, 162, 235)",
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
            },
            title: {
                display: false,
            },
        },
    }
    return (
        <>
            <Card className="w-11/12 border-0 shadow-2xl mt-8 bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">
                        Ads Performance
                    </CardTitle>
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
                                value="all"
                                aria-label="all"
                                className={`${selected === "all" ? "bg-[var(--bg-primary)]" : ""} capitalize  text-[var(--foreground)] `}

                            >

                                All
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="campagin"
                                aria-label="campagin"
                                className={`${selected === "campagin" ? "bg-[var(--bg-primary)]" : ""} capitalize text-[var(--foreground)] `}

                            >

                                campagin
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="email"
                                aria-label="email"
                                className={`${selected === "email" ? "bg-[var(--bg-primary)]" : ""} capitalize text-[var(--foreground)] `}

                            >

                                email
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </CardAction>


                </CardHeader>

                <CardContent className="*:w-8/12 ">
                    <Bar data={data} options={options} />
                </CardContent>
            </Card>

        </>
    )
}