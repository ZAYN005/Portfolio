import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TaskList() {
    const [tasks] = useState([
        { id: 1, title: 'AI Integration', desc: 'Setup OpenAI API', priority: 'high', status: 'in-progress' },
        { id: 2, title: 'Database Setup', desc: 'Configure MongoDB', priority: 'high', status: 'completed' },
        { id: 3, title: 'Frontend Design', desc: 'Create UI components', priority: 'medium', status: 'in-progress' }
    ])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'from-red-500 to-pink-500'
            case 'medium': return 'from-yellow-500 to-orange-500'
            case 'low': return 'from-green-500 to-emerald-500'
            default: return 'from-purple-500 to-blue-500'
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-6">Tasks Overview</h2>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-4"
            >
                {tasks.map((task) => (
                    <motion.div
                        key={task.id}
                        variants={item}
                        whileHover={{ scale: 1.02, translateX: 10 }}
                        className={`bg-gradient-to-r ${getPriorityColor(task.priority)}/20 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500 transition-all cursor-pointer`}
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
                                <p className="text-gray-300">{task.desc}</p>
                            </div>
                            <div className="flex gap-2">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getPriorityColor(task.priority)}`}>
                                    {task.priority.toUpperCase()}
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-500/30 text-green-300">
                                    {task.status}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
