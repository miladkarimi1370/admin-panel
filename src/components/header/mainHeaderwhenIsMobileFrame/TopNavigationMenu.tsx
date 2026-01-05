

import { openOrCloseDrawerStore } from "@/store/openAndCloseDarwerStore"
import DashboardComponent from "./DashboardComponent"
import DrawerMenuComponent from "./DrawerMenuComponent"
import NotificationComponent from "./NotificationComponent"
import SearchBarMenu from "./SearchBarInMenu"
import SelectLanguageComponent from "./SelectLanguageComopnents"
import SettingComponents from "./SettingComponent"




export default function TopNavigationMenu() {
    const { open } = openOrCloseDrawerStore(state => state);
    return (
        <>
            <div className={`sticky top-0 
            ${open ? "lg:w-full xl:wfull" : "lg:w-full xl:w-full"}
                  lg:justify-self-end w-full h-[7vh] lg:h-[6vh]  uppercase flex justify-center items-center
                   bg-[var(--bg-primary)]  border-b border-b-gray-400/40 z-1000
                   transition-all duration-300 ease-in-out
                   `}>
                <section className="w-11/12  h-auto flex justify-center items-center ">
                    <div className="w-4/12  flex justify-start gap-4 items-center">
                        {/* شروع قسمت منوی ناوبری   */}

                        <DrawerMenuComponent />

                        {/* پایان قسمت منوی ناوبری   */}
                        {/* شروع قسمت ذره بین جستجو */}
                        <SearchBarMenu />
                        {/* پایان قسمت ذره بین جستجو */}
                    </div>
                    <div className="w-8/12 flex justify-end sm:justify-end md:justify-center   items-center">
                        {/* شروع قسمت انتخاب زبان  */}

                        <SelectLanguageComponent />
                        <NotificationComponent />
                        <SettingComponents />
                        <DashboardComponent />
                        {/* پایان قسمت انتخاب زبان  */}
                    </div>
                </section>
            </div>
        </>
    )
}