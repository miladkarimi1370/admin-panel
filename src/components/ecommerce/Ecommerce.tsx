
import ChannelRevenue from "./ChannelRevenue";
import Overview from "./Overview";
import RecentOrders from "./RecentOrders";
import SalesTarget from "./SalesTarget";
import TopContries from "./TopCountries";
import TopProducts from "./TopProducts";

export default function Ecommerce() {

    return (
        <>
            <section className={` w-full   flex justify-center items-center flex-wrap  transition-all duration-300 ease-in-out  `}>
                <div className="w-11/12 flex justify-center items-center flex-wrap ">
                    <div className="xl:flex justify-evenly items-start ">
                        <div className="w-full  flex justify-evenly items-center flex-wrap xl:w-8/12">
                            <Overview />
                            <TopContries />
                        </div>
                        <div className="w-full  flex justify-center xl:justify-start items-center flex-wrap xl:w-4/12">
                            <SalesTarget />
                            <TopProducts />
                            <ChannelRevenue />
                        </div>
                    </div>
                    <RecentOrders />
                </div>


            </section>

        </>
    )
}