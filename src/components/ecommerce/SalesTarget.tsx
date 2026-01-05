import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";



export default function SalesTarget() {

    const centerTextPlugin = {
        id: "centerText",
        beforeDraw(chart: any) {
            const { ctx, width, height } = chart;
            ctx.restore();

            const fontSize = (height / 120).toFixed(2); // اندازه فونت responsive
            ctx.font = `bold ${fontSize}em Gabarito`;
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";

            const text = "75.4%"; // متن مورد نظر شما
            const textX = width / 2;
            const textY = height / 2;

            ctx.fillStyle = "#000"; // رنگ آبی چارت شما
            ctx.fillText(text, textX, textY);

            ctx.save();
        },
    };


    const data: any = {
        labels: ["75.4%"],
        datasets: [
            {
                data: [90, 20],
                backgroundColor: ["#3b82f6", "#f5f5f5"],
                hoverOffset: 8,
            },
        ],
    };

    const options: any = {
        cutout: "80%", // ضخامت وسط
        plugins: {
            legend: {

                position: "center",

            },
        },
    };
    return (
        <>
            <Card className="bg-[var(--bg-primary)] border-0 flex justify-center items-center md:flex-row w-10/12 shadow-2xl xl:mt-28">
                <CardHeader className=" w-11/12 rounded-2xl px-3 py-4 md:flex  md:flex-wrap md:mx-4 "  >
                    <div className="w-full  flex justify-between">
                        <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">sales target</CardTitle>
                        <Select>
                            <SelectTrigger className=" bg-[var(--background)] text-[var(--foreground)] border-none py-1 ring-0  focus-visible:ring-0 focus:border-0  cursor-pointer capitalize w-24 text-md">
                                <SelectValue placeholder="month" />
                            </SelectTrigger>
                            <SelectContent side="bottom" position="popper" className="z-50 bg-[var(--bg-primary)] border-0 shadow-2xl p-2">
                                <SelectGroup className="*:text-base  *:cursor-pointer *:hover:bg-[var(--background)] text-[var(--foreground)]">
                                    <SelectLabel className="">monthly</SelectLabel>
                                    <SelectItem value="apple">weekly</SelectItem>
                                    <SelectItem value="banana">annualy</SelectItem>


                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className=" flex  mt-5 justify-between items-center w-full">

                        <div className="w-full self-end">
                            <CardDescription className="text-[var(--foreground-primary)] font-bold text-3xl md:order-3 md:w-full">$ 1.3 K <span className="text-[var(--foreground)] text-base ">/ 1.8 k Units</span></CardDescription>
                            <CardDescription className="text-[var(--foreground-primary)] md:order-4 ">
                                <p className="text-[var(--foreground)] text-sm  w-full">made this month year </p>
                            </CardDescription>
                        </div>
                        <CardDescription className="w-26">
                            <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
                        </CardDescription>
                    </div>



                </CardHeader>

            </Card>
        </>
    )
}