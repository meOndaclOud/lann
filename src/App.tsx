import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import { LanguageProvider } from './context/LanguageProvider'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Careers } from './pages/Careers'
import { CareerDetail } from './pages/CareerDetail'
import { Assessment } from './pages/Assessment'
import { AssessmentResult } from './pages/AssessmentResult'
import { LearningPath } from './pages/LearningPath'
import { LearningTopicDetail } from './pages/LearningTopicDetail'
import { Resources } from './pages/Resources'
import { Community } from './pages/Community'
import { Mentor } from './pages/Mentor'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:slug" element={<CareerDetail />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/assessment/result" element={<AssessmentResult />} />
              <Route path="/learning-path/:career" element={<LearningPath />} />
              <Route path="/learning-path/:career/:topic" element={<LearningTopicDetail />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/community" element={<Community />} />
              <Route path="/mentor" element={<Mentor />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
