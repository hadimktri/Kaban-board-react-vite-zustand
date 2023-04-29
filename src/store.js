import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"
const store = (set) => ({
    tasks: [],
    dragged: null,
    addTask: (title, state) => set(store => ({ tasks: [...store.tasks, { title, state }] }), false, 'addTask'),
    deleteTask: (title) => set(store => ({ tasks: store.tasks.filter(task => task.title !== title) }), false, 'deleteTask'),
    setDragged: (title) => set({ dragged: title }, false, 'setDragged'),
    dropTask: (title, state) => set(store => ({ tasks: store.tasks.map(task => task.title === title ? { title, state } : task) }), false, 'dropTask'),
})

export const useStore = create(persist(devtools(store), { name: 'store' }))