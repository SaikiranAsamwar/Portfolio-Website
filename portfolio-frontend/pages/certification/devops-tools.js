import { useRouter } from "next/router";
import Link from "next/link";

export default function DevOpsTools() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 py-6 sm:py-8 px-4 sm:px-6 lg:px-0">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline mb-4"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Certifications
      </button>

      {/* Header Card */}
      <div className="card">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-4xl">⚙️</span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
              DevOps Tools Course Completion Certificate
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
              Certificate Code: <span className="font-semibold text-cyan-600 dark:text-cyan-400">14334</span>
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-medium">
                Ethan's Tech, Wakad Pune
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 font-medium">
                Issue: 18 December 2025
              </span>
            </div>
          </div>
        </div>

        <a
          href="https://drive.google.com/file/d/1T82DHBo4XsD3FdLkepMUYnre_P61bLVG/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Certificate
        </a>
      </div>

      {/* Overview */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Course Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Completed intensive DevOps Tools training program at Ethan's Tech, Wakad Pune, focusing on modern DevOps 
          practices and essential tools for continuous integration, continuous delivery, containerization, and 
          infrastructure automation. This course provided comprehensive hands-on experience with industry-standard 
          DevOps toolchains and methodologies.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The training emphasized practical implementation of DevOps principles, including CI/CD pipeline development, 
          container orchestration, infrastructure as code, configuration management, and monitoring solutions used in 
          enterprise production environments.
        </p>
      </div>

      {/* Curriculum Covered */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Curriculum Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">CI/CD Tools</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Jenkins - Pipeline automation</li>
              <li>• GitHub Actions - Workflow automation</li>
              <li>• GitLab CI/CD - End-to-end pipelines</li>
              <li>• Build and deployment strategies</li>
              <li>• Automated testing integration</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Containerization</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Docker - Container creation & management</li>
              <li>• Docker Compose - Multi-container apps</li>
              <li>• Kubernetes - Container orchestration</li>
              <li>• Helm - Kubernetes package manager</li>
              <li>• Container security best practices</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Infrastructure as Code</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Terraform - Infrastructure provisioning</li>
              <li>• Ansible - Configuration management</li>
              <li>• CloudFormation - AWS IaC</li>
              <li>• Infrastructure automation</li>
              <li>• State management & versioning</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Monitoring & Observability</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Prometheus - Metrics collection</li>
              <li>• Grafana - Visualization & dashboards</li>
              <li>• ELK Stack - Log management</li>
              <li>• Application monitoring</li>
              <li>• Alerting and incident response</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DevOps Tools Mastered */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">DevOps Tools Mastered</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Git", "GitHub", "GitLab",
            "GitHub Actions", "Prometheus", "Grafana", "Chef", "Puppet", "Maven", "Gradle",
            "Helm", "ArgoCD", "Nexus", "SonarQube", "Selenium"
          ].map(tool => (
            <div
              key={tool}
              className="px-3 py-2 text-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Hands-on Projects */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Hands-on Projects</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <h3 className="font-semibold text-black dark:text-white mb-2">CI/CD Pipeline Implementation</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Built end-to-end CI/CD pipelines using Jenkins and GitHub Actions for automated build, test, and 
              deployment processes across multiple environments.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <h3 className="font-semibold text-black dark:text-white mb-2">Kubernetes Cluster Deployment</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Deployed and managed production-grade Kubernetes clusters, implemented rolling updates, auto-scaling, 
              and service mesh configurations for microservices applications.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <h3 className="font-semibold text-black dark:text-white mb-2">Infrastructure Automation</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Automated infrastructure provisioning using Terraform and Ansible, implementing infrastructure as code 
              practices for cloud resources and configuration management.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <h3 className="font-semibold text-black dark:text-white mb-2">Monitoring & Observability Setup</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Configured comprehensive monitoring stack with Prometheus and Grafana, created custom dashboards, 
              implemented alerting rules, and log aggregation with ELK stack.
            </p>
          </div>
        </div>
      </div>

      {/* Training Details */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Training Details</h2>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
            <span className="font-semibold">Training Institute:</span>
            <span>Ethan's Tech</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
            <span className="font-semibold">Location:</span>
            <span>Wakad, Pune</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
            <span className="font-semibold">Course Type:</span>
            <span>Comprehensive DevOps Tools Training</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
            <span className="font-semibold">Training Mode:</span>
            <span>Hands-on & Project-based</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Issue Date:</span>
            <span>18 December 2025</span>
          </div>
        </div>
      </div>

      {/* Skills Acquired */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Skills Acquired</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "CI/CD Pipeline Development",
            "Container Orchestration",
            "Infrastructure as Code",
            "Configuration Management",
            "Automated Testing",
            "Version Control",
            "Build Automation",
            "Deployment Strategies",
            "Monitoring & Logging",
            "Security Scanning",
            "Performance Optimization",
            "GitOps Practices",
            "Microservices Deployment",
            "Cloud Native Tools",
            "DevOps Best Practices"
          ].map(skill => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="card bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Professional Impact</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This comprehensive DevOps Tools training has been instrumental in establishing my expertise in modern DevOps 
          practices and toolchains. The hands-on experience with industry-standard tools like Docker, Kubernetes, Jenkins, 
          and Terraform has enabled me to implement robust CI/CD pipelines, automate infrastructure provisioning, and 
          ensure reliable application deployments in production environments. The practical knowledge gained continues to 
          drive efficiency and automation in my current DevOps projects.
        </p>
      </div>
    </div>
  );
}
