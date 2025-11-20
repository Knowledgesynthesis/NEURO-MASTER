import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { Layout } from './components/Layout'
import HomePage from './pages/HomePage'
import StrokePage from './pages/StrokePage'
import HemorrhagePage from './pages/HemorrhagePage'
import SeizuresPage from './pages/SeizuresPage'
import MSPage from './pages/MSPage'
import MeningitisPage from './pages/MeningitisPage'
import GBSPage from './pages/GBSPage'
import MGPage from './pages/MGPage'
import DeliriumPage from './pages/DeliriumPage'
import AssessmentPage from './pages/AssessmentPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stroke" element={<StrokePage />} />
          <Route path="/hemorrhage" element={<HemorrhagePage />} />
          <Route path="/seizures" element={<SeizuresPage />} />
          <Route path="/ms" element={<MSPage />} />
          <Route path="/meningitis" element={<MeningitisPage />} />
          <Route path="/gbs" element={<GBSPage />} />
          <Route path="/mg" element={<MGPage />} />
          <Route path="/delirium" element={<DeliriumPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
