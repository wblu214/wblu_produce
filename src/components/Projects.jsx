import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import resumeData from '../data/resume.json'

const Projects = () => {
  const { projects } = resumeData

  return (
    <motion.section
      id="projects"
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 标题 */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            项目成果
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            以下是我参与开发的主要项目，涵盖了前端开发的各个方面，从UI设计到性能优化。
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* 查看更多按钮 */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            查看更多项目
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects 