import { useState } from 'react'
import { AppLayout } from './layouts/AppLayout'
import Dashboard from './pages/Dashboard'
import MyCV from './pages/MyCV'
import JobOpportunities from './pages/JobOpportunities'
import CompatibilityAnalysis from './pages/CompatibilityAnalysis'
import CVRecommendations from './pages/CVRecommendations'
import ApplicationTracking from './pages/ApplicationTracking'
import Settings from './pages/Settings'

export default function App() {
  const [activeScreen, setActiveScreen] = useState('dashboard')

  const screenMetadata = {
    dashboard: {
      category: 'JobSuit Intelligence / Workspace',
      page: 'Dashboard',
      actionLabel: 'Analyse Compatibility',
      onAction: () => setActiveScreen('compatibility-analysis'),
    },
    'my-cv': {
      category: 'JobSuit Platform / My CV',
      page: 'My CV',
      actionLabel: '+ Upload Document',
      onAction: () => {},
    },
    'job-opportunities': {
      category: 'JobSuit Platform / Job Opportunities',
      page: 'Job Opportunities',
      actionLabel: '+ Add Job',
      onAction: () => {},
    },
    'compatibility-analysis': {
      category: 'JobSuit Platform / Compatibility Analysis',
      page: 'Compatibility Analysis',
      actionLabel: 'Export Report',
      onAction: () => {},
    },
    'cv-recommendations': {
      category: 'JobSuit Platform / Compatibility Analysis / CV Recommendations',
      page: 'CV Recommendations',
      actionLabel: '← Return to Compatibility Analysis',
      onAction: () => setActiveScreen('compatibility-analysis'),
    },
    applications: {
      category: 'JobSuit Platform / Applications',
      page: 'Applications',
      actionLabel: '+ Add Application',
      onAction: () => {},
    },
    settings: {
      category: 'JobSuit Platform / Settings',
      page: 'Settings',
      actionLabel: null,
      onAction: null,
    },
  }

  const currentMeta = screenMetadata[activeScreen] || screenMetadata.dashboard

  return (
    <AppLayout
      activeScreen={activeScreen}
      onNavigate={setActiveScreen}
      breadcrumbCategory={currentMeta.category}
      breadcrumbPage={currentMeta.page}
      actionLabel={currentMeta.actionLabel}
      onActionClick={currentMeta.onAction}
    >
      {activeScreen === 'dashboard' && <Dashboard onNavigate={setActiveScreen} />}
      {activeScreen === 'my-cv' && <MyCV />}
      {activeScreen === 'job-opportunities' && <JobOpportunities />}
      {activeScreen === 'compatibility-analysis' && <CompatibilityAnalysis />}
      {activeScreen === 'cv-recommendations' && <CVRecommendations />}
      {activeScreen === 'applications' && <ApplicationTracking />}
      {activeScreen === 'settings' && <Settings />}
    </AppLayout>
  )
}
