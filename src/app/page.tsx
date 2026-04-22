import { NavBar } from '@/components/ui/NavBar'
import { Hero } from '@/components/sections/Hero'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/Icons'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <footer id="contact" className="border-t border-[#2A2A2A] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#22D3EE] mb-4">
            Get In Touch
          </p>
          <h2 className="text-2xl font-bold text-white mb-2">Jeremy Zhang</h2>
          <p className="text-[#A1A1AA] text-sm mb-8">
            Open to Data Analyst · Data Scientist · Analytics Engineer roles
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:jeremiahzhang1999@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2A2A2A] text-[#A1A1AA] hover:text-white hover:border-[#22D3EE]/40 transition-all duration-200 text-sm"
            >
              <Mail size={14} />
              jeremiahzhang1999@gmail.com
            </a>
            <a
              href="https://github.com/MonkeyJeremy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2A2A2A] text-[#A1A1AA] hover:text-white hover:border-[#22D3EE]/40 transition-all duration-200 text-sm"
            >
              <GitHubIcon size={14} />
              github.com/MonkeyJeremy
            </a>
            <a
              href="https://www.linkedin.com/in/jeremy-zhang-66a46a186/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2A2A2A] text-[#A1A1AA] hover:text-white hover:border-[#22D3EE]/40 transition-all duration-200 text-sm"
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
          </div>
          <p className="text-[#52525B] text-xs">
            © {new Date().getFullYear()} Jeremy Zhang · Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  )
}
