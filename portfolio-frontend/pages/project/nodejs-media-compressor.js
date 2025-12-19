import { useRouter } from "next/router";

export default function NodeJSMediaCompressor() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </button>

      {/* Project Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="text-6xl">🎬</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Node.js Media Compressor DevOps
            </h1>
            <p className="text-xl text-gray-400">Node.js • Docker • CI/CD • DevOps</p>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/SaikiranAsamwar/Node.js-Media-Compressor-Devops.git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Source Code
          </a>
        </div>
      </div>

      {/* Project Overview */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Project Overview</h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          A media compression application built with Node.js that demonstrates modern DevOps practices 
          including containerization, automated CI/CD pipelines, and cloud-native deployment strategies. 
          This project showcases efficient file processing capabilities with comprehensive automation 
          workflows for seamless deployment and scaling.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          The application leverages Docker for containerization, ensuring consistent environments across 
          development, testing, and production. Automated CI/CD pipelines streamline the deployment process, 
          reducing manual intervention and enabling rapid iteration cycles.
        </p>
      </div>

      {/* Key Features */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🎥</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Media Compression</h3>
                <p className="text-slate-300">Efficient video and image compression using Node.js libraries</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🐳</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Containerized Deployment</h3>
                <p className="text-slate-300">Docker containers for consistent and portable application environments</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔄</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Automated CI/CD</h3>
                <p className="text-slate-300">Continuous integration and deployment pipelines for rapid releases</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚙️</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">DevOps Best Practices</h3>
                <p className="text-slate-300">Infrastructure as code and automated testing workflows</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies & Skills Used */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Technologies & Skills Used</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Programming & Runtime</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Node.js</li>
              <li>• JavaScript/ES6+</li>
              <li>• Express.js</li>
              <li>• NPM/Yarn</li>
              <li>• FFmpeg</li>
              <li>• Multer</li>
              <li>• Sharp</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">DevOps & CI/CD</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Docker</li>
              <li>• Docker Compose</li>
              <li>• GitHub Actions</li>
              <li>• Jenkins</li>
              <li>• GitLab CI</li>
              <li>• Git & GitHub</li>
              <li>• Webhooks</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Deployment & Cloud</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Container Registry</li>
              <li>• AWS ECR</li>
              <li>• Docker Hub</li>
              <li>• Cloud Deployment</li>
              <li>• Load Balancing</li>
              <li>• Environment Variables</li>
              <li>• SSL/TLS</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Testing & Quality</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Jest</li>
              <li>• Mocha/Chai</li>
              <li>• Unit Testing</li>
              <li>• Integration Testing</li>
              <li>• ESLint</li>
              <li>• Prettier</li>
              <li>• SonarQube</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Monitoring & Logging</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Winston</li>
              <li>• Morgan</li>
              <li>• Prometheus</li>
              <li>• Grafana</li>
              <li>• CloudWatch</li>
              <li>• Application Insights</li>
              <li>• Health Checks</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Storage & Media</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• AWS S3</li>
              <li>• Azure Blob Storage</li>
              <li>• File System</li>
              <li>• Media Processing</li>
              <li>• Video Encoding</li>
              <li>• Image Optimization</li>
              <li>• Streaming</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Architecture Highlights */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Architecture Highlights</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-white mb-2">Containerization Strategy</h3>
            <p className="text-slate-300">
              Docker containers ensure consistent environments across all stages of development. 
              Multi-stage builds optimize image size and security.
            </p>
          </div>
          <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-white mb-2">CI/CD Pipeline</h3>
            <p className="text-slate-300">
              Automated build, test, and deployment workflows enable rapid iteration and reliable releases. 
              Integration with version control triggers automatic deployments.
            </p>
          </div>
          <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-white mb-2">Scalable Processing</h3>
            <p className="text-slate-300">
              Efficient media processing pipelines handle multiple file formats with optimized compression 
              algorithms for performance and quality.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="card space-y-4">
        <h2 className="text-3xl font-bold text-white">Learning Outcomes</h2>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Implemented containerization using Docker for consistent application environments</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Built automated CI/CD pipelines for continuous integration and deployment</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Developed efficient media processing workflows with Node.js</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Applied DevOps best practices for automation and infrastructure management</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
