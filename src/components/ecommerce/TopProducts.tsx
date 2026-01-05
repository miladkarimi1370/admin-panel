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

import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import product10 from "@/components/icons/product-10.jpg";
import product12 from "@/components/icons/product-12.jpg";
import product3 from "@/components/icons/product-3.jpg";
import product6 from "@/components/icons/product-6.jpg";
import product7 from "@/components/icons/product-7.jpg";
import product9 from "@/components/icons/product-9.jpg";




export default function TopProducts() {


    const infoProducts = [
        {
            title: "Maneki Neko Poster",
            sale: "1149",
            src: "product10",
            comeOutPercent: "+ 3.45 %",
            comeOutUp: true
        },
        {
            title: "Echoes Necklace",
            sale: "345",
            src: "product-12",
            comeOutPercent: "+ 13.9 %",
            comeOutUp: true
        },
        {
            title: "Spiky Ring",
            sale: "4399",
            src: "product-3",
            comeOutPercent: "+ 9.5 %",
            comeOutUp: true
        },
        {
            title: "Pastel Petals Poster",
            sale: "1022",
            src: "product-6",
            comeOutPercent: "+ 2.3 %",
            comeOutUp: true
        },
        {
            title: "Il Limone",
            sale: "992",
            src: "product-7",
            comeOutPercent: "- 0.7 %",
            comeOutUp: false
        },
        {
            title: "Ringed Earring",
            sale: "1201",
            src: "product-9",
            comeOutPercent: "- 1.1 %",
            comeOutUp: false
        },
    ]



    return (
        <>
            <Card className="w-10/12  border-0 shadow-2xl mt-8  bg-[var(--bg-primary)]">
                <CardHeader>
                    <CardTitle className="text-[var(--foreground-primary)] font-bold text-xl capitalize tracking-wider">top products</CardTitle>

                    <CardAction>
                        <Button variant="outline" className="cursor-pointer hover:border-blue-500 hover:text-blue-500 border-gray-300 border-2 transition capitalize text-sm rounded-lg text-[var(--foreground-primary)]">view all</Button>
                    </CardAction>
                </CardHeader>
                <CardContent className="cursor-pointer ">
                    {/* شروع قسمت بالای چارت */}

                    <ItemGroup className="gap-4">
                        {infoProducts?.map((info, index) => (
                            <Item key={info.title} variant="muted" asChild role="listitem">
                                <a href="#">
                                    <ItemMedia variant="image">
                                        <Avatar>
                                            <AvatarImage src={`${info?.src}`} />
                                            <AvatarFallback>{info?.title.slice(0, 2)}</AvatarFallback>
                                        </Avatar>
                                    </ItemMedia>
                                    <ItemContent>
                                        <ItemTitle className="line-clamp-1 text-[var(--foreground-primary)]">
                                            {info?.title} 
                                     
                                        </ItemTitle>
                                        <ItemDescription className="text-[var(--foreground)]">{info?.sale}</ItemDescription>
                                    </ItemContent>
                                    <ItemContent className="flex-none text-center">
                                        <ItemDescription className={`${info.comeOutUp ? "bg-green-300/20" : "bg-red-300/20"} ${info.comeOutUp ? "text-green-500" : "text-red-500"} px-2 py-1 rounded-lg font-bold`}>{info.comeOutPercent}</ItemDescription>
                                    </ItemContent>
                                </a>
                            </Item>
                        ))}
                    </ItemGroup>

                    {/* پایان قسمت بالای چارت */}
                </CardContent>

            </Card>

        </>
    )
}