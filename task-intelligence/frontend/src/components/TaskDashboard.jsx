import { motion } from 'framer-motion'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

export default function TaskDashboard() {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto p-8"
        >
            <div className="text-center mb-12">
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-5xl font-bold text-white mb-4"
                >
                    🚀 Task Intelligence
                </motion.h1>
                <p className="text-purple-300 text-lg">
                    AI-Powered Task Management with Smart Scheduling
                </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <TaskList />
                </div>
                <div className="col-span-1">
                    <TaskForm />
                </div>
            </div>
        </motion.div>
    )
}
