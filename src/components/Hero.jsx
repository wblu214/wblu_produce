import { motion } from 'framer-motion'
import resumeData from '../data/resume.json'

const Hero = () => {
  const { personal } = resumeData

  return (
    <motion.section
      id="hero"
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden"
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative z-10 text-center px-4">
        {/* 头像 - 示例图片，后期替换为自己的 */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-white p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
              {personal.name.charAt(0)}
            </div>
          </div>
        </motion.div>

        {/* 姓名 */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {personal.name}
        </motion.h1>

        {/* 职业标题 */}
        <motion.p
          className="text-xl md:text-2xl mb-2 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          {personal.title}
        </motion.p>

        {/* 副标题 */}
        <motion.p
          className="text-lg md:text-xl mb-8 text-white opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          {personal.subtitle}
        </motion.p>

        {/* 技术栈标签 */}
        <motion.div
          className="flex gap-3 flex-wrap justify-center max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 rounded-full bg-white text-blue-600 font-semibold text-sm shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* 滚动提示 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <p className="text-white text-sm mt-2">滚动查看更多</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero 