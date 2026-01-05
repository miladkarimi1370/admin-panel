import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,

    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import { ActivityIcon } from "@/components/icons/lucide-activity";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Client1 from "@/components/icons/thumb-1.jpg";
import { SmileIcon } from "@/components/icons/lucide-smile";
import { SettingsIcon } from '@/components/icons/lucide-settings';
import {LogOutIcon} from "@/components/icons/lucide-log-out";

import { Separator } from "@/components/ui/separator";


export default function DashboardComponent() {
    return (
        <>
            <Menubar className="border-0 shadow-none">
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">
                        <Avatar>
                            <AvatarImage src={Client1} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </MenubarTrigger>
                    <MenubarContent className="border-0 bg-[var(--bg-primary)] shadow-2xl" align="end">
                        <MenubarItem className="cursor-pointer hover:bg-[var(--background)]">
                            <Avatar >
                                <AvatarImage src={Client1} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>   <MenubarShortcut>
                                <p className="font-bold text-md text-[var(--foreground-primary)]">Elizabeth Bethani</p>
                                <p className="text-sm text-[var(--foreground)]">Eli@gmail.com</p>
                            </MenubarShortcut>
                        </MenubarItem>

                        <Separator
                            orientation="horizontal"
                            className="mt-1 h-[1px] w-full bg-[var(--foreground)] opacity-40"
                        />
                        <MenubarItem className="py-2 group text-md flex justify-start items-center hover:bg-[var(--background)] transition  m-1">
                            <a href="#" className="flex justify-start items-center gap-2">
                                <SmileIcon className="w-8 h-8 text-[var(--foreground)] group-hover:text-[var(--foreground-primary)] transition" />
                                <p className="text-md text-[var(--foreground)] group-hover:text-[var(--foreground-primary)] transition">profile</p>
                            </a>
                        </MenubarItem>
                        <MenubarItem className="py-2 group text-md flex justify-start items-center hover:bg-[var(--background)] transition  m-1">
                            <a href="#" className="flex justify-start items-center gap-2">
                                <SettingsIcon className="w-8 h-8 text-[var(--foreground)] group-hover:text-[var(--foreground-primary)] transition" />
                                <p className="text-md text-[var(--foreground)] group-hover:text-[var(--foreground-primary)] transition">Accounts</p>
                            </a>
                        </MenubarItem>
                        <MenubarItem className="py-2 group text-md flex justify-start items-center hover:bg-[var(--background)] transition  m-1">
                            <a href="#" className="flex justify-start items-center gap-2">
                                <ActivityIcon className="w-8 h-8 text-[var(--foreground)] group-hover:text-[var(--foreground-primary)] transition" />
                                <p className="text-md text-[var(--foreground)] group-hover:text-[var(--foreground-primary)] transition">Activity</p>
                            </a>
                        </MenubarItem>
                        <Separator
                            orientation="horizontal"
                            className="mt-1 h-[1px] w-full bg-[var(--foreground)] opacity-40"
                        />
                        <MenubarItem className="py-2 group text-md flex justify-start items-center hover:bg-[var(--background)] transition  m-1">
                            <a href="#" className="flex justify-start items-center gap-2">
                                <LogOutIcon className="w-8 h-8 text-[var(--foreground)] group-hover:text-[var(--foreground-primary)] transition" />
                                <p className="text-md text-[var(--foreground)] group-hover:text-[var(--foreground-primary)] transition">sign out</p>
                            </a>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

        </>
    )
}