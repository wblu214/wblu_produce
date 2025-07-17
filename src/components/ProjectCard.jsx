import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaClock, FaCheck, FaSpinner, FaStar, FaCode } from 'react-icons/fa'

const ProjectCard = ({ project, index }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case '已完成':
        return <FaCheck className="text-green-500" />
      case '进行中':
        return <FaSpinner className="text-blue-500 animate-spin" />
      default:
        return <FaClock className="text-yellow-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case '已完成':
        return 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200'
      case '进行中':
        return 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200'
      default:
        return 'bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 border-yellow-200'
    }
  }

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100"
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      {/* 项目图片区域 */}
      <div className="relative h-52 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-20 h-20 bg-white opacity-10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
        </div>

        {/* 项目图标和标题 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <motion.div
            className="text-6xl mb-3"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            🚀
          </motion.div>
          <h3 className="text-lg font-bold text-center px-4 leading-tight">
            {project.name}
          </h3>
          <p className="text-xs opacity-75 mt-1">点击查看详情</p>
        </div>

        {/* 状态标签 */}
        <div className="absolute top-4 right-4 z-20">
          <motion.div 
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border backdrop-blur-sm ${getStatusColor(project.status)}`}
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
          >
            {getStatusIcon(project.status)}
            {project.status}
          </motion.div>
        </div>

        {/* 悬停时的覆盖层 */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
      </div>

      {/* 项目信息区域 */}
      <div className="p-6">
        {/* 项目描述 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.desc}
        </p>

        {/* 技术栈标签 */}
        <div className="mb-5">
          <div className="flex items-center mb-3">
            <FaCode className="text-gray-400 mr-2" size={14} />
            <span className="text-sm font-semibold text-gray-700">技术栈</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs rounded-full font-medium border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.4 + idx * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 项目时间 */}
        {project.duration && (
          <div className="flex items-center text-gray-500 text-sm mb-5">
            <FaClock className="mr-2 text-gray-400" size={14} />
            <span className="font-medium">{project.duration}</span>
          </div>
        )}

        {/* 主要功能 */}
        {project.features && (
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FaStar className="text-yellow-500 mr-2" size={14} />
              <span className="text-sm font-semibold text-gray-700">核心功能</span>
            </div>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start text-sm text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.6 + idx * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* 操作按钮 */}
        <div className="flex gap-3 pt-5 border-t border-gray-100">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group/btn"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaExternalLinkAlt size={12} className="group-hover/btn:rotate-12 transition-transform duration-300" />
              在线预览
            </motion.a>
          )}
          
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group/btn"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub size={12} className="group-hover/btn:rotate-12 transition-transform duration-300" />
              源码
            </motion.a>
          )}
        </div>
      </div>

      {/* 卡片边框装饰 */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
      
      {/* 悬停时的光晕效果 */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
    </motion.div>
  )
}

export default ProjectCard