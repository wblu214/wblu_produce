import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaClock, FaCheck, FaSpinner } from 'react-icons/fa'

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
        return 'bg-green-100 text-green-700'
      case '进行中':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-yellow-100 text-yellow-700'
    }
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* 项目图片占位符 */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-2">🚀</div>
            <p className="text-sm opacity-75">项目截图示例</p>
            <p className="text-xs opacity-50 mt-1">后期替换为实际截图</p>
          </div>
        </div>
        
        {/* 状态标签 */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(project.status)}`}>
            {getStatusIcon(project.status)}
            {project.status}
          </div>
        </div>
      </div>

      {/* 项目信息 */}
      <div className="p-6">
        {/* 项目名称 */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.name}
        </h3>

        {/* 项目描述 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.desc}
        </p>

        {/* 技术栈 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 项目时间 */}
        {project.duration && (
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <FaClock className="mr-2" />
            {project.duration}
          </div>
        )}

        {/* 主要功能 */}
        {project.features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">主要功能:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 链接按钮 */}
        <div className="flex gap-2 pt-4 border-t border-gray-100">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors flex-1 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt size={12} />
              在线预览
            </motion.a>
          )}
          
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition-colors flex-1 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={12} />
              源码
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 