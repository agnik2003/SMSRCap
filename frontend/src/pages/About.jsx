import { Users, Target, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Zap className="w-8 h-8 text-green-400 mb-4" />,
      title: "Rapid Deployment",
      description: "We utilize agile methodologies to ensure your software goes to market faster without sacrificing quality."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-400 mb-4" />,
      title: "Enterprise Security",
      description: "Every application is built with bank-grade security protocols to protect your data and your users."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400 mb-4" />,
      title: "Client-Centric",
      description: "We don't just write code; we partner with you to understand your business logic and end goals."
    },
    {
      icon: <Target className="w-8 h-8 text-green-400 mb-4" />,
      title: "Scalable Architecture",
      description: "Our systems are engineered to handle growth seamlessly, from your first 100 users to your first million."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">

      {/* Background Accent */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-green-500/40 to-transparent blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Are</span>
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)] mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to bridge the gap between complex technology and business growth,
            <strong> SM Software Resource Capital</strong> is a premier development agency specializing in
            custom software, mobile apps, and robust web platforms.
          </p>
        </div>

        {/* Mission Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-green-500 pl-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              We exist to empower businesses by architecting digital solutions that are not only visually striking but technically superior.
              We believe that great software is the invisible engine driving modern success.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Whether you are a startup needing an MVP or an enterprise requiring legacy system modernization, our engineering team executes with precision and speed.
            </p>
          </div>

          {/* Visual Tech Stack Representation */}
          <div className="relative h-64 md:h-full min-h-[300px] rounded-xl border border-gray-800 bg-[#0a0a0a] overflow-hidden group flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            <div className="relative z-10 w-full px-8">
              <div className="bg-black/80 border border-gray-800 rounded-lg p-4 font-mono text-xs md:text-sm text-left group-hover:border-green-500/30 transition-colors duration-500">
                <div className="flex space-x-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <p className="text-gray-400">~ <span className="text-green-400">root@sm-software</span>: deployment</p>
                <p className="text-gray-300 mt-2">&gt; compiling full_stack_assets...</p>
                <p className="text-green-500 mt-1 animate-pulse">SUCCESS: Infrastructure deployed in 0.8s</p>
              </div>
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 shadow-[0_0_15px_rgba(34,197,94,1)] animate-[scan_3s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => (
              <div key={idx} className="bg-[#0a0a0a] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors duration-300">
                {item.icon}
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-gray-800 rounded-2xl p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let our team of engineers turn your concept into a reality. We are currently accepting new clients for Q3 and Q4.
            </p>
            <Link to="/services" className="inline-block px-8 py-3 bg-green-500 text-black font-bold rounded-md hover:bg-green-400 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              View Our Services
            </Link>
          </div>
        </div>

      </div>

      {/* Required custom CSS for the scanning animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(300px); }
          100% { transform: translateY(-100%); }
        }
      `}} />
    </div>
  );
}