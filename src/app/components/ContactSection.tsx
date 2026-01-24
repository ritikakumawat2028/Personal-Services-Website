import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import emailjs from "emailjs-com";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-slate-900 border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Details
                </label>
                <Textarea
                  placeholder="Tell me about your project requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg group disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
           {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you need a professional business website or help with a college project, I'm here to help. Let's discuss your requirements and create something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Mail className="size-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-slate-400">ritikakumawat2028@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Phone className="size-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-slate-400">+91 7778020756</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <MessageSquare className="size-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Response Time</h4>
                    <p className="text-slate-400">Within 24 hours</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-bold text-white mb-2">Quick Pricing Reference</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Business Websites:</span>
                  <span className="font-semibold text-blue-400">₹20,000 - ₹50,000++</span>
                </div>
                <div className="flex justify-between">
                  <span>College Projects:</span>
                  <span className="font-semibold text-cyan-400">₹5,000 - ₹6,000++</span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Info (unchanged) */}
          <div className="space-y-6">
            {/* … your existing contact info cards stay the same … */}
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
}
