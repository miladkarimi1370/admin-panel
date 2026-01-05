import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Progress } from "../ui/progress"

import { CircleDollarSignIcon } from "@/components/icons/lucide-circle-dollar-sign";
import { ShoppingCartIcon } from "@/components/icons/lucide-shopping-cart";
import { ChartNoAxesCombinedIcon } from "@/components/icons/lucide-chart-no-axes-combined";

export default function ChannelRevenue() {
    return (
        <>
            <Card className="w-10/12 mb-4 border-0 shadow-2xl mt-8 bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">channel revenue</CardTitle>
                    <div className="flex justify-start gap-2">
                        <CardDescription className="text-[var(--foreground-primary)] text-4xl font-bold mt-6 ">3.4 %

                        </CardDescription>
                        <CardDescription className="flex flex-col justify-end items-center *:text-[var(--foreground)] px-1 text-sm  *:capitalize">

                            <span> growth</span>
                            <span>rate</span>

                        </CardDescription>
                    </div>

                    <CardAction>
                        <Select>
                            <SelectTrigger className=" bg-[var(--background)] border-none py-1 ring-0  focus-visible:ring-0 focus:border-0  cursor-pointer capitalize w-30 text-md">
                                <SelectValue placeholder="month" />
                            </SelectTrigger>
                            <SelectContent side="bottom" position="popper" className="z-50 bg-[var(--bg-primary)] border-0 shadow-2xl p-2">
                                <SelectGroup className="*:text-base  *:cursor-pointer *:hover:bg-[var(--background)]">
                                    <SelectLabel className="">monthly</SelectLabel>
                                    <SelectItem value="apple">weekly</SelectItem>
                                    <SelectItem value="banana">annualy</SelectItem>


                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </CardAction>
                </CardHeader>
                <CardContent className="cursor-pointer ">
                    <div className="flex justify-center items-center gap-1">
                        <div className="flex flex-col w-full gap-2">
                            <Progress
                                value={100}
                                className="w-full [&>div]:bg-blue-500/80 bg-[var(--background)]"
                            />
                            <p className="text-[var(--foreground)] text-sm font-bold ">28 %</p>
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <Progress
                                value={100}
                                className="w-full [&>div]:bg-green-500/80 bg-[var(--background)]"
                            />
                            <p className="text-[var(--foreground)] text-sm font-bold">32 %</p>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <Progress
                                value={100}
                                className="w-full [&>div]:bg-orange-500/80 bg-[var(--background)]"
                            />
                            <p className="text-[var(--foreground)] text-sm font-bold">37 %</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="w-full">
                    <div className="w-full bg-[var(--background)]   flex justify-evenly py-8 rounded-2xl  items-center">
                        {/* شروع هر کادر سه تایی */}
                        <div className="flex flex-col-reverse justify-center items-center">
                            <div className="bg-blue-500/80 p-3 rounded-full -translate-y-1 md:order-1 mb-3">
                                <CircleDollarSignIcon className="  " />
                            </div>
                            <p className="text-[var(--foreground-primary)] text-lg font-bold">$2.9K</p>
                            <p className="text-[var(--foreground)]">online store</p>
                        </div>
                        {/* پایان هر کادر سه تایی */}
                        {/* شروع هر کادر سه تایی */}
                        <div className="flex flex-col-reverse justify-center items-center">
                            <div className="bg-green-500/80 p-3 rounded-full -translate-y-1 md:order-1 mb-3">
                                <ShoppingCartIcon className="  " />
                            </div>
                            <p className="text-[var(--foreground-primary)] text-lg font-bold">$44.3K</p>
                            <p className="text-[var(--foreground)]">phyisical store</p>
                        </div>
                        {/* پایان هر کادر سه تایی */}
                        {/* شروع هر کادر سه تایی */}
                        <div className="flex flex-col-reverse justify-center items-center">
                            <div className="bg-orange-500/80 p-3 rounded-full -translate-y-1 md:order-1 mb-3">
                                <ChartNoAxesCombinedIcon className="  " />
                            </div>
                            <p className="text-[var(--foreground-primary)] text-lg font-bold">$3.4K</p>
                            <p className="text-[var(--foreground)]">social media</p>
                        </div>
                        {/* پایان هر کادر سه تایی */}
                    </div>
                </CardFooter>
            </Card>

        </>
    )
}