import { useState, useEffect } from 'react'
import { FaHome, FaCalendar, FaChartLine, FaUser } from 'react-icons/fa'

const TabBar = ({ currentSection, onSectionChange }) => {
  const tabs = [
    {
      id: 'overview',
      icon: FaHome,
      label: '概览'
    },
    {
      id: 'record',
      icon: FaCalendar,
      label: '履历'
    },
    {
      id: 'stats',
      icon: FaChartLine,
      label: '技能'
    },
    {
      id: 'profile',
      icon: FaUser,
      label: '联系'
    }
  ]

  const handleTabClick = (index) => {
    onSectionChange(index)
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center py-4">
          {tabs.map(({ id, icon: Icon, label }, index) => {
            const isActive = currentSection === index
            
            return (
              <button
                key={id}
                onClick={() => handleTabClick(index)}
                className="flex flex-col md:flex-row items-center gap-1 md:gap-2 py-2 px-4 md:px-6 min-w-0 flex-1 md:flex-none transition-all duration-200 hover:bg-gray-50 rounded-lg"
              >
                <Icon 
                  size={20} 
                  className={`${
                    isActive ? 'text-pink-500' : 'text-gray-600'
                  } transition-colors duration-200`}
                />
                <span 
                  className={`text-xs md:text-sm ${
                    isActive ? 'text-pink-500 font-medium' : 'text-gray-600'
                  } transition-colors duration-200`}
                >
                  {label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TabBar 