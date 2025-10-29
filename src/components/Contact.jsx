import SectionTitle from './SectionTitle'
import { FiLinkedin, FiGithub, FiMail, FiFacebook } from 'react-icons/fi'

export default function Contact() {
  

  return (
    <section className="section" id="contact">
      <div className="container-max">
        <SectionTitle title="Get in Touch" subtitle="Have a project in mind or want to collaborate? Send a message." />

        <div className="flex flex-col items-center justify-center py-10">
          {/* Email circular icon */}
          <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg">
            <FiMail className="w-7 h-7" />
          </div>

          {/* Email label and address */}
          <div className="mt-4 text-center">
            <p className="text-sm text-slate-300">Email</p>
            <a
              href="mailto:sweelbliss184@gmail.com"
              className="font-medium underline text-slate-100 hover:text-blue-400"
              target="_blank"
              rel="noreferrer"
            >
              swellbliss184@gmail.com
            </a>
          </div>

          {/* Social icons row */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/laiba-aslam-89765a372/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-100 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="p-3 rounded-full bg-slate-800/70 hover:bg-slate-700 shadow">
                <FiLinkedin className="w-6 h-6" />
              </span>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Laiba586/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-100 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <span className="p-3 rounded-full bg-slate-800/70 hover:bg-slate-700 shadow">
                <FiGithub className="w-6 h-6" />
              </span>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577024488480"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-100 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <span className="p-3 rounded-full bg-slate-800/70 hover:bg-slate-700 shadow">
                <FiFacebook className="w-6 h-6" />
              </span>
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

