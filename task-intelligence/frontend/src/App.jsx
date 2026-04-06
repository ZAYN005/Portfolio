import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TaskDashboard from './components/TaskDashboard'
import './App.css'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check API connection
        fetch('/api/health')
            .then(res => res.json())
            .then(data => {
                console.log('API Connected:', data)
                setLoading(false)
            })
            .catch(err => {
                console.error('API Error:', err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 border-4 border-purple-500 rounded-full"
                />
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        >
            <TaskDashboard />
        </motion.div>
    )
}

export default App
