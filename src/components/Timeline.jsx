import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'

const Timeline = ({ title, items, type = 'education' }) => {
  const getIcon = (type) => {
    return type === 'education' ? FaGraduationCap : FaBriefcase
  }

  const Icon = getIcon(type)

  // 调试信息
  console.log('Timeline rendered with:', { title, type, itemsCount: items?.length });
  if (type === 'work') {
    console.log('Work items:', items);
    items?.forEach((item, index) => {
      console.log(`Work item ${index}:`, {
        company: item.company,
        website: item.website,
        logo: item.logo,
        hasWebsite: !!item.website,
        hasLogo: !!item.logo
      });
    });
  }

  return (
    <motion.section
      id={type}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* 标题区域 */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Icon className="text-white" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* 时间线容器 */}
        <div className="relative">
          {/* 中央连接线 */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200"></div>

          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ 
                x: index % 2 === 0 ? -100 : 100, 
                opacity: 0 
              }}
              whileInView={{ 
                x: 0, 
                opacity: 1 
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* 时间线节点 */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-20">
                <motion.div
                  className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg border-4 border-white"
                  whileHover={{ scale: 1.2 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                />
              </div>

              {/* 内容卡片 */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <motion.div
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* 卡片顶部渐变条 */}
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  
                  <div className="p-8">
                    {/* 时间徽章 */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4">
                      <FaCalendarAlt className="text-blue-500 mr-2" size={14} />
                      <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                    </div>

                    {/* 主标题 */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {type === 'education' 
                        ? `${item.degree} • ${item.major}` 
                        : item.position
                      }
                    </h3>

                    {/* 机构/公司名称 */}
                    {(() => {
                      console.log('Rendering company section for:', {
                        type,
                        company: item.company,
                        website: item.website,
                        logo: item.logo,
                        isWork: type === 'work',
                        hasWebsite: !!item.website,
                        shouldShowLink: type === 'work' && item.website
                      });
                      
                      if (type === 'work' && item.website) {
                        return (
                          <div className="mb-3">
                            <a
                              href={item.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/company inline-flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 -m-2 transition-all duration-300 cursor-pointer"
                              onClick={(e) => {
                                console.log('Link clicked!', item.website);
                                console.log('Event:', e);
                              }}
                            >
                              {item.logo && (
                                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-1 group-hover/company:shadow-lg transition-all duration-300">
                                  <img 
                                    src={item.logo} 
                                    alt={`${item.company} logo`}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                      console.log('Logo failed to load:', item.logo);
                                      e.target.style.display = 'none';
                                    }}
                                    onLoad={() => {
                                      console.log('Logo loaded successfully:', item.logo);
                                    }}
                                  />
                                </div>
                              )}
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover/company:from-purple-600 group-hover/company:to-pink-600 transition-all duration-300">
                                  {item.company}
                                </h4>
                                <span className="text-xs text-gray-500 opacity-0 group-hover/company:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                                  🌐 点击访问官网
                                </span>
                              </div>
                            </a>
                          </div>
                        );
                      } else {
                        return (
                          <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                            {type === 'education' ? item.school : item.company}
                          </h4>
                        );
                      }
                    })()}

                    {/* 地点 */}
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <FaMapMarkerAlt className="mr-2 text-gray-400" />
                      {item.location}
                    </div>

                    {/* 描述 */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                      {item.desc}
                    </p>

                    {/* 成就或职责列表 */}
                    {(item.achievements || item.responsibilities) && (
                      <div className="space-y-4">
                        <h5 className="font-semibold text-gray-700 flex items-center">
                          <FaCheckCircle className="text-green-500 mr-2" size={16} />
                          {type === 'education' ? '主要成就' : '核心职责'}
                        </h5>
                        <ul className="space-y-2">
                          {(item.achievements || item.responsibilities)?.slice(0, 3).map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start text-sm text-gray-600"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.5 + idx * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 工作成就（仅工作经历显示） */}
                    {type === 'work' && item.achievements && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <h5 className="font-semibold text-gray-700 flex items-center mb-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          关键成果
                        </h5>
                        <div className="grid gap-2">
                          {item.achievements.slice(0, 2).map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.7 + idx * 0.1 }}
                            >
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-green-700 font-medium leading-relaxed">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 悬停效果装饰 */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部装饰 */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
            <span className="text-sm font-medium text-gray-600">
              {type === 'education' ? '学习永不止步' : '持续成长中'}
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full ml-3"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Timeline