import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react"
import {
    Card,

    CardContent,

    CardHeader,

} from "@/components/ui/card"

import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"

import { CameraIcon, LucideBrainCircuit, ReceiptPoundSterling, type LucideIcon } from "lucide-react"

interface MyCalender {
    icon?: LucideIcon;
    title: string;
    subTitle: string;
    time: string
}
interface byCalender {
    [day: string]: MyCalender[]
}

export default function CalenderAndSchedule() {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [infor, setInfo] = useState<MyCalender[]>([]);
    const [day, setDay] = useState<string>("");
    useEffect(() => {
        if (!date) return;

        const dateStr = date.toLocaleDateString("en-GB");
        const match = dateStr.match(/^(\d{1,2})\//);

        const day = match?.[1];

        if (!day) return;
        setDay(day)
        setInfo(allSettedDutyInCalendar[day] ?? []);

    }, [date]);


    const allSettedDutyInCalendar: byCalender = {
        "05": [
            {
                icon: CameraIcon,
                title: "stand up",
                subTitle: "meeting",
                time: "10:10"
            },
            {
                icon: LucideBrainCircuit,
                title: "lunch",
                subTitle: "restaurant",
                time: "12:45"
            },
            {
                icon: ReceiptPoundSterling,
                title: "write daily report",
                subTitle: "stand up",
                time: "01:30"
            }
        ],
        "08": [
            {
                icon: CameraIcon,
                title: "stand up",
                subTitle: "meeting",
                time: "10:10"
            },
            {
                icon: LucideBrainCircuit,
                title: "lunch",
                subTitle: "restaurant",
                time: "12:45"
            },
            {
                icon: ReceiptPoundSterling,
                title: "write daily report",
                subTitle: "stand up",
                time: "01:30"
            }
        ],

        "09": [
            {
                icon: LucideBrainCircuit,
                title: "lunch",
                subTitle: "restaurant",
                time: "12:45"
            }
        ]
    };



    return (

        <>
            <Card className=" w-11/12 flex  justify-center   border-0 shadow-2xl mt-8  bg-[var(--bg-primary)]">
                <CardHeader className=" w-full flex justify-center">

                    <Calendar
                        captionLayout="label"


                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className={`max-w-sm mx-auto text-[var(--foreground)] bg-[var(--background)] rounded-2xl  border-0 shadow-2xl cursor-pointer  
                            
   [&_.rdp-day]:hover:bg-var(--background) 
    [&_.rdp-day]:hover:text-var(--foreground)
    [&_.rdp-day]:hover:scale-105
    [&_.rdp-day]:hover:shadow-md
    [&_.rdp-day]:hover:z-10
    [&_.rdp-day]:transition-all
    [&_.rdp-day]:duration-150
    [&_.rdp-day]:ease-out
    [&_.rdp-day]:rounded-full
    
    /* فقط روی روزهای داخل ماه جاری (نه outside days) */
    [&_.rdp-day:not(.rdp-day_outside)]:hover:bg-[var(--bg-primary)]
    [&_.rdp-day:not(.rdp-day_outside)]:hover:text-[var(--foreground)]
                        
                        `}
                    />

                </CardHeader>
                <CardContent className=" flex justify-evenly items-center  *:w-full gap-4 flex-wrap ">
                    {/* شروع قسمت بالای چارت */}
                    <h2 className="text-[var(--foreground-primary)] font-bold text-lg  tracking-wider text-center  capitalize  ">{`schedule at ${day && day} february`}</h2>
                    <div className="flex justify-center w-full max-w-md flex-col gap-6">
                        <ItemGroup className="gap-4">
                            {infor.length > 0 ? infor.map((info, index) => (
                                <Item key={index} variant="outline" asChild role="listitem" className="border-0 shadow-2xs bg-[var(--background)] rounded-2xl">
                                    <a href="#">
                                        <ItemMedia className="bg-sky-400/30" variant="image">
                                            {info.icon && <info.icon className="w-5 h-5" />}
                                        </ItemMedia>
                                        <ItemContent>
                                            <ItemTitle className="line-clamp-1 text-[var(--foreground-primary)] capitalize text-base">
                                                {info?.title}
                                            </ItemTitle>
                                            <ItemDescription className="text-[var(--foreground)]">{info?.subTitle}</ItemDescription>
                                        </ItemContent>
                                        <ItemContent className="flex-none text-center">
                                            <ItemDescription className="text-[var(--foreground)]">{info?.time}</ItemDescription>
                                        </ItemContent>
                                    </a>
                                </Item>
                            )) : (
                                <div className="text-[var(--foreground)] text-center font-bold ">you have not been selected !!!!!!!!!!!</div>
                            )}
                        </ItemGroup>
                    </div>

                    {/* پایان قسمت بالای چارت */}
                </CardContent>

            </Card>
        </>
    )
}