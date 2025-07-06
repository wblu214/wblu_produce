import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaWeixin, FaDownload, FaEdit, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import resumeData from '../data/resume.json'

const Profile = () => {
  const { personal } = resumeData

  const contactItems = [
    {
      icon: FaEnvelope,
      label: '邮箱',
      value: personal.contact.email,
      link: `mailto:${personal.contact.email}`,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: personal.contact.github,
      link: personal.contact.github,
      color: 'text-gray-800',
      bgColor: 'bg-gray-100'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: personal.contact.linkedin,
      link: personal.contact.linkedin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: FaWeixin,
      label: '微信',
      value: personal.contact.wechat,
      link: '#',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ]

  const settingsItems = [
    {
      icon: FaEdit,
      title: '编辑资料',
      desc: '更新个人信息和联系方式',
      action: '编辑',
      color: 'text-blue-600'
    },
    {
      icon: FaDownload,
      title: '下载简历',
      desc: '下载PDF格式的完整简历',
      action: '下载',
      color: 'text-green-600'
    }
  ]

  const handleDownloadResume = () => {
    // 实际项目中这里应该触发PDF下载
    // 暂时显示提示信息
    alert('PDF简历下载功能将在后续版本中实现\n请将 src/assets/resume-example.pdf 替换为您的实际简历文件')
  }

  const handleEditProfile = () => {
    alert('编辑资料功能将在后续版本中实现\n您可以直接修改 src/data/resume.json 文件来更新信息')
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* 页面头部 */}
      <motion.div
        className="bg-gradient-to-r from-pink-500 to-orange-500 py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            个人中心
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            管理个人信息，下载简历，设置偏好
          </p>
        </div>
      </motion.div>

      {/* 个人信息卡片 */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* 头像 - 使用渐变色占位符 */}
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-orange-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                {personal.name.charAt(0)}
              </motion.div>

              {/* 基本信息 */}
              <div className="flex-1 text-center md:text-left">
                <motion.h2
                  className="text-3xl font-bold text-gray-800 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {personal.name}
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-600 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {personal.title}
                </motion.p>

                <motion.p
                  className="text-gray-500 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {personal.bio}
                </motion.p>

                {/* 快速操作按钮 */}
                <motion.div
                  className="flex gap-4 mt-6 justify-center md:justify-start"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.button
                    onClick={handleEditProfile}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEdit size={16} />
                    编辑资料
                  </motion.button>
                  
                  <motion.button
                    onClick={handleDownloadResume}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload size={16} />
                    下载简历
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 联系方式 */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              联系方式
            </h2>
            <p className="text-gray-600">
              通过以下方式与我取得联系
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow block"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                    <item.icon className={item.color} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 text-sm truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 设置选项 */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              设置与工具
            </h2>
            <p className="text-gray-600">
              管理您的资料和偏好设置
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {settingsItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={item.title === '编辑资料' ? handleEditProfile : handleDownloadResume}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <item.icon className={item.color} size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.action}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 统计信息 */}
      <motion.section
        className="py-12 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              我的数据
            </h2>
            <p className="text-gray-600">
              详细的能力和经验统计
            </p>
          </div>

          <motion.div
            className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl p-8 text-white"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">
                  {resumeData.stats.totalProjects}
                </div>
                <div className="text-pink-100">完成项目</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {Math.round(resumeData.stats.codeLines / 1000)}K+
                </div>
                <div className="text-pink-100">代码行数</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {resumeData.stats.technologies}
                </div>
                <div className="text-pink-100">掌握技术</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {resumeData.stats.experience}
                </div>
                <div className="text-pink-100">工作经验</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 注意提示 */}
      <motion.section
        className="py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="bg-blue-50 border border-blue-200 rounded-lg p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
              <FaCalendarAlt className="mr-2" />
              项目说明
            </h3>
            <div className="text-blue-700 space-y-2">
              <p>• 这是一个演示项目，所有数据均为示例数据</p>
              <p>• 头像、项目截图等资源请替换为您自己的文件</p>
              <p>• 简历数据位于 <code className="bg-blue-100 px-2 py-1 rounded">src/data/resume.json</code></p>
              <p>• 示例资源位于 <code className="bg-blue-100 px-2 py-1 rounded">src/assets/</code> 目录</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Profile 