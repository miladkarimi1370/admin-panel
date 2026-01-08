import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Chart as ChartJS,
    RadialLinearScale,   // ← این خیلی مهمه برای رادار!
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js"

import { Radar } from "react-chartjs-2"
import { Item, ItemGroup } from "../ui/item"
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore"

ChartJS.register(
    RadialLinearScale,  // بدون این، رادار کار نمی‌کنه!
    PointElement,
    LineElement,
    Tooltip,
    Legend
)



export default function LeadPerformanceScore() {
    const { dark } = openOrCloseDrawerStore()
    const labels = [1, 2, 3, 4, 5]
    const currentLabels = [
        { id: 1, title: "Lead Volume", value: 78 },
        { id: 2, title: "Conversion Rate", value: 57 },
        { id: 3, title: "Lead Quality", value: 26 },
        { id: 4, title: "Response Time", value: 76 },
        { id: 5, title: "Cost per Lead", value: 42 }
    ]
    const data: any = {
        labels,
        datasets: [
            {
                label: "information ",
                data: [78, 57, 26, 76, 42],               // ۵ مقدار → یکی برای هر لیبل
                borderColor: "oklch(68.5% 0.169 237.323/0.6)",
                backgroundColor: "oklch(68.5% 0.169 237.323 / 0.15)",
                pointBackgroundColor: "oklch(68.5% 0.169 237.323)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)",


            },

        ],
    }

    const options: any = {
        responsive: true,
        maintainAspectRatio: false, // برای کنترل بهتر ارتفاع
        plugins: {
            legend: {
                display: false,

            },

            title: {
                display: false,
            },
        },
        scales: {
            r: {
                angleLines: {
                    color: dark ? "#cecece" : "#cecece",
                    display: true,
                },
                grid: {
                    color: "#cecece",

                },
                pointLabels: {
                    color: dark ? "#fff" : "#000",

                    // رنگ لیبل‌ها دور نمودار
                },

                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    stepSize: 20,

                },
            },
        },
    }

    return (
        <Card className="w-11/12 border-0 shadow-2xl mt-8 bg-[var(--bg-primary)]" >
            <CardHeader>
                <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">
                    Lead Performance Score
                </CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-1 xl:grid-cols-2">
                <div className="w-full h-96"> {/* ارتفاع مشخص بده */}
                    <Radar data={data} options={options} />
                </div>
                {/* شروع لیست اطلاعات */}
                <div className=" w-full  ">
                    <ItemGroup className="flex flex-row flex-wrap  justify-between  w-full">
                        {currentLabels?.map((item) => {
                            return (
                                <Item
                                    key={item.id}
                                    className="w-full flex justify-around  "
                                >
                                    <span className="w-8 h-8 border text-[var(--foreground-primary)] text-base flex justify-center items-center rounded-full">
                                        {item.id}
                                    </span>

                                    <span className="text-[var(--foreground-primary)] text-base">
                                        {item.title}
                                    </span>

                                    <span className="text-[var(--foreground)] flex-1 truncate">
                                        ..........................................................................................................................
                                    </span>

                                    <span
                                        className={`${item.value <= 40
                                            ? "bg-red-500/70"
                                            : item.value < 70
                                                ? "bg-amber-500/70"
                                                : "bg-green-500/70"
                                            } text-white w-10 h-8 rounded-2xl flex justify-center items-center text-base`}
                                    >
                                        {item.value}%
                                    </span>
                                </Item>
                            )
                        })}
                    </ItemGroup>


                </div>
                {/* پایان لیست اطلاعات */}
            </CardContent>
        </Card >
    )
}