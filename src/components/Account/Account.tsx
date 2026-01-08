
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,

} from "@/components/ui/card"

import {
    Drawer,

    DrawerContent,

    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { AlignLeft, Bell, LogOut, Shield, User2 } from "lucide-react"
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore"
import { useEffect } from "react"
import { Separator } from "../ui/separator"

import { NavLink, Outlet } from "react-router-dom"


export default function Account() {

    const { accountDrawer, setAccountDrawer } = openOrCloseDrawerStore();

    useEffect(() => {
        window.addEventListener("close", () => setAccountDrawer(false));

    })


    return (
        <>
            <div className="bg-[var(--background)] w-full  flex justify-center">
                <div className="w-11/12 h-full  mt-8">
                    <h2 className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider mb-8 ">settings</h2>

                    {/* شروع قسمت اکانت */}
                    <Card className="w-full border-0 shadow-2xl mt-8 bg-[var(--bg-primary)]" >
                        <CardHeader className=" flex justify-start items-start">


                            <CardAction className=" justify-self-start">
                                <Drawer direction="left">
                                    <DrawerTrigger onClick={() => setAccountDrawer(true)} className="cursor-pointer xl:hidden">
                                        <AlignLeft className="text-[var(--foreground)]" />
                                    </DrawerTrigger>
                                    <DrawerContent className={`bg-[var(--bg-primary)] w-full flex justify-start  ${accountDrawer ? "z-100" : "z-1"}`}>
                                        <DrawerHeader>
                                            <DrawerTitle className="text-[var(--foreground)] uppercase text-lg py-2">Navigation</DrawerTitle>
                                            <Separator className="border-1 border-[var(--foreground)]" />
                                        </DrawerHeader>
                                        <div className=" w-full flex justify-center items-start">
                                            <ul className=" rounded-2xl w-11/12 flex justify-start items-start px-2 flex-col ">

                                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                                    <NavLink to={"/account/profile"} className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                                        <User2 className="group-hover:text-[var(--foreground-primary)]   transition" />
                                                        <p className="group-hover:text-[var(--foreground-primary)] capitalize text-base font-bold mx-3 ">profile</p>
                                                    </NavLink>
                                                </li>
                                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                                    <NavLink to={"/account/security"} className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                                        <Shield className="group-hover:text-[var(--foreground-primary)]  transition" />
                                                        <p className="group-hover:text-[var(--foreground-primary)] capitalize text-base font-bold mx-3">security</p>
                                                    </NavLink>
                                                </li>
                                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                                    <NavLink to={"/account/notification"} className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                                        <Bell className="group-hover:text-[var(--foreground-primary)]  transition" />
                                                        <p className="group-hover:text-[var(--foreground-primary)] capitalize text-base font-bold mx-3">notification</p>
                                                    </NavLink>
                                                </li>
                                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                                    <a href="#" className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                                        <LogOut className="group-hover:text-[var(--foreground-primary)]  transition" />
                                                        <p className="group-hover:text-[var(--foreground-primary)] capitalize text-base font-bold mx-3">log out</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </DrawerContent>
                                </Drawer>
                            </CardAction>
                        </CardHeader>

                        <CardContent className="w-full  ">
            
                            <Outlet />
                        </CardContent>
                    </Card >




                    {/* پایان قسمت اکانت */}

                </div>
            </div>
        </>
    )
}