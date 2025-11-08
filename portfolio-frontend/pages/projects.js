import ProjectCard from "../components/ProjectCard";

const projects = [
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
    <section className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">All Projects</h1>
        <p className="text-slate-400 text-lg">Comprehensive portfolio of AWS DevOps projects</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
