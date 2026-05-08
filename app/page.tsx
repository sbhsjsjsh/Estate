'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Building2, 
  Smartphone, 
  Search, 
  BarChart3, 
  ArrowRight, 
  Menu,
  X,
  Star,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Mail,
  ChevronRight
} from 'lucide-react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

const STAGGER_CHILDREN_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-stone-900" />
            <span className="text-2xl font-serif font-bold text-stone-900 tracking-tight">EstateWeb<span className="text-amber-600">.</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#services" className="hover:text-stone-900 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-stone-900 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-stone-900 transition-colors">Testimonials</a>
            <a href="#contact" className="bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10">
              Get an Estimate
            </a>
          </nav>

          <button 
            className="md:hidden text-stone-900 focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-4">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block font-medium text-stone-600 p-2">Services</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block font-medium text-stone-600 p-2">Portfolio</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block font-medium text-stone-600 p-2">Testimonials</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center bg-stone-900 text-white px-5 py-3 rounded-lg font-medium mt-4">
              Get an Estimate
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
              alt="Luxury modern home exterior"
              fill
              className="object-cover opacity-30 mix-blend-overlay"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <motion.div 
              className="max-w-3xl"
              variants={STAGGER_CHILDREN_VARIANTS}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-stone-800/60 backdrop-blur-md border border-stone-700/50 text-amber-500 text-xs font-bold uppercase tracking-widest rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                For Elite Real Estate Agents & Brokerages
              </motion.div>
              <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                Close more deals with a <span className="italic text-amber-500 font-light">high-converting</span> digital presence.
              </motion.h1>
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg sm:text-xl text-stone-300 mb-10 max-w-2xl leading-relaxed">
                We design and develop premium, SEO-optimized real estate websites with seamless IDX integration to help you capture leads and showcase properties beautifully.
              </motion.p>
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4">
                <a href="#portfolio" className="inline-flex items-center justify-center bg-white text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                  View Our Work
                </a>
                <a href="#contact" className="inline-flex items-center justify-center bg-transparent border border-stone-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 hover:border-white transition-all">
                  Book a Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition / Services */}
        <section id="services" className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">Everything you need to dominate your local market.</h3>
              <p className="text-lg text-stone-500">Standard templates won't cut it anymore. We build custom platforms engineered for speed, search visibility, and lead generation.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Search className="w-6 h-6" />, title: "IDX/MLS Integration", desc: "Seamless, real-time property search that keeps buyers on your website longer instead of portals." },
                { icon: <Smartphone className="w-6 h-6" />, title: "Mobile-First Design", desc: "Over 70% of home searches are on mobile. We ensure pixel-perfect experiences on any device." },
                { icon: <BarChart3 className="w-6 h-6" />, title: "Lead Generation", desc: "Strategic forms, saved searches, and home valuation tools designed to capture buyer & seller info." },
                { icon: <Building2 className="w-6 h-6" />, title: "Hyper-Local SEO", desc: "Built with technical SEO best practices to help you rank for neighborhood and city searches." },
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors group">
                  <div className="w-14 h-14 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-sm">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h4>
                  <p className="text-stone-500 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 sm:py-32 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3">Recent Projects</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">Digital experiences that sell homes.</h3>
              </div>
              <a href="#contact" className="inline-flex items-center text-stone-900 font-bold hover:text-amber-700 transition-colors group pb-2 border-b-2 border-stone-900 hover:border-amber-700">
                Start your project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
              {/* Project 1 */}
              <div className="group cursor-pointer">
                <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden mb-6 bg-stone-200 shadow-xl shadow-stone-200/50">
                  <Image 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                    alt="Luxury Property Group Portfolio item"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3 flex items-center justify-between">
                  The Sharma Group
                  <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
                </h4>
                <p className="text-stone-500 mb-5 leading-relaxed">A high-end platform for a boutique luxury agency featuring expansive property galleries, engaging video headers, and neighborhood guides.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-wider rounded-md">Custom Design</span>
                  <span className="px-3 py-1.5 bg-white border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-wider rounded-md">IDX Integration</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group cursor-pointer xl:mt-20">
                <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden mb-6 bg-stone-200 shadow-xl shadow-stone-200/50">
                  <Image 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Solo Agent Portfolio item"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3 flex items-center justify-between">
                  Rao Realty
                  <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
                </h4>
                <p className="text-stone-500 mb-5 leading-relaxed">A high-conversion site for a top-producing agent, focused on seller lead generation, home valuation flows, and community hyper-local SEO.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-wider rounded-md">Lead Generation</span>
                  <span className="px-3 py-1.5 bg-white border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-wider rounded-md">SEO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 sm:py-32 bg-stone-950 text-white relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-800/30 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-3">Client Success</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-16">Trusted by top producers.</h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { 
                  quote: "EstateWeb transformed our online presence. Our new site is not only gorgeous, but our lead volume from organic search has increased by 150% in just 6 months.", 
                  author: "Rahul Desai", 
                  role: "Broker/Owner at Horizon Realty, Mumbai"
                },
                { 
                  quote: "The IDX integration is completely seamless. Buyers spend way more time on my site searching for homes instead of going to 99acres or Magicbricks. Best investment I've made.", 
                  author: "Ananya Patel", 
                  role: "Top 1% Agent, Luxury Properties"
                },
                { 
                  quote: "Incredibly professional and fast. They understood exactly what a real estate team needs to generate leads and didn't just hand us a generic template.", 
                  author: "Vikram & Neha Singh", 
                  role: "The Singh Group"
                }
              ].map((t, i) => (
                <div key={i} className="bg-stone-900/80 backdrop-blur-sm p-8 rounded-3xl border border-stone-800 hover:border-stone-700 transition-colors">
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-stone-300 mb-8 italic leading-relaxed text-lg">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center font-bold text-stone-400 border border-stone-700">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white tracking-wide">{t.author}</p>
                      <p className="text-stone-500 text-sm mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-stone-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-stone-900 rounded-3xl p-8 md:p-16 border border-stone-800 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/30 blur-2xl transform skew-x-12" />

              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-3">Get Started</h2>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Ready to upgrade your digital curb appeal?</h3>
                  <p className="text-lg text-stone-400 mb-10 leading-relaxed">
                    Let's discuss your brand, your goals, and how a custom website can help you capture more market share.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-amber-500/10 p-2.5 rounded-full text-amber-500">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Custom tailored strategy</h4>
                        <p className="text-stone-400 mt-1">We don't do cookie-cutter. Your site will be unique to your brand.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-amber-500/10 p-2.5 rounded-full text-amber-500">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Launch in 1 day</h4>
                        <p className="text-stone-400 mt-1">Our streamlined process gets you live and generating leads quickly.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
                  <h4 className="text-2xl font-bold text-stone-900 mb-6">Request Pricing</h4>
                  <form className="space-y-5" onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const newSubmission = {
                      id: Date.now().toString(),
                      firstName: formData.get('firstName'),
                      lastName: formData.get('lastName'),
                      ask: formData.get('ask'),
                      email: formData.get('email'),
                      phone: formData.get('phone'),
                      role: formData.get('role'),
                      date: new Date().toISOString()
                    };
                    
                    const existing = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
                    localStorage.setItem('formSubmissions', JSON.stringify([newSubmission, ...existing]));
                    
                    e.currentTarget.reset();
                    alert('Thanks! We will be in touch shortly.');
                  }}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-bold text-stone-700">First Name</label>
                        <input name="firstName" id="firstName" required type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all bg-stone-50" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-bold text-stone-700">Last Name</label>
                        <input name="lastName" id="lastName" required type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all bg-stone-50" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="ask" className="text-sm font-bold text-stone-700">How can we help you?</label>
                      <textarea name="ask" id="ask" rows={3} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all bg-stone-50 resize-none" placeholder="Tell us about your requirements..."></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-stone-700">Email Address</label>
                        <input name="email" id="email" required type="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all bg-stone-50" placeholder="dummy@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-stone-700">Phone Number</label>
                        <input name="phone" id="phone" required type="tel" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all bg-stone-50" placeholder="+91 00000 00000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="role" className="text-sm font-bold text-stone-700">I am a...</label>
                      <select name="role" id="role" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all bg-stone-50 text-stone-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:right_1rem_center]">
                        <option>Solo Agent</option>
                        <option>Real Estate Team</option>
                        <option>Brokerage Owner</option>
                        <option>Commercial Property Manager</option>
                      </select>
                    </div>

                    <button type="submit" className="w-full bg-stone-900 text-white font-bold py-4 rounded-lg hover:bg-stone-800 transition-colors mt-6 flex justify-center items-center gap-2 shadow-lg shadow-stone-900/20">
                      Submit Request <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-white" />
            <span className="text-xl font-serif font-bold text-white tracking-tight">EstateWeb<span className="text-amber-500">.</span></span>
          </div>
          
          <div className="text-stone-400 text-sm flex gap-6 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} EstateWeb Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
