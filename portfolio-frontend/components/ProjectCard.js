import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="card group cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-all group-hover:scale-110 relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>
          <span className="text-2xl relative z-10">
            {project.shortImg || "🚀"}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-2 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-sm opacity-80 mt-1 leading-relaxed">
            {project.shortDesc}
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {project.tech?.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-sm font-medium hover:scale-105 transition-transform text-cyan-200"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-3 flex-wrap">
            {project.detailUrl && (
              <Link href={project.detailUrl} className="btn btn-primary text-sm py-2 px-4">
                📖 View Details
              </Link>
            )}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-sm py-2 px-4"
              >
                💻 Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
