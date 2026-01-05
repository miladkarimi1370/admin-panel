import Ecommerce from "./components/ecommerce/Ecommerce";

import TopNavigationMenu from "./components/header/mainHeaderwhenIsMobileFrame/TopNavigationMenu";
import MainDrawerMenu from "./components/mainDrawerMenu/MainDrawerMenu";
import Project from "./components/project/Project";

export default function BaseStructure() {
    return (
        <>
            <div className=" w-full bg-[var(--background)] flex">
                <div className="w-4/24  h-full hidden lg:flex  ">
                    <MainDrawerMenu />
                </div>
                <div className="w-full    ">
                    <TopNavigationMenu />
                    {/* <Ecommerce /> */}
                    <Project />
                </div>
            </div>
        </>
    )
}