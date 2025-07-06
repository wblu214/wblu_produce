import { useState } from 'react'
import TabBar from './components/TabBar'
import Home from './pages/Home'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState(0)

  const handleSectionChange = (sectionIndex) => {
    setCurrentSection(sectionIndex)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TabBar 
        currentSection={currentSection} 
        onSectionChange={handleSectionChange} 
      />
      <Home 
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />
    </div>
  )
}

export default App 