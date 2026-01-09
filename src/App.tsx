import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App

