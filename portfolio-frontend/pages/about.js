export default function About() {
  return (
    <div className="space-y-12">
      <section>
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-black dark:text-white">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Learn more about my journey and expertise</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="card">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">Summary</h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify hyphens-auto">
              AWS DevOps Engineer with expertise in designing, implementing, and managing cloud-native applications and infrastructure. Proficient in containerization technologies including Docker and orchestration platforms like Kubernetes (EKS/ECS) for scalable deployments. Experienced in Infrastructure as Code using Terraform, Ansible, and CloudFormation for automated infrastructure provisioning and configuration management. Skilled in building CI/CD pipelines with Jenkins and GitHub Actions, implementing DevOps best practices across the software development lifecycle. Strong programming foundation in Python, Java, Node.js, and shell scripting for automation and tooling development, with expertise in Linux systems administration and Git version control.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">Highlights</h3>
            <ul className="text-base sm:text-lg text-gray-700 dark:text-gray-300 list-disc ml-5 space-y-3">
              <li className="leading-relaxed">
                Designed and automated CI/CD pipelines using GitHub Actions, Jenkins, and Docker for cloud-native applications.
              </li>
              <li className="leading-relaxed">
                Containerized and deployed applications on AWS EKS, integrating ALB Ingress and Horizontal Pod Autoscaling (HPA) for high availability and scalability.
              </li>
              <li className="leading-relaxed">
                Provisioned and managed AWS infrastructure using Terraform, Ansible, and CloudFormation, following Infrastructure as Code best practices.
              </li>
              <li className="leading-relaxed">
                Implemented security, monitoring, and cost-optimization practices using IAM, CloudWatch, Prometheus, and Grafana.
              </li>
              <li className="leading-relaxed">
                Built and deployed production-ready DevOps projects showcasing real-world AWS architectures and automation workflows.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-black dark:text-white">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Hands-on experience in DevOps and cloud infrastructure</p>
        </div>
        <div className="space-y-6">
          {/* Cloudnautic Internship */}
          <div className="card hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">DevOps Intern</h3>
                <p className="text-xl font-semibold text-black dark:text-white mt-1">Cloudnautic</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Pune, Maharashtra
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-cyan-500 text-lg sm:text-xl mt-1 flex-shrink-0">•</span>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify hyphens-auto">
                  Worked on deploying and managing AWS cloud infrastructure including EC2, S3, IAM, VPC, EBS, EFS, RDS, ELB/ALB, DynamoDB, and Lambda.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-500 text-lg sm:text-xl mt-1 flex-shrink-0">•</span>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify hyphens-auto">
                  Implemented and maintained CI/CD pipelines using Jenkins and GitHub Actions, following best practices with Git and GitHub.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-500 text-lg sm:text-xl mt-1 flex-shrink-0">•</span>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify hyphens-auto">
                  Containerized applications using Docker and orchestrated workloads using Kubernetes (EKS/ECS) for scalable deployments.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-500 text-lg sm:text-xl mt-1 flex-shrink-0">•</span>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify hyphens-auto">
                  Automated infrastructure provisioning and monitoring using Terraform and CloudFormation with observability via CloudWatch, Prometheus, and Grafana.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "CloudFormation", "GitHub Actions", "Prometheus", "Grafana"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
