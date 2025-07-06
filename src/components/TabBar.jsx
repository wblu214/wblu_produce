import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaCalendar, FaChartLine, FaUser } from 'react-icons/fa'

const TabBar = () => {
  const location = useLocation()

  const tabs = [
    {
      path: '/',
      icon: FaHome,
      label: '首页'
    },
    {
      path: '/record',
      icon: FaCalendar,
      label: '记录'
    },
    {
      path: '/stats',
      icon: FaChartLine,
      label: '统计'
    },
    {
      path: '/profile',
      icon: FaUser,
      label: '我的'
    }
  ]

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto max-w-md">
        <div className="flex justify-around items-center py-2">
          {tabs.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path
            
            return (
              <Link
                key={path}
                to={path}
                className="flex flex-col items-center gap-1 py-2 px-4 min-w-0 flex-1"
              >
                <Icon 
                  size={20} 
                  className={`${
                    isActive ? 'text-pink-500' : 'text-gray-600'
                  } transition-colors duration-200`}
                />
                <span 
                  className={`text-xs ${
                    isActive ? 'text-pink-500 font-medium' : 'text-gray-600'
                  } transition-colors duration-200`}
                >
                  {label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TabBar 