import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,

    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button"
import { AlignLeftIcon } from "@/components/icons/lucide-align-left";
import { ShoppingCartIcon } from "@/components/icons/lucide-shopping-cart";
import { Separator } from "@/components/ui/separator";
import { ChartNoAxesCombinedIcon } from "@/components/icons/lucide-chart-no-axes-combined";
import { RocketIcon } from "@/components/icons/lucide-rocket";
import { AtomIcon } from "@/components/icons/lucide-atom";
import { GitGraphIcon } from "@/components/icons/lucide-git-graph";
import { LogOutIcon } from "@/components/icons/lucide-log-out";
import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore";



export default function DrawerMenuComponent() {

    const { open, setOpenAndClose } = openOrCloseDrawerStore();
    const handleClick: any = (e: any) : void=> {
   
        const innerWidth = window.innerWidth;
        if (innerWidth < 1020) {
            return
        } else {
               
                  setOpenAndClose();
             e.preventDefault()
          
        }

    }
    return (
        <>

            <Drawer direction="left">
                <DrawerTrigger className=" cursor-pointer text-[var(--foreground)] hover:bg-[var(--background)] rounded-full p-2 transition" onClick={(e) => handleClick(e)}>
                    <AlignLeftIcon className="w-6 h-6" />
                </DrawerTrigger>
                <DrawerContent className="bg-[var(--bg-primary)] !w-80 !max-w-80">
                    <DrawerHeader>
                        <DrawerTitle className="">
                            <div className="flex justify-between items-center">
                                <h2 className="uppercase text-[var(--foreground-primary)] tracking-widest">navigation</h2>
                                <DrawerClose>
                                    <Button className="cursor-pointer" variant="link">Cancel</Button>
                                </DrawerClose>
                            </div>

                        </DrawerTitle>
                        <Separator
                            orientation="horizontal"
                            className="my-2 h-[1px] w-full bg-[var(--foreground)] opacity-40"
                        />

                        <DrawerDescription className="mt-4">
                            <h4 className=" uppercase scroll-m-20 text-lg font-semibold tracking-tight text-[var(--foreground)] px-4">
                                dashboard
                            </h4>
                            <ul className=" rounded-2xl w-full flex justify-start items-center px-2 flex-col">

                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <a href="#" className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <ShoppingCartIcon className="group-hover:text-[var(--foreground-primary)]  transition" />
                                        <span className="group-hover:text-[var(--foreground-primary)]  transition">ecommerce</span>
                                    </a>
                                </li>
                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <a href="#" className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <RocketIcon className="group-hover:text-[var(--foreground-primary)]  transition" />
                                        <span className="group-hover:text-[var(--foreground-primary)]  transition">project</span>
                                    </a>
                                </li>
                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <a href="#" className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <AtomIcon className="group-hover:text-[var(--foreground-primary)]  transition" />
                                        <span className="group-hover:text-[var(--foreground-primary)]  transition">marketing</span>
                                    </a>
                                </li>
                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <a href="#" className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <ChartNoAxesCombinedIcon className="group-hover:text-[var(--foreground-primary)]  transition" />
                                        <span className="group-hover:text-[var(--foreground-primary)]  transition">analytic</span>
                                    </a>
                                </li>
                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <a href="#" className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <GitGraphIcon className="group-hover:text-[var(--foreground-primary)]  transition" />
                                        <span className="group-hover:text-[var(--foreground-primary)]  transition">graph</span>
                                    </a>

                                </li>
                                <li className="group rounded-2xl w-full hover:bg-[var(--background)]">
                                    <a href="#" className="*:text-[var(--foreground)]  flex justify-start gap-2 items-center w-full p-4">
                                        <LogOutIcon className="group-hover:text-[var(--foreground-primary)]  transition" />
                                        <span className="group-hover:text-[var(--foreground-primary)]  transition">log-out</span>
                                    </a>
                                </li>
                            </ul>
                        </DrawerDescription>

                    </DrawerHeader>

                </DrawerContent>
            </Drawer>

        </>
    )
}



