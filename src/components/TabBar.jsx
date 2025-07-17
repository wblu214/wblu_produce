import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaCalendar, FaChartLine, FaUser } from 'react-icons/fa'

const TabBar = ({ currentSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const tabs = [
    {
      id: 'overview',
      icon: FaHome,
      label: '概览',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'record',
      icon: FaCalendar,
      label: '履历',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'stats',
      icon: FaChartLine,
      label: '技能',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'profile',
      icon: FaUser,
      label: '联系',
      color: 'from-orange-500 to-red-600'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabClick = (index) => {
    onSectionChange(index)
  }

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center py-3">
          <div className="flex bg-gray-50/80 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-200/50 shadow-inner">
            {tabs.map(({ id, icon: Icon, label, color }, index) => {
              const isActive = currentSection === index
              
              return (
                <motion.button
                  key={id}
                  onClick={() => handleTabClick(index)}
                  className="relative flex flex-col md:flex-row items-center gap-1 md:gap-2 py-3 px-4 md:px-6 min-w-0 transition-all duration-300 rounded-xl group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* 活跃状态背景 */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl shadow-lg`}
                        layoutId="activeTab"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* 悬停效果背景 */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  {/* 图标 */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      rotate: isActive ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon 
                      size={20} 
                      className={`${
                        isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'
                      } transition-colors duration-300`}
                    />
                  </motion.div>

                  {/* 标签文字 */}
                  <span 
                    className={`relative z-10 text-xs md:text-sm font-medium ${
                      isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'
                    } transition-colors duration-300`}
                  >
                    {label}
                  </span>

                  {/* 活跃指示器 */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {/* 底部装饰线 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  )
}

export default TabBar