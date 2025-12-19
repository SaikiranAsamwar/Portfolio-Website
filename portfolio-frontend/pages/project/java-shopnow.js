import { useRouter } from "next/router";

export default function JavaShopNow() {
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
          <div className="text-6xl">🛒</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Java ShopNow DevOps
            </h1>
            <p className="text-xl text-gray-400">Java • Spring Boot • DevOps • CI/CD • Docker</p>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/SaikiranAsamwar/java-ShopNow-DevOps.git"
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
          An enterprise-grade e-commerce platform built with Java and Spring Boot, demonstrating complete 
          DevOps lifecycle automation from development to production. This project showcases modern 
          microservices architecture, containerization with Docker, and comprehensive CI/CD pipelines 
          for enterprise Java applications.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          The platform implements industry best practices for Java application development, including 
          automated testing, code quality checks, security scanning, and zero-downtime deployments. 
          It demonstrates how to build, test, and deploy scalable Java applications using modern DevOps tools.
        </p>
      </div>

      {/* Key Features */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🛍️</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">E-Commerce Platform</h3>
                <p className="text-slate-300">Full-featured online shopping system with product catalog and cart management</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">☕</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Spring Boot Architecture</h3>
                <p className="text-slate-300">Modern Java application built with Spring Boot and microservices patterns</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🐳</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Containerized Deployment</h3>
                <p className="text-slate-300">Docker containers for consistent deployment across all environments</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔄</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Complete CI/CD Pipeline</h3>
                <p className="text-slate-300">Automated build, test, and deployment for enterprise Java applications</p>
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
            <h3 className="text-cyan-400 font-semibold mb-3">Programming & Framework</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Java 11/17</li>
              <li>• Spring Boot</li>
              <li>• Spring MVC</li>
              <li>• Spring Data JPA</li>
              <li>• Spring Security</li>
              <li>• Hibernate</li>
              <li>• Lombok</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Build & Dependency</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Maven</li>
              <li>• Gradle</li>
              <li>• Dependency Management</li>
              <li>• Multi-module Projects</li>
              <li>• Build Optimization</li>
              <li>• Artifact Management</li>
              <li>• Nexus/Artifactory</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Database & Caching</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• MySQL</li>
              <li>• PostgreSQL</li>
              <li>• Redis Cache</li>
              <li>• Liquibase/Flyway</li>
              <li>• JPA/Hibernate</li>
              <li>• Query Optimization</li>
              <li>• Connection Pooling</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">DevOps & CI/CD</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Docker</li>
              <li>• Docker Compose</li>
              <li>• Kubernetes</li>
              <li>• Jenkins</li>
              <li>• GitHub Actions</li>
              <li>• GitLab CI/CD</li>
              <li>• Git & GitFlow</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Testing & Quality</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• JUnit 5</li>
              <li>• Mockito</li>
              <li>• TestContainers</li>
              <li>• SonarQube</li>
              <li>• JaCoCo</li>
              <li>• Integration Testing</li>
              <li>• Code Coverage</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Cloud & Monitoring</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• AWS (EC2, S3, RDS)</li>
              <li>• Azure Services</li>
              <li>• Prometheus</li>
              <li>• Grafana</li>
              <li>• ELK Stack</li>
              <li>• Actuator</li>
              <li>• APM Tools</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Architecture Highlights */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Architecture Highlights</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-white mb-2">Microservices Architecture</h3>
            <p className="text-slate-300">
              Modular design with Spring Boot microservices, enabling independent scaling and deployment 
              of different application components for optimal resource utilization.
            </p>
          </div>
          <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-white mb-2">Automated Testing & Quality</h3>
            <p className="text-slate-300">
              Comprehensive test automation including unit tests, integration tests, and code quality 
              analysis with SonarQube for maintaining high code standards.
            </p>
          </div>
          <div className="p-4 bg-gray-800/30 rounded-lg border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-white mb-2">Container Orchestration</h3>
            <p className="text-slate-300">
              Docker containerization with multi-stage builds for optimized images and consistent 
              deployments across development, staging, and production environments.
            </p>
          </div>
        </div>
      </div>

      {/* DevOps Pipeline */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">DevOps Pipeline</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg">
            <div className="text-3xl">1️⃣</div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Source Control</h3>
              <p className="text-slate-300">Git-based version control with feature branching strategy</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg">
            <div className="text-3xl">2️⃣</div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Build & Test</h3>
              <p className="text-slate-300">Automated Maven/Gradle builds with JUnit and integration tests</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg">
            <div className="text-3xl">3️⃣</div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Code Quality</h3>
              <p className="text-slate-300">Static code analysis and security scanning</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg">
            <div className="text-3xl">4️⃣</div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Containerization</h3>
              <p className="text-slate-300">Docker image creation and registry push</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg">
            <div className="text-3xl">5️⃣</div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400">Deployment</h3>
              <p className="text-slate-300">Automated deployment to cloud environments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="card space-y-4">
        <h2 className="text-3xl font-bold text-white">Learning Outcomes</h2>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Built enterprise-grade Java applications using Spring Boot and microservices architecture</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Implemented complete CI/CD pipelines for Java application automation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Containerized Java applications with Docker for consistent deployments</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">→</span>
            <span>Applied DevOps best practices including automated testing, code quality, and security scanning</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
