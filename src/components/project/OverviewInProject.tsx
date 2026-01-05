import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { CalendarCheckIcon } from "@/components/icons/lucide-calendar-check";
import { TruckElectricIcon } from "@/components/icons/lucide-truck-electric";
import {ClockArrowUpIcon} from "@/components/icons/lucide-clock-arrow-up";
export default function Overview() {
    return (
        <>
            <Card className="w-11/12  border-0 shadow-2xl mt-8  bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">top products</CardTitle>

                    <CardAction>
                        <Button variant="outline" className="cursor-pointer hover:border-blue-500 hover:text-blue-500 border-gray-300 border-2 transition capitalize text-sm rounded-lg text-[var(--foreground-primary)]">all projects</Button>
                    </CardAction>
                </CardHeader>
                <CardContent className=" flex justify-evenly items-center  *:w-full gap-4 flex-wrap md:flex-nowrap">
                    {/* شروع قسمت بالای چارت */}
                    <Card className="border-0  bg-blue-400/20">
                        <CardHeader>
                            <CardTitle className="text-[var(foreground-primary)] font-base capitalize">ongoing project</CardTitle>
                            <CardDescription className="text-[var(--foreground-primary)] text-3xl font-bold">12</CardDescription>
                            <CardAction className="p-4 bg-[var(--foreground-primary)] text-[var(--bg-primary)] rounded-full">
                                <TruckElectricIcon />
                            </CardAction>
                        </CardHeader>

                    </Card>
                    <Card className="border-0  bg-green-400/20">
                        <CardHeader>
                            <CardTitle className="text-[var(foreground-primary)] font-base capitalize">project completed</CardTitle>
                            <CardDescription className="text-[var(--foreground-primary)] text-3xl font-bold">68</CardDescription>
                            <CardAction className="p-4 bg-[var(--foreground-primary)] text-[var(--bg-primary)] rounded-full">
                                <CalendarCheckIcon />
                            </CardAction>
                        </CardHeader>

                    </Card>
                    <Card className="border-0  bg-red-400/20">
                        <CardHeader>
                            <CardTitle className="text-[var(foreground-primary)] font-base capitalize">upcoming project</CardTitle>
                            <CardDescription className="text-[var(--foreground-primary)] text-3xl font-bold">12</CardDescription>
                            <CardAction className="p-4 bg-[var(--foreground-primary)] text-[var(--bg-primary)] rounded-full">
                                <ClockArrowUpIcon />
                            </CardAction>
                        </CardHeader>

                    </Card>


                    {/* پایان قسمت بالای چارت */}
                </CardContent>

            </Card>
        </>
    )
}