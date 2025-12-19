import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-gray-700/20 backdrop-blur-xl mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">Saikiran Asamwar</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
            AWS Certified Solutions Architect - Associate | AWS DevOps Engineer specializing in cloud 
            infrastructure automation, CI/CD pipeline development, and container orchestration. Building 
            scalable and reliable solutions for enterprise applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/resume.pdf" className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 sm:mb-4">Expertise</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>AWS Cloud Services</li>
              <li>Kubernetes & Docker</li>
              <li>Terraform & Ansible</li>
              <li>CI/CD Pipelines</li>
              <li>Infrastructure as Code</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 sm:mb-4">Connect</h4>
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/SaikiranAsamwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass rounded-lg hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/saikiran-asamwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass rounded-lg hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://hub.docker.com/u/saikiranasamwar4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass rounded-lg hover:scale-110 transition-all"
                aria-label="Docker Hub"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.07-1.275-.936-2.374-2.23-2.838-.07-.027-.179-.03-.25.042-.215.21-.427.516-.53.827-.175.535-.13 1.1.06 1.627-.075.05-.15.1-.225.15a5.091 5.091 0 01-1.075.365l-.045.01H.824c-.455 0-.824.367-.824.823v.067c-.006.27.026.535.088.794.174.74.503 1.423.977 2.02.443.552.983.994 1.612 1.326.745.395 1.58.672 2.49.828.913.156 1.885.234 2.898.234 1.002 0 1.965-.118 2.88-.352.879-.224 1.698-.576 2.445-1.05.73-.464 1.35-1.05 1.855-1.75.456-.63.808-1.326 1.05-2.076.026-.064.05-.128.07-.19h.066c.95 0 1.557-.5 1.802-.79.25-.296.434-.642.534-1.025.006-.025.015-.05.02-.075.004-.015.004-.03.004-.045 0-.055-.014-.11-.04-.16"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-700/20 pt-6 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Saikiran Asamwar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}