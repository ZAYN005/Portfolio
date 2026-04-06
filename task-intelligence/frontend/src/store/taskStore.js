import { create } from 'zustand'

export const useTaskStore = create((set) => ({
    tasks: [],

    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, { ...task, id: Date.now() }]
    })),

    removeTask: (id) => set((state) => ({
        tasks: state.tasks.filter(t => t.id !== id)
    })),

    updateTask: (id, updates) => set((state) => ({
        tasks: state.tasks.map(t => t.id === id ? { ...t, ...updates } : t)
    })),

    setTasks: (tasks) => set({ tasks })
}))
