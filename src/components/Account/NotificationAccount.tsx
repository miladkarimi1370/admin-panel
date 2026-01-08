import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemFooter,
    ItemGroup,
    ItemHeader,
    ItemMedia,
    ItemSeparator,
    ItemTitle,
} from "@/components/ui/item";

import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"

import { Switch } from "@/components/ui/switch"
import { Bell, LogOut, Shield, User2 } from "lucide-react"
import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { NavLink } from "react-router-dom";


export default function NotificationAccount() {

    const [checkedR, setChechedR] = useState("nothing");
    const [checkSwitchForCheckBox, setCheckSwithcForCheckBos] = useState<boolean>(true)
    const [checkBoxChecked, setCheckBoxChecked] = useState({
        news: false,
        tips: false,
        offer: false,
        follow: false
    })
    type CheckKey = "news" | "tips" | "offer" | "follow"
    const handleChangeForCheckBox = (key: CheckKey, checked: any) => {
        setCheckBoxChecked((prev) => {
            return {
                ...prev, [key]: checked
            }
        })

    }
    const handleChangeForAllOrNot = (check: boolean) => {
        setCheckSwithcForCheckBos(check);
        if (check) {
            setCheckBoxChecked({
                follow: true,
                news: true,
                offer: true,
                tips: true
            })
        } else {
            setCheckBoxChecked({
                follow: false,
                news: false,
                offer: false,
                tips: false
            })
        }

    }
    const handleChange = (e: any) => {
        setChechedR(e);
    }

    useEffect(() => {
        handleChangeForAllOrNot(checkSwitchForCheckBox);
    }, [])

    return (
        <>
            <Card className="w-full  border-0  mt-8 shadow-none  bg-[var(--bg-primary)]">
                <CardHeader className="flex justify-center flex-col  shadow-none border-0 w-full ring-0 focus-visible:right-0">
                    <CardTitle className="text-[var(--foreground-primary)]  font-bold text-xl capitalize tracking-wider ">Notification</CardTitle>


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

                    <div className="xl:col-span-3 ">

                        <ItemGroup>


                            <Item>

                                <ItemContent className="gap-1">
                                    <ItemTitle className="text-[var(--foreground-primary)] text-xl font-bold capitalize">Enable desktop notification</ItemTitle>
                                    <ItemDescription className="text-[var(--foreground)] text-base">Decide whether you want to be notified of new message & updates</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Switch className=" data-[state=checked]:[&>span]:bg-gray-50   data-[state=unchecked]:[&>span]:bg-white data-[state=unchecked]:bg-gray-200 data-[state=checked]:bg-blue-500 h-7 w-12 [&_span]:size-6" />
                                </ItemActions>
                            </Item>
                            <ItemSeparator className="bg-[var(--background)]" />
                            <Item>

                                <ItemContent className="gap-1">
                                    <ItemTitle className="text-[var(--foreground-primary)] text-xl font-bold capitalize">Enable unread notification badge</ItemTitle>
                                    <ItemDescription className="text-[var(--foreground)] text-base">Display a red indicator on of the notification icon when you have unread message</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Switch className=" data-[state=checked]:[&>span]:bg-gray-50   data-[state=unchecked]:[&>span]:bg-white data-[state=unchecked]:bg-gray-200 data-[state=checked]:bg-blue-500 h-7 w-12 [&_span]:size-6" />
                                </ItemActions>
                            </Item>
                            <ItemSeparator className="bg-[var(--background)]" />
                            <Item>

                                <ItemContent className="gap-1">
                                    <ItemTitle className="text-[var(--foreground-primary)] text-xl font-bold capitalize">Enable unread notification badge</ItemTitle>
                                    <ItemDescription className="text-[var(--foreground)] text-base">Display a red indicator on of the notification icon when you have unread message</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Switch className=" data-[state=checked]:[&>span]:bg-gray-50   data-[state=unchecked]:[&>span]:bg-white data-[state=unchecked]:bg-gray-200 data-[state=checked]:bg-blue-500 h-7 w-12 [&_span]:size-6" />
                                </ItemActions>
                            </Item>
                            <ItemSeparator className="bg-[var(--background)]" />

                            <div className=" py-4 ">
                                <RadioGroup defaultValue={checkedR} onValueChange={(e) => handleChange(e)} className=" px-4">
                                    <div className="flex items-baseline space-x-4 py-2">
                                        <RadioGroupItem className={`w-5 h-5 ${checkedR === "all" ? "bg-blue-500 text-white border-white" : ""}`} value="all" id="all" />
                                        <div>
                                            <Label htmlFor="all" className="text-[var(--foreground-primary)] text-lg font-bold capitalize">All new messages</Label>
                                            <p className="text-[var(--foregound)]">Broadcast notifications to the channel for each new message</p>
                                        </div>

                                    </div>
                                    <div className="flex items-center space-x-4 py-2">
                                        <RadioGroupItem className={`w-5 h-5 ${checkedR === "MentionsOnly" ? "bg-blue-500 text-white border-white" : ""}`} value="MentionsOnly" id="MentionsOnly" />
                                        <div>
                                            <Label htmlFor="MentionsOnly" className="text-[var(--foreground-primary)] text-lg font-bold capitalize">Mentions only</Label>
                                            <p className="text-[var(--foregound)]">Only alert me in the channel if someone mentions me in a message
                                            </p>
                                        </div>

                                    </div>
                                    <div className="flex items-center space-x-4 py-2">
                                        <RadioGroupItem className={`w-5 h-5 ${checkedR === "nothing" ? "bg-blue-500 text-white border-white" : ""}`} value="nothing" id="nothing" />
                                        <div>
                                            <Label htmlFor="nothing" className="text-[var(--foreground-primary)] text-lg font-bold capitalize">Nothing</Label>
                                            <p className="text-[var(--foregound)]">Don't notify me anything</p>
                                        </div>

                                    </div>
                                </RadioGroup>
                            </div>
                            <ItemSeparator className="bg-[var(--background)]" />
                            {/* شروع قسمت چک باکس  */}
                            <Item>

                                <ItemContent className="gap-1">
                                    <ItemTitle className="text-[var(--foreground-primary)] text-xl font-bold capitalize">Email notification</ItemTitle>
                                    <ItemDescription className="text-[var(--foreground)] text-base">Substance can send you email notification for any new direct message</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Switch checked={checkSwitchForCheckBox} onCheckedChange={(e) => handleChangeForAllOrNot(e)} className=" data-[state=checked]:[&>span]:bg-gray-50   data-[state=unchecked]:[&>span]:bg-white data-[state=unchecked]:bg-gray-200 data-[state=checked]:bg-blue-500 h-7 w-12 [&_span]:size-6" />
                                </ItemActions>
                            </Item>
                            <div className="flex items-start space-x-4 py-2">
                                <Checkbox id="news" value={"news"}
                                    className={`w-6 h-6 translate-y-1 ${checkBoxChecked.news ? "bg-blue-500 text-white" : ""}`}
                                    checked={checkBoxChecked.news}
                                    onCheckedChange={(e) => handleChangeForCheckBox("news", e)}
                                />
                                <div className="flex flex-col ">
                                    <Label htmlFor="news" className="text-[var(--foreground-primary)] text-lg font-bold capitalize">News & updates</Label>
                                    <p className="text-[var(--foreground)]">
                                        New about product and features update
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 py-2">
                                <Checkbox
                                    id="tip"
                                    value={"tips"}

                                    className={`w-6 h-6 translate-y-1 ${checkBoxChecked.tips ? "bg-blue-500 text-white" : ""}`}
                                    checked={checkBoxChecked.tips} onCheckedChange={(e) => handleChangeForCheckBox("tips", e)} />
                                <div className="flex flex-col ">
                                    <Label htmlFor="tip" className="text-[var(--foreground-primary)] text-lg font-bold capitalize">Tips & tutorials</Label>
                                    <p className="text-[var(--foreground)]">
                                        Tips & trick in order to increase your performance efficiency
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 py-2">
                                <Checkbox id="offer" value={"offer"}
                                    className={`w-6 h-6 translate-y-1 ${checkBoxChecked.offer ? "bg-blue-500 text-white" : ""}`}
                                    checked={checkBoxChecked.offer}
                                    onCheckedChange={(e) => handleChangeForCheckBox("offer", e)}
                                />
                                <div className="flex flex-col ">
                                    <Label htmlFor="offer" className="text-[var(--foreground-primary)] text-lg font-bold capitalize">Offer & promotions</Label>
                                    <p className="text-[var(--foreground)]">
                                        Promotion about product price & lastest discount
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 py-2">
                                <Checkbox
                                    id="follow"
                                    value={"follow"}
                                     className={`w-6 h-6 translate-y-1 ${checkBoxChecked.follow ? "bg-blue-500 text-white" : ""}`}
                                    checked={checkBoxChecked.follow}
                                    onCheckedChange={(e) => handleChangeForCheckBox("follow", e)}
                                />
                                <div className="flex flex-col ">
                                    <Label htmlFor="follow" className="text-[var(--foreground-primary)] text-lg font-bold capitalize">Follow up remider</Label>
                                    <p className="text-[var(--foreground)]">
                                        Receive notification all the reminder that have been made
                                    </p>
                                </div>
                            </div>


                            {/* پایان قسمت چک باکس  */}
                        </ItemGroup>


                    </div>




                    {/* پایان قسمت فرم  */}
                </CardContent>

            </Card >

        </>
    )
}