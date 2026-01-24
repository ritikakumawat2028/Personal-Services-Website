import { Building2, Briefcase, ShoppingBag, GraduationCap } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function ServicesSection() {
  const businessServices = [
    {
      icon: Building2,
      title: 'Business & Company Websites',
      description: 'Professional corporate websites that establish credibility and drive growth'
    },
    {
      icon: Briefcase,
      title: 'Portfolio & Brand Websites',
      description: 'Showcase your work and build your brand with stunning portfolio sites'
    },
    {
      icon: ShoppingBag,
      title: 'Shop Preview & Showcase',
      description: 'Beautiful product showcases and shop previews to attract customers'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your specific needs
          </p>
        </div>

        {/* Business Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
            Business & Professional Websites
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {businessServices.map((service, index) => (
              <Card key={index} className="p-6 bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                <service.icon className="size-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-sm text-blue-400 font-semibold mb-1">BUSINESS PRICING</div>
                <div className="text-slate-300">
                  <span className="text-2xl font-bold text-white">₹20,000 - ₹50,000++</span>
                  <span className="text-slate-400 ml-2">| Based on features & complexity</span>
                </div>
              </div>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>✓ Responsive Design (Mobile, Tablet, Desktop)</li>
                <li>✓ Custom UI Based on Requirements</li>
                <li>✓ SEO-Friendly & Optimized Performance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Student Services */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-cyan-500 rounded-full"></div>
            College Projects & Student Websites
          </h3>
          <Card className="p-8 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <GraduationCap className="size-16 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3">Academic Web Projects</h4>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  Professional support for college projects with clean code, proper structure, and practical implementation. Includes guidance, implementation, and full support.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm">Any Language/Framework</span>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm">Complete Guidance</span>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm">Full Support</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  ₹5,000 - ₹6,000++
                  <span className="text-base font-normal text-slate-400 ml-2">| Student-Friendly Pricing</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
