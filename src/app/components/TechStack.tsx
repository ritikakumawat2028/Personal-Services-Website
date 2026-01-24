import { Code, Server, Wrench } from 'lucide-react';

export function TechStack() {
  const techCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'blue',
      techs: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Angular', 'Tailwind CSS']
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'green',
      techs: ['Node.js', 'Express.js', 'PHP', 'Python', '.NET']
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      color: 'purple',
      techs: ['Figma', 'GitHub', 'REST APIs', 'Version Control']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      green: 'text-green-400 bg-green-500/10 border-green-500/20',
      purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Modern tech stack for building robust, scalable web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
              <div className={`inline-flex p-3 rounded-lg mb-6 ${getColorClasses(category.color)}`}>
                <category.icon className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-lg">
            + Many more libraries and frameworks based on project requirements
          </p>
        </div>
      </div>
    </section>
  );
}