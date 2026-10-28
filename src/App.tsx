import React, { useState, useEffect } from "react"
import { Header } from "./components/common/Header"
import { Footer } from "./components/common/Footer"
import { WhatsAppFloating } from "./components/common/WhatsAppFloating"
import { CustomCursor } from "./components/ui/CustomCursor"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { MachinePage } from "./pages/MachinePage"
import { HowItWorksPage } from "./pages/HowItWorksPage"
import { ApplicationsPage } from "./pages/ApplicationsPage"
import { GalleryPage } from "./pages/GalleryPage"
import { FAQPage } from "./pages/FAQPage"
import { ContactPage } from "./pages/ContactPage"

export default function App() {
  // Read initial path from window location pathname or hash
  const getInitialPath = () => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      if (hash && hash.startsWith("/")) {
        return hash
      }
      const pathname = window.location.pathname
      if (pathname && pathname !== "/") {
        return pathname
      }
    }
    return "/"
  }

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath)

  const navigateTo = (path: string) => {
    setCurrentPath(path)
    if (typeof window !== "undefined") {
      // Update hash for instant client-side routing in any environment
      window.location.hash = path
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && hash.startsWith("/")) {
        setCurrentPath(hash)
      } else if (!hash) {
        setCurrentPath("/")
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // Update Page Title and Meta for SEO
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "ANY TIME MAAVU | Smart Batter Dispensing & Packaging Solutions",
      "/about": "About Us | ANY TIME MAAVU",
      "/machine": "Batter Dispensing & Packaging Machine | ANY TIME MAAVU",
      "/how-it-works": "How It Works | ANY TIME MAAVU",
      "/solutions": "Business Solutions | ANY TIME MAAVU",
      "/applications": "Business Solutions | ANY TIME MAAVU",
      "/gallery": "Product Gallery | ANY TIME MAAVU",
      "/faq": "Frequently Asked Questions | ANY TIME MAAVU",
      "/contact": "Enquire & Contact | ANY TIME MAAVU",
    }

    const newTitle =
      titles[currentPath] ||
      "ANY TIME MAAVU | Smart Batter Dispensing & Packaging Solutions"
    document.title = newTitle
  }, [currentPath])

  // Render current page
  const renderPage = () => {
    switch (currentPath) {
      case "/about":
        return <AboutPage onNavigate={navigateTo} />
      case "/machine":
        return <MachinePage onNavigate={navigateTo} />
      case "/how-it-works":
        return <HowItWorksPage onNavigate={navigateTo} />
      case "/solutions":
      case "/applications":
        return <ApplicationsPage onNavigate={navigateTo} />
      case "/gallery":
        return <GalleryPage onNavigate={navigateTo} />
      case "/faq":
        return <FAQPage onNavigate={navigateTo} />
      case "/contact":
        return <ContactPage />
      case "/":
      default:
        return <HomePage onNavigate={navigateTo} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E0412] selection:bg-[#E8B84A] selection:text-[#1E0412] relative">
      <CustomCursor />
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      <main className="flex-1">
        <div key={currentPath} className="animate-page-enter">
          {renderPage()}
        </div>
      </main>
      <Footer onNavigate={navigateTo} />
      <WhatsAppFloating />
    </div>
  )
}
