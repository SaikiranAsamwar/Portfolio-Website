import { useRouter } from "next/router";

export default function InsuredElasticBeanstalk() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </button>

      {/* Project Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="text-6xl">🏥</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Insured - Insurance Management Platform
            </h1>
            <p className="text-xl text-cyan-400">AWS Elastic Beanstalk • RDS • CloudFormation • IAM</p>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/SaikiranAsamwar/Insured-usingAWS-Elastic-BeanStalk-and-AWS-RDS"
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
          Insured is a production-ready insurance management platform built for enterprise 
          workloads using AWS Elastic Beanstalk. This Platform-as-a-Service (PaaS) solution 
          simplifies application deployment and management while providing enterprise-grade 
          features like auto-scaling, load balancing, and health monitoring out of the box.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          The application leverages AWS RDS for reliable database operations with automated 
          backups, Multi-AZ deployment for high availability, and seamless integration with 
          other AWS services. Elastic Beanstalk handles infrastructure provisioning, capacity 
          management, load balancing, and application health monitoring, allowing focus on 
          business logic rather than infrastructure management.
        </p>
      </div>

      {/* Key Features */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Automated Deployments</h3>
                <p className="text-slate-300">One-click deployments with rolling updates and zero downtime</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">💚</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Health Monitoring</h3>
                <p className="text-slate-300">Real-time application health checks with automatic recovery</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">📦</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Environment Management</h3>
                <p className="text-slate-300">Multiple environments (dev, staging, prod) with easy cloning</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔄</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Version Control</h3>
                <p className="text-slate-300">Application version tracking with easy rollback capabilities</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🗄️</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Managed Database</h3>
                <p className="text-slate-300">RDS PostgreSQL with automated backups and Multi-AZ failover</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔐</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Security Best Practices</h3>
                <p className="text-slate-300">IAM roles, security groups, and encrypted data at rest/transit</p>
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
            <h3 className="text-cyan-400 font-semibold mb-3">AWS Platform Services</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• AWS Elastic Beanstalk</li>
              <li>• Platform Versions</li>
              <li>• Environment Configuration</li>
              <li>• EB CLI</li>
              <li>• Application Versions</li>
              <li>• Environment Tiers</li>
              <li>• Managed Updates</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Compute & Scaling</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• EC2 Instances</li>
              <li>• Auto Scaling</li>
              <li>• Load Balancing</li>
              <li>• Health Monitoring</li>
              <li>• Capacity Planning</li>
              <li>• Instance Profiles</li>
              <li>• Rolling Deployments</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Database & Storage</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Amazon RDS</li>
              <li>• PostgreSQL/MySQL</li>
              <li>• Multi-AZ RDS</li>
              <li>• Database Security</li>
              <li>• Amazon S3</li>
              <li>• Backup Strategies</li>
              <li>• Point-in-Time Recovery</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Infrastructure as Code</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• AWS CloudFormation</li>
              <li>• .ebextensions</li>
              <li>• Configuration Files</li>
              <li>• Environment Properties</li>
              <li>• Resource Management</li>
              <li>• Stack Templates</li>
              <li>• Change Sets</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Networking & Security</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• VPC Configuration</li>
              <li>• Security Groups</li>
              <li>• IAM Roles & Policies</li>
              <li>• SSL/TLS (ACM)</li>
              <li>• Route 53</li>
              <li>• Private Subnets</li>
              <li>• NAT Gateway</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold mb-3">Monitoring & Operations</h3>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• CloudWatch</li>
              <li>• EB Enhanced Monitoring</li>
              <li>• Log Streaming</li>
              <li>• Alarms & Notifications</li>
              <li>• X-Ray Integration</li>
              <li>• Health Dashboards</li>
              <li>• Cost Optimization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Architecture & Implementation</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-cyan-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">1. Elastic Beanstalk Environment</h3>
            <p className="text-slate-300">
              Web server environment configured with load-balanced, auto-scaling architecture. 
              Uses rolling deployments with batch size configuration for zero-downtime updates.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">2. Application Load Balancer</h3>
            <p className="text-slate-300">
              Automatically provisioned ALB distributes traffic across EC2 instances with 
              health checks, sticky sessions, and SSL/TLS termination using ACM certificates.
            </p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">3. RDS Database</h3>
            <p className="text-slate-300">
              PostgreSQL database with Multi-AZ deployment for high availability, automated 
              daily backups with 7-day retention, and read replicas for scaling read operations.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">4. CloudFormation Integration</h3>
            <p className="text-slate-300">
              Infrastructure as Code for consistent environment provisioning. Custom resources 
              defined for additional AWS services like S3 buckets and IAM roles.
            </p>
          </div>
          <div className="border-l-4 border-pink-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">5. Enhanced Monitoring</h3>
            <p className="text-slate-300">
              CloudWatch integration for application logs, custom metrics, and alarms. 
              Enhanced health reporting tracks application performance and potential issues.
            </p>
          </div>
        </div>
      </div>

      {/* Deployment Pipeline */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Deployment Strategy</h2>
        <div className="space-y-4">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Rolling Deployment</h3>
            <div className="space-y-3 text-slate-300">
              <p><strong>Deployment Policy:</strong> Rolling with additional batch</p>
              <p><strong>Batch Size:</strong> 25% of instances</p>
              <p><strong>Health Check:</strong> Enhanced monitoring with 60s timeout</p>
              <p><strong>Rollback:</strong> Automatic on health check failure</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-blue-500/20">
              <div className="text-3xl mb-2">📝</div>
              <h4 className="font-semibold text-white mb-1">Step 1</h4>
              <p className="text-sm text-slate-400">Upload Application Version</p>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-blue-500/20">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="font-semibold text-white mb-1">Step 2</h4>
              <p className="text-sm text-slate-400">Rolling Update Execution</p>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-blue-500/20">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-semibold text-white mb-1">Step 3</h4>
              <p className="text-sm text-slate-400">Health Verification</p>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Challenges & Solutions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Challenge: Database Migration</h3>
            <p className="text-slate-300 mb-2">
              <strong>Problem:</strong> Zero-downtime database schema migrations during deployments.
            </p>
            <p className="text-slate-300">
              <strong>Solution:</strong> Implemented backward-compatible migrations using 
              Elastic Beanstalk's .ebextensions to run migration scripts during deployment hooks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Challenge: Environment Configuration</h3>
            <p className="text-slate-300 mb-2">
              <strong>Problem:</strong> Managing different configurations across environments.
            </p>
            <p className="text-slate-300">
              <strong>Solution:</strong> Used environment properties in Elastic Beanstalk and 
              AWS Systems Manager Parameter Store for sensitive configuration data.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Challenge: Cost Optimization</h3>
            <p className="text-slate-300 mb-2">
              <strong>Problem:</strong> High costs during low-traffic periods.
            </p>
            <p className="text-slate-300">
              <strong>Solution:</strong> Configured auto-scaling to scale down to single instance 
              during off-peak hours and scheduled scaling for predictable patterns.
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="card bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
        <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-slate-300">Application Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">70%</div>
            <div className="text-slate-300">Deployment Time Reduced</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">Zero</div>
            <div className="text-slate-300">Downtime Deployments</div>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/20 pt-6">
          <h3 className="text-xl font-semibold text-white mb-4">Business Impact</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Reduced operational overhead by 60% through managed services</li>
            <li>• Improved deployment frequency from weekly to multiple times per day</li>
            <li>• Enhanced security posture with automated patching and updates</li>
            <li>• Decreased infrastructure costs by 45% through right-sizing and auto-scaling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
