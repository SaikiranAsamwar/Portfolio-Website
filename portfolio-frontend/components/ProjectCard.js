import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="card group cursor-pointer h-full flex flex-col">
      <div className="flex flex-col h-full gap-4">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg group-hover:shadow-gray-600/50 transition-all group-hover:scale-110 relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer"></div>
            <span className="text-2xl relative z-10">
              {project.shortImg || "🚀"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-xl mb-2 group-hover:gradient-text transition-all">
              {project.title}
            </h3>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <p className="text-sm opacity-80 leading-relaxed mb-4 h-16 overflow-hidden">
            {project.shortDesc}
          </p>
          <div className="flex gap-2 flex-wrap mb-4 min-h-[2rem]">
            {project.tech?.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-600/40 backdrop-blur-sm font-medium hover:scale-105 transition-transform text-gray-300"
              >
                {t}
              </span>
            ))}
            {project.tech?.length > 4 && (
              <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-600/40 backdrop-blur-sm font-medium text-gray-300">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-3 flex-wrap mt-auto pt-2 min-h-[2.5rem]">
          {project.detailUrl ? (
            <Link href={project.detailUrl} className="btn btn-primary text-sm py-2 px-4">
              📖 View Details
            </Link>
          ) : (
            <div className="btn btn-primary text-sm py-2 px-4 opacity-50 cursor-not-allowed">
              📖 View Details
            </div>
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
    </article>
  );
}
