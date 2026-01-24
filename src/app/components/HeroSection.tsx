import { Code2, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8">
          <Code2 className="size-4" />
          <span className="text-sm">Professional Web Development Services</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Building Websites That
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Grow Your Business</span>
        </h1>

        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Professional, responsive, and SEO-optimized websites designed to help businesses establish a strong online presence and attract more customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group"
            onClick={scrollToContact}
          >
            Get Started
            <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="
    border-slate-600 
    text-black 
    hover:text-white 
    hover:bg-slate-800 
    px-8 py-6 text-lg
  "
            onClick={() =>
              document
                .getElementById('services')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View Services
          </Button>

        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
            <div className="text-slate-400">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-slate-400">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-slate-400">Support</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-slate-400">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
