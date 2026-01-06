import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Building2, Calendar, Store, type LucideIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore";
export default function RecentActivity() {

    const { dark } = openOrCloseDrawerStore();

    interface MyChat {
        logoOrAvatar?: LucideIcon,
        fullName?: string,
        time?: string,
        status?: string,
        comment?: string
    }


    const coversation: MyChat[] = [
        {
            logoOrAvatar: Building,
            fullName: "Angelina Gotelli",
            time: "11:20 PM",
            status:
                "has change PD-979 status to Completed",
            comment: "",

        },
        {
            logoOrAvatar: Building2,
            fullName: "Max Alexander",
            time: "11:25 PM",
            status: "",
            comment: "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.",

        },
        {
            logoOrAvatar: Calendar,
            fullName: "Eugene Stewart",
            time: "09:40 PM",
            status: "added tags Live Issue Backend",
            comment: "",

        },
        {
            logoOrAvatar: Store,
            fullName: "Shannon Baker",
            time: "08:18 PM",
            status: "addeddocument.csv",
            comment: "",

        },
        {
            logoOrAvatar: Store,
            fullName: "Roberta Horton",
            time: "07:17 PM",
            status: "mentioned you in a commentPost",
            comment: "@Carolyn One of the main causes of the fall of the Roman Empire was that-lacking zero-they had no way to indicate successful termination of their C programs.",

        },
        {
            logoOrAvatar: Building,
            fullName: "Lee Wheeler",
            time: "04:13 PM",
            status: "assigned ticketPD-1092toAlvin Moreno",
            comment: "",

        },

    ];



    return (
        <>
            <Card className="w-11/12 md:w-5/12 max-h-[849px] xl:w-4/12 overflow-y-scroll md:order-2  border-0 shadow-2xl mt-8  bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">recent activity</CardTitle>

                    <CardAction>
                        <Button variant="outline" className="cursor-pointer hover:border-blue-500 hover:text-blue-500 border-gray-300 border-2 transition capitalize text-sm rounded-lg text-[var(--foreground-primary)]"> all tasks</Button>
                    </CardAction>
                </CardHeader>
                <CardContent className=" flex justify-evenly items-center  *:w-full gap-4 flex-wrap md:flex-nowrap">
                    {/* شروع قسمت بالای تایم لاین */}
                    <div className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-20 px-6">
                        <div className="relative ml-4">
                            {/* Timeline line */}
                            <div className="absolute left-0 inset-y-0 border-l-2" />

                            {coversation?.map(
                                (item, index) => (
                                    <div key={index} className="relative pl-10 pb-12 last:pb-0">
                                        {/* Timeline Icon */}
                                        <div className={`absolute left-px -translate-x-1/2 h-9  w-9 flex items-center justify-center rounded-full bg-[var(--bg-primary)] ring-8 ring-[var(--foreground)] ${dark ? "text-blue-500" : "text-blue-700"}`}>
                                            {item.logoOrAvatar ? <item.logoOrAvatar className={`h-5 w-5 ${dark ? "stroke-blue-500" : "stroke-blue-700"}}`} /> : (
                                                <Avatar>
                                                    <AvatarImage src="" />
                                                    <AvatarFallback>{item.fullName?.slice(0, 2)}</AvatarFallback>
                                                </Avatar>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="pt-2 sm:pt-1 space-y-3">
                                            <p className="text-lg font-medium text-[var(--foreground-primary)]">{item.fullName || "unknown"}</p>
                                            <div>
                                                <h3 className="text-sm font-medium text-[var(--foreground)] tracking-[-0.01em]">
                                                    {item.time || new Date().toLocaleString()}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-2 text-sm">
                                                    <Calendar className={`h-4 w-4 ${dark ? "stroke-blue-500" : "stroke-blue-700"} `} />
                                                    <span className="text-[var(--foreground-primary)]">{item.status || ""}</span>
                                                </div>
                                            </div>
                                            <p className="text-sm sm:text-base text-[var(--foreground)] text-pretty">
                                                {item.comment || ""}
                                            </p>
                                            <div className="flex flex-wrap gap-2">

                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>


                    {/* پایان قسمت تایم لاین */}
                </CardContent>

            </Card>

        </>
    )
}