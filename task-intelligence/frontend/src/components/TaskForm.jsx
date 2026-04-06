import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TaskForm() {
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        deadline: '',
        priority: 'medium'
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Task submitted:', formData)
        setFormData({ title: '', desc: '', deadline: '', priority: 'medium' })
    }

    return (
        <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 backdrop-blur-md rounded-3xl p-6 border border-purple-500/30 glow"
        >
            <h2 className="text-2xl font-bold text-white mb-6">Add Task</h2>

            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Task title..."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-purple-500/30 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50"
                />

                <textarea
                    placeholder="Description..."
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-purple-500/30 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 h-24"
                />

                <input
                    type="datetime-local"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-purple-500/30 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50"
                />

                <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-purple-500/30 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50"
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                >
                    ✨ Create Task
                </motion.button>
            </div>
        </motion.form>
    )
}
