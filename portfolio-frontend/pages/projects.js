import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Node.js Media Compressor DevOps",
    shortDesc: "Media compression application built with Node.js featuring automated CI/CD pipeline and containerized deployment. Implements efficient file processing with DevOps best practices.",
    tech: ["Node.js", "Docker", "CI/CD", "DevOps"],
    repoUrl: "https://github.com/SaikiranAsamwar/Node.js-Media-Compressor-Devops.git",
    detailUrl: "/project/nodejs-media-compressor",
    shortImg: "🎬"
  },
  {
    title: "Task Manager Python DevOps",
    shortDesc: "Task management system built with Python featuring automated deployment pipeline and infrastructure as code. Demonstrates Python backend development with DevOps automation.",
    tech: ["Python", "DevOps", "CI/CD", "Infrastructure as Code"],
    repoUrl: "https://github.com/SaikiranAsamwar/Task-Manager-Python-DevOps.git",
    detailUrl: "/project/task-manager-python",
    shortImg: "📝"
  },
  {
    title: "Java ShopNow DevOps",
    shortDesc: "E-commerce platform built with Java featuring complete DevOps lifecycle automation. Implements continuous integration, testing, and deployment for enterprise Java applications.",
    tech: ["Java", "Spring Boot", "DevOps", "CI/CD", "Docker"],
    repoUrl: "https://github.com/SaikiranAsamwar/java-ShopNow-DevOps.git",
    detailUrl: "/project/java-shopnow",
    shortImg: "🛒"
  },
  {
    title: "Serverless Student Management System",
    shortDesc: "Fully serverless application for student data management leveraging AWS Lambda, API Gateway, DynamoDB, and S3 for file storage. Features CRUD operations and cost-optimized serverless architecture.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "Python", "CloudFormation"],
    repoUrl: "https://github.com/SaikiranAsamwar/Serverless-Student-Management-System-using-AWS",
    detailUrl: "/project/serverless-student-management",
    shortImg: "🎓"
  },
  {
    title: "QuickLoan - Auto Scaling Application",
    shortDesc: "High-availability loan processing platform with AWS Auto Scaling Groups for dynamic traffic management. Implements Elastic Load Balancer and CloudWatch for monitoring and alerts.",
    tech: ["AWS EC2", "Auto Scaling", "ELB", "RDS", "CloudWatch", "VPC"],
    repoUrl: "https://github.com/SaikiranAsamwar/QuickLoan-using-AWS-AutoScaling",
    detailUrl: "/project/quickloan-autoscaling",
    shortImg: "💰"
  },
  {
    title: "Insured - Insurance Management Platform",
    shortDesc: "Production-ready insurance management system deployed on AWS Elastic Beanstalk with RDS. Features automated deployments, health monitoring, and scalable architecture for enterprise workloads.",
    tech: ["AWS Elastic Beanstalk", "RDS", "EC2", "CloudFormation", "IAM", "VPC"],
    repoUrl: "https://github.com/SaikiranAsamwar/Insured-usingAWS-Elastic-BeanStalk-and-AWS-RDS",
    detailUrl: "/project/insured-elastic-beanstalk",
    shortImg: "🏥"
  },
];

export default function Projects() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-0">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-black dark:text-white">All Projects</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">Comprehensive portfolio of AWS DevOps projects</p>
      </div>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
