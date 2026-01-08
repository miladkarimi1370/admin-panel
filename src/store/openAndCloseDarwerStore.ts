import { create } from "zustand";


type DrawerStore = {
    open: boolean;
    dark: boolean;
    setOpenAndClose: () => void;
    setDark: () => void;
    accountDrawer: boolean,
    setAccountDrawer: (value: boolean) => void
}

export const openOrCloseDrawerStore = create<DrawerStore>((set) => ({
    open: true,
    dark: false,
    accountDrawer: false,
    setAccountDrawer(value) {
        set(() => ({
            accountDrawer: value
        }))
    },
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