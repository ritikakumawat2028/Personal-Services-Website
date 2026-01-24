import { Code2, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Code2 className="size-5 text-blue-400" />
            <span>Professional Web Development Services</span>
          </div>
          
          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart className="size-4 text-red-400 fill-red-400" />
            <span>© {currentYear} All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
