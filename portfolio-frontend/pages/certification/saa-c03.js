import { useRouter } from "next/router";
import Link from "next/link";

export default function SAAC03() {
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
            <span className="text-4xl">🏆</span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
              AWS Certified Solutions Architect - Associate
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
              Exam Code: <span className="font-semibold text-cyan-600 dark:text-cyan-400">SAA-C03</span>
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-medium">
                Amazon Web Services (AWS)
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 font-medium">
                Issue: 12 December 2025
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-medium">
                Valid Till: 12 December 2028
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.credly.com/badges/37a40931-19b3-4c18-8d6a-31e74795d0ea/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Credly Badge
          </a>
          <a
            href="https://drive.google.com/file/d/1MIMvNIKxjA2p1W-nM8uBYkhfZFk0vo82/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Certificate
          </a>
        </div>
      </div>

      {/* Overview */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          The AWS Certified Solutions Architect - Associate certification validates technical expertise in designing 
          distributed systems on Amazon Web Services (AWS). This certification demonstrates the ability to define 
          solutions using architectural design principles based on customer requirements and provide implementation 
          guidance throughout the project lifecycle.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          As a certified Solutions Architect Associate, I have demonstrated proficiency in designing cost-optimized, 
          resilient, and secure applications on AWS, with a strong understanding of AWS services and their integration 
          for various use cases.
        </p>
      </div>

      {/* Skills Validated */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Skills Validated</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Design Resilient Architectures</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Multi-tier architecture solutions</li>
              <li>• High availability and fault tolerance</li>
              <li>• Decoupling mechanisms</li>
              <li>• Disaster recovery strategies</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Design High-Performing Architectures</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Scalable storage solutions</li>
              <li>• Elastic and scalable compute</li>
              <li>• High-performing networking</li>
              <li>• Database solutions</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Design Secure Applications</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Secure access to AWS resources</li>
              <li>• Secure application tiers</li>
              <li>• Data security options</li>
              <li>• IAM best practices</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg glass border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Design Cost-Optimized Architectures</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Cost-effective storage solutions</li>
              <li>• Cost-effective compute options</li>
              <li>• Cost optimization strategies</li>
              <li>• Resource tagging and monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* AWS Services Covered */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Key AWS Services Covered</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            "EC2", "S3", "VPC", "IAM", "RDS", "Lambda", "CloudFormation", "CloudWatch",
            "ELB", "Auto Scaling", "Route 53", "CloudFront", "DynamoDB", "ECS/EKS",
            "SNS", "SQS", "ElastiCache", "Elastic Beanstalk", "API Gateway", "KMS"
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

      {/* Certification Details */}
      <div className="card">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Certification Details</h2>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
            <span className="font-semibold">Certification Level:</span>
            <span>Associate</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
            <span className="font-semibold">Exam Code:</span>
            <span>SAA-C03</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 pb-2">
            <span className="font-semibold">Issue Date:</span>
            <span>12 December 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Valid Till:</span>
            <span>12 December 2028</span>
          </div>
        </div>
      </div>

      {/* Impact */}
      <div className="card bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Professional Impact</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This certification has enhanced my ability to design and implement scalable, highly available, and 
          fault-tolerant systems on AWS. It has deepened my understanding of AWS architectural best practices 
          and enabled me to make informed decisions about the appropriate AWS services for various use cases, 
          ensuring cost optimization and security compliance in enterprise environments.
        </p>
      </div>
    </div>
  );
}
