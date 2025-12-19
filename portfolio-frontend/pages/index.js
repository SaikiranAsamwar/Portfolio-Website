import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";

const featured = [
  {
    title: "Node.js Media Compressor DevOps",
    shortDesc: "Media compression application built with Node.js featuring automated CI/CD pipeline and containerized deployment.",
    tech: ["Node.js", "Docker", "CI/CD", "DevOps"],
    repoUrl: "https://github.com/SaikiranAsamwar/Node.js-Media-Compressor-Devops.git",
    detailUrl: "/project/nodejs-media-compressor",
    shortImg: "🎬"
  },
  {
    title: "Task Manager Python DevOps",
    shortDesc: "Task management system built with Python featuring automated deployment pipeline and infrastructure as code.",
    tech: ["Python", "DevOps", "CI/CD", "Infrastructure as Code"],
    repoUrl: "https://github.com/SaikiranAsamwar/Task-Manager-Python-DevOps.git",
    detailUrl: "/project/task-manager-python",
    shortImg: "📝"
  },
  {
    title: "Java ShopNow DevOps",
    shortDesc: "E-commerce platform built with Java featuring complete DevOps lifecycle automation and continuous deployment.",
    tech: ["Java", "Spring Boot", "DevOps", "CI/CD", "Docker"],
    repoUrl: "https://github.com/SaikiranAsamwar/java-ShopNow-DevOps.git",
    detailUrl: "/project/java-shopnow",
    shortImg: "🛒"
  },
  {
    title: "Serverless Student Management System",
    shortDesc: "Fully serverless application for student data management using AWS Lambda, API Gateway, DynamoDB, and S3.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "Python", "CloudFormation"],
    repoUrl: "https://github.com/SaikiranAsamwar/Serverless-Student-Management-System-using-AWS",
    detailUrl: "/project/serverless-student-management",
    shortImg: "🎓"
  },
  {
    title: "QuickLoan - Auto Scaling Application",
    shortDesc: "High-availability loan platform with AWS Auto Scaling, ELB, and CloudWatch monitoring.",
    tech: ["AWS EC2", "Auto Scaling", "ELB", "RDS", "CloudWatch", "VPC"],
    repoUrl: "https://github.com/SaikiranAsamwar/QuickLoan-using-AWS-AutoScaling",
    detailUrl: "/project/quickloan-autoscaling",
    shortImg: "💰"
  },
  {
    title: "Insured - Insurance Management Platform",
    shortDesc: "Production-ready insurance management system deployed on AWS Elastic Beanstalk with RDS for high availability.",
    tech: ["AWS Elastic Beanstalk", "RDS", "EC2", "CloudFormation", "IAM", "VPC"],
    repoUrl: "https://github.com/SaikiranAsamwar/Insured-usingAWS-Elastic-BeanStalk-and-AWS-RDS",
    detailUrl: "/project/insured-elastic-beanstalk",
    shortImg: "🏥"
  },
];

const skills = [
  { name: "AWS", level: "Expert", percent: 90, category: "Cloud" },
  { name: "Kubernetes", level: "Advanced", percent: 85, category: "Containers" },
  { name: "Terraform", level: "Advanced", percent: 80, category: "IaC" },
  { name: "Docker", level: "Advanced", percent: 88, category: "Containers" },
  { name: "Jenkins", level: "Advanced", percent: 82, category: "CI/CD" },
  { name: "Ansible", level: "Advanced", percent: 78, category: "IaC" },
  { name: "Python", level: "Expert", percent: 90, category: "Programming" },
  { name: "Linux", level: "Expert", percent: 92, category: "Systems" },
  { name: "Git", level: "Expert", percent: 95, category: "Tools" },
  { name: "GitHub", level: "Expert", percent: 93, category: "Tools" },
  { name: "GitLab", level: "Advanced", percent: 85, category: "Tools" },
  { name: "GitHub Actions", level: "Advanced", percent: 88, category: "CI/CD" },
  { name: "Prometheus", level: "Advanced", percent: 80, category: "Monitoring" },
  { name: "Grafana", level: "Advanced", percent: 82, category: "Monitoring" },
  { name: "Chef", level: "Intermediate", percent: 70, category: "Configuration" },
  { name: "Puppet", level: "Intermediate", percent: 68, category: "Configuration" },
  { name: "Bash", level: "Advanced", percent: 85, category: "Scripting" },
];

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20">
      <Hero />
      
      {/* Experience Section */}
      <section className="px-4 sm:px-0">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-white">
            Experience
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg lg:text-xl">Professional journey and contributions</p>
        </div>
        <a href="/about#experience" className="block">
          <div className="card hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] cursor-pointer">
            <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center shadow-lg">
                <span className="text-3xl sm:text-4xl">💼</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1 sm:mb-2">DevOps Intern</h3>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-black dark:text-white">Cloudnautic</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">Pune, Maharashtra</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify hyphens-auto mb-4 sm:mb-6">
              Deployed and managed AWS cloud infrastructure, implemented CI/CD pipelines using Jenkins and GitHub Actions, containerized applications with Docker and Kubernetes, and automated infrastructure provisioning using Terraform, Ansible, and CloudFormation.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "GitHub Actions"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium text-sm sm:text-base">
              <span>View Full Details</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </section>

      <section id="projects" className="relative px-4 sm:px-0">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-white">
            Featured Work
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg">Recent projects and accomplishments</p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, index) => (
            <div 
              key={p.title}
              className="animate-float"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <Skills list={skills} />
      </section>

      {/* About Me */}
      <section className="card mx-4 sm:mx-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/20">
        <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 gradient-text">About Me</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Saikiran Asamwar, AWS DevOps Engineer</p>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-justify hyphens-auto">
          <p className="text-base sm:text-lg lg:text-xl">
            I'm Saikiran Asamwar, an AWS Certified Solutions Architect – Associate and DevOps & Cloud Engineer, with a strong engineering foundation and hands-on experience in building automated, scalable, and secure cloud infrastructure.
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            I hold a B.Tech in Electronics and Telecommunication Engineering from K.D.K. College of Engineering, Nagpur (2021–2025) with a CGPA of 7.6, which strengthened my fundamentals in systems, networking, and Linux-based environments.
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            I have practical experience working with AWS services including EC2, S3, IAM, RDS, VPC, ALB, Auto Scaling, ECR, EKS, and CloudWatch, along with Linux, Git, Docker, Kubernetes, Jenkins, GitHub Actions, and Terraform to automate build, deployment, and infrastructure workflows.
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            Through real-world DevOps projects, I've implemented CI/CD pipelines, containerized applications, deployed production workloads on AWS EKS, and managed infrastructure using Infrastructure as Code, while applying AWS Well-Architected Framework best practices for security, reliability, performance, and cost optimization.
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            I also focus on monitoring, observability, and troubleshooting, using CloudWatch, Prometheus, and Grafana to ensure system stability and operational efficiency.
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            I'm actively seeking AWS DevOps / Cloud Engineer opportunities where I can contribute to production systems, continuously learn, and deliver high-impact cloud-native solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
