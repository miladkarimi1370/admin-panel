import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "../ui/button";
import { email, string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Bell, LogOut, Shield, User2 } from "lucide-react";
import { NavLink } from "react-router-dom";

type FormData = {
    firstName: string
    userName: string,
    email: string,
    phoneNumber: number,
    country: string,
    address: string,
    city: string,
    postalCode: string
}


const formSchema = z.object({
    firstName: z.string().min(2, "نام کوچک باید حداقل 3 کاراکتر باشد").max(20, "نام کوچک نباید از 20 کاراکتر بیشتر باشد"),
    userName: z.string("نام کاربری باید شامل اعداد و حروف باشد").min(3, "نام کاربری باید حداقل شامل 3 کاراکتر باشد").max(20, "نام کاربری نباشد از 20 کاراکتر بیشتر باشد"),
    email: z.email("ایمیل شما نادرست است"),
    phoneNumber: z.string(),
    country: string("کشور فقط شامل حروف می باشد"),
    address: z.string("کشور فقط شامل حروف می باشد"),
    city: z.string(""),
    postalCode: z.string()
})

export default function PersonalInformation() {

    const { register, handleSubmit, setValue } = useForm<FormData>()


    const onSubmit = handleSubmit((data) => console.log(data))





    return (
        <>
            <Card className="w-full  border-0  mt-8 shadow-none  bg-[var(--bg-primary)]">
                <CardHeader className="flex justify-center flex-col  shadow-none border-0 w-full ring-0 focus-visible:right-0">
                    <CardTitle className="text-[var(--foreground-primary)]  font-bold text-xl capitalize tracking-wider">Personal Information</CardTitle>

                    <CardAction className="w-full my-10 flex justify-start items-center gap-2 border-0 shadow-none xl:hidden">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Button variant={"destructive"} className="capitalize bg-blue-500 text-white cursor-pointer">upload image</Button>
                        <Button variant={"outline"} className="capitalize  text-shadow-blue-500 border-blue-500 cursor-pointer">remove image</Button>
                    </CardAction>
                </CardHeader>
                <CardContent className="xl:grid xl:grid-cols-4 flex justify-evenly items-start  *:w-full gap-4 flex-wrap md:flex-nowrap">
                    {/* شروع قسمت فرم  */}
                    {/* شروع قسمتی که بالای xl نمایش داده می شود  */}
                    <div className="xl:col-span-1">
                        <ul className=" rounded-2xl w-11/12  justify-start items-start px-2 flex-col hidden xl:flex">

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

                    {/* شروع قسمتی که بالای xl نمایش داده می شود  */}
                    {/* شروع خود فرم */}
                    <div className="xl:col-span-3 ">
                        <div className="w-full my-10  justify-start items-center gap-2 border-0 shadow-none hidden xl:flex">
                            <Avatar className="w-16 h-16">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Button variant={"destructive"} className="capitalize bg-blue-500 text-white cursor-pointer">upload image</Button>
                            <Button variant={"outline"} className="capitalize  text-shadow-blue-500 border-blue-500 cursor-pointer">remove image</Button>
                        </div>
                        <form onSubmit={onSubmit} className=" *:py-2 *:my-2 **:rounded-2xl ">
                            <div className="w-full flex flex-col my-2">
                                <label>First Name :</label>
                                <input {...register("firstName")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500  text-[var(--foreground)] px-2" />

                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label>User Name :</label>
                                <input {...register("userName")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500 text-[var(--foreground)] px-2" />

                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label>email :</label>
                                <input {...register("email")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500 text-[var(--foreground)] px-2" />

                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label>Phone Number :</label>
                                <input {...register("phoneNumber")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500 text-[var(--foreground)] px-2" />

                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label>country :</label>
                                <input {...register("country")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500 text-[var(--foreground)] px-2" />

                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label>Address :</label>
                                <input {...register("address")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500 text-[var(--foreground)] px-2" />

                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label>City :</label>
                                <input {...register("city")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500 text-[var(--foreground)] px-2" />

                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label>Postal Code :</label>
                                <input {...register("postalCode")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500 text-[var(--foreground)] px-2" />

                            </div>

                            <div className=" justify-end flex">
                                <Button
                                    type="button"
                                    variant={"destructive"}
                                    className="cursor-pointer bg-blue-500 "
                                    onClick={() => {
                                        setValue("firstName", "milad")
                                        setValue("userName", "mili1370")
                                        setValue("email", "12333@gmail.com")
                                        setValue("phoneNumber", "09125554585")
                                        setValue("country", "Iran")
                                        setValue("address", "Keshavarz Blv Forsat Shirazi")
                                        setValue("city", "Tehran")
                                        setValue("postalCode", "4534534534")
                                    }}
                                >
                                    submit
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* پایان خود فرم */}


                    {/* پایان قسمت فرم  */}
                </CardContent>

            </Card >

        </>
    )
}