import { motion } from 'framer-motion'
import { FaCode, FaProjectDiagram, FaCertificate, FaTrophy, FaChartLine, FaUsers } from 'react-icons/fa'
import resumeData from '../data/resume.json'

const Stats = () => {
  const { skills, stats, projects } = resumeData

  // 按分类分组技能
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  const achievementStats = [
    {
      icon: FaProjectDiagram,
      label: '完成项目',
      value: stats.totalProjects,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: FaCode,
      label: '代码行数',
      value: `${(stats.codeLines / 1000).toFixed(0)}K+`,
      color: 'bg-green-500',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: FaTrophy,
      label: '掌握技术',
      value: stats.technologies,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      icon: FaCertificate,
      label: '获得认证',
      value: stats.certifications,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600'
    }
  ]

  // 项目状态统计
  const projectStats = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* 页面头部 */}
      <motion.div
        className="bg-gradient-to-r from-purple-500 to-pink-500 py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            能力统计
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            数据驱动的能力展示，量化我的技术成长和项目成果
          </p>
        </div>
      </motion.div>

      {/* 成就概览 */}
      <motion.section
        className="py-12 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievementStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`${stat.bgColor} rounded-xl p-6 text-center`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-12 h-12 ${stat.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  >
                    {stat.value}
                  </motion.span>
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 技能分析 */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              技能熟练度分析
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              基于项目经验和学习时间的技能评估
            </p>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* 按分类展示技能 */}
          <div className="space-y-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-2 h-6 bg-purple-500 rounded-full mr-3"></div>
                  {category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full skill-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 项目成果展示 */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              项目成果总览
            </h2>
            <p className="text-gray-600">
              项目状态分布和主要成就
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 项目状态分布 */}
            <motion.div
              className="bg-gray-50 rounded-xl p-6"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaChartLine className="mr-3 text-blue-500" />
                项目状态分布
              </h3>

              <div className="space-y-4">
                {Object.entries(projectStats).map(([status, count], index) => {
                  const total = Object.values(projectStats).reduce((sum, val) => sum + val, 0)
                  const percentage = Math.round((count / total) * 100)
                  
                  const statusColors = {
                    '已完成': 'bg-green-500',
                    '进行中': 'bg-blue-500',
                    '规划中': 'bg-yellow-500'
                  }

                  return (
                    <motion.div
                      key={status}
                      className="space-y-2"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">
                          {status}
                        </span>
                        <span className="text-sm text-gray-500">
                          {count} 个 ({percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          className={`h-3 ${statusColors[status] || 'bg-gray-500'} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: index * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* 主要成就 */}
            <motion.div
              className="bg-gray-50 rounded-xl p-6"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaTrophy className="mr-3 text-yellow-500" />
                主要成就
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "前端性能优化",
                    desc: "将主要产品加载时间从3s优化到1.2s",
                    color: "text-green-600"
                  },
                  {
                    title: "组件库建设",
                    desc: "搭建完善的组件库，提升开发效率40%",
                    color: "text-blue-600"
                  },
                  {
                    title: "技术栈升级",
                    desc: "主导从Vue2迁移到React18的技术升级",
                    color: "text-purple-600"
                  },
                  {
                    title: "团队协作",
                    desc: "指导3名初级开发者快速成长",
                    color: "text-orange-600"
                  }
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className="p-4 bg-white rounded-lg shadow-sm"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className={`font-semibold ${achievement.color} mb-1`}>
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {achievement.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 学习成长趋势 */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              学习成长历程
            </h2>
            <p className="text-gray-600">
              持续学习，不断进步
            </p>
          </div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">
                  {stats.experience}
                </div>
                <div className="text-gray-600">工作经验</div>
                <div className="text-sm text-gray-500">
                  从零基础到熟练开发者
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">
                  {Math.round(stats.codeLines / 1000)}K+
                </div>
                <div className="text-gray-600">代码行数</div>
                <div className="text-sm text-gray-500">
                  实战项目代码积累
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">
                  {stats.technologies}+
                </div>
                <div className="text-gray-600">技术栈</div>
                <div className="text-sm text-gray-500">
                  涵盖前端到后端技术
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Stats 