import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";

const featured = [
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
];

const skills = [
  { name: "AWS", level: "Expert", percent: 90, category: "Cloud" },
  { name: "Kubernetes", level: "Advanced", percent: 85, category: "Containers" },
  { name: "Terraform", level: "Advanced", percent: 80, category: "IaC" },
  { name: "Docker", level: "Advanced", percent: 88, category: "Containers" },
  { name: "Jenkins", level: "Advanced", percent: 82, category: "CI/CD" },
  { name: "Python", level: "Expert", percent: 90, category: "Programming" },
  { name: "Linux", level: "Expert", percent: 92, category: "Systems" },
  { name: "Git", level: "Expert", percent: 95, category: "Tools" },
];

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      
      <section id="projects" className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Work
          </h2>
          <p className="text-slate-400 text-lg">Recent projects and accomplishments</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
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

      <section className="card text-center py-12">
        <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
        <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
          I'm Saikiran — an AWS DevOps Engineer passionate about automation, CI/CD,
          Kubernetes and cloud reliability. I build scalable, secure
          infrastructure and help teams ship faster and safer. With expertise in
          containerization, infrastructure as code, and cloud-native technologies,
          I transform complex systems into elegant, automated solutions.
        </p>
      </section>
    </div>
  );
}
