import { useRouter } from "next/router";

export default function ServerlessStudentManagement() {
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
          <div className="text-6xl">🎓</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Serverless Student Management System
            </h1>
            <p className="text-xl text-cyan-400">AWS Lambda • API Gateway • DynamoDB • S3</p>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/SaikiranAsamwar/Serverless-Student-Management-System-using-AWS"
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
          A fully serverless application built on AWS that manages student information with 
          complete CRUD (Create, Read, Update, Delete) operations. This system leverages 
          AWS Lambda for compute, API Gateway for RESTful endpoints, DynamoDB for NoSQL 
          data storage, and S3 for file management, creating a cost-effective and highly 
          scalable solution.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          The architecture eliminates the need for traditional server management, automatically 
          scales with demand, and follows AWS best practices for serverless applications. This 
          approach significantly reduces operational overhead and costs while maintaining high 
          availability and performance.
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
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Complete CRUD Operations</h3>
                <p className="text-slate-300">Full create, read, update, and delete functionality for student records</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Serverless Architecture</h3>
                <p className="text-slate-300">Zero server management with automatic scaling and high availability</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🗄️</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">NoSQL Database</h3>
                <p className="text-slate-300">DynamoDB for fast, flexible, and scalable data storage</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">📁</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">File Storage</h3>
                <p className="text-slate-300">S3 integration for secure document and image uploads</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔒</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Security</h3>
                <p className="text-slate-300">IAM roles and policies for secure access control</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">💰</div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-1">Cost Optimization</h3>
                <p className="text-slate-300">Pay-per-use model with minimal infrastructure costs</p>
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
            "AWS Lambda",
            "API Gateway",
            "DynamoDB",
            "S3",
            "Python",
            "CloudFormation",
            "IAM",
            "CloudWatch"
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
            <h3 className="text-xl font-semibold text-white mb-2">1. API Gateway</h3>
            <p className="text-slate-300">
              RESTful API endpoints for all student operations, with request validation 
              and CORS configuration for secure cross-origin access.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">2. Lambda Functions</h3>
            <p className="text-slate-300">
              Python-based Lambda functions handle business logic for each operation, 
              with optimized cold start performance and error handling.
            </p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">3. DynamoDB Tables</h3>
            <p className="text-slate-300">
              Single-table design with efficient indexes for fast queries, auto-scaling 
              for read/write capacity, and point-in-time recovery enabled.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-2">4. S3 Buckets</h3>
            <p className="text-slate-300">
              Secure file storage with versioning, lifecycle policies, and pre-signed 
              URLs for temporary access to student documents and images.
            </p>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="card space-y-6">
        <h2 className="text-3xl font-bold text-white">Challenges & Solutions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Challenge: Cold Start Latency</h3>
            <p className="text-slate-300 mb-2">
              <strong>Problem:</strong> Initial Lambda function invocations experienced delays.
            </p>
            <p className="text-slate-300">
              <strong>Solution:</strong> Implemented Lambda provisioned concurrency for critical 
              functions and optimized package size by removing unnecessary dependencies.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Challenge: Data Consistency</h3>
            <p className="text-slate-300 mb-2">
              <strong>Problem:</strong> Ensuring data integrity across DynamoDB and S3.
            </p>
            <p className="text-slate-300">
              <strong>Solution:</strong> Implemented transaction support in DynamoDB and added 
              retry logic with exponential backoff for failed operations.
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="card bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
        <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-slate-300">Uptime Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
            <div className="text-slate-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;200ms</div>
            <div className="text-slate-300">Avg Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
}
