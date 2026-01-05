import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item";

import { Input } from "@/components/ui/input"

import { DockIcon } from "@/components/icons/lucide-dock";
import { SearchIcon } from "@/components/icons/lucide-search";
import { Separator } from "@/components/ui/separator";
import {CodeXmlIcon} from "@/components/icons/lucide-code-xml";
import {MousePointerClickIcon} from "@/components/icons/lucide-mouse-pointer-click";

export default function SearchBarMenu() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild className="cursor-pointer text-[var(--foreground)] ">
                    <SearchIcon className="w-6 h-6 hover:bg-[var(--background)] rounded-full p-2 transition box-content" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-[var(--bg-primary)]" >
                    <DialogHeader>
                        <DialogTitle className="flex justify-center items-center">
                            <Input
                                placeholder="...search"
                                className="text-[var(--foreground)] shadow-none border-0 ring-0 focus:ring-0 focus-visible:ring-0 outline-none focus-visible:outline-none"
                            />


                        </DialogTitle>
                        <Separator
                            orientation="horizontal"
                            className=" h-[1px] w-full bg-[var(--foreground)] opacity-40"
                        />
                        <DialogDescription>

                            <Item asChild className="bg-background hover:bg-[var(--background)]" variant="muted">
                                <a href="#" rel="noopener noreferrer" target="_blank">
                                    <ItemContent className="flex justify-start items-center flex-row gap-2">
                                        <ItemTitle>
                                            <DockIcon />
                                        </ItemTitle>
                                        <ItemDescription>
                                            document
                                        </ItemDescription>
                                    </ItemContent>
                                    <ItemActions>
                                        <ChevronRightIcon className="size-4" />
                                    </ItemActions>
                                </a>

                            </Item>
                            <Item asChild className="bg-background hover:bg-[var(--background)]" variant="muted">
                                <a href="#" rel="noopener noreferrer" target="_blank">
                                    <ItemContent className="flex justify-start items-center flex-row gap-2">
                                        <ItemTitle>
                                            <CodeXmlIcon />
                                        </ItemTitle>
                                        <ItemDescription>
                                            change log
                                        </ItemDescription>
                                    </ItemContent>
                                    <ItemActions>
                                        <ChevronRightIcon className="size-4" />
                                    </ItemActions>
                                </a>

                            </Item>
                            <Item asChild className="bg-background hover:bg-[var(--background)]" variant="muted">
                                <a href="#" rel="noopener noreferrer" target="_blank">
                                    <ItemContent className="flex justify-start items-center flex-row gap-2">
                                        <ItemTitle>
                                            <MousePointerClickIcon />
                                        </ItemTitle>
                                        <ItemDescription>
                                            button
                                        </ItemDescription>
                                    </ItemContent>
                                    <ItemActions>
                                        <ChevronRightIcon className="size-4" />
                                    </ItemActions>
                                </a>

                            </Item>
                        </DialogDescription>
                    </DialogHeader>

                </DialogContent>
            </Dialog>
        </>
    )
}