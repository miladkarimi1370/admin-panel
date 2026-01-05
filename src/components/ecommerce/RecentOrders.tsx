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
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"
import { CircleIcon } from "@/components/icons/lucide-circle";

export default function RecentOrders() {

    const invoices: any = [
        {
            order: "#46456",
            status: "pending",
            date: "01/01/2026",
            customer: "Milad Karimi",
            amountSpent: "334000 $",
        },
        {
            order: "#45123",
            status: "paid",
            date: "02/01/2026",
            customer: "Amin Davoudi",
            amountSpent: "120 $",
        },
        {
            order: "#56345",
            status: "fail",
            date: "01/01/2026",
            customer: "Hamlet Mikhitarian",
            amountSpent: "4334000 $",
        },
        {
            order: "#65781",
            status: "paid",
            date: "09/01/2026",
            customer: "Senator",
            amountSpent: "3345000 $",
        },
        {
            order: "#12768",
            status: "pending",
            date: "09/01/2026",
            customer: "Roberto Carlos",
            amountSpent: "564733000 $",
        },
        {
            order: "#12874",
            status: "pending",
            date: "12/01/206",
            customer: "Franchesco Totti",
            amountSpent: "1435000 $",
        },
        {
            order: "41289",
            status: "Paid",
            date: "01/01/2026",
            customer: "Milad Karimi",
            amountSpent: "55875000 $",
        },
    ]

    return (
        <>
            <Card className="w-10/12 xl:w-23/24  mb-4 border-0 shadow-2xl mt-6 bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">recent orders</CardTitle>

                    <CardAction>
                        <Button variant="outline" className="cursor-pointer hover:border-blue-500 hover:text-blue-500 border-gray-300 border-2 text-[var(--foreground-primary)] transition capitalize text-sm rounded-lg">view orders</Button>
                    </CardAction>
                </CardHeader>
                <CardContent className="cursor-pointer ">
                    {/* شروع قسمت بالای چارت */}

                    <Table>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader>
                            <TableRow className="*:uppercase *:text-[var(--foreground)] *:p-4 border-[var(--background)]">
                                <TableHead className="">order</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>date</TableHead>
                                <TableHead className="text-center">customer</TableHead>
                                <TableHead className="text-center">amout spent</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                invoices?.map((item: any , index : number) => {
                                    return (
                                        <TableRow key={index} className="*:p-4 hover:bg-[var(--background)] transition border-[var(--background)]">
                                            <TableCell className="font-medium text-[var(--foreground)]">{item.order}</TableCell>
                                            <TableCell className={`capitalize flex  items-center gap-1
                                                ${item.status.toLowerCase() === "pending" ? "text-amber-500 " :
                                                    item.status.toLowerCase() === "fail" ? "text-red-500" :
                                                        item.status.toLowerCase() === "paid" ? "text-green-500" :
                                                            "text-gray-500"
                                                }
                                                `}>
                                                <CircleIcon className={`
                                                         ${item.status.toLowerCase() === "pending" ? "fill-amber-500 ring-amber-500" :
                                                        item.status.toLowerCase() === "fail" ? "fill-red-500 ring-red-500" :
                                                            item.status.toLowerCase() === "paid" ? "fill-green-500 ring-green-500" :
                                                                "fill-gray-500 ring-gray-500"
                                                    }
                                                    `} size={10} />
                                                {item.status}</TableCell>
                                            <TableCell className="text-[var(--foreground)]">{item.date}</TableCell>
                                            <TableCell className={"text-center capitalize text-[var(--foreground)]"}>{item.customer}</TableCell>
                                            <TableCell className=" font-bold text-[var(--foreground-primary)] text-base text-center">{item.amountSpent}</TableCell>
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