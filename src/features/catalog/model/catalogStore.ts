import { create } from 'zustand'

type CatalogType = {
  isOpen: boolean
  open(): void
  close(): void
  toggle(): void
}

export const useCatalogStore = create<CatalogType>()((set) => ({
  isOpen: false,
  open() {
    set(() => ({ isOpen: true }))
  },
  close() {
    set(() => ({ isOpen: false }))
  },
  toggle() {
    set((state) => ({ isOpen: !state.isOpen }))
  },
}))
