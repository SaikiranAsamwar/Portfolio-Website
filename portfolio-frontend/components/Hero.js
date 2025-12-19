export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center pt-2 pb-6 sm:pt-2 sm:pb-8 md:pt-2 md:pb-10 relative px-4 sm:px-0">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gray-600 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gray-700 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 space-y-6 sm:space-y-8 order-1">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-3 sm:mb-4 break-words">
            Saikiran Asamwar
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium gradient-text">
            AWS Certified Solutions Architect - Associate
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium gradient-text mb-2">
            AWS DevOps Engineer
          </h2>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-2xl leading-relaxed font-light text-justify hyphens-auto">
          Transforming cloud infrastructure through automation excellence. I architect and implement robust CI/CD pipelines, orchestrate containerized applications, and deliver enterprise-grade solutions that drive business value. Specializing in AWS cloud services, Kubernetes ecosystems, and infrastructure as code practices.
        </p>
        
        {/* Certifications */}
        <div className="flex flex-wrap gap-2">
          <a 
            href="https://www.credly.com/badges/37a40931-19b3-4c18-8d6a-31e74795d0ea/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 glass rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 border border-gray-300/30 dark:border-gray-600/30"
          >
            ✓ AWS Solutions Architect Associate
          </a>
          <span className="px-3 py-1.5 glass rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-300/30 dark:border-gray-600/30">
            ✓ AWS DevOps Engineer
          </span>
        </div>
        
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
          <a href="/about" className="btn btn-primary group text-sm sm:text-base">
            <span className="flex items-center gap-2 font-medium">
              About Me
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a href="/contact" className="btn btn-outline font-medium text-sm sm:text-base">
            Get In Touch
          </a>
          <a href="/resume.pdf" className="btn btn-outline font-medium text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6">
          <a href="https://github.com/SaikiranAsamwar" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg hover:bg-gray-200/20 dark:hover:bg-gray-700/10 transition-all" aria-label="GitHub" title="GitHub">
            <svg className="w-5 h-5 text-black dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/saikiran-asamwar" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg hover:bg-gray-200/20 dark:hover:bg-gray-700/10 transition-all" aria-label="LinkedIn" title="LinkedIn">
            <svg className="w-5 h-5 text-black dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:saikiransamwar@gmail.com" className="p-3 glass rounded-lg hover:bg-gray-200/20 dark:hover:bg-gray-700/10 transition-all" aria-label="Email" title="Email">
            <svg className="w-5 h-5 text-black dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end relative z-10 order-2">
        <div className="relative">
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
          
          {/* Avatar card */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-700/30 hover:border-gray-600/60 hover:shadow-gray-700/30">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            
            {/* Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
              <img 
                src="/avatar.png" 
                alt="Saikiran Asamwar - AWS Certified Solutions Architect Associate and DevOps Engineer"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: '50% 50%',
                  objectFit: 'cover',
                  transform: 'scale(1.3)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.nextSibling.style.display = 'flex';
                }}
              />
            </div>
            
            {/* Fallback when image not found */}
            <div className="absolute inset-0 flex items-center justify-center" style={{display: 'none'}}>
              <div className="text-center">
                <span className="text-6xl font-bold text-white relative z-10">SA</span>
                <p className="text-sm text-white/80 mt-2">Add avatar.png to /public folder</p>
              </div>
            </div>
            
            {/* Subtle corner accents */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gray-500/40 z-20"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gray-500/40 z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
