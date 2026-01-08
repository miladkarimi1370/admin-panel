
import AdsPerformance from "./AdsPerformance";
import Campaigns from "./Campaigns";
import KPISummary from "./KPISummary";
import LeadPerformanceScore from "./LeadPerformanceScore";


export default function Marketing() {
  


    return (
        <>
            <section className={` w-full bg-[var(--background)]  flex justify-center items-center flex-wrap   transition-all duration-300 ease-in-out  `}>
                <div className="w-11/12 flex justify-center  items-center flex-wrap  ">
                    <KPISummary />

                </div>
                <div className="w-11/12  flex justify-center  items-center flex-wrap  ">
              
                        <AdsPerformance />
               
   <LeadPerformanceScore />
           
                 
                </div>
                <div className="w-11/12 flex justify-center items-center flex-wrap">
                    <Campaigns />
                </div>
            </section>
        </>
    )
}

