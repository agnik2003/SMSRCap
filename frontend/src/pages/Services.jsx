import { Link } from 'react-router-dom';
import { Globe, Smartphone, Server, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "web-dev",
      icon: <Globe className="w-12 h-12 text-green-400 mb-6" />,
      title: "Web Development",
      description: "We build blazing-fast, responsive web applications engineered for high conversion rates and seamless user experiences.",
      features: [
        "Single Page Applications (SPAs)",
        "E-commerce Platforms",
        "Progressive Web Apps (PWAs)",
        "SEO-Optimized Architecture"
      ],
      techStack: ["React.js", "Node.js", "Vite", "Tailwind CSS"]
    },
    {
      id: "app-dev",
      icon: <Smartphone className="w-12 h-12 text-green-400 mb-6" />,
      title: "Mobile App Development",
      description: "Deploy native-feeling applications across iOS and Android from a single codebase, reducing time-to-market.",
      features: [
        "Cross-Platform Compatibility",
        "Real-Time Database Syncing",
        "Push Notification Pipelines",
        "Hardware API Integration"
      ],
      techStack: ["Flutter", "React Native", "Firebase", "Dart"]
    },
    {
      id: "custom-software",
      icon: <Server className="w-12 h-12 text-green-400 mb-6" />,
      title: "Custom Software Solutions",
      description: "Scalable backend systems and custom APIs designed to handle complex business logic and massive data loads.",
      features: [
        "Microservices Architecture",
        "RESTful & GraphQL APIs",
        "Third-Party Integrations",
        "Payment Gateway Setup"
      ],
      techStack: ["Java", "Spring Boot", "MongoDB", "Express"]
    },
    {
      id: "maintenance",
      icon: <ShieldCheck className="w-12 h-12 text-green-400 mb-6" />,
      title: "System Maintenance & Security",
      description: "Ensure your digital assets remain online, secure, and up-to-date with our comprehensive DevOps support.",
      features: [
        "24/7 Uptime Monitoring",
        "Automated Cloud Backups",
        "Vulnerability Patching",
        "Legacy Code Modernization"
      ],
      techStack: ["Docker", "AWS", "CI/CD Pipelines", "Git"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden">
      
      {/* Background Cyber-Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#22c55e05_1px,transparent_1px),linear-gradient(to_bottom,#22c55e05_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-bold tracking-widest mb-6 uppercase">
            Our Capabilities
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Excellence</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From mobile interfaces to complex enterprise backends, our full-stack expertise ensures your project is built on a foundation of reliability and scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 md:p-10 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {service.icon}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="pt-6 border-t border-gray-800 mt-auto">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Powered By</p>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-[#111] border border-gray-700 text-gray-300 text-xs font-medium rounded hover:border-green-500 hover:text-green-400 cursor-default transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-24 bg-gradient-to-r from-green-900/40 to-[#0a0a0a] border border-green-500/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-[0_0_20px_rgba(34,197,94,0.15)]">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Need a custom technical architecture?</h3>
            <p className="text-gray-400">Our engineers are standing by to review your project requirements.</p>
          </div>
          <Link to="/contact" className="px-8 py-4 bg-green-500 text-black font-bold rounded-md hover:bg-green-400 transition-colors flex items-center gap-2 group whitespace-nowrap">
            Consult With Us
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

      </div>
    </div>
  );
}