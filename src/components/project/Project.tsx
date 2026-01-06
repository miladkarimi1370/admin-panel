import CalenderAndSchedule from "./CalenderAndSchedule";
import CurrentTasks from "./CurrentTasks";
import Overview from "./OverviewInProject";
import RecentActivity from "./RecentActivity";
import Schedule from "./Schedule";
import TaskOverview from "./TaskOverview";

export default function Project() {
    return (
        <>
            <section className={` w-full bg-[var(--background)]  flex justify-center items-center flex-wrap   transition-all duration-300 ease-in-out  `}>
                <div className="w-11/12 flex justify-center  items-center flex-wrap h-full">
                    <div className="xl:flex w-full justify-evenly items-start h-full flex-wrap">
                        <div className="w-full  flex justify-evenly  h-full items-start flex-wrap xl:w-9/12">
                            <Overview />
                            <Schedule />

                        </div>
                        <div className="w-full  flex justify-center xl:justify-center h-full  items-center flex-wrap xl:w-3/12">
                            <CalenderAndSchedule />

                        </div>
                        <div className="w-full flex justify-center xl:justify-center items-center bg-amber-300 flex-wrap">
                            <CurrentTasks />
                            <TaskOverview />
                            <RecentActivity />
                        </div>
                    </div>

                </div>


            </section>
        </>
    )
}