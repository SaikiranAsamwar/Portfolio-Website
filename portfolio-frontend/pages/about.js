export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold">Summary</h3>
          <p className="mt-2 text-gray-600">
            AWS DevOps Engineer building CI/CD, infrastructure as code,
            containerized apps and reliable cloud platforms. Experienced with
            Terraform, Kubernetes, Docker, GitHub Actions and monitoring
            solutions.
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Experience</h3>
          <ul className="mt-2 text-gray-600 list-disc ml-5">
            <li>
              Built CI/CD pipelines for multiple microservices using GitHub
              Actions and Docker.
            </li>
            <li>
              Deployed production workloads on EKS with ALB and Horizontal Pod
              Autoscaling.
            </li>
            <li>
              Implemented cost & security best practices for cloud
              infrastructure.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
