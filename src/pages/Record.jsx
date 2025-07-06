import { motion } from 'framer-motion'
import Timeline from '../components/Timeline'
import resumeData from '../data/resume.json'

const Record = () => {
  // 合并教育和工作经历，按时间排序
  const allRecords = [
    ...resumeData.education.map(item => ({ ...item, type: 'education' })),
    ...resumeData.work.map(item => ({ ...item, type: 'work' }))
  ].sort((a, b) => {
    // 简单的年份比较，实际项目中可以使用更复杂的日期处理
    const yearA = parseInt(a.year.split('-')[0])
    const yearB = parseInt(b.year.split('-')[0])
    return yearB - yearA // 降序排列，最新的在前
  })

  return (
    <div className="min-h-screen bg-gray-50 pb-16"> {/* pb-16 为底部TabBar留空间 */}
      {/* 页面头部 */}
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-purple-600 py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            个人履历
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            详细记录我的学习和工作历程，见证每一步成长的足迹
          </p>
        </div>
      </motion.div>

      {/* 统计概览 */}
      <motion.section
        className="py-12 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {resumeData.education.length}
              </div>
              <div className="text-gray-600">教育经历</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {resumeData.work.length}
              </div>
              <div className="text-gray-600">工作经历</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {resumeData.stats.experience}
              </div>
              <div className="text-gray-600">工作经验</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {resumeData.stats.totalProjects}
              </div>
              <div className="text-gray-600">参与项目</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 时间线视图 */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              完整履历时间线
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              按时间顺序展示我的教育背景和工作经历，每一个阶段都是成长的见证
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* 统一时间线 */}
          <div className="relative">
            {/* 中央线条 */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {allRecords.map((item, index) => (
              <motion.div
                key={`${item.type}-${item.id}`}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ 
                  x: index % 2 === 0 ? -50 : 50, 
                  opacity: 0 
                }}
                whileInView={{ 
                  x: 0, 
                  opacity: 1 
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 
                }}
              >
                {/* 时间线图标 */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                  item.type === 'education' 
                    ? 'bg-blue-500' 
                    : 'bg-green-500'
                }`}>
                  <span className="text-white font-bold text-sm">
                    {item.type === 'education' ? '学' : '工'}
                  </span>
                </div>

                {/* 内容卡片 */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${
                      item.type === 'education' 
                        ? 'border-blue-500' 
                        : 'border-green-500'
                    }`}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* 类型标签 */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      item.type === 'education'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {item.type === 'education' ? '教育经历' : '工作经历'}
                    </div>

                    {/* 时间 */}
                    <div className="text-gray-500 text-sm mb-2">
                      {item.year}
                    </div>

                    {/* 标题 */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.type === 'education' 
                        ? `${item.degree} • ${item.major}` 
                        : item.position
                      }
                    </h3>

                    {/* 机构名称 */}
                    <h4 className={`text-lg font-semibold mb-2 ${
                      item.type === 'education' ? 'text-blue-600' : 'text-green-600'
                    }`}>
                      {item.type === 'education' ? item.school : item.company}
                    </h4>

                    {/* 描述 */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* 成就列表 */}
                    {item.achievements && (
                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-700">主要成就:</h5>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 工作职责 */}
                    {item.responsibilities && (
                      <div className="mt-4 space-y-2">
                        <h5 className="font-semibold text-gray-700">主要职责:</h5>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {item.responsibilities.slice(0, 3).map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 技能总结 */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              技能积累
            </h2>
            <p className="text-gray-600">
              通过学习和工作积累的核心技能
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {resumeData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-50 rounded-lg p-4 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-semibold text-gray-800 mb-1">
                  {skill.name}
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  {skill.category}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="h-2 bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Record 