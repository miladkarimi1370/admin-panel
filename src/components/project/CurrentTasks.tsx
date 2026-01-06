import {
    Card,
    CardAction,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import {
    Item,

    ItemContent,
    ItemDescription,

    ItemGroup,

    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"

import { CircleCheckIcon } from "@/components/icons/lucide-circle-check";
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore";
import { Separator } from "../ui/separator";


export default function CurrentTasks() {

    const { dark } = openOrCloseDrawerStore();
    interface Structure {
        checkCompleted: boolean,
        title: string,
        time: string,
        priority: string
    }

    const Tasks: Structure[] = [
        {
            checkCompleted: true,
            title: "Unable to upload file",
            time: "August 05",
            priority: "High"
        },
        {
            checkCompleted: false,
            title: "Error in database query",
            time: "July 15",
            priority: "Medium"
        },
        {
            checkCompleted: false,
            title: "Authentication problem",
            time: "September 20",
            priority: "High"
        },
        {
            checkCompleted: true,
            title: "Bug in search functionality",
            time: "September 05",
            priority: "High"
        },
        {
            checkCompleted: false,
            title: "Compatibility issue with Firefox",
            time: "July 25",
            priority: "Medium"
        },
    ]
    return (
        <>
            <Card className="w-11/12 border-0 shadow-2xl mt-8  bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">current tasks</CardTitle>

                    <CardAction>
                        <Button variant="outline" className="cursor-pointer hover:border-blue-500 hover:text-blue-500 border-gray-300 border-2 transition capitalize text-sm rounded-lg text-[var(--foreground-primary)]"> all tasks</Button>
                    </CardAction>
                </CardHeader>
                <CardContent className=" flex justify-evenly items-center  *:w-full gap-4 flex-wrap md:flex-nowrap">
                    {/* شروع قسمت بالای چارت */}
                    <ItemGroup className="gap-4">
                        {Tasks.map((data, index) => (
                            <div key={index}>
                                <Item variant="outline" asChild role="listitem" className="border-0">
                                    <a href="#">
                                        <ItemMedia variant="default" className="border-0 h-10 w-10">
                                            <CircleCheckIcon className={`${data.checkCompleted ? "fill-green-500 stroke-white" : ""}   rounded-full ${dark ? "stroke-white" : ""}`} size={24} />
                                        </ItemMedia>
                                        <ItemContent>
                                            {data.checkCompleted ? <del className="line-clamp-1 text-[var(--foreground-primary)] text-base font-bold">
                                                {data.title}

                                            </del> : <ItemTitle className="line-clamp-1 text-[var(--foreground-primary)] text-base font-bold">
                                                {data.title}

                                            </ItemTitle>}

                                            <ItemDescription className="text-[var(--foreground)]">{data.time}</ItemDescription>
                                        </ItemContent>
                                        <ItemContent className="flex-none text-center">
                                            <ItemDescription className={`${data.priority === "Medium" ? "bg-amber-400/80" : "bg-amber-600/80"} px-2 py-1 text-sm font-extralight rounded-lg`}>{data.priority}</ItemDescription>
                                        </ItemContent>
                                    </a>

                                </Item>
                                {index !== Tasks.length - 1 && (
                                    <Separator className={`my-2 ${dark ? "bg-gray-200/20" : "bg-gray-600/20"} `} />
                                )}
                            </div>

                        ))}
                    </ItemGroup>


                    {/* پایان قسمت بالای چارت */}
                </CardContent>

            </Card>

        </>
    )
}