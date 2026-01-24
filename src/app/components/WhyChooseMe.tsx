import { Palette, FileCode, Target, IndianRupee, MessageCircle } from 'lucide-react';

export function WhyChooseMe() {
  const reasons = [
    {
      icon: Palette,
      title: 'Strong Frontend Focus',
      description: 'Modern UI skills with attention to detail and user experience',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileCode,
      title: 'Clean & Scalable Code',
      description: 'Maintainable codebase following best practices and standards',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Requirement-based development tailored to your specific needs',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      description: 'Competitive rates for both students and businesses',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'Professional Service',
      description: 'Clear communication and timely delivery guaranteed',
      gradient: 'from-emerald-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Work With Me?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Delivering excellence through expertise, dedication, and commitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              <div className="relative">
                <div className={`inline-flex p-3 rounded-lg mb-4 bg-gradient-to-br ${reason.gradient}`}>
                  <reason.icon className="size-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-400 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
