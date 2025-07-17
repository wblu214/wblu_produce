import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import resumeData from '../data/resume.json'

const Hero = () => {
  const { personal } = resumeData

  const socialLinks = [
    { icon: FaGithub, href: personal.contact.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personal.contact.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${personal.contact.email}`, label: 'Email' }
  ]

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 背景装饰元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 bg-white opacity-1 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white opacity-1 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/4 w-32 h-32 bg-white opacity-1 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* 头像区域 */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          <div className="relative inline-block">
            {/* 旋转圆圈1 - 慢速 */}
            <motion.div
              className="absolute inset-0 w-52 h-52 border-2 border-white/20 rounded-full"
              style={{ left: '-1.5rem', top: '-1.5rem' }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Chrome Logo */}
              <motion.div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#4285f4"/>
                  <circle cx="12" cy="12" r="6" fill="#fff"/>
                  <circle cx="12" cy="12" r="4" fill="#4285f4"/>
                  <path d="M12 8 L16 16 L8 16 Z" fill="#ea4335"/>
                  <path d="M12 8 L8 16 L4 8 Z" fill="#34a853"/>
                  <path d="M12 8 L20 8 L16 16 Z" fill="#fbbc05"/>
                </svg>
              </motion.div>
            </motion.div>

            {/* 旋转圆圈2 - 快速 */}
            <motion.div
              className="absolute inset-0 w-60 h-60 border-2 border-blue-300/30 rounded-full"
              style={{ left: '-2rem', top: '-2rem' }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Edge Logo */}
              <motion.div 
                className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2.5c-5.24 0-9.5 4.26-9.5 9.5s4.26 9.5 9.5 9.5 9.5-4.26 9.5-9.5-4.26-9.5-9.5-9.5z" fill="#0078d4"/>
                  <path d="M12 5.5c3.59 0 6.5 2.91 6.5 6.5 0 1.8-.73 3.43-1.91 4.61L12 12V5.5z" fill="#00bcf2"/>
                  <path d="M5.5 12c0-3.59 2.91-6.5 6.5-6.5v6.5H5.5z" fill="#40e0d0"/>
                  <circle cx="12" cy="12" r="2" fill="#fff"/>
                </svg>
              </motion.div>
            </motion.div>

            {/* 头像主体 */}
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-violet-500 p-1 shadow-2xl relative z-10">
              <img 
                src="/lwb.jpeg" 
                alt={personal.name}
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>
            
            {/* 状态指示器 */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg z-20">
              <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </motion.div>

        {/* 问候语 */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
            👋 Hello, I'm
          </span>
        </motion.div>

        {/* 姓名 */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg">
            {personal.name}
          </span>
        </motion.h1>

        {/* 职业标题 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-white opacity-90 mb-2 drop-shadow-md">
            {personal.title}
          </h2>
          <p className="text-lg md:text-xl text-white opacity-75 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {personal.subtitle}
          </p>
        </motion.div>

        {/* 技术栈标签 - 更现代的设计 */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
            {['Java', 'Python', 'Spring Boot', 'Kafka', 'MySQL', 'React', 'Vue'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-white font-medium text-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)' 
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* 社交链接和CTA按钮 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {/* 社交链接 */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* CTA按钮 */}
          <motion.button
            className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <FaDownload size={16} />
            下载简历
          </motion.button>
        </motion.div>

        {/* 滚动指示器 - 更现代的设计 */}
        <motion.div
          className="absolute right-[9.875rem] md:right-[10.875rem]"
          style={{ bottom: '10.75rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              const nextSection = document.querySelector('#education') || document.querySelector('#work');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center relative group-hover:border-opacity-80 transition-all duration-300">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="text-white text-xs mt-2 opacity-75 font-medium group-hover:opacity-100 transition-opacity duration-300">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero