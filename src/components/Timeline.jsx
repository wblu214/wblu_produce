import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

const Timeline = ({ title, items, type = 'education' }) => {
  const getIcon = (type) => {
    return type === 'education' ? FaGraduationCap : FaBriefcase
  }

  const Icon = getIcon(type)

  return (
    <motion.section
      id={type}
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 标题 */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* 时间线 */}
        <div className="relative">
          {/* 中央线条 */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>

          {items.map((item, index) => (
            <motion.div
              key={item.id}
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
                delay: index * 0.2 
              }}
            >
              {/* 时间线图标 */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
                <Icon className="text-white" size={16} />
              </div>

              {/* 内容卡片 */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* 时间标签 */}
                  <div className="flex items-center text-blue-600 text-sm font-medium mb-2">
                    <FaCalendarAlt className="mr-2" />
                    {item.year}
                  </div>

                  {/* 标题 */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {type === 'education' 
                      ? `${item.degree} • ${item.major}` 
                      : item.position
                    }
                  </h3>

                  {/* 机构/公司名称 */}
                  <h4 className="text-lg text-blue-600 font-semibold mb-2">
                    {type === 'education' ? item.school : item.company}
                  </h4>

                  {/* 地点 */}
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaMapMarkerAlt className="mr-2" />
                    {item.location}
                  </div>

                  {/* 描述 */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* 成就或职责 */}
                  {(item.achievements || item.responsibilities) && (
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-700">
                        {type === 'education' ? '主要成就:' : '主要职责:'}
                      </h5>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {(item.achievements || item.responsibilities)?.slice(0, 3).map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 工作成就（仅工作经历显示） */}
                  {type === 'work' && item.achievements && (
                    <div className="mt-4 space-y-2">
                      <h5 className="font-semibold text-gray-700">关键成果:</h5>
                      <ul className="list-disc list-inside text-sm text-green-600 space-y-1">
                        {item.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
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
  )
}

export default Timeline 