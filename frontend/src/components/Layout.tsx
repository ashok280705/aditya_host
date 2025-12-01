'use client'

import Sidebar from './Sidebar'
import LanguageSelector from './LanguageSelector'
import WelcomeHeader from './WelcomeHeader'
import { useLanguage } from '../contexts/LanguageContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()
  
  return (
    <div className="cultural-app">
      <div className="header-ornament"></div>
      {/* Header */}
      <header className="cultural-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="main-title">संस्कृति</h1>
            <p className="subtitle">{t('translate.title')}</p>
          </div>
          <div className="header-right">
            <LanguageSelector />
            <button className="theme-btn">
              <span>🌙</span>
            </button>
            <button className="culture-btn">
              <span>🔔</span>
            </button>
          </div>
        </div>
      </header>

      <div className="cultural-sidebar">
        <div className="sidebar-nav">
          <Sidebar activeTab="" setActiveTab={() => {}} />
        </div>
      </div>
      
      <main className="cultural-main">
        {children}
      </main>

      <footer className="cultural-footer">
        <div className="footer-content">
          <p>🕉️ संस्कृति - Multilingual Translation & Cultural Bridge 🕉️</p>
          <p>Privacy-Safe • Cultural Heritage Preserved</p>
        </div>
      </footer>

    </div>
  )
}