import { useRouter } from "next/router";

export default function QuickLoanAutoScaling() {
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
          <div className="text-6xl">💰</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              QuickLoan - Auto Scaling Application
            </h1>
            <p className="text-xl text-cyan-400">AWS EC2 • Auto Scaling • ELB • RDS • CloudWatch</p>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/SaikiranAsamwar/QuickLoan-using-AWS-AutoScaling"
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
          QuickLoan is a high-availability loan processing platform designed to handle 
          variable traffic patterns efficiently. Built on AWS, this application implements 
          Auto Scaling Groups to automatically adjust compute capacity based on demand, 
          ensuring optimal performance during peak times while minimizing costs during 
          low-traffic periods.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          The system uses Elastic Load Balancer to distribute incoming traffic across 
          multiple EC2 instances, providing fault tolerance and seamless user experience. 
          CloudWatch monitors system metrics and triggers scaling actions, while RDS 
          ensures reliable database operations with automated backups and Multi-AZ deployment.
        </p>
      </div>

      {/* Key Features */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">📈</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Dynamic Auto Scaling</h3>
                <p className="text-slate-300">Automatic scaling based on CPU, memory, and request metrics</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚖️</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Load Balancing</h3>
                <p className="text-slate-300">Application Load Balancer for intelligent traffic distribution</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🛡️</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">High Availability</h3>
                <p className="text-slate-300">Multi-AZ deployment with automatic failover capabilities</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">📊</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Real-time Monitoring</h3>
                <p className="text-slate-300">CloudWatch dashboards with custom metrics and alarms</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🗄️</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Managed Database</h3>
                <p className="text-slate-300">RDS with automated backups and read replicas</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔐</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Secure Network</h3>
                <p className="text-slate-300">VPC with public/private subnets and security groups</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Used */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "AWS EC2",
            "Auto Scaling Groups",
            "Elastic Load Balancer",
            "Amazon RDS",
            "CloudWatch",
            "VPC",
            "Security Groups",
            "IAM",
            "Route 53",
            "SNS"
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Architecture & Implementation</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-cyan-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">1. Application Load Balancer</h3>
            <p className="text-slate-300">
              ALB distributes incoming requests across healthy EC2 instances with path-based 
              routing and health checks. Configured with SSL/TLS certificates for secure HTTPS traffic.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">2. Auto Scaling Groups</h3>
            <p className="text-slate-300">
              ASG manages EC2 instance fleet with scaling policies based on CloudWatch metrics. 
              Configured with min/max/desired capacity and scheduled scaling for predictable patterns.
            </p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">3. Launch Templates</h3>
            <p className="text-slate-300">
              Defines instance configuration including AMI, instance type, user data scripts, 
              and security groups. Enables versioning for controlled updates and rollbacks.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">4. RDS Multi-AZ</h3>
            <p className="text-slate-300">
              MySQL database with automatic failover, daily backups, and read replicas for 
              improved read performance. Encrypted at rest and in transit.
            </p>
          </div>
          <div className="border-l-4 border-pink-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">5. CloudWatch Monitoring</h3>
            <p className="text-slate-300">
              Custom dashboards track application metrics, logs aggregation, and SNS alarms 
              for critical events. Triggers Auto Scaling actions based on defined thresholds.
            </p>
          </div>
        </div>
      </div>

      {/* Auto Scaling Policies */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Auto Scaling Configuration</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Scale Out Policy</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Trigger: CPU &gt; 70% for 2 minutes</li>
              <li>• Action: Add 2 instances</li>
              <li>• Cooldown: 300 seconds</li>
              <li>• Max Instances: 10</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Scale In Policy</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Trigger: CPU &lt; 30% for 5 minutes</li>
              <li>• Action: Remove 1 instance</li>
              <li>• Cooldown: 600 seconds</li>
              <li>• Min Instances: 2</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Challenges & Solutions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Challenge: Traffic Spikes</h3>
            <p className="text-slate-300 mb-2">
              <strong>Problem:</strong> Sudden traffic increases caused performance degradation.
            </p>
            <p className="text-slate-300">
              <strong>Solution:</strong> Implemented predictive scaling using scheduled actions 
              for known peak hours and target tracking scaling for dynamic adjustment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Challenge: Database Bottleneck</h3>
            <p className="text-slate-300 mb-2">
              <strong>Problem:</strong> Database became bottleneck during high load.
            </p>
            <p className="text-slate-300">
              <strong>Solution:</strong> Added RDS read replicas for read-heavy operations and 
              implemented connection pooling to optimize database connections.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Challenge: Session Management</h3>
            <p className="text-slate-300 mb-2">
              <strong>Problem:</strong> User sessions lost when instances terminated.
            </p>
            <p className="text-slate-300">
              <strong>Solution:</strong> Implemented ElastiCache Redis for centralized session 
              storage, ensuring session persistence across instances.
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="card bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
        <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.95%</div>
            <div className="text-slate-300">System Availability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
            <div className="text-slate-300">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5x</div>
            <div className="text-slate-300">Traffic Handling</div>
          </div>
        </div>
      </div>
    </div>
  );
}
