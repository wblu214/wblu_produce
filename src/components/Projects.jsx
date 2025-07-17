import { motion } from 'framer-motion'
import { FaRocket, FaCode, FaLightbulb } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
import resumeData from '../data/resume.json'

const Projects = () => {
  const { projects } = resumeData

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* 背景装饰元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-pink-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* 标题区域 */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 图标 */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <FaRocket className="text-white" size={28} />
          </motion.div>

          {/* 主标题 */}
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-6">
            项目成果
          </h2>

          {/* 副标题 */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            以下是我参与开发的主要项目，涵盖了前端开发的各个方面，从UI设计到性能优化，每个项目都承载着技术探索与创新实践。
          </p>

          {/* 装饰线 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>

          {/* 统计信息 */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-2 mx-auto">
                <FaCode className="text-blue-500" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{projects.length}+</div>
              <div className="text-sm text-gray-600 font-medium">项目经验</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl mb-2 mx-auto">
                <FaLightbulb className="text-purple-500" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-800">10+</div>
              <div className="text-sm text-gray-600 font-medium">技术栈</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl mb-2 mx-auto">
                <FaRocket className="text-green-500" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-800">100%</div>
              <div className="text-sm text-gray-600 font-medium">完成度</div>
            </div>
          </motion.div>
        </motion.div>

        {/* 项目网格 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* 底部CTA区域 */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* 分隔装饰 */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* CTA内容 */}
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              想了解更多项目详情？
            </h3>
            <p className="text-gray-600 leading-relaxed">
              每个项目都有其独特的技术挑战和解决方案，欢迎深入交流探讨技术实现细节。
            </p>
          </div>

          {/* CTA按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
              查看更多项目
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode className="group-hover:rotate-12 transition-transform duration-300" />
              技术交流
            </motion.button>
          </div>
        </motion.div>

        {/* 底部装饰 */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-full border border-gray-100">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
              持续更新中，敬请期待更多精彩项目
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full ml-3 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects