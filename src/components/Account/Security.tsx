import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Bell, LogOut, Shield, User2 } from "lucide-react"
import { Button } from "../ui/button"
import { email, string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";

import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemSeparator,
    ItemTitle,
} from "@/components/ui/item"


import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import React from "react";
import { NavLink } from "react-router-dom";

type FormData = {
    currentPassword: string,
    newPassword: string,


}


const formSchema = z.object({
    currentPassword: z.string().min(2, "نام کوچک باید حداقل 3 کاراکتر باشد").max(20, "نام کوچک نباید از 20 کاراکتر بیشتر باشد"),
    newPassword: z.string("نام کاربری باید شامل اعداد و حروف باشد").min(3, "نام کاربری باید حداقل شامل 3 کاراکتر باشد").max(20, "نام کاربری نباشد از 20 کاراکتر بیشتر باشد"),


})



export default function Security() {

    interface verificationValid {
        title: string,
        avatar: string,
        subTitle: string,
        button_text: string
    }

    const verification: verificationValid[] = [
        {
            title: "Google Authenticator",
            avatar: "https://ecme-next.themenate.net/img/others/google.png",
            subTitle: "Using Google Authenticator app generates time-sensitive codes for secure logins.",
            button_text: "Activated"
        },
        {
            title: "Okta Verify",
            subTitle: "Receive push notifications from Okta Verify app on your phone for quick login approval.",
            avatar: "https://ecme-next.themenate.net/img/others/okta.png",
            button_text: "Enable"
        },
        {
            title: "E Mail verification",
            subTitle: "Unique codes sent to email for confirming logins.",
            avatar: "https://ecme-next.themenate.net/img/others/email.png",
            button_text: "Enable"
        }
    ]


    const { register, handleSubmit, setValue } = useForm<FormData>()


    const onSubmit = handleSubmit((data) => console.log(data))
    return (
        <>
            <Card className="w-full  border-0  mt-8 shadow-none  bg-[var(--bg-primary)]">
                <CardHeader className="flex justify-center flex-col  shadow-none border-0 w-full ring-0 focus-visible:right-0">
                    <CardTitle className="text-[var(--foreground-primary)]  font-bold text-xl capitalize tracking-wider">Password</CardTitle>
                    <CardDescription className="text-base text-[var(--foreground)]">Remember, your password is your digital key to your account. Keep it safe, keep it secure!</CardDescription>

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

                        <form onSubmit={onSubmit} className=" *:py-2 *:my-2 **:rounded-2xl ">
                            <div className="w-full flex flex-col my-2">
                                <label>current Password :</label>
                                <input {...register("currentPassword")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500  text-[var(--foreground)] px-2" />

                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label>New Password :</label>
                                <input {...register("newPassword")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500 text-[var(--foreground)] px-2" />

                            </div>
                            <div className="w-full flex flex-col my-2">
                                <label>Confirm New Password :</label>
                                <input {...register("newPassword")} className="bg-[var(--background)] py-2 my-2 focus-visible:outline-blue-500 text-[var(--foreground)] px-2" />

                            </div>


                            <div className=" justify-end flex">
                                <Button
                                    type="button"
                                    variant={"destructive"}
                                    className="cursor-pointer bg-blue-500 "
                                    onClick={() => {
                                        setValue("currentPassword", "1234567")
                                        setValue("newPassword", "891011")
                                        setValue("newPassword", "891011")

                                    }}
                                >
                                    update
                                </Button>
                            </div>
                        </form>

                        <div className=" mt-6">
                            <Item>
                                <ItemContent>
                                    <ItemTitle className="text-[var(--foreground-primary)] text-xl font-bold">2-Step verification</ItemTitle>
                                    <ItemDescription className="text-[var(--foreground)] text-base">
                                        Your account holds great value to hackers. Enable two-step verification to safeguard your account!
                                    </ItemDescription>
                                </ItemContent>

                            </Item>

                            <ItemGroup>
                                {verification?.map((info, index) => (
                                    <React.Fragment key={index}>
                                        <Item>
                                            <ItemMedia>
                                                <Avatar>
                                                    <AvatarImage src={info.avatar} className="grayscale" />
                                                    <AvatarFallback>{info.title.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                            </ItemMedia>
                                            <ItemContent className="gap-1">
                                                <ItemTitle>{info.title}</ItemTitle>
                                                <ItemDescription>{info.subTitle}</ItemDescription>
                                            </ItemContent>
                                            <ItemActions>
                                                <Button variant="outline" className="border-blue-500 cursor-pointer text-[var(--foreground)]">
                                                        {info.button_text}
                                                </Button>
                                            </ItemActions>
                                        </Item>
                                        {index !== verification.length - 1 && <ItemSeparator />}
                                    </React.Fragment>
                                ))}
                            </ItemGroup>

                        </div>
                    </div>

                    {/* پایان خود فرم */}


                    {/* پایان قسمت فرم  */}
                </CardContent>

            </Card >
        </>
    )
}