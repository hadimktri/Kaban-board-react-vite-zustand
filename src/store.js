import { create } from "zustand";

const store = (set) => ({
    tasks: [],
    dragged: null,
    addTask: (title, state) => set(store => ({ tasks: [...store.tasks, { title, state }] })),
    deleteTask: (title) => set(store => ({ tasks: store.tasks.filter(task => task.title !== title) })),
    setDragged: (title) => set({ dragged: title }),
    dropTask: (title, state) => set(store => ({ tasks: store.tasks.map(task => task.title === title ? { title, state } : task) })),
})

export const useStore = create(store)



