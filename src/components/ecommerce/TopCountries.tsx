
import {
    Card,
    CardAction,
    CardContent,

    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import WorldMap from "./worldMap"
import { Progress } from "@/components/ui/progress"

import BR from "@/components/icons/BR.png";
import IN from "@/components/icons/IN.png";
import SA from "@/components/icons/SA.png";
import UK from "@/components/icons/UK.png";
import US from "@/components/icons/US.png";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,

    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
export default function TopContries() {



    return (
        <>
            <Card className="w-10/12 xl:w-11/12 my-4 border-0 shadow-2xl  bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">top countries</CardTitle>

                    <CardAction>

                    </CardAction>
                </CardHeader>
                <CardContent className="cursor-pointer w-full rounded-2xl">
                    {/* ایجاد نقشه جهان */}
                    <WorldMap />
                    {/* ایجاد progress bar ها ی مرتبط به نقشه جهان */}
                    <div className=" my-2">
                        <Item variant="muted" className="flex justify-evenly items-center transition hover:bg-[var(--background)] rounded-2xl">
                            <ItemMedia className="w-1/12">
                                <Avatar className="size-7">
                                    <AvatarImage src={US} />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent className="w-8/12">
                                <ItemTitle className="text-[var(--foreground-primary)] font-bold text-base capitalize">united states</ItemTitle>
                                <ItemDescription>
                                    <Progress
                                        value={67.44}
                                        className="w-full [&>div]:bg-blue-500 bg-[var(--background)]"
                                    />

                                </ItemDescription>

                            </ItemContent>

                            <ItemActions className="font-bold text-sm text-[var(--foreground-primary)] w-2/12 self-end">
                                67.44 %
                            </ItemActions>
                        </Item>
                        <Item variant="muted" className="flex justify-evenly items-center transition hover:bg-[var(--background)] rounded-2xl">
                            <ItemMedia className="w-1/12">
                                <Avatar className="size-7">
                                    <AvatarImage src={SA} />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent className="w-8/12">
                                <ItemTitle className="text-[var(--foreground-primary)] font-bold text-base capitalize">sau'udi arabia</ItemTitle>
                                <ItemDescription>
                                    <Progress
                                        value={67.44}
                                        className="w-full [&>div]:bg-blue-500 bg-[var(--background)]"
                                    />

                                </ItemDescription>

                            </ItemContent>

                            <ItemActions className="font-bold text-sm text-[var(--foreground-primary)] w-2/12 self-end">
                                67.44 %
                            </ItemActions>
                        </Item>
                        <Item variant="muted" className="flex justify-evenly items-center transition hover:bg-[var(--background)] rounded-2xl">
                            <ItemMedia className="w-1/12">
                                <Avatar className="size-7">
                                    <AvatarImage src={BR} />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent className="w-8/12">
                                <ItemTitle className="text-[var(--foreground-primary)] font-bold text-base capitalize">brazil</ItemTitle>
                                <ItemDescription>
                                    <Progress
                                        value={67.44}
                                        className="w-full [&>div]:bg-blue-500 bg-[var(--background)]"
                                    />

                                </ItemDescription>

                            </ItemContent>

                            <ItemActions className="font-bold text-sm text-[var(--foreground-primary)] w-2/12 self-end">
                                67.44 %
                            </ItemActions>
                        </Item>
                        <Item variant="muted" className="flex justify-evenly items-center transition hover:bg-[var(--background)] rounded-2xl">
                            <ItemMedia className="w-1/12">
                                <Avatar className="size-7">
                                    <AvatarImage src={UK} />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent className="w-8/12">
                                <ItemTitle className="text-[var(--foreground-primary)] font-bold text-base capitalize">united kingdom</ItemTitle>
                                <ItemDescription>
                                    <Progress
                                        value={67.44}
                                        className="w-full [&>div]:bg-blue-500 bg-[var(--background)]"
                                    />

                                </ItemDescription>

                            </ItemContent>

                            <ItemActions className="font-bold text-sm text-[var(--foreground-primary)] w-2/12 self-end">
                                67.44 %
                            </ItemActions>
                        </Item>
                        <Item variant="muted" className="flex justify-evenly items-center transition hover:bg-[var(--background)] rounded-2xl">
                            <ItemMedia className="w-1/12">
                                <Avatar className="size-7">
                                    <AvatarImage src={IN} />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent className="w-8/12">
                                <ItemTitle className="text-[var(--foreground-primary)] font-bold text-base capitalize">india</ItemTitle>
                                <ItemDescription>
                                    <Progress
                                        value={67.44}
                                        className="w-full [&>div]:bg-blue-500 bg-[var(--background)]"
                                    />

                                </ItemDescription>

                            </ItemContent>

                            <ItemActions className="font-bold text-sm text-[var(--foreground-primary)] w-2/12 self-end">
                                67.44 %
                            </ItemActions>
                        </Item>
                    </div>

                    {/* ایجاد progress bar ها ی مرتبط به نقشه جهان */}

                </CardContent>

            </Card>
        </>
    )
}