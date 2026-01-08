


import { Outlet } from "react-router-dom";
import TopNavigationMenu from "./components/header/mainHeaderwhenIsMobileFrame/TopNavigationMenu";
import MainDrawerMenu from "./components/mainDrawerMenu/MainDrawerMenu";

import { openOrCloseDrawerStore } from "./store/openAndCloseDarwerStore";
import CopyRight from "./components/Copyright/CopyRight";
import { Suspense } from "react";

export default function BaseStructure() {

    const { open } = openOrCloseDrawerStore();

    return (
        <>
            <div className="
             w-full 
            bg-[var(--background)]
         
             flex min-h-[100vh]
             justify-center items-start
             "
            >
                <div className={`${open ? "w-3/24" : "w-1/24"}  h-full hidden lg:flex `}>
                    <MainDrawerMenu />
                </div>
                <div className={`${open ? "w-21/24" : "w-23/24"}  `}>
                    <TopNavigationMenu />
                    <Suspense fallback={<div className="bg-[(var--background)] text-[var(--foreground-primary)] uppercase text-9xl font-bold justify-self-center w-full min-h-[100vh] flex justify-center items-center">loading . . .</div>}>
                        <Outlet />
                    </Suspense>

                    <CopyRight />
                </div>
            </div>
        </>
    )
}