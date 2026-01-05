import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import US from "@/components/icons/US.png";
import CN from "@/components/icons/CN.png";
import ES from "@/components/icons/ES.png";
import AR from "@/components/icons/SA.png";
import { CheckIcon } from "@/components/icons/lucide-check";

export default function SelectLanguageComponent() {
    return (
        <>
            <Menubar className="border-0 shadow-none">
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer hover:bg-[var(--background)] rounded-full p-2 transition">
                        <Avatar className="w-6 h-6 cursor-pointer">
                            <AvatarImage src={US} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </MenubarTrigger>
                    <MenubarContent className="border-0 shadow-2xl bg-[var(--bg-primary)]" align="end">
                        <MenubarItem className="hover:bg-[var(--background)] cursor-pointer transition flex justify-evenly items-center py-2">
                            <Avatar className="w-6 h-6 cursor-pointer">
                                <AvatarImage src={US} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="text-[var(--foreground)] font-bold text-md capitalize flex ">english</span>
                            <MenubarShortcut><CheckIcon className="w-4 h-4 text-green-500 font-bold" /></MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem className="hover:bg-[var(--background)] cursor-pointer transition flex justify-evenly items-center py-2">
                            <Avatar className="w-6 h-6 cursor-pointer">
                                <AvatarImage src={CN} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
         <span className="text-[var(--foreground)] font-bold text-md capitalize flex ">Chinease</span>
                            <MenubarShortcut><CheckIcon className="hidden w-4 h-4 text-green-500 font-bold" /></MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem className="hover:bg-[var(--background)] cursor-pointer transition flex justify-evenly items-center py-2">
                            <Avatar className="w-6 h-6 cursor-pointer">
                                <AvatarImage src={ES} />
                                <AvatarFallback>Es</AvatarFallback>
                            </Avatar>
                            <span className="text-[var(--foreground)] font-bold text-md capitalize flex ">Spanish</span>
                            <MenubarShortcut><CheckIcon className="hidden w-4 h-4 text-green-500 font-bold" /></MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem className="hover:bg-[var(--background)] cursor-pointer transition flex justify-evenly items-center py-2">
                            <Avatar className="w-6 h-6 cursor-pointer">
                                <AvatarImage src={AR} />
                                <AvatarFallback>Ar</AvatarFallback>
                            </Avatar>
         <span className="text-[var(--foreground)] font-bold text-md capitalize flex ">Arabia</span>
                            <MenubarShortcut><CheckIcon className="hidden w-4 h-4 text-green-500 font-bold" /></MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

        </>
    )
}