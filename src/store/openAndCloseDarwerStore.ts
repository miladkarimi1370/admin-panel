import { create } from "zustand";


type DrawerStore = {
    open: boolean;
    dark: boolean;
    setOpenAndClose: () => void;
    setDark: () => void;
}

export const openOrCloseDrawerStore = create<DrawerStore>((set) => ({
    open: true,
    dark: false ,
    setOpenAndClose() {
        set((state: any) => ({
            open: !state.open
        }))
    },
    setDark() {
        set((state: any) => ({
            dark: !state.dark
        }))
    },
}))