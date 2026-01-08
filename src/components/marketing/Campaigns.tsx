import {
    Card,
    CardAction,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { KeyboardMusic, LeafIcon, Rocket, type LucideIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch"
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore";
import { useEffect, useState } from "react";

export default function Campaigns() {

    const { dark } = openOrCloseDrawerStore()
    const [active, setActive] = useState<myStructure[]>([]);

    useEffect(() => {
        setActive(campaignsList);
    }, [])
    const myHandleChange = (check: boolean, id: number) => {
        setActive(prev =>
            prev.map((item, i) =>
                i === id
                    ? { ...item, status: check ? "active" : "disabled" }
                    : item
            )
        );
    };

    interface myStructure {

        title: string,
        sebTitle: string,
        icon: LucideIcon,
        status: string,
        budget: number,
        conversation: string,
        start: string,
        end: string
    }


    const campaignsList: myStructure[] = [
        {
            budget: 350000,
            conversation: "40%",
            end: "26 Feb",
            icon: KeyboardMusic,
            sebTitle: "Promotional",
            title: "Summer Sale",
            start: "24 Feb",
            status: "completed"
        },
        {
            budget: 15000,
            conversation: "60%",
            end: "29 Feb",
            icon: LeafIcon,
            sebTitle: "Seasonal",
            title: "Back-to-School Promo",
            start: "22 Feb",
            status: "active"
        },
        {
            budget: 30000,
            conversation: "28%",
            end: "30 Feb",
            icon: LeafIcon,
            sebTitle: "Seasonal",
            title: "New Product Launch",
            start: "20 Feb",
            status: "disabled"
        },
        {
            budget: 50000,
            conversation: "77%",
            end: "31 Feb",
            icon: Rocket,
            sebTitle: "Lauch",
            title: "Holiday Gift Guide",
            start: "17 Feb",
            status: "active"
        },
        {
            budget: 10000,
            conversation: "20%",
            end: "28 Feb",
            icon: KeyboardMusic,
            sebTitle: "Promotional",
            title: "Clearance Sale",
            start: "23 Feb",
            status: "disabled"
        },
    ]

    return (
        <>
            <Card className="w-11/12    md:order-1 border-0 shadow-2xl mt-8  bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">campaigns</CardTitle>

                    <CardAction>
                        <Button variant="outline" className="cursor-pointer hover:border-blue-500 hover:text-blue-500 border-gray-300 border-2 transition capitalize text-sm rounded-lg text-[var(--foreground-primary)]"> view compaigns</Button>
                    </CardAction>
                </CardHeader>
                <CardContent className=" flex justify-evenly items-center w-full ">
                    {/* شروع قسمت بالای چارت */}
                    <Table className="">
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader className="*:uppercase *:text-[var(--foreground)]">
                            <TableRow className="border-[#cecece]">
                                <TableHead className=""></TableHead>
                                <TableHead className="">campaign</TableHead>
                                <TableHead>status</TableHead>
                                <TableHead className="">budget</TableHead>
                                <TableHead className="">conversations</TableHead>
                                <TableHead className="">start</TableHead>
                                <TableHead className="">end</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                active?.map((item: any, index: number) => {
                                    return (
                                        <TableRow key={index} className="border-[#cecece]">
                                            <TableCell className="font-medium">
                                                <Switch
                                                    aria-label='Large switch'
                                                    className="data-[state=checked]:bg-blue-600 data-[state=checked]:[&_span]:bg-gray-50 data-[state=unchecked]:bg-gray-300 data-[state=unchecked]:[&_span]:bg-white cursor-pointer"
                                                    disabled={item.status === "completed" ? true : false} checked={item.status === "active" ? true : false}
                                                    onCheckedChange={(check: any) => myHandleChange(check, index)}
                                                />
                                            </TableCell>
                                            <TableCell className="flex justify-start items-center gap-2 text-left "><item.icon className="border-2 rounded-2xl border-[#cecece] text-[var(--foreground-primary)] p-3 box-content" />
                                                <div className="flex flex-col *:flex">
                                                    <span className="text-base text-[var(--foreground-primary)]">{item.title}</span>
                                                    <span className="text-[var(--foreground)] text-sm">{item.sebTitle}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-[var(--foreground-primary)] ">
                                                <span className={`capitalize px-3 py-1 rounded-2xl ${item.status === "completed" ? "bg-green-500/30" : item.status === "active" ? "bg-sky-500/30" : "bg-[#cecece]"} ${item.status === "disabled" && dark === true ? "text-[var(--background)]" : ""}  `}>{item.status}</span>
                                            </TableCell>
                                            <TableCell className=" text-[var(--foreground)] text-base">${item.budget}</TableCell>
                                            <TableCell className="text-[var(--foreground)] text-base">{item.conversation}</TableCell>
                                            <TableCell className="text-[var(--foreground)] text-base">{item.start}</TableCell>
                                            <TableCell className="text-[var(--foreground)] text-base">{item.end}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </Table>


                    {/* پایان قسمت بالای چارت */}
                </CardContent>

            </Card>

        </>
    )
}