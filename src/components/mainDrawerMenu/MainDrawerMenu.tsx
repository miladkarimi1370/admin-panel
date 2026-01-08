
import { ShoppingCartIcon } from "../icons/lucide-shopping-cart";
import { RocketIcon } from "../icons/lucide-rocket";
import { AtomIcon } from "../icons/lucide-atom";

import { LogOutIcon } from "../icons/lucide-log-out";
import myLogo from "@/components/icons/logo-light-full.webp";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import secondLogo from "@/components/icons/logo-light-streamline.webp";
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore";
import darkLogo from "@/components/icons/logo-dark-full.webp";
import secondDarkLogo from "@/components/icons/logo-dark-streamline.webp"
import { ShieldUser } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function MainDrawerMenu() {
    const { open, dark } = openOrCloseDrawerStore();


    return (
        <>
            <div className="relative w-full ">
                <section className={`bg-[var(--bg-primary)]  ${open ? "w-3/24" : "w-1/24"} h-[100vh] flex justify-center items-start pt-4 fixed top-0  transition-all duration-300 ease-in-out`}>
                    <div className={`  ${open ? "w-11/12" : "w-full"}`}>
                        <div className="">
                            <div className={`flex justify-between items-center ${open ? '' : "justify-center"}`}>
                                <h2 className="uppercase text-[var(--foreground-primary)] tracking-widest">
                                    <img src={open && !dark ? myLogo : open && dark ? darkLogo : !open && !dark ? secondLogo : !open && dark ? secondDarkLogo : secondDarkLogo} className={`${open ? "visible" : "lg:invisible"} `} alt="myLogo" />
                                </h2>

                            </div>

                        </div>


                        <div className="mt-4 ">
                            <h4 className={` uppercase scroll-m-20 text-lg font-semibold tracking-tight text-[var(--foreground)] px-4 ${open ? "block" : "hidden"}`}>
                                dashboard
                            </h4>
                            <ul className=" rounded-2xl w-full flex justify-start items-center px-2 flex-col">

                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <NavLink to={"/ecommerce"} className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <Tooltip>
                                            <TooltipTrigger className="cursor-pointer ">
                                                <ShoppingCartIcon className="group-hover:text-[var(--foreground-primary)]   transition" />
                                            </TooltipTrigger>
                                            <TooltipContent side="right" className={`${open ? "hidden" : "inline"} `}>
                                                <p className="bg-[var(--background)] capitalize text-base font-bold mx-3">ecommerce</p>
                                            </TooltipContent>
                                        </Tooltip>

                                        <span className={`group-hover:text-[var(--foreground-primary)]  transition ${open ? "inline" : "hidden"}`} >ecommerce</span>
                                    </NavLink>
                                </li>
                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <NavLink to={"/project"} className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <Tooltip>
                                            <TooltipTrigger className="cursor-pointer">
                                                <RocketIcon className="group-hover:text-[var(--foreground-primary)]  transition" />
                                            </TooltipTrigger>
                                            <TooltipContent side="right" className={`${open ? "hidden" : "inline"} `}>
                                                <p className="bg-[var(--background)] capitalize text-base font-bold mx-3">project</p>
                                            </TooltipContent>
                                        </Tooltip>

                                        <span className={`group-hover:text-[var(--foreground-primary)]  transition ${open ? "inline" : "hidden"}`}>project</span>
                                    </NavLink>
                                </li>
                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <NavLink to={"/marketing"} className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <Tooltip>
                                            <TooltipTrigger className="cursor-pointer ">
                                                <AtomIcon className="group-hover:text-[var(--foreground-primary)]  transition" />
                                            </TooltipTrigger>
                                            <TooltipContent side="right" className={`${open ? "hidden" : "inline"} `}>
                                                <p className="bg-[var(--background)] capitalize text-base font-bold mx-3">marketing</p>
                                            </TooltipContent>
                                        </Tooltip>

                                        <span className={`group-hover:text-[var(--foreground-primary)]  transition ${open ? "inline" : "hidden"}`}>marketing</span>
                                    </NavLink>
                                </li>
                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <NavLink to={"/account/profile"} className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <Tooltip>
                                            <TooltipTrigger className="cursor-pointer ">
                                                <ShieldUser className="group-hover:text-[var(--foreground-primary)]  transition" />
                                            </TooltipTrigger>
                                            <TooltipContent side="right" className={`${open ? "hidden" : "inline"} `}>
                                                <p className="bg-[var(--background)] capitalize text-base font-bold mx-3">account</p>
                                            </TooltipContent>
                                        </Tooltip>

                                        <span className={`group-hover:text-[var(--foreground-primary)]  transition ${open ? "inline" : "hidden"}`}>account</span>
                                    </NavLink>
                                </li>

                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <a href="#" className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <Tooltip>
                                            <TooltipTrigger className="cursor-pointer ">
                                                <LogOutIcon className="group-hover:text-[var(--foreground-primary)]  transition" />
                                            </TooltipTrigger>
                                            <TooltipContent side="right" className={`${open ? "hidden" : "inline"} `}>
                                                <p className="bg-[var(--background)] capitalize text-base font-bold mx-3">log out</p>
                                            </TooltipContent>
                                        </Tooltip>

                                        <span className={`group-hover:text-[var(--foreground-primary)]  transition ${open ? "inline" : "hidden"}`}>log-out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>
            </div>

        </>
    )
}