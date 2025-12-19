import { useRouter } from "next/router";

export default function TaskManagerPython() {
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
          <div className="text-6xl">📝</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Task Manager Python DevOps
            </h1>
            <p className="text-xl text-gray-400">Python • DevOps • CI/CD • Infrastructure as Code</p>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/SaikiranAsamwar/Task-Manager-Python-DevOps.git"
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
          A comprehensive task management system built with Python that showcases modern DevOps practices 
          including automated deployment pipelines, infrastructure as code, and continuous integration. 
          This project demonstrates how to build, test, and deploy Python applications using industry-standard 
          DevOps tools and methodologies.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          The application features a robust backend with automated testing, continuous integration workflows, 
          and infrastructure automation. It emphasizes clean code practices, version control, and automated 
          deployment strategies for Python-based applications.
        </p>
      </div>

      {/* Key Features */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Task Management</h3>
                <p className="text-slate-300">Complete CRUD operations for task creation, tracking, and management</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🐍</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Python Backend</h3>
                <p className="text-slate-300">RESTful API built with Python frameworks and best practices</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔄</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Automated CI/CD</h3>
                <p className="text-slate-300">Continuous integration and deployment with automated testing</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">📋</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Infrastructure as Code</h3>
                <p className="text-slate-300">Automated infrastructure provisioning and configuration management</p>
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
            <h3 className="text-cyan-400 font-semibold mb-3">Programming & Backend</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Python 3.x</li>
              <li>• Flask/FastAPI</li>
              <li>• Django</li>
              <li>• SQLAlchemy</li>
              <li>• Alembic</li>
              <li>• Pydantic</li>
              <li>• RESTful APIs</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Database & Storage</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• PostgreSQL</li>
              <li>• SQLite</li>
              <li>• Redis</li>
              <li>• Database Migrations</li>
              <li>• Query Optimization</li>
              <li>• Connection Pooling</li>
              <li>• Backup Strategies</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">DevOps & CI/CD</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Docker</li>
              <li>• Docker Compose</li>
              <li>• GitHub Actions</li>
              <li>• GitLab CI/CD</li>
              <li>• Jenkins</li>
              <li>• Git & Version Control</li>
              <li>• Pre-commit Hooks</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Infrastructure as Code</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Terraform</li>
              <li>• Ansible</li>
              <li>• AWS CloudFormation</li>
              <li>• Infrastructure Automation</li>
              <li>• Configuration Management</li>
              <li>• State Management</li>
              <li>• Module Development</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Testing & Quality</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Pytest</li>
              <li>• Unittest</li>
              <li>• Coverage.py</li>
              <li>• Black (Formatter)</li>
              <li>• Flake8</li>
              <li>• Pylint</li>
              <li>• MyPy (Type Checking)</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Monitoring & Cloud</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• AWS CloudWatch</li>
              <li>• Prometheus</li>
              <li>• Grafana</li>
              <li>• Application Logging</li>
              <li>• AWS Services</li>
              <li>• Azure Services</li>
              <li>• Performance Monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Architecture Highlights */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Architecture Highlights</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-white mb-2">Python Application Design</h3>
            <p className="text-slate-300">
              Clean architecture with separation of concerns, following Python best practices and 
              design patterns for maintainable and scalable code.
            </p>
          </div>
          <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-white mb-2">Automated Deployment Pipeline</h3>
            <p className="text-slate-300">
              Complete CI/CD pipeline with automated testing, code quality checks, and deployment 
              automation for rapid and reliable releases.
            </p>
          </div>
          <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-white mb-2">Infrastructure Automation</h3>
            <p className="text-slate-300">
              Infrastructure as Code approach for consistent and reproducible environments across 
              development, staging, and production.
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
            <span>Developed RESTful APIs using Python frameworks with clean architecture</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Implemented automated testing and continuous integration workflows</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Created infrastructure as code for automated provisioning and deployment</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Applied DevOps best practices for Python application deployment</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
