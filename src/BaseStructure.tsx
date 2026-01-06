import CopyRight from "./components/Copyright/CopyRight";
import Ecommerce from "./components/ecommerce/Ecommerce";

import TopNavigationMenu from "./components/header/mainHeaderwhenIsMobileFrame/TopNavigationMenu";
import MainDrawerMenu from "./components/mainDrawerMenu/MainDrawerMenu";
import Project from "./components/project/Project";
import { openOrCloseDrawerStore } from "./store/openAndCloseDarwerStore";

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
                    {/* <Ecommerce /> */}
                    <Project />


                    <CopyRight />
                </div>
            </div>
        </>
    )
}