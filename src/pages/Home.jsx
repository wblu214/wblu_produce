import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Projects from '../components/Projects'
import resumeData from '../data/resume.json'

const Home = () => {
  const [autoScroll, setAutoScroll] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  const sections = ['hero', 'education', 'work', 'projects']

  // 自动滚动逻辑
  useEffect(() => {
    if (!autoScroll) return

    const scrollToSection = (sectionIndex) => {
      const sectionElement = document.getElementById(sections[sectionIndex])
      if (sectionElement) {
        sectionElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    const interval = setInterval(() => {
      setCurrentSection(prev => {
        const nextSection = (prev + 1) % sections.length
        scrollToSection(nextSection)
        return nextSection
      })
    }, 4000) // 每4秒自动滚动

    return () => clearInterval(interval)
  }, [autoScroll])

  // 监听用户手动滚动
  useEffect(() => {
    const handleScroll = () => {
      setAutoScroll(false)
    }

    const handleWheel = () => {
      setAutoScroll(false)
    }

    const handleTouch = () => {
      setAutoScroll(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouch, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouch)
    }
  }, [])

  // 重新启用自动滚动
  const enableAutoScroll = () => {
    setAutoScroll(true)
    setCurrentSection(0)
  }

  return (
    <div className="min-h-screen pb-16"> {/* pb-16 为底部TabBar留空间 */}
      {/* 自动滚动控制按钮 */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={enableAutoScroll}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            autoScroll
              ? 'bg-green-500 text-white shadow-lg'
              : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {autoScroll ? '自动浏览中...' : '重新开始自动浏览'}
        </button>
      </div>

      {/* 进度指示器 */}
      {autoScroll && (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
          <div className="flex flex-col gap-3">
            {sections.map((section, index) => (
              <div
                key={section}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-300'
                }`}
                title={`第${index + 1}部分`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* 教育经历 */}
      <Timeline
        title="教育经历"
        items={resumeData.education}
        type="education"
      />

      {/* 工作经历 */}
      <Timeline
        title="工作经历"
        items={resumeData.work}
        type="work"
      />

      {/* 项目成果 */}
      <Projects />

      {/* 联系方式部分 */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            让我们一起创造精彩
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            如果您对我的经历感兴趣，或者有合作机会，欢迎随时联系我。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`mailto:${resumeData.personal.contact.email}`}
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              发送邮件
            </a>
            <a
              href="/profile"
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              查看详细信息
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 