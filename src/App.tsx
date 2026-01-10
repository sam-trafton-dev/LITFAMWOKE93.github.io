import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"

const DevLog = lazy(() => import('@/components/DevLog'))
const DevLogPost = lazy(() => import('@/components/DevLogPost'))




// Home page component with all sections
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/devlog" element={<DevLog />} />
            <Route path="/devlog/:slug" element={<DevLogPost />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

