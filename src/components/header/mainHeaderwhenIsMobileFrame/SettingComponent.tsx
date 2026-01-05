import { SettingsIcon } from "@/components/icons/lucide-settings";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch"
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore";
import { useEffect } from "react";



export default function SettingComponents() {
    const { dark, setDark } = openOrCloseDrawerStore();

    useEffect(() => {
        const mode = document.body;

        if (dark) {
            mode.classList.add("dark");
        } else {
            mode.classList.remove("dark")
        }

    }, [dark])
    return (
        <>
            <Drawer direction="right">
                <DrawerTrigger className="cursor-pointer text-[var(--foreground)] hover:bg-[var(--background)] rounded-full p-2 transition">
                    <SettingsIcon className="w-6 h-6" />
                </DrawerTrigger>
                <DrawerContent className="bg-[var(--bg-primary)] !w-98 !max-w-98">
                    <DrawerHeader>
                        <DrawerTitle className="">
                            <div className="flex justify-between items-center">
                                <h2 className="uppercase text-[var(--foreground-primary)] tracking-widest">theme config</h2>
                                <DrawerClose>
                                    <Button className="cursor-pointer" variant="link">Cancel</Button>
                                </DrawerClose>
                            </div>

                        </DrawerTitle>
                        <Separator
                            orientation="horizontal"
                            className="my-2 h-[1px] w-full bg-[var(--foreground)] opacity-40"
                        />

                        <DrawerDescription className="mt-4 w-full ">
                            <div className="flex justify-between items-center flex-wrap space-x-2 w-full ">
                                <div>
                                    <Label htmlFor="airplane-mode" className="cursor-pointer flex text-[var(--foreground-primary)] text-lg capitalize">Dark mode</Label>
                                    <p className="text-[var(--foreground)] text-md w-full">click to swith mode of the website</p>
                                </div>

                                <Switch id="airplane-mode" onClick={() => setDark()} className="flex data-[state=checked]:bg-[var(--background)]
                                 data-[state=unchecked]:bg-gray-500
                                  data-[state=checked]:bg-black
                                    data-[state=checked]:[&>span]:bg-white
                                     data-[state=unchecked]:[&>span]:bg-black cursor-pointer"
                                />

                            </div>

                        </DrawerDescription>

                    </DrawerHeader>

                </DrawerContent>
            </Drawer>
        </>
    )
}