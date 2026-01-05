import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,

    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { BellIcon } from "@/components/icons/lucide-bell";

import { StickyNoteIcon } from "@/components/icons/lucide-sticky-note";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Client1 from "@/components/icons/thumb-2.jpg"
import Client2 from "@/components/icons/thumb-3.jpg";
import Client3 from "@/components/icons/thumb-4.jpg"

import { CircleIcon } from "@/components/icons/lucide-circle";
import {
    Item,

    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function NotificationComponent() {
    return (
        <>
            <Menubar className="border-0 shadow-none">
                <MenubarMenu >
                    <MenubarTrigger className="cursor-pointer text-[var(--foreground)] hover:bg-[var(--background)] rounded-full m-2 transition">
                        <BellIcon />
                    </MenubarTrigger>
                    <MenubarContent className="bg-[var(--bg-primary)] border-0 shadow-2xl p-2" align="end">
                        <MenubarItem className="flex justify-between items-center">
                            <h4 className="text-[var(--foreground)] text-sm font-bold capitalize">notification</h4>
                            <MenubarShortcut><StickyNoteIcon className="text-[var(--foreground)]" /></MenubarShortcut>
                        </MenubarItem>
                        <Item asChild className="">
                            <a href="#" className="hover:bg-[var(--background)] flex m-2">
                                <ItemContent className="flex justify-evenly items-center flex-row">
                                    <ItemTitle className="self-start">
                                        <Avatar>
                                            <AvatarImage src={Client1} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </ItemTitle>
                                    <ItemDescription className="w-8/12">
                                        <p className="text-[var(--foreground)]"><span className="text-[var(--foreground-primary)] font-bold text-md">Mark Squizer </span>menthoned you in his post</p>
                                        <p className="text-[var(--foreground)] text-sm">2 minutes ago</p>
                                    </ItemDescription>
                                    <div>
                                        <CircleIcon className="  fill-green-500 stroke-green-500 w-2 h-2" />
                                    </div>
                                </ItemContent>

                            </a>
                        </Item>
                        <Separator
                            orientation="horizontal"
                            className=" h-[1px] w-full bg-[var(--foreground)] opacity-40"
                        />
                        <Item asChild className="">
                            <a href="#" className="hover:bg-[var(--background)] flex m-2">
                                <ItemContent className="flex justify-evenly items-center flex-row">
                                    <ItemTitle className="self-start">
                                        <Avatar>
                                            <AvatarImage src={Client3} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </ItemTitle>
                                    <ItemDescription className="w-8/12">
                                        <p className="text-[var(--foreground)]"><span className="text-[var(--foreground-primary)] font-bold text-md">Elizabeth Tayloir </span>menthoned you in his post</p>
                                        <p className="text-[var(--foreground)] text-sm">2 minutes ago</p>
                                    </ItemDescription>
                                    <div>
                                        <CircleIcon className="  fill-green-500 stroke-green-500 w-2 h-2" />
                                    </div>
                                </ItemContent>

                            </a>
                        </Item>
                        <Separator
                            orientation="horizontal"
                            className=" h-[1px] w-full bg-[var(--foreground)] opacity-40"
                        />
                        <Item asChild className="">
                            <a href="#" className="hover:bg-[var(--background)] flex m-2">
                                <ItemContent className="flex justify-evenly items-center flex-row">
                                    <ItemTitle className="self-start">
                                        <Avatar>
                                            <AvatarImage src={Client2} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </ItemTitle>
                                    <ItemDescription className="w-8/12">
                                        <p className="text-[var(--foreground)]"><span className="text-[var(--foreground-primary)] font-bold text-md">Shaan ryan </span>menthoned you in his post</p>
                                        <p className="text-[var(--foreground)] text-sm">2 minutes ago</p>
                                    </ItemDescription>
                                    <div>
                                        <CircleIcon className="  fill-green-500 stroke-green-500 w-2 h-2" />
                                    </div>
                                </ItemContent>

                            </a>
                        </Item>
                        <div className="flex justify-center items-center w-full">
                            <Button className="capitalize bg-blue-600 text-white w-full py-1 cursor-pointer hover:bg-blue-600/80 transition" variant={"secondary"}>view All Respond</Button>
                        </div>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

        </>
    )
}