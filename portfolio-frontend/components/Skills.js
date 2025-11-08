export default function Skills({ list = [] }) {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Technical Expertise
        </h2>
        <p className="text-slate-400 text-lg">Core competencies and technical skills</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((s, index) => (
          <div 
            key={s.name} 
            className="card group relative overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Icon/Emoji based on category */}
            <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform">
              {s.category === 'Cloud' ? '☁️' : 
               s.category === 'Containers' ? '🐳' : 
               s.category === 'IaC' ? '🏗️' : '⚙️'}
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-lg font-bold">{s.name}</div>
                <div className="text-xs opacity-70 font-medium">
                  {s.category || ""}
                </div>
              </div>
              <div className="text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full">
                {s.level || ""}
              </div>
            </div>
            
            {/* Animated progress bar */}
            <div className="mt-4 bg-slate-700/40 rounded-full h-3 overflow-hidden backdrop-blur-sm">
              <div
                style={{ width: `${s.percent || 60}%` }}
                className="h-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
            </div>
            
            {/* Percentage */}
            <div className="mt-2 text-right text-sm font-bold opacity-80">
              {s.percent}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
