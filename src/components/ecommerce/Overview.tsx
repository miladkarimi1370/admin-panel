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
import { CircleDollarSignIcon } from "@/components/icons/lucide-circle-dollar-sign";
import { ViewIcon } from "@/components/icons/lucide-view";
import { ShoppingCartIcon } from "@/components/icons/lucide-shopping-cart";
import LineChart from "./LineChart";
export default function Overview() {
    return (
        <>
            <Card className="w-10/12 xl:w-11/12 mb-4 border-0 shadow-2xl mt-28  bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">overview</CardTitle>

                    <CardAction>
                        <Select>
                            <SelectTrigger className=" bg-[var(--background)] text-[var(--foreground)] border-none py-1 ring-0  focus-visible:ring-0 focus:border-0  cursor-pointer capitalize w-30 text-md">
                                <SelectValue placeholder="month" />
                            </SelectTrigger>
                            <SelectContent side="bottom" position="popper" className="z-50 bg-[var(--bg-primary)] border-0 shadow-2xl p-2">
                                <SelectGroup className="*:text-base text-[var(--foreground)]  *:cursor-pointer *:hover:bg-[var(--background)]">
                                    <SelectLabel className="">monthly</SelectLabel>
                                    <SelectItem value="apple">weekly</SelectItem>
                                    <SelectItem value="banana">annualy</SelectItem>


                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </CardAction>
                </CardHeader>
                <CardContent className="cursor-pointer ">
                    {/* شروع قسمت بالای چارت */}

                    <Card className="bg-[var(--background)] border-0 flex justify-center items-center md:flex-row ">
                        {/* شروع قسمت اول  */}
                        <CardHeader className="bg-[var(--bg-primary)] w-11/12 rounded-2xl px-3 py-4 md:flex  md:flex-wrap md:mx-4"  >
                            <CardTitle className="text-[var(--foreground)] capitalize md:order-2 md:w-full">total profit</CardTitle>
                            <CardDescription className="text-[var(--foreground-primary)] font-bold text-2xl md:order-3 md:w-full">$ 82,134,567</CardDescription>
                            <CardDescription className="text-[var(--foreground-primary)] md:order-4">
                                <p className="text-green-400">+ 3.4% <span className="text-[var(--foreground)] text-base">from last month</span></p>
                            </CardDescription>

                            <CardAction className="bg-blue-200/75 p-3 rounded-full -translate-y-1 md:order-1 ">
                                <CircleDollarSignIcon className="  " />
                            </CardAction>
                        </CardHeader>
                        {/* پایان قسمت اول  */}
                        {/* شروع قسمت دوم */}
                        <CardHeader className="w-11/12 rounded-2xl px-3 py-4 md:flex  md:flex-wrap md:mx-4 " >
                            <CardTitle className="text-[var(--foreground)] capitalize md:order-2 md:w-full">total order</CardTitle>
                            <CardDescription className="text-[var(--foreground-primary)] font-bold text-2xl md:order-3 md:w-full">7,342</CardDescription>
                            <CardDescription className="text-[var(--foreground-primary)] md:order-4">
                                <p className="text-red-400">- 2.8% <span className="text-[var(--foreground)] text-base">from last month</span></p>
                            </CardDescription>

                            <CardAction className="bg-green-200/75 p-3 rounded-full -translate-y-1">
                                <ShoppingCartIcon className="  " />
                            </CardAction>
                        </CardHeader>
                        {/* پایان قسمت دوم */}
                        {/* شروع قسمت سوم */}
                        <CardHeader className=" w-11/12 rounded-2xl px-3 py-4 md:flex  md:flex-wrap md:mx-4 " >
                            <CardTitle className="text-[var(--foreground)] capitalize md:order-2 md:w-full">impression</CardTitle>
                            <CardDescription className="text-[var(--foreground-primary)] font-bold text-2xl md:order-3 md:w-full">$ 3.1M</CardDescription>
                            <CardDescription className="text-[var(--foreground-primary)] md:order-4">
                                <p className="text-green-400">+ 3.4% <span className="text-[var(--foreground)] text-base">from last month</span></p>
                            </CardDescription>

                            <CardAction className="bg-purple-200/75 p-3 rounded-full -translate-y-1">
                                <ViewIcon className="  " />
                            </CardAction>
                        </CardHeader>
                        {/* پایان قسمت سوم */}
                    </Card>

                    {/* پایان قسمت بالای چارت */}
                </CardContent>
                <CardFooter className="w-full">
                    <div className="w-full h-[35vh] md:h-[50vh] lg:h-[60vh] flex justify-center items-center">
                        <LineChart />
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}