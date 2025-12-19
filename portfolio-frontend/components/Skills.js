export default function Skills({ list = [] }) {
  const skillLogos = {
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
    'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
    'Ansible': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    'GitLab': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
    'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    'Prometheus': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg',
    'Grafana': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',
    'Chef': 'https://www.vectorlogo.zone/logos/chefio/chefio-icon.svg',
    'Puppet': 'https://www.vectorlogo.zone/logos/puppet/puppet-icon.svg',
    'Bash': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
  };

  const skillDocs = {
    'AWS': 'https://docs.aws.amazon.com/',
    'Kubernetes': 'https://kubernetes.io/docs/',
    'Terraform': 'https://developer.hashicorp.com/terraform/docs',
    'Docker': 'https://docs.docker.com/',
    'Jenkins': 'https://www.jenkins.io/doc/',
    'Ansible': 'https://docs.ansible.com/',
    'Python': 'https://docs.python.org/',
    'Linux': 'https://www.kernel.org/doc/html/latest/',
    'Git': 'https://git-scm.com/doc',
    'GitHub': 'https://docs.github.com/',
    'GitLab': 'https://docs.gitlab.com/',
    'GitHub Actions': 'https://docs.github.com/en/actions',
    'Prometheus': 'https://prometheus.io/docs/',
    'Grafana': 'https://grafana.com/docs/',
    'Chef': 'https://docs.chef.io/',
    'Puppet': 'https://www.puppet.com/docs',
    'Bash': 'https://www.gnu.org/software/bash/manual/',
  };

  return (
    <section className="px-4 sm:px-0">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-white">
          Technical Expertise
        </h2>
        <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg">Core competencies and technical skills</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
        {list.map((s, index) => (
          <a
            key={s.name}
            href={skillDocs[s.name] || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110"
            style={{ animationDelay: `${index * 100}ms` }}
            title={`View ${s.name} Documentation`}
            aria-label={`${s.name} - View documentation`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img 
                src={skillLogos[s.name] || 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg'} 
                alt={`${s.name} logo`}
                className="w-full h-full object-contain filter dark:brightness-90"
                loading="lazy"
              />
            </div>
            <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 text-center group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {s.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
