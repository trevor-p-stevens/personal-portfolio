import { Routes, Route } from "react-router-dom"
import Biography from "./sections/Biography"
import AboutMe from "./sections/AboutMe"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Clubs from "./sections/Clubs"
import PersonalProjects from "./sections/PersonalProjects"
import KeySkills from "./sections/KeySkills"
import SpotlightsDetail from "./sections/SpotlightsDetail"
import PhatlyDetail from "./sections/PhatlyDetail"
import GNNDetail from "./sections/GNNDetail"
import "./App.css"

function MainPage() {
  return (
    <main className="bg-gray-50 min-h-screen w-full overflow-x-hidden">
      <header className="py-8 text-center">
        <h1 className="text-3xl font-bold">Personal Portfolio</h1>
      </header>
      <section className="flex flex-col md:flex-row justify-center items-start gap-6 w-full px-4">
        {/* Left Column */}
        <div className="flex flex-col flex-1 min-w-0 space-y-6">
          <Biography />
          <AboutMe />
          <Education type="education" />
        </div>
        {/* Middle Column */}
        <div className="flex flex-col flex-1 min-w-0 space-y-6">
          <Education type="publications" />
          <Experience />
          <Clubs />
        </div>
        {/* Right Column */}
        <div className="flex flex-col flex-1 min-w-0 space-y-6">
          <PersonalProjects />
          <KeySkills />
        </div>
      </section>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects/spotlights" element={<SpotlightsDetail />} />
      <Route path="/projects/phatly" element={<PhatlyDetail />} />
      <Route path="/projects/gnn" element={<GNNDetail />} />
    </Routes>
  )
}