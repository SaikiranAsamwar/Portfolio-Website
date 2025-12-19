import Link from "next/link";

const certifications = [
  {
    id: "saa-c03",
    title: "AWS Certified Solutions Architect - Associate",
    code: "SAA-C03",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "12 December 2025",
    validTill: "12 December 2028",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    credentialUrl: "https://www.credly.com/badges/37a40931-19b3-4c18-8d6a-31e74795d0ea/public_url",
    certificateUrl: "https://drive.google.com/file/d/1MIMvNIKxjA2p1W-nM8uBYkhfZFk0vo82/view?usp=sharing",
    description: "Validates expertise in designing distributed systems on AWS with a focus on scalability, security, and cost optimization.",
    detailUrl: "/certification/saa-c03",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "aws-course",
    title: "AWS Course Completion Certificate",
    code: "13941",
    issuer: "Ethan's Tech, Wakad Pune",
    issueDate: "4 October 2025",
    validTill: null,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    credentialUrl: "https://drive.google.com/file/d/13RrM8te3TgFlMC6fpWBC324WyXUfq9Mc/view?usp=drive_link",
    description: "Comprehensive AWS training covering core services, architecture, and deployment strategies.",
    detailUrl: "/certification/aws-course",
    color: "from-orange-500 to-red-600"
  },
  {
    id: "devops-tools",
    title: "DevOps Tools Course Completion Certificate",
    code: "14334",
    issuer: "Ethan's Tech, Wakad Pune",
    issueDate: "18 December 2025",
    validTill: null,
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    credentialUrl: "https://drive.google.com/file/d/1T82DHBo4XsD3FdLkepMUYnre_P61bLVG/view?usp=drive_link",
    description: "Hands-on training in modern DevOps tools including Docker, Kubernetes, Jenkins, Terraform, and CI/CD pipelines.",
    detailUrl: "/certification/devops-tools",
    color: "from-purple-500 to-pink-600"
  }
];

export default function Certifications() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">
          Certifications
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
          Professional certifications and course completions demonstrating expertise in AWS and DevOps technologies
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="card hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group flex flex-col"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Icon and AWS Logo */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-16 h-16 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg p-3 border border-gray-200 dark:border-gray-700`}>
                <img src={cert.logoUrl} alt={cert.title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-end gap-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                  alt="AWS" 
                  className="h-8 w-auto"
                />
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-medium">
                  {cert.code}
                </span>
              </div>
            </div>

            {/* Title and Issuer */}
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Issued by:</strong> {cert.issuer}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <strong>Issue Date:</strong> {cert.issueDate}
            </p>
            {cert.validTill && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <strong>Valid Till:</strong> {cert.validTill}
              </p>
            )}
            {!cert.validTill && <div className="mb-4"></div>}

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
              {cert.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-auto">
              <Link
                href={cert.detailUrl}
                className="btn btn-primary text-sm text-center"
              >
                View Details
              </Link>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-sm text-center"
              >
                View Credential
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="card text-center py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">Certification Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">3</div>
            <div className="text-gray-700 dark:text-gray-400">Total Certifications</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">1</div>
            <div className="text-gray-700 dark:text-gray-400">AWS Certifications</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">2</div>
            <div className="text-gray-700 dark:text-gray-400">Course Completions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
