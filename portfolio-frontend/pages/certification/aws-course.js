import { useRouter } from "next/router";
import Link from "next/link";

export default function AWSCourse() {
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
            <span className="text-4xl">📜</span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
              AWS Course Completion Certificate
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
              Certificate Code: <span className="font-semibold text-cyan-600 dark:text-cyan-400">13941</span>
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-medium">
                Ethan's Tech, Wakad Pune
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 font-medium">
                Issue: 4 October 2025
              </span>
            </div>
          </div>
        </div>

        <a
          href="https://drive.google.com/file/d/13RrM8te3TgFlMC6fpWBC324WyXUfq9Mc/view?usp=drive_link"
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
          Completed comprehensive AWS training program at Ethan's Tech, Wakad Pune, covering fundamental to advanced 
          concepts of Amazon Web Services. This intensive course provided hands-on experience with core AWS services, 
          architectural patterns, and best practices for cloud computing.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The training emphasized practical implementation of AWS services, real-world scenarios, and industry-standard 
          practices for designing, deploying, and managing applications on the AWS cloud platform.
        </p>
      </div>

      {/* Curriculum Covered */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Curriculum Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Core AWS Services</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Amazon EC2 (Elastic Compute Cloud)</li>
              <li>• Amazon S3 (Simple Storage Service)</li>
              <li>• Amazon VPC (Virtual Private Cloud)</li>
              <li>• AWS IAM (Identity and Access Management)</li>
              <li>• Amazon RDS (Relational Database Service)</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Advanced Services</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• AWS Lambda (Serverless Computing)</li>
              <li>• Amazon CloudFront (CDN)</li>
              <li>• Amazon Route 53 (DNS Service)</li>
              <li>• AWS CloudFormation (IaC)</li>
              <li>• Amazon CloudWatch (Monitoring)</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Architecture & Design</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Well-Architected Framework</li>
              <li>• High Availability Design</li>
              <li>• Disaster Recovery Strategies</li>
              <li>• Cost Optimization Techniques</li>
              <li>• Security Best Practices</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Hands-on Projects</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Deploy scalable web applications</li>
              <li>• Configure VPC and networking</li>
              <li>• Implement storage solutions</li>
              <li>• Set up load balancing</li>
              <li>• Database migration and management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key AWS Services */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">AWS Services Mastered</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            "EC2", "S3", "VPC", "IAM", "RDS", "Lambda", "CloudFormation", "CloudWatch",
            "Route 53", "ELB", "Auto Scaling", "CloudFront", "DynamoDB", "SNS",
            "SQS", "Elastic Beanstalk", "ECS", "ECR", "KMS", "CloudTrail"
          ].map(service => (
            <div
              key={service}
              className="px-3 py-2 text-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium"
            >
              {service}
            </div>
          ))}
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
            <span>Comprehensive AWS Training</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
            <span className="font-semibold">Training Mode:</span>
            <span>Hands-on & Practical</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Issue Date:</span>
            <span>4 October 2025</span>
          </div>
        </div>
      </div>

      {/* Skills Acquired */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Skills Acquired</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Cloud Architecture Design",
            "AWS Service Configuration",
            "Infrastructure Deployment",
            "Security & Compliance",
            "Cost Optimization",
            "Networking & VPC",
            "Storage Solutions",
            "Database Management",
            "Monitoring & Logging",
            "Serverless Computing",
            "Auto Scaling",
            "Load Balancing",
            "Disaster Recovery",
            "CloudFormation Templates"
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
          This comprehensive AWS training program laid the foundation for my cloud engineering career. The hands-on 
          approach and real-world projects provided practical experience in deploying and managing AWS infrastructure. 
          The knowledge gained from this course directly contributed to achieving my AWS Certified Solutions Architect - 
          Associate certification and has been instrumental in executing successful cloud migration and deployment projects.
        </p>
      </div>
    </div>
  );
}
