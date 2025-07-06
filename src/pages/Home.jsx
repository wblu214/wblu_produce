import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Projects from '../components/Projects'
import resumeData from '../data/resume.json'

const Home = ({ currentSection, onSectionChange }) => {
  const [autoScroll, setAutoScroll] = useState(true)

  const sections = [
    { id: 'overview', name: '概览' },
    { id: 'record', name: '履历' }, 
    { id: 'stats', name: '技能' },
    { id: 'profile', name: '联系' }
  ]

  // 自动翻页逻辑
  useEffect(() => {
    if (!autoScroll) return

    let interval = null

    // 首次延迟2秒开始
    const initialDelay = setTimeout(() => {
      interval = setInterval(() => {
        onSectionChange(prev => (prev + 1) % sections.length)
      }, 3000) // 每3秒翻到下一页
    }, 2000)

    return () => {
      clearTimeout(initialDelay)
      if (interval) clearInterval(interval)
    }
  }, [autoScroll, onSectionChange, sections.length])

  // 监听用户交互
  useEffect(() => {
    const handleWheel = (e) => {
      setAutoScroll(false)
    }

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setAutoScroll(false)
        if (e.key === 'ArrowRight') {
          onSectionChange((currentSection + 1) % sections.length)
        } else if (e.key === 'ArrowLeft') {
          onSectionChange((currentSection - 1 + sections.length) % sections.length)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [currentSection, onSectionChange, sections.length])

  // 重新启用自动滚动
  const enableAutoScroll = () => {
    setAutoScroll(true)
  }

  // 页面内容组件
  const OverviewPage = () => (
    <div className="page-content w-full h-full overflow-y-auto bg-white">
      <Hero />
      <Timeline title="教育经历" items={resumeData.education} type="education" />
      <Timeline title="工作经历" items={resumeData.work} type="work" />
      <Projects />
    </div>
  )

  const RecordPage = () => (
    <div className="page-content w-full h-full overflow-y-auto bg-gray-50">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            个人履历
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            详细记录我的学习和工作历程，见证每一步成长的足迹
          </p>
        </div>
      </div>
      
      <div className="py-12 bg-white">
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
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              详细履历时间线
            </h2>
          </div>
          <div className="space-y-8">
            <Timeline title="教育经历" items={resumeData.education} type="education" />
            <Timeline title="工作经历" items={resumeData.work} type="work" />
          </div>
        </div>
      </div>
    </div>
  )

  const StatsPage = () => (
    <div className="page-content w-full h-full overflow-y-auto bg-gray-50">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            能力统计
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            数据驱动的能力展示，量化我的技术成长和项目成果
          </p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {resumeData.stats.totalProjects}
              </div>
              <div className="text-gray-600 font-medium">完成项目</div>
            </div>
            <div className="bg-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {(resumeData.stats.codeLines / 1000).toFixed(0)}K+
              </div>
              <div className="text-gray-600 font-medium">代码行数</div>
            </div>
            <div className="bg-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {resumeData.stats.technologies}
              </div>
              <div className="text-gray-600 font-medium">掌握技术</div>
            </div>
            <div className="bg-orange-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {resumeData.stats.certifications}
              </div>
              <div className="text-gray-600 font-medium">获得认证</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">技能分析</h2>
          <div className="space-y-8">
            {Object.entries(
              resumeData.skills.reduce((acc, skill) => {
                if (!acc[skill.category]) {
                  acc[skill.category] = []
                }
                acc[skill.category].push(skill)
                return acc
              }, {})
            ).map(([category, categorySkills]) => (
              <div key={category} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const ProfilePage = () => (
    <div className="page-content w-full h-full overflow-y-auto bg-gray-50">
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            个人中心
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            管理个人信息，下载简历，设置偏好
          </p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/lwb.jpeg" 
                  alt={resumeData.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {resumeData.personal.name}
                </h2>
                <p className="text-xl text-gray-600 mb-4">
                  {resumeData.personal.title}
                </p>
                <p className="text-gray-500 leading-relaxed">
                  {resumeData.personal.bio}
                </p>
              </div>
            </div>
            
            {/* 快速信息卡片 */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl text-blue-600 mb-2">💼</div>
                <div className="text-sm text-gray-600">当前职位</div>
                <div className="font-semibold text-gray-800 text-sm">{resumeData.personal.title}</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl text-green-600 mb-2">🎓</div>
                <div className="text-sm text-gray-600">毕业院校</div>
                <div className="font-semibold text-gray-800 text-sm">宁夏大学</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-2xl text-purple-600 mb-2">⏱️</div>
                <div className="text-sm text-gray-600">工作经验</div>
                <div className="font-semibold text-gray-800 text-sm">{resumeData.stats.experience}</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-2xl text-orange-600 mb-2">🚀</div>
                <div className="text-sm text-gray-600">完成项目</div>
                <div className="font-semibold text-gray-800 text-sm">{resumeData.stats.totalProjects}个</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">联系方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={`mailto:${resumeData.personal.contact.email}`}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-xl">✉️</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">邮箱</h3>
                <p className="text-gray-600 text-sm">{resumeData.personal.contact.email}</p>
              </div>
            </a>

            <a
              href={resumeData.personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-800 text-xl">🐙</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">GitHub</h3>
                <p className="text-gray-600 text-sm">github.com/wblu214</p>
              </div>
            </a>

            <a
              href={resumeData.personal.contact.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-xl">🦊</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">GitLab</h3>
                <p className="text-gray-600 text-sm">gitlab.com/lwb214</p>
              </div>
            </a>

            <a
              href={resumeData.personal.contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">📝</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">个人博客</h3>
                <p className="text-gray-600 text-sm">CSDN技术博客</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  const pages = [OverviewPage, RecordPage, StatsPage, ProfilePage]

  return (
    <div className="min-h-screen pt-20 overflow-hidden relative"> 
      {/* 自动翻页控制按钮 */}
      <div className="fixed top-24 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={enableAutoScroll}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            autoScroll
              ? 'bg-green-500 text-white shadow-lg animate-pulse'
              : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {autoScroll ? '🎬 自动翻页中' : '▶️ 开始自动翻页'}
        </button>
        
        {autoScroll && (
          <button
            onClick={() => setAutoScroll(false)}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
          >
            ⏸️ 暂停翻页
          </button>
        )}
      </div>

      {/* 进度指示器 */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col gap-3">
          {sections.map((section, index) => (
            <div key={section.id} className="relative group">
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSection
                    ? 'bg-blue-500 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                title={section.name}
                onClick={() => {
                  onSectionChange(index)
                  setAutoScroll(false)
                }}
              />
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {section.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 翻页容器 - 简化版立方体翻转 */}
      <div 
        className="page-container w-full overflow-hidden relative"
        style={{ 
          height: 'calc(100vh - 80px)' 
        }}
      >
        {pages.map((PageComponent, index) => (
          <div 
            key={index} 
            className="page absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translateX(${(index - currentSection) * 100}%) rotateY(${(index - currentSection) * 15}deg)`,
              transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transformOrigin: 'center center',
              zIndex: index === currentSection ? 10 : 1,
              opacity: index === currentSection ? 1 : 0.3
            }}
          >
            <PageComponent />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home 